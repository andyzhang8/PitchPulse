/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/upload/route";
exports.ids = ["app/api/upload/route"];
exports.modules = {

/***/ "(rsc)/./app/api/upload/route.ts":
/*!*********************************!*\
  !*** ./app/api/upload/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_analysis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/analysis */ \"(rsc)/./lib/analysis.ts\");\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function POST(req) {\n    const formData = await req.formData();\n    const audioFile = formData.get('audio');\n    if (!audioFile) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'No audio file provided'\n        }, {\n            status: 400\n        });\n    }\n    if (!audioFile.name.endsWith('.webm')) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Only .webm files allowed'\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const arrayBuffer = await audioFile.arrayBuffer();\n        const fileBuffer = Buffer.from(arrayBuffer);\n        const result = await (0,_lib_analysis__WEBPACK_IMPORTED_MODULE_1__.runFullAnalysis)(fileBuffer);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'completed',\n            data: result\n        });\n    } catch (error) {\n        console.error('Error processing file:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            status: 'error',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ2E7QUFJakQsTUFBTUUsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBSUssZUFBZUMsS0FBS0MsR0FBWTtJQUNyQyxNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7SUFDbkMsTUFBTUMsWUFBWUQsU0FBU0UsR0FBRyxDQUFDO0lBRS9CLElBQUksQ0FBQ0QsV0FBVztRQUNkLE9BQU9SLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM5RTtJQUNBLElBQUksQ0FBQ0osVUFBVUssSUFBSSxDQUFDQyxRQUFRLENBQUMsVUFBVTtRQUNyQyxPQUFPZCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBMkIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDaEY7SUFFQSxJQUFJO1FBQ0YsTUFBTUcsY0FBYyxNQUFNUCxVQUFVTyxXQUFXO1FBQy9DLE1BQU1DLGFBQWFDLE9BQU9DLElBQUksQ0FBQ0g7UUFFL0IsTUFBTUksU0FBUyxNQUFNbEIsOERBQWVBLENBQUNlO1FBRXJDLE9BQU9oQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVFLFFBQVE7WUFBYVEsTUFBTUQ7UUFBTztJQUMvRCxFQUFFLE9BQU9SLE9BQVk7UUFDbkJVLFFBQVFWLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUUsUUFBUTtZQUFTRCxPQUFPQSxNQUFNVyxPQUFPO1FBQUMsR0FBRztZQUFFVixRQUFRO1FBQUk7SUFDcEY7QUFDRiIsInNvdXJjZXMiOlsiL21udC9jL1VzZXJzL2FuZHl6L0Rvd25sb2Fkcy9BY291c3RpY0FJL2FwcC9hcGkvdXBsb2FkL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgcnVuRnVsbEFuYWx5c2lzIH0gZnJvbSAnLi4vLi4vLi4vbGliL2FuYWx5c2lzJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XHJcbiAgY29uc3QgYXVkaW9GaWxlID0gZm9ybURhdGEuZ2V0KCdhdWRpbycpIGFzIEZpbGUgfCBudWxsO1xyXG5cclxuICBpZiAoIWF1ZGlvRmlsZSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdObyBhdWRpbyBmaWxlIHByb3ZpZGVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuICBpZiAoIWF1ZGlvRmlsZS5uYW1lLmVuZHNXaXRoKCcud2VibScpKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ09ubHkgLndlYm0gZmlsZXMgYWxsb3dlZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IGF1ZGlvRmlsZS5hcnJheUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgZmlsZUJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuRnVsbEFuYWx5c2lzKGZpbGVCdWZmZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdjb21wbGV0ZWQnLCBkYXRhOiByZXN1bHQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBmaWxlOicsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogJ2Vycm9yJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInJ1bkZ1bGxBbmFseXNpcyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJQT1NUIiwicmVxIiwiZm9ybURhdGEiLCJhdWRpb0ZpbGUiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJuYW1lIiwiZW5kc1dpdGgiLCJhcnJheUJ1ZmZlciIsImZpbGVCdWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwicmVzdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/analysis.ts":
/*!*************************!*\
  !*** ./lib/analysis.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   runFullAnalysis: () => (/* binding */ runFullAnalysis)\n/* harmony export */ });\n/* harmony import */ var _ffmpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ffmpeg */ \"(rsc)/./lib/ffmpeg.ts\");\n/* harmony import */ var _whisper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whisper */ \"(rsc)/./lib/whisper.ts\");\n/* harmony import */ var _audio_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio-features */ \"(rsc)/./lib/audio-features.ts\");\n/* harmony import */ var _emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion */ \"(rsc)/./lib/emotion.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"(rsc)/./lib/constants.ts\");\n\n\n\n\n\nasync function runFullAnalysis(webmBuffer) {\n    const { wavBuffer, duration } = await (0,_ffmpeg__WEBPACK_IMPORTED_MODULE_0__.convertWebmToWav)(webmBuffer);\n    const transcript = await (0,_whisper__WEBPACK_IMPORTED_MODULE_1__.transcribeAudio)(wavBuffer);\n    const pitchData = await (0,_audio_features__WEBPACK_IMPORTED_MODULE_2__.pitchAnalysis)(wavBuffer);\n    const topWords = (0,_audio_features__WEBPACK_IMPORTED_MODULE_2__.getTopNWords)(transcript, 5);\n    const fillerWords = (0,_audio_features__WEBPACK_IMPORTED_MODULE_2__.getFillerWordsFrequency)(transcript, _constants__WEBPACK_IMPORTED_MODULE_4__.FILLER_WORDS);\n    const wpm = await (0,_audio_features__WEBPACK_IMPORTED_MODULE_2__.calculateWpm)(wavBuffer, transcript);\n    const emotionSegments = await (0,_emotion__WEBPACK_IMPORTED_MODULE_3__.analyzeEmotion)(wavBuffer);\n    const emotionPercentages = calculateEmotionPercentages(emotionSegments);\n    const stuttered_words = [];\n    const actionable_comments = [];\n    return {\n        transcript,\n        pitch_analysis: pitchData,\n        top_words: topWords,\n        filler_words: fillerWords,\n        wpm,\n        emotion_percentages: emotionPercentages,\n        stuttered_words,\n        actionable_comments\n    };\n}\nfunction calculateEmotionPercentages(segments, useFullNames = true) {\n    const EMOTION_MAP = {\n        a: \"Angry\",\n        n: \"Neutral\",\n        s: \"Sad\",\n        h: \"Happy\"\n    };\n    const emotionDurations = {};\n    let totalDuration = 0;\n    segments.forEach((seg)=>{\n        const start = seg.start || 0;\n        const end = seg.end || 0;\n        const emotion = seg.emotion;\n        if (emotion in EMOTION_MAP) {\n            const dur = end - start;\n            emotionDurations[emotion] = (emotionDurations[emotion] || 0) + dur;\n            totalDuration += dur;\n        }\n    });\n    const percentages = {};\n    Object.entries(EMOTION_MAP).forEach(([code, name])=>{\n        percentages[useFullNames ? name : code] = totalDuration > 0 ? Number(((emotionDurations[code] || 0) / totalDuration * 100).toFixed(2)) : 0;\n    });\n    return percentages;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYW5hbHlzaXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBQ0E7QUFDMEQ7QUFDM0Q7QUFDQTtBQUVwQyxlQUFlUSxnQkFBZ0JDLFVBQWtCO0lBQ3RELE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNWCx5REFBZ0JBLENBQUNTO0lBRXZELE1BQU1HLGFBQWEsTUFBTVgseURBQWVBLENBQUNTO0lBRXpDLE1BQU1HLFlBQVksTUFBTVgsOERBQWFBLENBQUNRO0lBRXRDLE1BQU1JLFdBQVdYLDZEQUFZQSxDQUFDUyxZQUFZO0lBRTFDLE1BQU1HLGNBQWNYLHdFQUF1QkEsQ0FBQ1EsWUFBWUwsb0RBQVlBO0lBRXBFLE1BQU1TLE1BQU0sTUFBTVgsNkRBQVlBLENBQUNLLFdBQVdFO0lBRTFDLE1BQU1LLGtCQUFrQixNQUFNWCx3REFBY0EsQ0FBQ0k7SUFFN0MsTUFBTVEscUJBQXFCQyw0QkFBNEJGO0lBRXZELE1BQU1HLGtCQUF5QixFQUFFO0lBRWpDLE1BQU1DLHNCQUE2QixFQUFFO0lBRXJDLE9BQU87UUFDTFQ7UUFDQVUsZ0JBQWdCVDtRQUNoQlUsV0FBV1Q7UUFDWFUsY0FBY1Q7UUFDZEM7UUFDQVMscUJBQXFCUDtRQUNyQkU7UUFDQUM7SUFDRjtBQUNGO0FBRUEsU0FBU0YsNEJBQTRCTyxRQUFlLEVBQUVDLGVBQWUsSUFBSTtJQUN2RSxNQUFNQyxjQUFzQztRQUMxQ0MsR0FBRztRQUNIQyxHQUFHO1FBQ0hDLEdBQUc7UUFDSEMsR0FBRztJQUNMO0lBQ0EsTUFBTUMsbUJBQTJDLENBQUM7SUFDbEQsSUFBSUMsZ0JBQWdCO0lBRXBCUixTQUFTUyxPQUFPLENBQUNDLENBQUFBO1FBQ2YsTUFBTUMsUUFBUUQsSUFBSUMsS0FBSyxJQUFJO1FBQzNCLE1BQU1DLE1BQU1GLElBQUlFLEdBQUcsSUFBSTtRQUN2QixNQUFNQyxVQUFVSCxJQUFJRyxPQUFPO1FBQzNCLElBQUlBLFdBQVdYLGFBQWE7WUFDMUIsTUFBTVksTUFBTUYsTUFBTUQ7WUFDbEJKLGdCQUFnQixDQUFDTSxRQUFRLEdBQUcsQ0FBQ04sZ0JBQWdCLENBQUNNLFFBQVEsSUFBSSxLQUFLQztZQUMvRE4saUJBQWlCTTtRQUNuQjtJQUNGO0lBRUEsTUFBTUMsY0FBc0MsQ0FBQztJQUM3Q0MsT0FBT0MsT0FBTyxDQUFDZixhQUFhTyxPQUFPLENBQUMsQ0FBQyxDQUFDUyxNQUFNQyxLQUFLO1FBQy9DSixXQUFXLENBQUNkLGVBQWVrQixPQUFPRCxLQUFLLEdBQ3JDVixnQkFBZ0IsSUFBSVksT0FBTyxDQUFDLENBQUNiLGdCQUFnQixDQUFDVyxLQUFLLElBQUksS0FBS1YsZ0JBQWdCLEdBQUUsRUFBR2EsT0FBTyxDQUFDLE1BQU07SUFDbkc7SUFDQSxPQUFPTjtBQUNUIiwic291cmNlcyI6WyIvbW50L2MvVXNlcnMvYW5keXovRG93bmxvYWRzL0Fjb3VzdGljQUkvbGliL2FuYWx5c2lzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnZlcnRXZWJtVG9XYXYgfSBmcm9tICcuL2ZmbXBlZyc7XHJcbmltcG9ydCB7IHRyYW5zY3JpYmVBdWRpbyB9IGZyb20gJy4vd2hpc3Blcic7XHJcbmltcG9ydCB7IHBpdGNoQW5hbHlzaXMsIGdldFRvcE5Xb3JkcywgZ2V0RmlsbGVyV29yZHNGcmVxdWVuY3ksIGNhbGN1bGF0ZVdwbSB9IGZyb20gJy4vYXVkaW8tZmVhdHVyZXMnO1xyXG5pbXBvcnQgeyBhbmFseXplRW1vdGlvbiB9IGZyb20gJy4vZW1vdGlvbic7XHJcbmltcG9ydCB7IEZJTExFUl9XT1JEUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5GdWxsQW5hbHlzaXMod2VibUJ1ZmZlcjogQnVmZmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB7IHdhdkJ1ZmZlciwgZHVyYXRpb24gfSA9IGF3YWl0IGNvbnZlcnRXZWJtVG9XYXYod2VibUJ1ZmZlcik7XHJcblxyXG4gIGNvbnN0IHRyYW5zY3JpcHQgPSBhd2FpdCB0cmFuc2NyaWJlQXVkaW8od2F2QnVmZmVyKTtcclxuXHJcbiAgY29uc3QgcGl0Y2hEYXRhID0gYXdhaXQgcGl0Y2hBbmFseXNpcyh3YXZCdWZmZXIpO1xyXG5cclxuICBjb25zdCB0b3BXb3JkcyA9IGdldFRvcE5Xb3Jkcyh0cmFuc2NyaXB0LCA1KTtcclxuXHJcbiAgY29uc3QgZmlsbGVyV29yZHMgPSBnZXRGaWxsZXJXb3Jkc0ZyZXF1ZW5jeSh0cmFuc2NyaXB0LCBGSUxMRVJfV09SRFMpO1xyXG5cclxuICBjb25zdCB3cG0gPSBhd2FpdCBjYWxjdWxhdGVXcG0od2F2QnVmZmVyLCB0cmFuc2NyaXB0KTtcclxuXHJcbiAgY29uc3QgZW1vdGlvblNlZ21lbnRzID0gYXdhaXQgYW5hbHl6ZUVtb3Rpb24od2F2QnVmZmVyKTtcclxuXHJcbiAgY29uc3QgZW1vdGlvblBlcmNlbnRhZ2VzID0gY2FsY3VsYXRlRW1vdGlvblBlcmNlbnRhZ2VzKGVtb3Rpb25TZWdtZW50cyk7XHJcblxyXG4gIGNvbnN0IHN0dXR0ZXJlZF93b3JkczogYW55W10gPSBbXTtcclxuXHJcbiAgY29uc3QgYWN0aW9uYWJsZV9jb21tZW50czogYW55W10gPSBbXTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRyYW5zY3JpcHQsXHJcbiAgICBwaXRjaF9hbmFseXNpczogcGl0Y2hEYXRhLFxyXG4gICAgdG9wX3dvcmRzOiB0b3BXb3JkcyxcclxuICAgIGZpbGxlcl93b3JkczogZmlsbGVyV29yZHMsXHJcbiAgICB3cG0sXHJcbiAgICBlbW90aW9uX3BlcmNlbnRhZ2VzOiBlbW90aW9uUGVyY2VudGFnZXMsXHJcbiAgICBzdHV0dGVyZWRfd29yZHMsXHJcbiAgICBhY3Rpb25hYmxlX2NvbW1lbnRzLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUVtb3Rpb25QZXJjZW50YWdlcyhzZWdtZW50czogYW55W10sIHVzZUZ1bGxOYW1lcyA9IHRydWUpOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IHtcclxuICBjb25zdCBFTU9USU9OX01BUDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIGE6IFwiQW5ncnlcIixcclxuICAgIG46IFwiTmV1dHJhbFwiLFxyXG4gICAgczogXCJTYWRcIixcclxuICAgIGg6IFwiSGFwcHlcIlxyXG4gIH07XHJcbiAgY29uc3QgZW1vdGlvbkR1cmF0aW9uczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xyXG4gIGxldCB0b3RhbER1cmF0aW9uID0gMDtcclxuXHJcbiAgc2VnbWVudHMuZm9yRWFjaChzZWcgPT4ge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBzZWcuc3RhcnQgfHwgMDtcclxuICAgIGNvbnN0IGVuZCA9IHNlZy5lbmQgfHwgMDtcclxuICAgIGNvbnN0IGVtb3Rpb24gPSBzZWcuZW1vdGlvbjtcclxuICAgIGlmIChlbW90aW9uIGluIEVNT1RJT05fTUFQKSB7XHJcbiAgICAgIGNvbnN0IGR1ciA9IGVuZCAtIHN0YXJ0O1xyXG4gICAgICBlbW90aW9uRHVyYXRpb25zW2Vtb3Rpb25dID0gKGVtb3Rpb25EdXJhdGlvbnNbZW1vdGlvbl0gfHwgMCkgKyBkdXI7XHJcbiAgICAgIHRvdGFsRHVyYXRpb24gKz0gZHVyO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwZXJjZW50YWdlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xyXG4gIE9iamVjdC5lbnRyaWVzKEVNT1RJT05fTUFQKS5mb3JFYWNoKChbY29kZSwgbmFtZV0pID0+IHtcclxuICAgIHBlcmNlbnRhZ2VzW3VzZUZ1bGxOYW1lcyA/IG5hbWUgOiBjb2RlXSA9XHJcbiAgICAgIHRvdGFsRHVyYXRpb24gPiAwID8gTnVtYmVyKCgoZW1vdGlvbkR1cmF0aW9uc1tjb2RlXSB8fCAwKSAvIHRvdGFsRHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMikpIDogMDtcclxuICB9KTtcclxuICByZXR1cm4gcGVyY2VudGFnZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbnZlcnRXZWJtVG9XYXYiLCJ0cmFuc2NyaWJlQXVkaW8iLCJwaXRjaEFuYWx5c2lzIiwiZ2V0VG9wTldvcmRzIiwiZ2V0RmlsbGVyV29yZHNGcmVxdWVuY3kiLCJjYWxjdWxhdGVXcG0iLCJhbmFseXplRW1vdGlvbiIsIkZJTExFUl9XT1JEUyIsInJ1bkZ1bGxBbmFseXNpcyIsIndlYm1CdWZmZXIiLCJ3YXZCdWZmZXIiLCJkdXJhdGlvbiIsInRyYW5zY3JpcHQiLCJwaXRjaERhdGEiLCJ0b3BXb3JkcyIsImZpbGxlcldvcmRzIiwid3BtIiwiZW1vdGlvblNlZ21lbnRzIiwiZW1vdGlvblBlcmNlbnRhZ2VzIiwiY2FsY3VsYXRlRW1vdGlvblBlcmNlbnRhZ2VzIiwic3R1dHRlcmVkX3dvcmRzIiwiYWN0aW9uYWJsZV9jb21tZW50cyIsInBpdGNoX2FuYWx5c2lzIiwidG9wX3dvcmRzIiwiZmlsbGVyX3dvcmRzIiwiZW1vdGlvbl9wZXJjZW50YWdlcyIsInNlZ21lbnRzIiwidXNlRnVsbE5hbWVzIiwiRU1PVElPTl9NQVAiLCJhIiwibiIsInMiLCJoIiwiZW1vdGlvbkR1cmF0aW9ucyIsInRvdGFsRHVyYXRpb24iLCJmb3JFYWNoIiwic2VnIiwic3RhcnQiLCJlbmQiLCJlbW90aW9uIiwiZHVyIiwicGVyY2VudGFnZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiY29kZSIsIm5hbWUiLCJOdW1iZXIiLCJ0b0ZpeGVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/analysis.ts\n");

