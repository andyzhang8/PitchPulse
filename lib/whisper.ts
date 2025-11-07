import { tmpdir } from 'os';
import { join } from 'path';
import fs from 'fs/promises';
import { createReadStream } from 'fs';
import FormData from 'form-data';

const FREESUBTITLES_API_URL = 'https://freesubtitles.ai/api';

export async function transcribeAudio(wavBuffer: Buffer): Promise<string> {
  const tempFilePath = join(
    tmpdir(),
    `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.wav`
  );
  await fs.writeFile(tempFilePath, wavBuffer);

  try {
    const form = new FormData();
    form.append('apiKey', process.env.FREESUBTITLES_API_KEY || '');
    form.append('language', 'en');
    form.append('file', await fs.readFile(tempFilePath), {
      filename: 'audio.wav',
      contentType: 'audio/wav'
    });
    const postResponse = await fetch(FREESUBTITLES_API_URL, {
      method: 'POST',
      headers: form.getHeaders(),
      body: form as unknown as BodyInit,
    });
    

    
    if (!postResponse.ok) {
      throw new Error(`Error from FreeSubtitles.ai POST: ${postResponse.statusText}`);
    }
    const postJson = await postResponse.json();
    const numberToUse = postJson.numberToUse;
    if (!numberToUse) {
      throw new Error('No transcription reference number returned from FreeSubtitles.ai');
    }

    const getEndpoint = `${FREESUBTITLES_API_URL}/${numberToUse}`;
    const getResponse = await fetch(getEndpoint);
    if (!getResponse.ok) {
      throw new Error(`Error from FreeSubtitles.ai GET: ${getResponse.statusText}`);
    }
    const getJson = await getResponse.json();
    const transcript = getJson.txtData;
    if (!transcript) {
      throw new Error('Transcription text not found in the response');
    }
    return transcript;
  } catch (error) {
    console.error("Error during transcription:", error);
    return "Transcription failed.";
  } finally {
    await fs.unlink(tempFilePath);
  }
}
