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

/***/ "./src/scripts/arrow.js":
/*!******************************!*\
  !*** ./src/scripts/arrow.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nclass Arrow {\n  constructor(ctx, dir, coords) {\n    this.ctx = ctx;\n    this.dir = dir;\n    this.coords = coords;\n  }\n  getImage() {\n    let newImage = new Image();\n    if (this.dir === 'l' || this.dir === 'r') {\n      // if arrow is horizontal\n      newImage = new Image(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT, _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH);\n    } else {\n      // else if arrow is vertical\n      newImage = new Image(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT);\n    }\n    newImage.src = _constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_SRC[this.dir];\n    return newImage;\n  }\n  drawImage() {\n    let imageObject = this.getImage();\n    let draw = () => {\n      this.ctx.drawImage(imageObject, ...this.coords, imageObject.width, imageObject.height);\n    };\n    imageObject.onload = draw;\n  }\n  drawCircle() {\n    const radius = _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT / 2 + _constants__WEBPACK_IMPORTED_MODULE_0__.GAP / 15;\n    let centerX, centerY;\n    if (this.dir === 'l' || this.dir === 'r') {\n      // if arrow is horizontal\n      centerX = this.coords[0] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT / 2;\n      centerY = this.coords[1] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH / 2;\n    } else {\n      // if arrow is vertical\n      centerX = this.coords[0] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH / 2;\n      centerY = this.coords[1] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT / 2;\n    }\n    this.ctx.beginPath();\n    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);\n    this.ctx.lineWidth = 3;\n    this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__.COLORS[this.dir];\n    this.ctx.stroke();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCB7QVJST1dfV0lEVEgsIEFSUk9XX0hFSUdIVCwgR0FQLCBDT0xPUlMsIElNQUdFX1NSQ30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cblxuXG5jbGFzcyBBcnJvdyB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBkaXIsIGNvb3Jkcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cbiAgICBcbiAgICBnZXRJbWFnZSgpIHtcbiAgICAgICAgbGV0IG5ld0ltYWdlID0gbmV3IEltYWdlKClcbiAgICBcbiAgICAgICAgaWYgKHRoaXMuZGlyID09PSAnbCcgfHwgdGhpcy5kaXIgPT09ICdyJykge1xuICAgICAgICAgICAgLy8gaWYgYXJyb3cgaXMgaG9yaXpvbnRhbFxuICAgICAgICAgICAgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoQVJST1dfSEVJR0hULCBBUlJPV19XSURUSClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgYXJyb3cgaXMgdmVydGljYWxcbiAgICAgICAgICAgIG5ld0ltYWdlID0gbmV3IEltYWdlKEFSUk9XX1dJRFRILCBBUlJPV19IRUlHSFQpXG4gICAgICAgIH1cbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gSU1BR0VfU1JDW3RoaXMuZGlyXVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3SW1hZ2VcbiAgICB9XG5cbiAgICBkcmF3SW1hZ2UoKSB7XG4gICAgICAgIGxldCBpbWFnZU9iamVjdCA9IHRoaXMuZ2V0SW1hZ2UoKVxuICAgICAgICBsZXQgZHJhdyA9ICgpPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltYWdlT2JqZWN0LCAuLi50aGlzLmNvb3JkcywgaW1hZ2VPYmplY3Qud2lkdGgsIGltYWdlT2JqZWN0LmhlaWdodClcbiAgICAgICAgfVxuICAgICAgICBpbWFnZU9iamVjdC5vbmxvYWQgPSBkcmF3O1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IEFSUk9XX0hFSUdIVC8yICsgR0FQLzE1O1xuICAgICAgICBsZXQgY2VudGVyWCwgY2VudGVyWTtcbiAgICAgICAgaWYgKHRoaXMuZGlyID09PSAnbCcgfHwgdGhpcy5kaXIgPT09ICdyJykge1xuICAgICAgICAgICAgLy8gaWYgYXJyb3cgaXMgaG9yaXpvbnRhbFxuICAgICAgICAgICAgY2VudGVyWCA9IHRoaXMuY29vcmRzWzBdICsgQVJST1dfSEVJR0hULzI7XG4gICAgICAgICAgICBjZW50ZXJZID0gdGhpcy5jb29yZHNbMV0gKyBBUlJPV19XSURUSC8yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgYXJyb3cgaXMgdmVydGljYWxcbiAgICAgICAgICAgIGNlbnRlclggPSB0aGlzLmNvb3Jkc1swXSArIEFSUk9XX1dJRFRILzI7XG4gICAgICAgICAgICBjZW50ZXJZID0gdGhpcy5jb29yZHNbMV0gKyBBUlJPV19IRUlHSFQvMjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHJhZGl1cywgMCwgMipNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SU1t0aGlzLmRpcl07XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFycm93O1xuIl0sIm5hbWVzIjpbIkFSUk9XX1dJRFRIIiwiQVJST1dfSEVJR0hUIiwiR0FQIiwiQ09MT1JTIiwiSU1BR0VfU1JDIiwiQXJyb3ciLCJjb25zdHJ1Y3RvciIsImN0eCIsImRpciIsImNvb3JkcyIsImdldEltYWdlIiwibmV3SW1hZ2UiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsImltYWdlT2JqZWN0IiwiZHJhdyIsIndpZHRoIiwiaGVpZ2h0Iiwib25sb2FkIiwiZHJhd0NpcmNsZSIsInJhZGl1cyIsImNlbnRlclgiLCJjZW50ZXJZIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/arrow.js\n");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ARROW_HEIGHT: function() { return /* binding */ ARROW_HEIGHT; },\n/* harmony export */   ARROW_WIDTH: function() { return /* binding */ ARROW_WIDTH; },\n/* harmony export */   COLORS: function() { return /* binding */ COLORS; },\n/* harmony export */   GAP: function() { return /* binding */ GAP; },\n/* harmony export */   IMAGE_SRC: function() { return /* binding */ IMAGE_SRC; }\n/* harmony export */ });\nconst ARROW_WIDTH = 40;\nconst ARROW_HEIGHT = 80;\nconst GAP = 10;\nconst COLORS = {\n  \"l\": \"#BF95FF\",\n  \"d\": \"#FF899E\",\n  \"u\": \"#C5C5FF\",\n  \"r\": \"#A3E9A3\"\n};\nconst IMAGE_SRC = {\n  \"l\": \"../images/left-arrow.png\",\n  \"d\": \"../images/down-arrow.png\",\n  \"u\": \"../images/up-arrow.png\",\n  \"r\": \"../images/right-arrow.png\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLEdBQUcsRUFBRTtBQUN0QixNQUFNQyxZQUFZLEdBQUcsRUFBRTtBQUN2QixNQUFNQyxHQUFHLEdBQUcsRUFBRTtBQUVkLE1BQU1DLE1BQU0sR0FBRztFQUNsQixHQUFHLEVBQUUsU0FBUztFQUNkLEdBQUcsRUFBRSxTQUFTO0VBQ2QsR0FBRyxFQUFFLFNBQVM7RUFDZCxHQUFHLEVBQUU7QUFDVCxDQUFDO0FBRU0sTUFBTUMsU0FBUyxHQUFHO0VBQ3JCLEdBQUcsRUFBRSwwQkFBMEI7RUFDL0IsR0FBRyxFQUFFLDBCQUEwQjtFQUMvQixHQUFHLEVBQUUsd0JBQXdCO0VBQzdCLEdBQUcsRUFBRTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjby10YXAvLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanM/Nzc4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVJST1dfV0lEVEggPSA0MDtcbmV4cG9ydCBjb25zdCBBUlJPV19IRUlHSFQgPSA4MDtcbmV4cG9ydCBjb25zdCBHQVAgPSAxMDtcblxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgICBcImxcIjogXCIjQkY5NUZGXCIsIFxuICAgIFwiZFwiOiBcIiNGRjg5OUVcIixcbiAgICBcInVcIjogXCIjQzVDNUZGXCIsXG4gICAgXCJyXCI6IFwiI0EzRTlBM1wiXG59XG5cbmV4cG9ydCBjb25zdCBJTUFHRV9TUkMgPSB7IFxuICAgIFwibFwiOiBcIi4uL2ltYWdlcy9sZWZ0LWFycm93LnBuZ1wiLFxuICAgIFwiZFwiOiBcIi4uL2ltYWdlcy9kb3duLWFycm93LnBuZ1wiLFxuICAgIFwidVwiOiBcIi4uL2ltYWdlcy91cC1hcnJvdy5wbmdcIixcbiAgICBcInJcIjogXCIuLi9pbWFnZXMvcmlnaHQtYXJyb3cucG5nXCJcbn0iXSwibmFtZXMiOlsiQVJST1dfV0lEVEgiLCJBUlJPV19IRUlHSFQiLCJHQVAiLCJDT0xPUlMiLCJJTUFHRV9TUkMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/constants.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addTargets; }\n/* harmony export */ });\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ \"./src/scripts/arrow.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\n\nconst HORIZ_Y = 50;\nconst VERT_Y = 30;\nconst TAB_X = 100;\nconst COORDS = {\n  \"l\": [TAB_X, HORIZ_Y],\n  \"d\": [TAB_X + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT + 7 * _constants__WEBPACK_IMPORTED_MODULE_1__.GAP, VERT_Y],\n  \"u\": [TAB_X + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_WIDTH + 16 * _constants__WEBPACK_IMPORTED_MODULE_1__.GAP, VERT_Y],\n  \"r\": [TAB_X + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT + 2 * _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_WIDTH + 23 * _constants__WEBPACK_IMPORTED_MODULE_1__.GAP, HORIZ_Y]\n};\nfunction addTargets(ctx) {\n  ['l', 'd', 'u', 'r'].forEach(dir => {\n    let arrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, dir, COORDS[dir]);\n    arrow.drawImage();\n    arrow.drawCircle();\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBQytCO0FBRTNELE1BQU1JLE9BQU8sR0FBRyxFQUFFO0FBQ2xCLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBRWpCLE1BQU1DLEtBQUssR0FBRyxHQUFHO0FBRWpCLE1BQU1DLE1BQU0sR0FBRztFQUNYLEdBQUcsRUFBRSxDQUFDRCxLQUFLLEVBQUVGLE9BQU8sQ0FBQztFQUNyQixHQUFHLEVBQUUsQ0FBQ0UsS0FBSyxHQUFHSixvREFBWSxHQUFHLENBQUMsR0FBQ0MsMkNBQUcsRUFBRUUsTUFBTSxDQUFDO0VBQzNDLEdBQUcsRUFBRSxDQUFDQyxLQUFLLEdBQUdKLG9EQUFZLEdBQUdELG1EQUFXLEdBQUcsRUFBRSxHQUFDRSwyQ0FBRyxFQUFFRSxNQUFNLENBQUM7RUFDMUQsR0FBRyxFQUFFLENBQUNDLEtBQUssR0FBR0osb0RBQVksR0FBRyxDQUFDLEdBQUNELG1EQUFXLEdBQUcsRUFBRSxHQUFDRSwyQ0FBRyxFQUFFQyxPQUFPO0FBQ2hFLENBQUM7QUFFYyxTQUFTSSxVQUFVQSxDQUFDQyxHQUFHLEVBQUU7RUFDcEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQ0MsT0FBTyxDQUFFQyxHQUFHLElBQUk7SUFDakMsSUFBSUMsS0FBSyxHQUFHLElBQUlaLDhDQUFLLENBQUNTLEdBQUcsRUFBRUUsR0FBRyxFQUFFSixNQUFNLENBQUNJLEdBQUcsQ0FBQyxDQUFDO0lBQzVDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pCRCxLQUFLLENBQUNFLFVBQVUsQ0FBQyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzY28tdGFwLy4vc3JjL3NjcmlwdHMvdGFyZ2V0LmpzP2UyOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFycm93IGZyb20gXCIuL2Fycm93XCI7XG5pbXBvcnQge0FSUk9XX1dJRFRILCBBUlJPV19IRUlHSFQsIEdBUH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEhPUklaX1kgPSA1MDtcbmNvbnN0IFZFUlRfWSA9IDMwO1xuXG5jb25zdCBUQUJfWCA9IDEwMFxuXG5jb25zdCBDT09SRFMgPSB7XG4gICAgXCJsXCI6IFtUQUJfWCwgSE9SSVpfWV0sXG4gICAgXCJkXCI6IFtUQUJfWCArIEFSUk9XX0hFSUdIVCArIDcqR0FQLCBWRVJUX1ldLFxuICAgIFwidVwiOiBbVEFCX1ggKyBBUlJPV19IRUlHSFQgKyBBUlJPV19XSURUSCArIDE2KkdBUCwgVkVSVF9ZXSxcbiAgICBcInJcIjogW1RBQl9YICsgQVJST1dfSEVJR0hUICsgMipBUlJPV19XSURUSCArIDIzKkdBUCwgSE9SSVpfWV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFyZ2V0cyhjdHgpIHtcbiAgICBbJ2wnLCAnZCcsICd1JywgJ3InXS5mb3JFYWNoKChkaXIpPT4ge1xuICAgICAgICBsZXQgYXJyb3cgPSBuZXcgQXJyb3coY3R4LCBkaXIsIENPT1JEU1tkaXJdKTtcbiAgICAgICAgYXJyb3cuZHJhd0ltYWdlKCk7XG4gICAgICAgIGFycm93LmRyYXdDaXJjbGUoKTtcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbIkFycm93IiwiQVJST1dfV0lEVEgiLCJBUlJPV19IRUlHSFQiLCJHQVAiLCJIT1JJWl9ZIiwiVkVSVF9ZIiwiVEFCX1giLCJDT09SRFMiLCJhZGRUYXJnZXRzIiwiY3R4IiwiZm9yRWFjaCIsImRpciIsImFycm93IiwiZHJhd0ltYWdlIiwiZHJhd0NpcmNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

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