/***/ }),

/***/ "(rsc)/./lib/audio-features.ts":
/*!*******************************!*\
  !*** ./lib/audio-features.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateWpm: () => (/* binding */ calculateWpm),\n/* harmony export */   getFillerWordsFrequency: () => (/* binding */ getFillerWordsFrequency),\n/* harmony export */   getTopNWords: () => (/* binding */ getTopNWords),\n/* harmony export */   pitchAnalysis: () => (/* binding */ pitchAnalysis)\n/* harmony export */ });\n/* harmony import */ var pitchfinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pitchfinder */ \"(rsc)/./node_modules/pitchfinder/lib/index.js\");\n/* harmony import */ var wav_decoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wav-decoder */ \"(rsc)/./node_modules/wav-decoder/index.js\");\n\n\nfunction getTopNWords(text, n) {\n    const cleaned = text.replace(/[^\\w\\s]/g, '').toLowerCase();\n    const words = cleaned.split(/\\s+/);\n    const count = {};\n    words.forEach((w)=>{\n        if (w) count[w] = (count[w] || 0) + 1;\n    });\n    const sorted = Object.entries(count).sort((a, b)=>b[1] - a[1]);\n    const result = {};\n    sorted.slice(0, n).forEach(([word, cnt])=>result[word] = cnt);\n    return result;\n}\nfunction getFillerWordsFrequency(transcript, fillerSet) {\n    const lower = transcript.toLowerCase();\n    const words = lower.split(/\\s+/);\n    const counts = {};\n    fillerSet.forEach((filler)=>{\n        counts[filler] = 0;\n    });\n    words.forEach((word)=>{\n        if (fillerSet.has(word)) {\n            counts[word] = (counts[word] || 0) + 1;\n        }\n    });\n    for(const key in counts){\n        if (counts[key] === 0) delete counts[key];\n    }\n    return counts;\n}\nasync function calculateWpm(wavBuffer, transcript) {\n    const decoded = await (0,wav_decoder__WEBPACK_IMPORTED_MODULE_1__.decode)(wavBuffer);\n    const durationSeconds = decoded.channelData[0].length / decoded.sampleRate;\n    const minutes = durationSeconds / 60;\n    const wordCount = transcript.trim().split(/\\s+/).length;\n    return minutes > 0 ? Number((wordCount / minutes).toFixed(2)) : 0;\n}\nasync function pitchAnalysis(wavBuffer) {\n    const decoded = await (0,wav_decoder__WEBPACK_IMPORTED_MODULE_1__.decode)(wavBuffer);\n    const signal = decoded.channelData[0];\n    const sampleRate = decoded.sampleRate;\n    const duration = signal.length / sampleRate;\n    const detectPitch = pitchfinder__WEBPACK_IMPORTED_MODULE_0__[\"default\"].YIN({\n        sampleRate\n    });\n    const pitches = [];\n    const windowSize = 1024;\n    const hopSize = 256;\n    for(let i = 0; i < signal.length - windowSize; i += hopSize){\n        const segment = signal.slice(i, i + windowSize);\n        const pitch = detectPitch(segment);\n        if (pitch) {\n            pitches.push(pitch);\n        }\n    }\n    const avgPitch = pitches.reduce((a, b)=>a + b, 0) / (pitches.length || 1);\n    return {\n        avgPitch,\n        pitchList: pitches,\n        duration\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXVkaW8tZmVhdHVyZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ0Q7QUFLOUIsU0FBU0UsYUFBYUMsSUFBWSxFQUFFQyxDQUFTO0lBQ2xELE1BQU1DLFVBQVVGLEtBQUtHLE9BQU8sQ0FBQyxZQUFZLElBQUlDLFdBQVc7SUFDeEQsTUFBTUMsUUFBUUgsUUFBUUksS0FBSyxDQUFDO0lBQzVCLE1BQU1DLFFBQWdDLENBQUM7SUFDdkNGLE1BQU1HLE9BQU8sQ0FBQyxDQUFDQztRQUNiLElBQUlBLEdBQUdGLEtBQUssQ0FBQ0UsRUFBRSxHQUFHLENBQUNGLEtBQUssQ0FBQ0UsRUFBRSxJQUFJLEtBQUs7SUFDdEM7SUFDQSxNQUFNQyxTQUFTQyxPQUFPQyxPQUFPLENBQUNMLE9BQU9NLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxDQUFDLENBQUMsRUFBRSxHQUFHRCxDQUFDLENBQUMsRUFBRTtJQUMvRCxNQUFNRSxTQUFpQyxDQUFDO0lBQ3hDTixPQUFPTyxLQUFLLENBQUMsR0FBR2hCLEdBQUdPLE9BQU8sQ0FBQyxDQUFDLENBQUNVLE1BQU1DLElBQUksR0FBTUgsTUFBTSxDQUFDRSxLQUFLLEdBQUdDO0lBQzVELE9BQU9IO0FBQ1Q7QUFLTyxTQUFTSSx3QkFBd0JDLFVBQWtCLEVBQUVDLFNBQXNCO0lBQ2hGLE1BQU1DLFFBQVFGLFdBQVdqQixXQUFXO0lBQ3BDLE1BQU1DLFFBQVFrQixNQUFNakIsS0FBSyxDQUFDO0lBQzFCLE1BQU1rQixTQUFpQyxDQUFDO0lBQ3hDRixVQUFVZCxPQUFPLENBQUMsQ0FBQ2lCO1FBQ2pCRCxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUNuQjtJQUNBcEIsTUFBTUcsT0FBTyxDQUFDLENBQUNVO1FBQ2IsSUFBSUksVUFBVUksR0FBRyxDQUFDUixPQUFPO1lBQ3ZCTSxNQUFNLENBQUNOLEtBQUssR0FBRyxDQUFDTSxNQUFNLENBQUNOLEtBQUssSUFBSSxLQUFLO1FBQ3ZDO0lBQ0Y7SUFDQSxJQUFLLE1BQU1TLE9BQU9ILE9BQVE7UUFDeEIsSUFBSUEsTUFBTSxDQUFDRyxJQUFJLEtBQUssR0FBRyxPQUFPSCxNQUFNLENBQUNHLElBQUk7SUFDM0M7SUFDQSxPQUFPSDtBQUNUO0FBS08sZUFBZUksYUFBYUMsU0FBaUIsRUFBRVIsVUFBa0I7SUFDdEUsTUFBTVMsVUFBVSxNQUFNaEMsbURBQU1BLENBQUMrQjtJQUM3QixNQUFNRSxrQkFBa0JELFFBQVFFLFdBQVcsQ0FBQyxFQUFFLENBQUNDLE1BQU0sR0FBR0gsUUFBUUksVUFBVTtJQUMxRSxNQUFNQyxVQUFVSixrQkFBa0I7SUFDbEMsTUFBTUssWUFBWWYsV0FBV2dCLElBQUksR0FBRy9CLEtBQUssQ0FBQyxPQUFPMkIsTUFBTTtJQUN2RCxPQUFPRSxVQUFVLElBQUlHLE9BQU8sQ0FBQ0YsWUFBWUQsT0FBTSxFQUFHSSxPQUFPLENBQUMsTUFBTTtBQUNsRTtBQUtPLGVBQWVDLGNBQWNYLFNBQWlCO0lBQ25ELE1BQU1DLFVBQVUsTUFBTWhDLG1EQUFNQSxDQUFDK0I7SUFDN0IsTUFBTVksU0FBU1gsUUFBUUUsV0FBVyxDQUFDLEVBQUU7SUFDckMsTUFBTUUsYUFBYUosUUFBUUksVUFBVTtJQUNyQyxNQUFNUSxXQUFXRCxPQUFPUixNQUFNLEdBQUdDO0lBRWpDLE1BQU1TLGNBQWM5Qyx1REFBZSxDQUFDO1FBQUVxQztJQUFXO0lBQ2pELE1BQU1XLFVBQW9CLEVBQUU7SUFDNUIsTUFBTUMsYUFBYTtJQUNuQixNQUFNQyxVQUFVO0lBQ2hCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUCxPQUFPUixNQUFNLEdBQUdhLFlBQVlFLEtBQUtELFFBQVM7UUFDNUQsTUFBTUUsVUFBVVIsT0FBT3hCLEtBQUssQ0FBQytCLEdBQUdBLElBQUlGO1FBQ3BDLE1BQU1JLFFBQVFQLFlBQVlNO1FBQzFCLElBQUlDLE9BQU87WUFDVEwsUUFBUU0sSUFBSSxDQUFDRDtRQUNmO0lBQ0Y7SUFDQSxNQUFNRSxXQUFXUCxRQUFRUSxNQUFNLENBQUMsQ0FBQ3ZDLEdBQUdDLElBQU1ELElBQUlDLEdBQUcsS0FBTThCLENBQUFBLFFBQVFaLE1BQU0sSUFBSTtJQUN6RSxPQUFPO1FBQUVtQjtRQUFVRSxXQUFXVDtRQUFTSDtJQUFTO0FBQ2xEIiwic291cmNlcyI6WyIvbW50L2MvVXNlcnMvYW5keXovRG93bmxvYWRzL0Fjb3VzdGljQUkvbGliL2F1ZGlvLWZlYXR1cmVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQaXRjaGZpbmRlciBmcm9tICdwaXRjaGZpbmRlcic7XHJcbmltcG9ydCB7IGRlY29kZSB9IGZyb20gJ3dhdi1kZWNvZGVyJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3BOV29yZHModGV4dDogc3RyaW5nLCBuOiBudW1iZXIpOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IHtcclxuICBjb25zdCBjbGVhbmVkID0gdGV4dC5yZXBsYWNlKC9bXlxcd1xcc10vZywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3Qgd29yZHMgPSBjbGVhbmVkLnNwbGl0KC9cXHMrLyk7XHJcbiAgY29uc3QgY291bnQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcclxuICB3b3Jkcy5mb3JFYWNoKCh3KSA9PiB7XHJcbiAgICBpZiAodykgY291bnRbd10gPSAoY291bnRbd10gfHwgMCkgKyAxO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHNvcnRlZCA9IE9iamVjdC5lbnRyaWVzKGNvdW50KS5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XHJcbiAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XHJcbiAgc29ydGVkLnNsaWNlKDAsIG4pLmZvckVhY2goKFt3b3JkLCBjbnRdKSA9PiAocmVzdWx0W3dvcmRdID0gY250KSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGxlcldvcmRzRnJlcXVlbmN5KHRyYW5zY3JpcHQ6IHN0cmluZywgZmlsbGVyU2V0OiBTZXQ8c3RyaW5nPik6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4ge1xyXG4gIGNvbnN0IGxvd2VyID0gdHJhbnNjcmlwdC50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IHdvcmRzID0gbG93ZXIuc3BsaXQoL1xccysvKTtcclxuICBjb25zdCBjb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcclxuICBmaWxsZXJTZXQuZm9yRWFjaCgoZmlsbGVyKSA9PiB7XHJcbiAgICBjb3VudHNbZmlsbGVyXSA9IDA7XHJcbiAgfSk7XHJcbiAgd29yZHMuZm9yRWFjaCgod29yZCkgPT4ge1xyXG4gICAgaWYgKGZpbGxlclNldC5oYXMod29yZCkpIHtcclxuICAgICAgY291bnRzW3dvcmRdID0gKGNvdW50c1t3b3JkXSB8fCAwKSArIDE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gY291bnRzKSB7XHJcbiAgICBpZiAoY291bnRzW2tleV0gPT09IDApIGRlbGV0ZSBjb3VudHNba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIGNvdW50cztcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZVdwbSh3YXZCdWZmZXI6IEJ1ZmZlciwgdHJhbnNjcmlwdDogc3RyaW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICBjb25zdCBkZWNvZGVkID0gYXdhaXQgZGVjb2RlKHdhdkJ1ZmZlcik7XHJcbiAgY29uc3QgZHVyYXRpb25TZWNvbmRzID0gZGVjb2RlZC5jaGFubmVsRGF0YVswXS5sZW5ndGggLyBkZWNvZGVkLnNhbXBsZVJhdGU7XHJcbiAgY29uc3QgbWludXRlcyA9IGR1cmF0aW9uU2Vjb25kcyAvIDYwO1xyXG4gIGNvbnN0IHdvcmRDb3VudCA9IHRyYW5zY3JpcHQudHJpbSgpLnNwbGl0KC9cXHMrLykubGVuZ3RoO1xyXG4gIHJldHVybiBtaW51dGVzID4gMCA/IE51bWJlcigod29yZENvdW50IC8gbWludXRlcykudG9GaXhlZCgyKSkgOiAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGl0Y2hBbmFseXNpcyh3YXZCdWZmZXI6IEJ1ZmZlcik6IFByb21pc2U8eyBhdmdQaXRjaDogbnVtYmVyOyBwaXRjaExpc3Q6IG51bWJlcltdOyBkdXJhdGlvbjogbnVtYmVyIH0+IHtcclxuICBjb25zdCBkZWNvZGVkID0gYXdhaXQgZGVjb2RlKHdhdkJ1ZmZlcik7XHJcbiAgY29uc3Qgc2lnbmFsID0gZGVjb2RlZC5jaGFubmVsRGF0YVswXTtcclxuICBjb25zdCBzYW1wbGVSYXRlID0gZGVjb2RlZC5zYW1wbGVSYXRlO1xyXG4gIGNvbnN0IGR1cmF0aW9uID0gc2lnbmFsLmxlbmd0aCAvIHNhbXBsZVJhdGU7XHJcbiAgXHJcbiAgY29uc3QgZGV0ZWN0UGl0Y2ggPSBQaXRjaGZpbmRlci5ZSU4oeyBzYW1wbGVSYXRlIH0pO1xyXG4gIGNvbnN0IHBpdGNoZXM6IG51bWJlcltdID0gW107XHJcbiAgY29uc3Qgd2luZG93U2l6ZSA9IDEwMjQ7XHJcbiAgY29uc3QgaG9wU2l6ZSA9IDI1NjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25hbC5sZW5ndGggLSB3aW5kb3dTaXplOyBpICs9IGhvcFNpemUpIHtcclxuICAgIGNvbnN0IHNlZ21lbnQgPSBzaWduYWwuc2xpY2UoaSwgaSArIHdpbmRvd1NpemUpO1xyXG4gICAgY29uc3QgcGl0Y2ggPSBkZXRlY3RQaXRjaChzZWdtZW50KTtcclxuICAgIGlmIChwaXRjaCkge1xyXG4gICAgICBwaXRjaGVzLnB1c2gocGl0Y2gpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBhdmdQaXRjaCA9IHBpdGNoZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyAocGl0Y2hlcy5sZW5ndGggfHwgMSk7XHJcbiAgcmV0dXJuIHsgYXZnUGl0Y2gsIHBpdGNoTGlzdDogcGl0Y2hlcywgZHVyYXRpb24gfTtcclxufVxyXG4iXSwibmFtZXMiOlsiUGl0Y2hmaW5kZXIiLCJkZWNvZGUiLCJnZXRUb3BOV29yZHMiLCJ0ZXh0IiwibiIsImNsZWFuZWQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ3b3JkcyIsInNwbGl0IiwiY291bnQiLCJmb3JFYWNoIiwidyIsInNvcnRlZCIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0IiwiYSIsImIiLCJyZXN1bHQiLCJzbGljZSIsIndvcmQiLCJjbnQiLCJnZXRGaWxsZXJXb3Jkc0ZyZXF1ZW5jeSIsInRyYW5zY3JpcHQiLCJmaWxsZXJTZXQiLCJsb3dlciIsImNvdW50cyIsImZpbGxlciIsImhhcyIsImtleSIsImNhbGN1bGF0ZVdwbSIsIndhdkJ1ZmZlciIsImRlY29kZWQiLCJkdXJhdGlvblNlY29uZHMiLCJjaGFubmVsRGF0YSIsImxlbmd0aCIsInNhbXBsZVJhdGUiLCJtaW51dGVzIiwid29yZENvdW50IiwidHJpbSIsIk51bWJlciIsInRvRml4ZWQiLCJwaXRjaEFuYWx5c2lzIiwic2lnbmFsIiwiZHVyYXRpb24iLCJkZXRlY3RQaXRjaCIsIllJTiIsInBpdGNoZXMiLCJ3aW5kb3dTaXplIiwiaG9wU2l6ZSIsImkiLCJzZWdtZW50IiwicGl0Y2giLCJwdXNoIiwiYXZnUGl0Y2giLCJyZWR1Y2UiLCJwaXRjaExpc3QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/audio-features.ts\n");

