/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nconst canvasEl = document.getElementById(\"canvas\");\ncanvasEl.width = _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\ncanvasEl.height = _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\nconst ctx = canvasEl.getContext(\"2d\");\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n// new GameView(game,ctx).start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbEMsTUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDbERGLFFBQVEsQ0FBQ0csS0FBSyxHQUFHSixxREFBSSxDQUFDSyxLQUFLO0FBQzNCSixRQUFRLENBQUNLLE1BQU0sR0FBR04scURBQUksQ0FBQ08sS0FBSztBQUU1QixNQUFNQyxHQUFHLEdBQUdQLFFBQVEsQ0FBQ1EsVUFBVSxDQUFDLElBQUksQ0FBQztBQUNyQyxNQUFNQyxJQUFJLEdBQUcsSUFBSVYscURBQUksQ0FBQ1EsR0FBRyxDQUFDO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzY28tdGFwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG5cbmNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIilcbmNhbnZhc0VsLndpZHRoID0gR2FtZS5ESU1fWDtcbmNhbnZhc0VsLmhlaWdodCA9IEdhbWUuRElNX1k7XG5cbmNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuLy8gbmV3IEdhbWVWaWV3KGdhbWUsY3R4KS5zdGFydCgpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target */ \"./src/scripts/target.js\");\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.score = 0;\n    // this.testCanvas();\n    (0,_target__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ctx);\n  }\n  static DIM_X = 1000; // document.body.clientWidth;\n  static DIM_Y = 600; // document.body.clientHeight;\n  static FPS = 32;\n  static BG_COLOR = \"#000000\";\n  testCanvas() {\n    this.ctx.fillStyle = Game.BG_COLOR;\n    this.ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  }\n  // allObjects() {\n  //     return [].concat(this.)\n  // }\n\n  // draw(ctx) {\n  //     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n  //     ctx.fillStyle = Game.BG_COLOR;\n  //     ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y)\n\n  //     this.allObjects().forEach((object) => {\n  //         object.draw(ctx);\n  //     })\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtDO0FBRWxDLE1BQU1DLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUVkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7SUFDZDtJQUNBSixtREFBVSxDQUFDRyxHQUFHLENBQUM7RUFDbkI7RUFFQSxPQUFPRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7RUFDckIsT0FBT0MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ3BCLE9BQU9DLEdBQUcsR0FBRyxFQUFFO0VBQ2YsT0FBT0MsUUFBUSxHQUFHLFNBQVM7RUFFM0JDLFVBQVVBLENBQUEsRUFBRTtJQUNSLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxTQUFTLEdBQUdULElBQUksQ0FBQ08sUUFBUTtJQUNsQyxJQUFJLENBQUNMLEdBQUcsQ0FBQ1EsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVWLElBQUksQ0FBQ0ksS0FBSyxFQUFFSixJQUFJLENBQUNLLEtBQUssQ0FBQztFQUNuRDtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtBQUNKOztBQUVBLCtEQUFlTCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzY28tdGFwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGRUYXJnZXRzIGZyb20gXCIuL3RhcmdldFwiO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy50ZXN0Q2FudmFzKCk7XG4gICAgICAgIGFkZFRhcmdldHMoY3R4KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgRElNX1ggPSAxMDAwOyAvLyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHN0YXRpYyBESU1fWSA9IDYwMDsgLy8gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgc3RhdGljIEZQUyA9IDMyO1xuICAgIHN0YXRpYyBCR19DT0xPUiA9IFwiIzAwMDAwMFwiO1xuXG4gICAgdGVzdENhbnZhcygpe1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBHYW1lLkJHX0NPTE9SO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKVxuICAgIH1cbiAgICAvLyBhbGxPYmplY3RzKCkge1xuICAgIC8vICAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuKVxuICAgIC8vIH1cblxuICAgIC8vIGRyYXcoY3R4KSB7XG4gICAgLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSlcbiAgICAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgLy8gICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKVxuXG4gICAgLy8gICAgIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgIC8vICAgICAgICAgb2JqZWN0LmRyYXcoY3R4KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbImFkZFRhcmdldHMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzY29yZSIsIkRJTV9YIiwiRElNX1kiLCJGUFMiLCJCR19DT0xPUiIsInRlc3RDYW52YXMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addTargets; }\n/* harmony export */ });\nconst HORIZ_Y = 15;\nconst VERT_Y = 10;\nconst ARROW_WIDTH = 50;\nconst ARROW_HEIGHT = 100;\nconst TAB_X = 100;\nconst GAP = 100;\nconst COORDS = {\n  \"l\": [TAB_X, HORIZ_Y],\n  \"d\": [TAB_X + ARROW_HEIGHT + GAP, VERT_Y],\n  \"u\": [TAB_X + ARROW_HEIGHT + ARROW_WIDTH + 2 * GAP, VERT_Y],\n  \"r\": [TAB_X + ARROW_HEIGHT + 2 * ARROW_WIDTH + 3 * GAP, HORIZ_Y]\n};\nconst IMAGE_SRC = {\n  \"l\": \"../images/left-arrow.png\",\n  \"d\": \"../images/down-arrow.png\",\n  \"u\": \"../images/up-arrow.png\",\n  \"r\": \"../images/right-arrow.png\"\n};\nconst COLORS = {\n  \"l\": \"#BF95FF\",\n  \"d\": \"#FF899E\",\n  \"u\": \"#C5C5FF\",\n  \"r\": \"#A3E9A3\"\n};\nfunction getImage(dir) {\n  let newImage = new Image();\n  if (dir === 'l' || dir === 'r') {\n    // if arrow is horizontal\n    newImage = new Image(ARROW_HEIGHT, ARROW_WIDTH);\n  } else {\n    // else if arrow is vertical\n    newImage = new Image(ARROW_WIDTH, ARROW_HEIGHT);\n  }\n  newImage.src = IMAGE_SRC[dir];\n  return newImage;\n}\nfunction drawImage(ctx, dir) {\n  let imageObject = getImage(dir);\n  imageObject.onload = function () {\n    ctx.drawImage(imageObject, ...COORDS[dir], imageObject.width, imageObject.height);\n  };\n}\nfunction drawCircle(ctx, dir) {\n  if (dir === 'l' || dir === 'r') {\n    // if arrow is horizontal\n    const centerX = COORDS[dir] + ARROW_HEIGHT / 2;\n    const centerY = COORDS[dir] + ARROW_WIDTH / 2;\n    const radius = ARROW_HEIGHT / 2 + GAP / 3;\n  }\n  ctx.beginPath();\n  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);\n  ctx.lineWidth = 5;\n  // ctx.filter = 'blur(2px)'\n  ctx.strokeStyle = COLORS[dir];\n  ctx.stroke();\n}\nfunction addTargets(ctx) {\n  drawImage(ctx, 'l');\n  // drawCircle(ctx, 'l')\n  drawImage(ctx, 'd');\n  drawImage(ctx, 'u');\n  drawImage(ctx, 'r');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU8sR0FBRyxFQUFFO0FBQ2xCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBQ2pCLE1BQU1DLFdBQVcsR0FBRyxFQUFFO0FBQ3RCLE1BQU1DLFlBQVksR0FBRyxHQUFHO0FBRXhCLE1BQU1DLEtBQUssR0FBRyxHQUFHO0FBQ2pCLE1BQU1DLEdBQUcsR0FBRyxHQUFHO0FBRWYsTUFBTUMsTUFBTSxHQUFHO0VBQ1gsR0FBRyxFQUFFLENBQUNGLEtBQUssRUFBRUosT0FBTyxDQUFDO0VBQ3JCLEdBQUcsRUFBRSxDQUFDSSxLQUFLLEdBQUdELFlBQVksR0FBR0UsR0FBRyxFQUFFSixNQUFNLENBQUM7RUFDekMsR0FBRyxFQUFFLENBQUNHLEtBQUssR0FBR0QsWUFBWSxHQUFHRCxXQUFXLEdBQUcsQ0FBQyxHQUFDRyxHQUFHLEVBQUVKLE1BQU0sQ0FBQztFQUN6RCxHQUFHLEVBQUUsQ0FBQ0csS0FBSyxHQUFHRCxZQUFZLEdBQUcsQ0FBQyxHQUFDRCxXQUFXLEdBQUcsQ0FBQyxHQUFDRyxHQUFHLEVBQUVMLE9BQU87QUFDL0QsQ0FBQztBQUVELE1BQU1PLFNBQVMsR0FBRztFQUNkLEdBQUcsRUFBRSwwQkFBMEI7RUFDL0IsR0FBRyxFQUFFLDBCQUEwQjtFQUMvQixHQUFHLEVBQUUsd0JBQXdCO0VBQzdCLEdBQUcsRUFBRTtBQUNULENBQUM7QUFFRCxNQUFNQyxNQUFNLEdBQUc7RUFDWCxHQUFHLEVBQUUsU0FBUztFQUNkLEdBQUcsRUFBRSxTQUFTO0VBQ2QsR0FBRyxFQUFFLFNBQVM7RUFDZCxHQUFHLEVBQUU7QUFDVCxDQUFDO0FBRUQsU0FBU0MsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFFO0VBRW5CLElBQUlDLFFBQVEsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztFQUUxQixJQUFJRixHQUFHLEtBQUssR0FBRyxJQUFJQSxHQUFHLEtBQUssR0FBRyxFQUFFO0lBQzVCO0lBQ0FDLFFBQVEsR0FBRyxJQUFJQyxLQUFLLENBQUNULFlBQVksRUFBRUQsV0FBVyxDQUFDO0VBQ25ELENBQUMsTUFBTTtJQUNIO0lBQ0FTLFFBQVEsR0FBRyxJQUFJQyxLQUFLLENBQUNWLFdBQVcsRUFBRUMsWUFBWSxDQUFDO0VBQ25EO0VBQ0FRLFFBQVEsQ0FBQ0UsR0FBRyxHQUFHTixTQUFTLENBQUNHLEdBQUcsQ0FBQztFQUU3QixPQUFPQyxRQUFRO0FBQ25CO0FBRUEsU0FBU0csU0FBU0EsQ0FBQ0MsR0FBRyxFQUFFTCxHQUFHLEVBQUU7RUFDekIsSUFBSU0sV0FBVyxHQUFHUCxRQUFRLENBQUNDLEdBQUcsQ0FBQztFQUMvQk0sV0FBVyxDQUFDQyxNQUFNLEdBQUcsWUFBVztJQUM1QkYsR0FBRyxDQUFDRCxTQUFTLENBQUNFLFdBQVcsRUFBRSxHQUFHVixNQUFNLENBQUNJLEdBQUcsQ0FBQyxFQUFFTSxXQUFXLENBQUNFLEtBQUssRUFBRUYsV0FBVyxDQUFDRyxNQUFNLENBQUM7RUFDckYsQ0FBQztBQUNMO0FBRUEsU0FBU0MsVUFBVUEsQ0FBQ0wsR0FBRyxFQUFFTCxHQUFHLEVBQUU7RUFDMUIsSUFBSUEsR0FBRyxLQUFLLEdBQUcsSUFBSUEsR0FBRyxLQUFLLEdBQUcsRUFBRTtJQUM1QjtJQUNBLE1BQU1XLE9BQU8sR0FBR2YsTUFBTSxDQUFDSSxHQUFHLENBQUMsR0FBR1AsWUFBWSxHQUFDLENBQUM7SUFDNUMsTUFBTW1CLE9BQU8sR0FBR2hCLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLEdBQUdSLFdBQVcsR0FBQyxDQUFDO0lBQzNDLE1BQU1xQixNQUFNLEdBQUdwQixZQUFZLEdBQUMsQ0FBQyxHQUFHRSxHQUFHLEdBQUMsQ0FBQztFQUN6QztFQUNBVSxHQUFHLENBQUNTLFNBQVMsQ0FBQyxDQUFDO0VBQ2ZULEdBQUcsQ0FBQ1UsR0FBRyxDQUFDSixPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUNHLElBQUksQ0FBQ0MsRUFBRSxFQUFFLEtBQUssQ0FBQztFQUN0RFosR0FBRyxDQUFDYSxTQUFTLEdBQUcsQ0FBQztFQUNqQjtFQUNBYixHQUFHLENBQUNjLFdBQVcsR0FBR3JCLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDO0VBQzdCSyxHQUFHLENBQUNlLE1BQU0sQ0FBQyxDQUFDO0FBQ2hCO0FBRWUsU0FBU0MsVUFBVUEsQ0FBQ2hCLEdBQUcsRUFBRTtFQUNwQ0QsU0FBUyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ25CO0VBQ0FELFNBQVMsQ0FBQ0MsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUNuQkQsU0FBUyxDQUFDQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ25CRCxTQUFTLENBQUNDLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjby10YXAvLi9zcmMvc2NyaXB0cy90YXJnZXQuanM/ZTI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIT1JJWl9ZID0gMTU7XG5jb25zdCBWRVJUX1kgPSAxMDtcbmNvbnN0IEFSUk9XX1dJRFRIID0gNTA7XG5jb25zdCBBUlJPV19IRUlHSFQgPSAxMDA7XG5cbmNvbnN0IFRBQl9YID0gMTAwXG5jb25zdCBHQVAgPSAxMDA7XG5cbmNvbnN0IENPT1JEUyA9IHtcbiAgICBcImxcIjogW1RBQl9YLCBIT1JJWl9ZXSxcbiAgICBcImRcIjogW1RBQl9YICsgQVJST1dfSEVJR0hUICsgR0FQLCBWRVJUX1ldLFxuICAgIFwidVwiOiBbVEFCX1ggKyBBUlJPV19IRUlHSFQgKyBBUlJPV19XSURUSCArIDIqR0FQLCBWRVJUX1ldLFxuICAgIFwiclwiOiBbVEFCX1ggKyBBUlJPV19IRUlHSFQgKyAyKkFSUk9XX1dJRFRIICsgMypHQVAsIEhPUklaX1ldXG59XG5cbmNvbnN0IElNQUdFX1NSQyA9IHsgXG4gICAgXCJsXCI6IFwiLi4vaW1hZ2VzL2xlZnQtYXJyb3cucG5nXCIsXG4gICAgXCJkXCI6IFwiLi4vaW1hZ2VzL2Rvd24tYXJyb3cucG5nXCIsXG4gICAgXCJ1XCI6IFwiLi4vaW1hZ2VzL3VwLWFycm93LnBuZ1wiLFxuICAgIFwiclwiOiBcIi4uL2ltYWdlcy9yaWdodC1hcnJvdy5wbmdcIlxufVxuXG5jb25zdCBDT0xPUlMgPSB7XG4gICAgXCJsXCI6IFwiI0JGOTVGRlwiLCBcbiAgICBcImRcIjogXCIjRkY4OTlFXCIsXG4gICAgXCJ1XCI6IFwiI0M1QzVGRlwiLFxuICAgIFwiclwiOiBcIiNBM0U5QTNcIlxufVxuXG5mdW5jdGlvbiBnZXRJbWFnZShkaXIpIHtcblxuICAgIGxldCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpXG5cbiAgICBpZiAoZGlyID09PSAnbCcgfHwgZGlyID09PSAncicpIHtcbiAgICAgICAgLy8gaWYgYXJyb3cgaXMgaG9yaXpvbnRhbFxuICAgICAgICBuZXdJbWFnZSA9IG5ldyBJbWFnZShBUlJPV19IRUlHSFQsIEFSUk9XX1dJRFRIKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVsc2UgaWYgYXJyb3cgaXMgdmVydGljYWxcbiAgICAgICAgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoQVJST1dfV0lEVEgsIEFSUk9XX0hFSUdIVClcbiAgICB9XG4gICAgbmV3SW1hZ2Uuc3JjID0gSU1BR0VfU1JDW2Rpcl1cblxuICAgIHJldHVybiBuZXdJbWFnZVxufVxuXG5mdW5jdGlvbiBkcmF3SW1hZ2UoY3R4LCBkaXIpIHtcbiAgICBsZXQgaW1hZ2VPYmplY3QgPSBnZXRJbWFnZShkaXIpXG4gICAgaW1hZ2VPYmplY3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmplY3QsIC4uLkNPT1JEU1tkaXJdLCBpbWFnZU9iamVjdC53aWR0aCwgaW1hZ2VPYmplY3QuaGVpZ2h0KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhd0NpcmNsZShjdHgsIGRpcikge1xuICAgIGlmIChkaXIgPT09ICdsJyB8fCBkaXIgPT09ICdyJykge1xuICAgICAgICAvLyBpZiBhcnJvdyBpcyBob3Jpem9udGFsXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBDT09SRFNbZGlyXSArIEFSUk9XX0hFSUdIVC8yO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gQ09PUkRTW2Rpcl0gKyBBUlJPV19XSURUSC8yO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBBUlJPV19IRUlHSFQvMiArIEdBUC8zO1xuICAgIH1cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIDAsIDIqTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5saW5lV2lkdGggPSA1O1xuICAgIC8vIGN0eC5maWx0ZXIgPSAnYmx1cigycHgpJ1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IENPTE9SU1tkaXJdO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFyZ2V0cyhjdHgpIHtcbiAgICBkcmF3SW1hZ2UoY3R4LCAnbCcpXG4gICAgLy8gZHJhd0NpcmNsZShjdHgsICdsJylcbiAgICBkcmF3SW1hZ2UoY3R4LCAnZCcpXG4gICAgZHJhd0ltYWdlKGN0eCwgJ3UnKVxuICAgIGRyYXdJbWFnZShjdHgsICdyJylcbn1cbiJdLCJuYW1lcyI6WyJIT1JJWl9ZIiwiVkVSVF9ZIiwiQVJST1dfV0lEVEgiLCJBUlJPV19IRUlHSFQiLCJUQUJfWCIsIkdBUCIsIkNPT1JEUyIsIklNQUdFX1NSQyIsIkNPTE9SUyIsImdldEltYWdlIiwiZGlyIiwibmV3SW1hZ2UiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImN0eCIsImltYWdlT2JqZWN0Iiwib25sb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3Q2lyY2xlIiwiY2VudGVyWCIsImNlbnRlclkiLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImFkZFRhcmdldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjby10YXAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;