/***/ }),

/***/ "(rsc)/./lib/constants.ts":
/*!**************************!*\
  !*** ./lib/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FILLER_WORDS: () => (/* binding */ FILLER_WORDS)\n/* harmony export */ });\nconst FILLER_WORDS = new Set([\n    \"um\",\n    \"uh\",\n    \"like\",\n    \"you know\",\n    \"i mean\",\n    \"actually\",\n    \"basically\",\n    \"hmm\",\n    \"uhh\",\n    \"umm\",\n    \"err\",\n    \"alright\",\n    \"uhhh\",\n    \"ummm\",\n    \"huh\",\n    \"hmmm\",\n    \"meh\",\n    \"literally\",\n    \"lowkey\",\n    \"highkey\",\n    \"kinda\",\n    \"sorta\",\n    \"honestly\",\n    \"seriously\",\n    \"bro\",\n    \"dude\",\n    \"y'know\",\n    \"like i said\",\n    \"whatever\",\n    \"i guess\",\n    \"i feel like\"\n]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uc3RhbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxlQUFlLElBQUlDLElBQUk7SUFDaEM7SUFBTTtJQUFNO0lBQVE7SUFBWTtJQUFVO0lBQVk7SUFDdEQ7SUFBTztJQUFPO0lBQU87SUFBTztJQUFXO0lBQVE7SUFBUTtJQUFPO0lBQVE7SUFDdEU7SUFBYTtJQUFVO0lBQVc7SUFBUztJQUFTO0lBQVk7SUFDaEU7SUFBTztJQUFRO0lBQVU7SUFBZTtJQUFZO0lBQVc7Q0FDaEUsRUFBRSIsInNvdXJjZXMiOlsiL21udC9jL1VzZXJzL2FuZHl6L0Rvd25sb2Fkcy9BY291c3RpY0FJL2xpYi9jb25zdGFudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZJTExFUl9XT1JEUyA9IG5ldyBTZXQoW1xyXG4gICAgXCJ1bVwiLCBcInVoXCIsIFwibGlrZVwiLCBcInlvdSBrbm93XCIsIFwiaSBtZWFuXCIsIFwiYWN0dWFsbHlcIiwgXCJiYXNpY2FsbHlcIixcclxuICAgIFwiaG1tXCIsIFwidWhoXCIsIFwidW1tXCIsIFwiZXJyXCIsIFwiYWxyaWdodFwiLCBcInVoaGhcIiwgXCJ1bW1tXCIsIFwiaHVoXCIsIFwiaG1tbVwiLCBcIm1laFwiLFxyXG4gICAgXCJsaXRlcmFsbHlcIiwgXCJsb3drZXlcIiwgXCJoaWdoa2V5XCIsIFwia2luZGFcIiwgXCJzb3J0YVwiLCBcImhvbmVzdGx5XCIsIFwic2VyaW91c2x5XCIsXHJcbiAgICBcImJyb1wiLCBcImR1ZGVcIiwgXCJ5J2tub3dcIiwgXCJsaWtlIGkgc2FpZFwiLCBcIndoYXRldmVyXCIsIFwiaSBndWVzc1wiLCBcImkgZmVlbCBsaWtlXCIsXHJcbiAgXSk7XHJcbiAgIl0sIm5hbWVzIjpbIkZJTExFUl9XT1JEUyIsIlNldCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/constants.ts\n");

/***/ }),

/***/ "(rsc)/./lib/emotion.ts":
/*!************************!*\
  !*** ./lib/emotion.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeEmotion: () => (/* binding */ analyzeEmotion)\n/* harmony export */ });\n/* harmony import */ var onnxruntime_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! onnxruntime-node */ \"onnxruntime-node\");\n/* harmony import */ var onnxruntime_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(onnxruntime_node__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wav_decoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wav-decoder */ \"(rsc)/./node_modules/wav-decoder/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet session = null;\nasync function loadSession() {\n    if (!session) {\n        session = await onnxruntime_node__WEBPACK_IMPORTED_MODULE_0__.InferenceSession.create((0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), 'models', 'emotion_diarization.onnx'));\n    }\n    return session;\n}\nasync function analyzeEmotion(wavBuffer) {\n    const session = await loadSession();\n    const decoded = await (0,wav_decoder__WEBPACK_IMPORTED_MODULE_1__.decode)(wavBuffer);\n    const inputTensor = new onnxruntime_node__WEBPACK_IMPORTED_MODULE_0__.Tensor('float32', decoded.channelData[0], [\n        1,\n        decoded.channelData[0].length\n    ]);\n    const results = await session.run({\n        input: inputTensor\n    });\n    return [\n        {\n            start: 0.0,\n            end: decoded.channelData[0].length / decoded.sampleRate,\n            emotion: 'n' //neutral\n        }\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZW1vdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDSDtBQUNUO0FBRTVCLElBQUlHLFVBQXVDO0FBRTNDLGVBQWVDO0lBQ2IsSUFBSSxDQUFDRCxTQUFTO1FBQ1pBLFVBQVUsTUFBTUgsOERBQW9CLENBQUNNLE1BQU0sQ0FBQ0osMENBQUlBLENBQUNLLFFBQVFDLEdBQUcsSUFBSSxVQUFVO0lBQzVFO0lBQ0EsT0FBT0w7QUFDVDtBQUtPLGVBQWVNLGVBQWVDLFNBQWlCO0lBQ3BELE1BQU1QLFVBQVUsTUFBTUM7SUFDdEIsTUFBTU8sVUFBVSxNQUFNVixtREFBTUEsQ0FBQ1M7SUFDN0IsTUFBTUUsY0FBYyxJQUFJWixvREFBVSxDQUFDLFdBQVdXLFFBQVFHLFdBQVcsQ0FBQyxFQUFFLEVBQUU7UUFBQztRQUFHSCxRQUFRRyxXQUFXLENBQUMsRUFBRSxDQUFDQyxNQUFNO0tBQUM7SUFFeEcsTUFBTUMsVUFBVSxNQUFNYixRQUFRYyxHQUFHLENBQUM7UUFBRUMsT0FBT047SUFBWTtJQUN2RCxPQUFPO1FBQUM7WUFDTk8sT0FBTztZQUNQQyxLQUFLVCxRQUFRRyxXQUFXLENBQUMsRUFBRSxDQUFDQyxNQUFNLEdBQUdKLFFBQVFVLFVBQVU7WUFDdkRDLFNBQVMsSUFBSSxTQUFTO1FBQ3hCO0tBQUU7QUFDSiIsInNvdXJjZXMiOlsiL21udC9jL1VzZXJzL2FuZHl6L0Rvd25sb2Fkcy9BY291c3RpY0FJL2xpYi9lbW90aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG9ydCBmcm9tICdvbm54cnVudGltZS1ub2RlJztcclxuaW1wb3J0IHsgZGVjb2RlIH0gZnJvbSAnd2F2LWRlY29kZXInO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcblxyXG5sZXQgc2Vzc2lvbjogb3J0LkluZmVyZW5jZVNlc3Npb24gfCBudWxsID0gbnVsbDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRTZXNzaW9uKCkge1xyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgc2Vzc2lvbiA9IGF3YWl0IG9ydC5JbmZlcmVuY2VTZXNzaW9uLmNyZWF0ZShqb2luKHByb2Nlc3MuY3dkKCksICdtb2RlbHMnLCAnZW1vdGlvbl9kaWFyaXphdGlvbi5vbm54JykpO1xyXG4gIH1cclxuICByZXR1cm4gc2Vzc2lvbjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5emVFbW90aW9uKHdhdkJ1ZmZlcjogQnVmZmVyKTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBsb2FkU2Vzc2lvbigpO1xyXG4gIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBkZWNvZGUod2F2QnVmZmVyKTtcclxuICBjb25zdCBpbnB1dFRlbnNvciA9IG5ldyBvcnQuVGVuc29yKCdmbG9hdDMyJywgZGVjb2RlZC5jaGFubmVsRGF0YVswXSwgWzEsIGRlY29kZWQuY2hhbm5lbERhdGFbMF0ubGVuZ3RoXSk7XHJcbiAgXHJcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHNlc3Npb24ucnVuKHsgaW5wdXQ6IGlucHV0VGVuc29yIH0pO1xyXG4gIHJldHVybiBbe1xyXG4gICAgc3RhcnQ6IDAuMCxcclxuICAgIGVuZDogZGVjb2RlZC5jaGFubmVsRGF0YVswXS5sZW5ndGggLyBkZWNvZGVkLnNhbXBsZVJhdGUsXHJcbiAgICBlbW90aW9uOiAnbicgLy9uZXV0cmFsXHJcbiAgfV07XHJcbn1cclxuIl0sIm5hbWVzIjpbIm9ydCIsImRlY29kZSIsImpvaW4iLCJzZXNzaW9uIiwibG9hZFNlc3Npb24iLCJJbmZlcmVuY2VTZXNzaW9uIiwiY3JlYXRlIiwicHJvY2VzcyIsImN3ZCIsImFuYWx5emVFbW90aW9uIiwid2F2QnVmZmVyIiwiZGVjb2RlZCIsImlucHV0VGVuc29yIiwiVGVuc29yIiwiY2hhbm5lbERhdGEiLCJsZW5ndGgiLCJyZXN1bHRzIiwicnVuIiwiaW5wdXQiLCJzdGFydCIsImVuZCIsInNhbXBsZVJhdGUiLCJlbW90aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/emotion.ts\n");

/***/ }),

/***/ "(rsc)/./lib/ffmpeg.ts":
/*!***********************!*\
  !*** ./lib/ffmpeg.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertWebmToWav: () => (/* binding */ convertWebmToWav)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fluent-ffmpeg */ \"(rsc)/./node_modules/fluent-ffmpeg/index.js\");\n/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst writeFileAsync = (0,util__WEBPACK_IMPORTED_MODULE_3__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().writeFile));\nconst readFileAsync = (0,util__WEBPACK_IMPORTED_MODULE_3__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().readFile));\nconst unlinkAsync = (0,util__WEBPACK_IMPORTED_MODULE_3__.promisify)((fs__WEBPACK_IMPORTED_MODULE_0___default().unlink));\nasync function convertWebmToWav(webmBuffer) {\n    const tempDir = (0,os__WEBPACK_IMPORTED_MODULE_1__.tmpdir)();\n    const unique = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;\n    const inputPath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(tempDir, `${unique}.webm`);\n    const outputPath = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(tempDir, `${unique}.wav`);\n    await writeFileAsync(inputPath, webmBuffer);\n    return new Promise((resolve, reject)=>{\n        fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_4___default()(inputPath).audioCodec('pcm_s16le').audioChannels(1).audioFrequency(16000).format('wav').on('error', async (err)=>{\n            await unlinkAsync(inputPath);\n            reject(err);\n        }).on('end', async ()=>{\n            try {\n                fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_4___default().ffprobe(outputPath, async (err, metadata)=>{\n                    if (err) {\n                        await unlinkAsync(inputPath);\n                        await unlinkAsync(outputPath);\n                        return reject(err);\n                    }\n                    const duration = metadata.format?.duration || 0;\n                    const wavBuffer = await readFileAsync(outputPath);\n                    await unlinkAsync(inputPath);\n                    await unlinkAsync(outputPath);\n                    resolve({\n                        wavBuffer,\n                        duration\n                    });\n                });\n            } catch (error) {\n                reject(error);\n            }\n        }).save(outputPath);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZmZtcGVnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ1E7QUFDQTtBQUNLO0FBQ0U7QUFJbkMsTUFBTUssaUJBQWlCRiwrQ0FBU0EsQ0FBQ0gscURBQVk7QUFDN0MsTUFBTU8sZ0JBQWdCSiwrQ0FBU0EsQ0FBQ0gsb0RBQVc7QUFDM0MsTUFBTVMsY0FBY04sK0NBQVNBLENBQUNILGtEQUFTO0FBSWhDLGVBQWVXLGlCQUFpQkMsVUFBa0I7SUFDdkQsTUFBTUMsVUFBVVosMENBQU1BO0lBQ3RCLE1BQU1hLFNBQVMsR0FBR0MsS0FBS0MsR0FBRyxHQUFHLENBQUMsRUFBRUMsS0FBS0MsTUFBTSxHQUFHQyxRQUFRLENBQUMsSUFBSUMsU0FBUyxDQUFDLEdBQUcsS0FBSztJQUM3RSxNQUFNQyxZQUFZbkIsMENBQUlBLENBQUNXLFNBQVMsR0FBR0MsT0FBTyxLQUFLLENBQUM7SUFDaEQsTUFBTVEsYUFBYXBCLDBDQUFJQSxDQUFDVyxTQUFTLEdBQUdDLE9BQU8sSUFBSSxDQUFDO0lBSWhELE1BQU1ULGVBQWVnQixXQUFXVDtJQUNoQyxPQUFPLElBQUlXLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JyQixvREFBTUEsQ0FBQ2lCLFdBQ0pLLFVBQVUsQ0FBQyxhQUNYQyxhQUFhLENBQUMsR0FDZEMsY0FBYyxDQUFDLE9BQ2ZDLE1BQU0sQ0FBQyxPQUNQQyxFQUFFLENBQUMsU0FBUyxPQUFPQztZQUNsQixNQUFNdEIsWUFBWVk7WUFDbEJJLE9BQU9NO1FBQ1QsR0FDQ0QsRUFBRSxDQUFDLE9BQU87WUFDVCxJQUFJO2dCQUNGMUIsNERBQWMsQ0FBQ2tCLFlBQVksT0FBT1MsS0FBVUU7b0JBQzFDLElBQUlGLEtBQUs7d0JBQ1AsTUFBTXRCLFlBQVlZO3dCQUNsQixNQUFNWixZQUFZYTt3QkFDbEIsT0FBT0csT0FBT007b0JBQ2hCO29CQUNBLE1BQU1HLFdBQVdELFNBQVNKLE1BQU0sRUFBRUssWUFBWTtvQkFDOUMsTUFBTUMsWUFBWSxNQUFNNUIsY0FBY2U7b0JBQ3RDLE1BQU1iLFlBQVlZO29CQUNsQixNQUFNWixZQUFZYTtvQkFDbEJFLFFBQVE7d0JBQUVXO3dCQUFXRDtvQkFBUztnQkFDaEM7WUFDRixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RYLE9BQU9XO1lBQ1Q7UUFDRixHQUVDQyxJQUFJLENBQUNmO0lBQ1Y7QUFDRiIsInNvdXJjZXMiOlsiL21udC9jL1VzZXJzL2FuZHl6L0Rvd25sb2Fkcy9BY291c3RpY0FJL2xpYi9mZm1wZWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgdG1wZGlyIH0gZnJvbSAnb3MnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHByb21pc2lmeSB9IGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgZmZtcGVnIGZyb20gJ2ZsdWVudC1mZm1wZWcnO1xyXG5cclxuXHJcblxyXG5jb25zdCB3cml0ZUZpbGVBc3luYyA9IHByb21pc2lmeShmcy53cml0ZUZpbGUpO1xyXG5jb25zdCByZWFkRmlsZUFzeW5jID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuY29uc3QgdW5saW5rQXN5bmMgPSBwcm9taXNpZnkoZnMudW5saW5rKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRXZWJtVG9XYXYod2VibUJ1ZmZlcjogQnVmZmVyKTogUHJvbWlzZTx7IHdhdkJ1ZmZlcjogQnVmZmVyOyBkdXJhdGlvbjogbnVtYmVyIH0+IHtcclxuICBjb25zdCB0ZW1wRGlyID0gdG1wZGlyKCk7XHJcbiAgY29uc3QgdW5pcXVlID0gYCR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpfWA7XHJcbiAgY29uc3QgaW5wdXRQYXRoID0gam9pbih0ZW1wRGlyLCBgJHt1bmlxdWV9LndlYm1gKTtcclxuICBjb25zdCBvdXRwdXRQYXRoID0gam9pbih0ZW1wRGlyLCBgJHt1bmlxdWV9LndhdmApO1xyXG5cclxuXHJcblxyXG4gIGF3YWl0IHdyaXRlRmlsZUFzeW5jKGlucHV0UGF0aCwgd2VibUJ1ZmZlcik7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZmbXBlZyhpbnB1dFBhdGgpXHJcbiAgICAgIC5hdWRpb0NvZGVjKCdwY21fczE2bGUnKVxyXG4gICAgICAuYXVkaW9DaGFubmVscygxKVxyXG4gICAgICAuYXVkaW9GcmVxdWVuY3koMTYwMDApXHJcbiAgICAgIC5mb3JtYXQoJ3dhdicpXHJcbiAgICAgIC5vbignZXJyb3InLCBhc3luYyAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICBhd2FpdCB1bmxpbmtBc3luYyhpbnB1dFBhdGgpO1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2VuZCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZmZtcGVnLmZmcHJvYmUob3V0cHV0UGF0aCwgYXN5bmMgKGVycjogYW55LCBtZXRhZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBhd2FpdCB1bmxpbmtBc3luYyhpbnB1dFBhdGgpO1xyXG4gICAgICAgICAgICAgIGF3YWl0IHVubGlua0FzeW5jKG91dHB1dFBhdGgpO1xyXG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IG1ldGFkYXRhLmZvcm1hdD8uZHVyYXRpb24gfHwgMDtcclxuICAgICAgICAgICAgY29uc3Qgd2F2QnVmZmVyID0gYXdhaXQgcmVhZEZpbGVBc3luYyhvdXRwdXRQYXRoKTtcclxuICAgICAgICAgICAgYXdhaXQgdW5saW5rQXN5bmMoaW5wdXRQYXRoKTtcclxuICAgICAgICAgICAgYXdhaXQgdW5saW5rQXN5bmMob3V0cHV0UGF0aCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyB3YXZCdWZmZXIsIGR1cmF0aW9uIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgLnNhdmUob3V0cHV0UGF0aCk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwidG1wZGlyIiwiam9pbiIsInByb21pc2lmeSIsImZmbXBlZyIsIndyaXRlRmlsZUFzeW5jIiwid3JpdGVGaWxlIiwicmVhZEZpbGVBc3luYyIsInJlYWRGaWxlIiwidW5saW5rQXN5bmMiLCJ1bmxpbmsiLCJjb252ZXJ0V2VibVRvV2F2Iiwid2VibUJ1ZmZlciIsInRlbXBEaXIiLCJ1bmlxdWUiLCJEYXRlIiwibm93IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaW5wdXRQYXRoIiwib3V0cHV0UGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXVkaW9Db2RlYyIsImF1ZGlvQ2hhbm5lbHMiLCJhdWRpb0ZyZXF1ZW5jeSIsImZvcm1hdCIsIm9uIiwiZXJyIiwiZmZwcm9iZSIsIm1ldGFkYXRhIiwiZHVyYXRpb24iLCJ3YXZCdWZmZXIiLCJlcnJvciIsInNhdmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/ffmpeg.ts\n");

/***/ }),

/***/ "(rsc)/./lib/whisper.ts":
/*!************************!*\
  !*** ./lib/whisper.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transcribeAudio: () => (/* binding */ transcribeAudio)\n/* harmony export */ });\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! os */ \"os\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form-data */ \"(rsc)/./node_modules/form-data/lib/form_data.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FREESUBTITLES_API_URL = 'https://freesubtitles.ai/api';\nasync function transcribeAudio(wavBuffer) {\n    const tempFilePath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)((0,os__WEBPACK_IMPORTED_MODULE_0__.tmpdir)(), `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.wav`);\n    await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().writeFile(tempFilePath, wavBuffer);\n    try {\n        const form = new (form_data__WEBPACK_IMPORTED_MODULE_3___default())();\n        form.append('apiKey', process.env.FREESUBTITLES_API_KEY || '');\n        form.append('language', 'en');\n        form.append('file', await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().readFile(tempFilePath), {\n            filename: 'audio.wav',\n            contentType: 'audio/wav'\n        });\n        const postResponse = await fetch(FREESUBTITLES_API_URL, {\n            method: 'POST',\n            headers: form.getHeaders(),\n            body: form\n        });\n        if (!postResponse.ok) {\n            throw new Error(`Error from FreeSubtitles.ai POST: ${postResponse.statusText}`);\n        }\n        const postJson = await postResponse.json();\n        const numberToUse = postJson.numberToUse;\n        if (!numberToUse) {\n            throw new Error('No transcription reference number returned from FreeSubtitles.ai');\n        }\n        const getEndpoint = `${FREESUBTITLES_API_URL}/${numberToUse}`;\n        const getResponse = await fetch(getEndpoint);\n        if (!getResponse.ok) {\n            throw new Error(`Error from FreeSubtitles.ai GET: ${getResponse.statusText}`);\n        }\n        const getJson = await getResponse.json();\n        const transcript = getJson.txtData;\n        if (!transcript) {\n            throw new Error('Transcription text not found in the response');\n        }\n        return transcript;\n    } catch (error) {\n        console.error(\"Error during transcription:\", error);\n        return \"Transcription failed.\";\n    } finally{\n        await fs_promises__WEBPACK_IMPORTED_MODULE_2___default().unlink(tempFilePath);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvd2hpc3Blci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDQTtBQUNDO0FBRUk7QUFFakMsTUFBTUksd0JBQXdCO0FBRXZCLGVBQWVDLGdCQUFnQkMsU0FBaUI7SUFDckQsTUFBTUMsZUFBZU4sMENBQUlBLENBQ3ZCRCwwQ0FBTUEsSUFDTixHQUFHUSxLQUFLQyxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztJQUVwRSxNQUFNWCw0REFBWSxDQUFDSyxjQUFjRDtJQUVqQyxJQUFJO1FBQ0YsTUFBTVMsT0FBTyxJQUFJWixrREFBUUE7UUFDekJZLEtBQUtDLE1BQU0sQ0FBQyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQixJQUFJO1FBQzNESixLQUFLQyxNQUFNLENBQUMsWUFBWTtRQUN4QkQsS0FBS0MsTUFBTSxDQUFDLFFBQVEsTUFBTWQsMkRBQVcsQ0FBQ0ssZUFBZTtZQUNuRGMsVUFBVTtZQUNWQyxhQUFhO1FBQ2Y7UUFDQSxNQUFNQyxlQUFlLE1BQU1DLE1BQU1wQix1QkFBdUI7WUFDdERxQixRQUFRO1lBQ1JDLFNBQVNYLEtBQUtZLFVBQVU7WUFDeEJDLE1BQU1iO1FBQ1I7UUFJQSxJQUFJLENBQUNRLGFBQWFNLEVBQUUsRUFBRTtZQUNwQixNQUFNLElBQUlDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRVAsYUFBYVEsVUFBVSxFQUFFO1FBQ2hGO1FBQ0EsTUFBTUMsV0FBVyxNQUFNVCxhQUFhVSxJQUFJO1FBQ3hDLE1BQU1DLGNBQWNGLFNBQVNFLFdBQVc7UUFDeEMsSUFBSSxDQUFDQSxhQUFhO1lBQ2hCLE1BQU0sSUFBSUosTUFBTTtRQUNsQjtRQUVBLE1BQU1LLGNBQWMsR0FBRy9CLHNCQUFzQixDQUFDLEVBQUU4QixhQUFhO1FBQzdELE1BQU1FLGNBQWMsTUFBTVosTUFBTVc7UUFDaEMsSUFBSSxDQUFDQyxZQUFZUCxFQUFFLEVBQUU7WUFDbkIsTUFBTSxJQUFJQyxNQUFNLENBQUMsaUNBQWlDLEVBQUVNLFlBQVlMLFVBQVUsRUFBRTtRQUM5RTtRQUNBLE1BQU1NLFVBQVUsTUFBTUQsWUFBWUgsSUFBSTtRQUN0QyxNQUFNSyxhQUFhRCxRQUFRRSxPQUFPO1FBQ2xDLElBQUksQ0FBQ0QsWUFBWTtZQUNmLE1BQU0sSUFBSVIsTUFBTTtRQUNsQjtRQUNBLE9BQU9RO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU87SUFDVCxTQUFVO1FBQ1IsTUFBTXRDLHlEQUFTLENBQUNLO0lBQ2xCO0FBQ0YiLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9hbmR5ei9Eb3dubG9hZHMvQWNvdXN0aWNBSS9saWIvd2hpc3Blci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0bXBkaXIgfSBmcm9tICdvcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHsgY3JlYXRlUmVhZFN0cmVhbSB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IEZvcm1EYXRhIGZyb20gJ2Zvcm0tZGF0YSc7XHJcblxyXG5jb25zdCBGUkVFU1VCVElUTEVTX0FQSV9VUkwgPSAnaHR0cHM6Ly9mcmVlc3VidGl0bGVzLmFpL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdHJhbnNjcmliZUF1ZGlvKHdhdkJ1ZmZlcjogQnVmZmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICBjb25zdCB0ZW1wRmlsZVBhdGggPSBqb2luKFxyXG4gICAgdG1wZGlyKCksXHJcbiAgICBgJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSl9LndhdmBcclxuICApO1xyXG4gIGF3YWl0IGZzLndyaXRlRmlsZSh0ZW1wRmlsZVBhdGgsIHdhdkJ1ZmZlcik7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtLmFwcGVuZCgnYXBpS2V5JywgcHJvY2Vzcy5lbnYuRlJFRVNVQlRJVExFU19BUElfS0VZIHx8ICcnKTtcclxuICAgIGZvcm0uYXBwZW5kKCdsYW5ndWFnZScsICdlbicpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2ZpbGUnLCBhd2FpdCBmcy5yZWFkRmlsZSh0ZW1wRmlsZVBhdGgpLCB7XHJcbiAgICAgIGZpbGVuYW1lOiAnYXVkaW8ud2F2JyxcclxuICAgICAgY29udGVudFR5cGU6ICdhdWRpby93YXYnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBvc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKEZSRUVTVUJUSVRMRVNfQVBJX1VSTCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogZm9ybS5nZXRIZWFkZXJzKCksXHJcbiAgICAgIGJvZHk6IGZvcm0gYXMgdW5rbm93biBhcyBCb2R5SW5pdCxcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBpZiAoIXBvc3RSZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZyb20gRnJlZVN1YnRpdGxlcy5haSBQT1NUOiAke3Bvc3RSZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcG9zdEpzb24gPSBhd2FpdCBwb3N0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgbnVtYmVyVG9Vc2UgPSBwb3N0SnNvbi5udW1iZXJUb1VzZTtcclxuICAgIGlmICghbnVtYmVyVG9Vc2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB0cmFuc2NyaXB0aW9uIHJlZmVyZW5jZSBudW1iZXIgcmV0dXJuZWQgZnJvbSBGcmVlU3VidGl0bGVzLmFpJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RW5kcG9pbnQgPSBgJHtGUkVFU1VCVElUTEVTX0FQSV9VUkx9LyR7bnVtYmVyVG9Vc2V9YDtcclxuICAgIGNvbnN0IGdldFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0RW5kcG9pbnQpO1xyXG4gICAgaWYgKCFnZXRSZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZyb20gRnJlZVN1YnRpdGxlcy5haSBHRVQ6ICR7Z2V0UmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEpzb24gPSBhd2FpdCBnZXRSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB0cmFuc2NyaXB0ID0gZ2V0SnNvbi50eHREYXRhO1xyXG4gICAgaWYgKCF0cmFuc2NyaXB0KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNjcmlwdGlvbiB0ZXh0IG5vdCBmb3VuZCBpbiB0aGUgcmVzcG9uc2UnKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmFuc2NyaXB0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHRyYW5zY3JpcHRpb246XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBcIlRyYW5zY3JpcHRpb24gZmFpbGVkLlwiO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBhd2FpdCBmcy51bmxpbmsodGVtcEZpbGVQYXRoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRtcGRpciIsImpvaW4iLCJmcyIsIkZvcm1EYXRhIiwiRlJFRVNVQlRJVExFU19BUElfVVJMIiwidHJhbnNjcmliZUF1ZGlvIiwid2F2QnVmZmVyIiwidGVtcEZpbGVQYXRoIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIndyaXRlRmlsZSIsImZvcm0iLCJhcHBlbmQiLCJwcm9jZXNzIiwiZW52IiwiRlJFRVNVQlRJVExFU19BUElfS0VZIiwicmVhZEZpbGUiLCJmaWxlbmFtZSIsImNvbnRlbnRUeXBlIiwicG9zdFJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZ2V0SGVhZGVycyIsImJvZHkiLCJvayIsIkVycm9yIiwic3RhdHVzVGV4dCIsInBvc3RKc29uIiwianNvbiIsIm51bWJlclRvVXNlIiwiZ2V0RW5kcG9pbnQiLCJnZXRSZXNwb25zZSIsImdldEpzb24iLCJ0cmFuc2NyaXB0IiwidHh0RGF0YSIsImVycm9yIiwiY29uc29sZSIsInVubGluayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/whisper.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/fluent-ffmpeg/lib/options sync recursive":
/*!******************************************************!*\
  !*** ./node_modules/fluent-ffmpeg/lib/options/ sync ***!
  \******************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/fluent-ffmpeg/lib/options sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mnt_c_Users_andyz_Downloads_AcousticAI_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/upload/route.ts */ \"(rsc)/./app/api/upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/route\",\n        pathname: \"/api/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/route\"\n    },\n    resolvedPagePath: \"/mnt/c/Users/andyz/Downloads/AcousticAI/app/api/upload/route.ts\",\n    nextConfigOutput,\n    userland: _mnt_c_Users_andyz_Downloads_AcousticAI_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZtbnQlMkZjJTJGVXNlcnMlMkZhbmR5eiUyRkRvd25sb2FkcyUyRkFjb3VzdGljQUklMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRm1udCUyRmMlMkZVc2VycyUyRmFuZHl6JTJGRG93bmxvYWRzJTJGQWNvdXN0aWNBSSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZTtBQUM1RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL21udC9jL1VzZXJzL2FuZHl6L0Rvd25sb2Fkcy9BY291c3RpY0FJL2FwcC9hcGkvdXBsb2FkL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91cGxvYWQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91cGxvYWRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VwbG9hZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9tbnQvYy9Vc2Vycy9hbmR5ei9Eb3dubG9hZHMvQWNvdXN0aWNBSS9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "onnxruntime-node":
/*!***********************************!*\
  !*** external "onnxruntime-node" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("onnxruntime-node");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/fluent-ffmpeg","vendor-chunks/asynckit","vendor-chunks/math-intrinsics","vendor-chunks/pitchfinder","vendor-chunks/es-errors","vendor-chunks/call-bind-apply-helpers","vendor-chunks/isexe","vendor-chunks/get-proto","vendor-chunks/mime-db","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/form-data","vendor-chunks/which","vendor-chunks/wav-decoder","vendor-chunks/mime-types","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/get-intrinsic","vendor-chunks/es-set-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/delayed-stream","vendor-chunks/combined-stream","vendor-chunks/async"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fandyz%2FDownloads%2FAcousticAI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();