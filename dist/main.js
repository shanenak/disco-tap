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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/constants */ \"./src/scripts/constants.js\");\n\n\nconst canvasEl = document.getElementById(\"canvas\");\ncanvasEl.width = window.innerWidth; // DIM_X;\ncanvasEl.height = window.innerHeight; //DIM_Y ;\n\nconst ctx = canvasEl.getContext(\"2d\");\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n// new GameView(game,ctx).start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ2lCO0FBRW5ELE1BQU1HLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0FBQ2xERixRQUFRLENBQUNHLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVLEVBQUM7QUFDbkNMLFFBQVEsQ0FBQ00sTUFBTSxHQUFHRixNQUFNLENBQUNHLFdBQVcsRUFBQzs7QUFFckMsTUFBTUMsR0FBRyxHQUFHUixRQUFRLENBQUNTLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDckMsTUFBTUMsSUFBSSxHQUFHLElBQUliLHFEQUFJLENBQUNXLEdBQUcsQ0FBQztBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvLXRhcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiO1xuaW1wb3J0IHsgRElNX1gsIERJTV9ZIH0gZnJvbSBcIi4vc2NyaXB0cy9jb25zdGFudHNcIjtcblxuY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKVxuY2FudmFzRWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAvLyBESU1fWDtcbmNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvL0RJTV9ZIDtcblxuY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCk7XG4vLyBuZXcgR2FtZVZpZXcoZ2FtZSxjdHgpLnN0YXJ0KCk7XG4iXSwibmFtZXMiOlsiR2FtZSIsIkRJTV9YIiwiRElNX1kiLCJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/animate.js":
/*!********************************!*\
  !*** ./src/scripts/animate.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ \"./src/scripts/arrow.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\n\nclass Animate {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.arrows = [];\n    this.targets = this.createTargets();\n  }\n  startGame() {\n    this.addTargets();\n    for (let i = 0; i < 4; i++) {\n      let newArrow = this.createArrow();\n      this.arrows.push(newArrow);\n    }\n    console.log(this.arrows);\n    window.requestAnimationFrame(this.step.bind(this));\n  }\n  createTargets() {\n    return _constants__WEBPACK_IMPORTED_MODULE_1__.ALL_DIRS.map(dir => {\n      let arrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, dir, _constants__WEBPACK_IMPORTED_MODULE_1__.COORDS[dir]);\n      return arrow;\n    });\n  }\n  addTargets() {\n    console.log(this.targets);\n    this.targets.forEach(arrow => {\n      arrow.draw();\n      arrow.drawCircle();\n    });\n  }\n  createArrow() {\n    let randDir = _constants__WEBPACK_IMPORTED_MODULE_1__.ALL_DIRS[Math.floor(Math.random() * 4)];\n    let startCoords = _constants__WEBPACK_IMPORTED_MODULE_1__.COORDS[randDir].slice();\n    startCoords[1] = _constants__WEBPACK_IMPORTED_MODULE_1__.DIM_Y - _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT;\n    let randArrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, randDir, startCoords);\n    randArrow.createImage();\n    return randArrow;\n  }\n  draw() {\n    this.addTargets(this.ctx);\n    this.arrows.forEach(arrow => {\n      arrow.draw();\n    });\n  }\n  update() {\n    this.arrows = this.arrows.filter(arrow => arrow.coords[1] > -_constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT);\n    this.arrows.forEach(arrow => {\n      arrow.coords[1] -= 1;\n    });\n  }\n  step() {\n    this.ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__.DIM_X, _constants__WEBPACK_IMPORTED_MODULE_1__.DIM_Y);\n    this.draw();\n    this.update();\n    if (this.arrows.length) window.requestAnimationFrame(this.step.bind(this));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQyxDQUFDO0VBQ047RUFFQWxCLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ2QsR0FBRyxDQUFDaUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUN2Qyw2Q0FBSyxFQUFFQyw2Q0FBSyxDQUFDO0lBQ3BDLElBQUksQ0FBQ3lCLElBQUksQ0FBQyxDQUFDO0lBQ1gsSUFBSSxDQUFDVSxNQUFNLENBQUMsQ0FBQztJQUNiLElBQUksSUFBSSxDQUFDN0IsTUFBTSxDQUFDaUMsTUFBTSxFQUFFdEIsTUFBTSxDQUFDQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzlFO0FBQ0o7QUFFQSwrREFBZWpCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjby10YXAvLi9zcmMvc2NyaXB0cy9hbmltYXRlLmpzPzI4NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFycm93IGZyb20gXCIuL2Fycm93XCI7XG5pbXBvcnQge0FSUk9XX0hFSUdIVCwgRElNX1gsIERJTV9ZLCBBTExfRElSUywgQ09PUkRTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEFuaW1hdGUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5hcnJvd3MgPSBbXTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gdGhpcy5jcmVhdGVUYXJnZXRzKCk7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5hZGRUYXJnZXRzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3QXJyb3cgPSB0aGlzLmNyZWF0ZUFycm93KCk7XG4gICAgICAgICAgICB0aGlzLmFycm93cy5wdXNoKG5ld0Fycm93KTsgXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJvd3MpICAgICAgICAgICBcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIGNyZWF0ZVRhcmdldHMoKSB7XG4gICAgICAgIHJldHVybiBBTExfRElSUy5tYXAoKGRpcik9PiB7XG4gICAgICAgICAgICBsZXQgYXJyb3cgPSBuZXcgQXJyb3codGhpcy5jdHgsIGRpciwgQ09PUkRTW2Rpcl0pO1xuICAgICAgICAgICAgcmV0dXJuIGFycm93XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkVGFyZ2V0cygpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXJnZXRzKVxuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgoYXJyb3cpPT4ge1xuICAgICAgICAgICAgYXJyb3cuZHJhdygpO1xuICAgICAgICAgICAgYXJyb3cuZHJhd0NpcmNsZSgpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjcmVhdGVBcnJvdygpIHtcbiAgICAgICAgbGV0IHJhbmREaXIgPSBBTExfRElSU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCldO1xuICAgICAgICBsZXQgc3RhcnRDb29yZHMgPSBDT09SRFNbcmFuZERpcl0uc2xpY2UoKTtcbiAgICAgICAgc3RhcnRDb29yZHNbMV0gPSBESU1fWS1BUlJPV19IRUlHSFQ7XG5cbiAgICAgICAgbGV0IHJhbmRBcnJvdyA9IG5ldyBBcnJvdyh0aGlzLmN0eCwgcmFuZERpciwgc3RhcnRDb29yZHMpO1xuICAgICAgICByYW5kQXJyb3cuY3JlYXRlSW1hZ2UoKTtcbiAgICAgICAgcmV0dXJuIHJhbmRBcnJvd1xuICAgIH07XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmFkZFRhcmdldHModGhpcy5jdHgpO1xuICAgICAgICB0aGlzLmFycm93cy5mb3JFYWNoKChhcnJvdyk9PiB7XG4gICAgICAgICAgICBhcnJvdy5kcmF3KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmFycm93cyA9IHRoaXMuYXJyb3dzLmZpbHRlcigoYXJyb3cpPT4gYXJyb3cuY29vcmRzWzFdPiAtQVJST1dfSEVJR0hUKVxuICAgICAgICB0aGlzLmFycm93cy5mb3JFYWNoKChhcnJvdyk9PiB7XG4gICAgICAgICAgICBhcnJvdy5jb29yZHNbMV0gLT0gMVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGVwKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLERJTV9YLCBESU1fWSlcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIGlmICh0aGlzLmFycm93cy5sZW5ndGgpIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGVwLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTsiXSwibmFtZXMiOlsiQXJyb3ciLCJBUlJPV19IRUlHSFQiLCJESU1fWCIsIkRJTV9ZIiwiQUxMX0RJUlMiLCJDT09SRFMiLCJBbmltYXRlIiwiY29uc3RydWN0b3IiLCJjdHgiLCJhcnJvd3MiLCJ0YXJnZXRzIiwiY3JlYXRlVGFyZ2V0cyIsInN0YXJ0R2FtZSIsImFkZFRhcmdldHMiLCJpIiwibmV3QXJyb3ciLCJjcmVhdGVBcnJvdyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RlcCIsImJpbmQiLCJtYXAiLCJkaXIiLCJhcnJvdyIsImZvckVhY2giLCJkcmF3IiwiZHJhd0NpcmNsZSIsInJhbmREaXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFydENvb3JkcyIsInNsaWNlIiwicmFuZEFycm93IiwiY3JlYXRlSW1hZ2UiLCJ1cGRhdGUiLCJmaWx0ZXIiLCJjb29yZHMiLCJjbGVhclJlY3QiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/animate.js\n");

/***/ }),

/***/ "./src/scripts/arrow.js":
/*!******************************!*\
  !*** ./src/scripts/arrow.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\nclass Arrow {\n  constructor(ctx, dir, coords) {\n    this.ctx = ctx;\n    this.dir = dir;\n    this.coords = coords;\n    this.newImage = this.getImage();\n  }\n  getImage() {\n    let imageObject;\n    if (this.dir === 'l' || this.dir === 'r') {\n      // if arrow is horizontal\n      imageObject = new Image(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT, _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH);\n    } else {\n      // else if arrow is vertical\n      imageObject = new Image(_constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT);\n    }\n    imageObject.src = _constants__WEBPACK_IMPORTED_MODULE_0__.IMAGE_SRC[this.dir];\n    return imageObject;\n  }\n  draw() {\n    let imageObject = this.newImage;\n    this.ctx.drawImage(imageObject, ...this.coords, imageObject.width, imageObject.height);\n  }\n  createImage() {\n    let imageObject = this.newImage;\n    imageObject.onload = this.draw.bind(this);\n  }\n  drawCircle() {\n    const radius = _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT / 2 + _constants__WEBPACK_IMPORTED_MODULE_0__.GAP / 15;\n    let centerX, centerY;\n    if (this.dir === 'l' || this.dir === 'r') {\n      // if arrow is horizontal\n      centerX = this.coords[0] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT / 2;\n      centerY = this.coords[1] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH / 2;\n    } else {\n      // if arrow is vertical\n      centerX = this.coords[0] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_WIDTH / 2;\n      centerY = this.coords[1] + _constants__WEBPACK_IMPORTED_MODULE_0__.ARROW_HEIGHT / 2;\n    }\n    // this.ctx.restore();\n    this.ctx.beginPath();\n    this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);\n    this.ctx.lineWidth = 3;\n    this.ctx.strokeStyle = _constants__WEBPACK_IMPORTED_MODULE_0__.COLORS[this.dir];\n    this.ctx.stroke();\n    // this.ctx.save();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSjs7QUFDQSwrREFBZTNCLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaXNjby10YXAvLi9zcmMvc2NyaXB0cy9hcnJvdy5qcz82NmQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVJST1dfV0lEVEgsIEFSUk9XX0hFSUdIVCwgR0FQLCBDT0xPUlMsIElNQUdFX1NSQ30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEFycm93IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGRpciwgY29vcmRzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMubmV3SW1hZ2UgPSB0aGlzLmdldEltYWdlKCk7XG4gICAgfVxuICAgIFxuICAgIGdldEltYWdlKCkge1xuICAgICAgICBsZXQgaW1hZ2VPYmplY3Q7XG4gICAgICAgIGlmICh0aGlzLmRpciA9PT0gJ2wnIHx8IHRoaXMuZGlyID09PSAncicpIHtcbiAgICAgICAgICAgIC8vIGlmIGFycm93IGlzIGhvcml6b250YWxcbiAgICAgICAgICAgIGltYWdlT2JqZWN0ID0gbmV3IEltYWdlKEFSUk9XX0hFSUdIVCwgQVJST1dfV0lEVEgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbHNlIGlmIGFycm93IGlzIHZlcnRpY2FsXG4gICAgICAgICAgICBpbWFnZU9iamVjdCA9IG5ldyBJbWFnZShBUlJPV19XSURUSCwgQVJST1dfSEVJR0hUKVxuICAgICAgICB9XG4gICAgICAgIGltYWdlT2JqZWN0LnNyYyA9IElNQUdFX1NSQ1t0aGlzLmRpcl1cbiAgICAgICAgcmV0dXJuIGltYWdlT2JqZWN0XG4gICAgICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBpbWFnZU9iamVjdCA9IHRoaXMubmV3SW1hZ2U7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWFnZU9iamVjdCwgLi4udGhpcy5jb29yZHMsIGltYWdlT2JqZWN0LndpZHRoLCBpbWFnZU9iamVjdC5oZWlnaHQpXG4gICAgfVxuXG4gICAgY3JlYXRlSW1hZ2UoKSB7XG4gICAgICAgIGxldCBpbWFnZU9iamVjdCA9IHRoaXMubmV3SW1hZ2U7XG4gICAgICAgIGltYWdlT2JqZWN0Lm9ubG9hZCA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdDaXJjbGUoKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IEFSUk9XX0hFSUdIVC8yICsgR0FQLzE1O1xuICAgICAgICBsZXQgY2VudGVyWCwgY2VudGVyWTtcbiAgICAgICAgaWYgKHRoaXMuZGlyID09PSAnbCcgfHwgdGhpcy5kaXIgPT09ICdyJykge1xuICAgICAgICAgICAgLy8gaWYgYXJyb3cgaXMgaG9yaXpvbnRhbFxuICAgICAgICAgICAgY2VudGVyWCA9IHRoaXMuY29vcmRzWzBdICsgQVJST1dfSEVJR0hULzI7XG4gICAgICAgICAgICBjZW50ZXJZID0gdGhpcy5jb29yZHNbMV0gKyBBUlJPV19XSURUSC8yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgYXJyb3cgaXMgdmVydGljYWxcbiAgICAgICAgICAgIGNlbnRlclggPSB0aGlzLmNvb3Jkc1swXSArIEFSUk9XX1dJRFRILzI7XG4gICAgICAgICAgICBjZW50ZXJZID0gdGhpcy5jb29yZHNbMV0gKyBBUlJPV19IRUlHSFQvMjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCAwLCAyKk1hdGguUEksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMztcblxuXG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IENPTE9SU1t0aGlzLmRpcl07XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zYXZlKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQXJyb3c7XG4iXSwibmFtZXMiOlsiQVJST1dfV0lEVEgiLCJBUlJPV19IRUlHSFQiLCJHQVAiLCJDT0xPUlMiLCJJTUFHRV9TUkMiLCJBcnJvdyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZGlyIiwiY29vcmRzIiwibmV3SW1hZ2UiLCJnZXRJbWFnZSIsImltYWdlT2JqZWN0IiwiSW1hZ2UiLCJzcmMiLCJkcmF3IiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVJbWFnZSIsIm9ubG9hZCIsImJpbmQiLCJkcmF3Q2lyY2xlIiwicmFkaXVzIiwiY2VudGVyWCIsImNlbnRlclkiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/arrow.js\n");

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ALL_DIRS: function() { return /* binding */ ALL_DIRS; },\n/* harmony export */   ARROW_HEIGHT: function() { return /* binding */ ARROW_HEIGHT; },\n/* harmony export */   ARROW_WIDTH: function() { return /* binding */ ARROW_WIDTH; },\n/* harmony export */   COLORS: function() { return /* binding */ COLORS; },\n/* harmony export */   COORDS: function() { return /* binding */ COORDS; },\n/* harmony export */   DIM_X: function() { return /* binding */ DIM_X; },\n/* harmony export */   DIM_Y: function() { return /* binding */ DIM_Y; },\n/* harmony export */   GAP: function() { return /* binding */ GAP; },\n/* harmony export */   HORIZ_Y: function() { return /* binding */ HORIZ_Y; },\n/* harmony export */   IMAGE_SRC: function() { return /* binding */ IMAGE_SRC; },\n/* harmony export */   TAB_X: function() { return /* binding */ TAB_X; },\n/* harmony export */   VERT_Y: function() { return /* binding */ VERT_Y; }\n/* harmony export */ });\nconst ALL_DIRS = ['l', 'd', 'u', 'r'];\nconst DIM_X = 1000;\nconst DIM_Y = 600;\nconst ARROW_WIDTH = 40;\nconst ARROW_HEIGHT = 80;\nconst HORIZ_Y = 100;\nconst VERT_Y = 80;\nconst TAB_X = 400;\nconst GAP = 10;\nconst COORDS = {\n  \"l\": [TAB_X, HORIZ_Y],\n  \"d\": [TAB_X + ARROW_HEIGHT + 7 * GAP, VERT_Y],\n  \"u\": [TAB_X + ARROW_HEIGHT + ARROW_WIDTH + 16 * GAP, VERT_Y],\n  \"r\": [TAB_X + ARROW_HEIGHT + 2 * ARROW_WIDTH + 23 * GAP, HORIZ_Y]\n};\nconst COLORS = {\n  \"l\": \"#BF95FF\",\n  \"d\": \"#FF899E\",\n  \"u\": \"#C5C5FF\",\n  \"r\": \"#A3E9A3\"\n};\nconst IMAGE_SRC = {\n  \"l\": \"../images/left-arrow.png\",\n  \"d\": \"../images/down-arrow.png\",\n  \"u\": \"../images/up-arrow.png\",\n  \"r\": \"../images/right-arrow.png\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBRXJDLE1BQU1DLEtBQUssR0FBRyxJQUFJO0FBQ2xCLE1BQU1DLEtBQUssR0FBRyxHQUFHO0FBRWpCLE1BQU1DLFdBQVcsR0FBRyxFQUFFO0FBQ3RCLE1BQU1DLFlBQVksR0FBRyxFQUFFO0FBRXZCLE1BQU1DLE9BQU8sR0FBRyxHQUFHO0FBQ25CLE1BQU1DLE1BQU0sR0FBRyxFQUFFO0FBRWpCLE1BQU1DLEtBQUssR0FBRyxHQUFHO0FBQ2pCLE1BQU1DLEdBQUcsR0FBRyxFQUFFO0FBRWQsTUFBTUMsTUFBTSxHQUFHO0VBQ2xCLEdBQUcsRUFBRSxDQUFDRixLQUFLLEVBQUVGLE9BQU8sQ0FBQztFQUNyQixHQUFHLEVBQUUsQ0FBQ0UsS0FBSyxHQUFHSCxZQUFZLEdBQUcsQ0FBQyxHQUFDSSxHQUFHLEVBQUVGLE1BQU0sQ0FBQztFQUMzQyxHQUFHLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHSCxZQUFZLEdBQUdELFdBQVcsR0FBRyxFQUFFLEdBQUNLLEdBQUcsRUFBRUYsTUFBTSxDQUFDO0VBQzFELEdBQUcsRUFBRSxDQUFDQyxLQUFLLEdBQUdILFlBQVksR0FBRyxDQUFDLEdBQUNELFdBQVcsR0FBRyxFQUFFLEdBQUNLLEdBQUcsRUFBRUgsT0FBTztBQUNoRSxDQUFDO0FBRU0sTUFBTUssTUFBTSxHQUFHO0VBQ2xCLEdBQUcsRUFBRSxTQUFTO0VBQ2QsR0FBRyxFQUFFLFNBQVM7RUFDZCxHQUFHLEVBQUUsU0FBUztFQUNkLEdBQUcsRUFBRTtBQUNULENBQUM7QUFFTSxNQUFNQyxTQUFTLEdBQUc7RUFDckIsR0FBRyxFQUFFLDBCQUEwQjtFQUMvQixHQUFHLEVBQUUsMEJBQTBCO0VBQy9CLEdBQUcsRUFBRSx3QkFBd0I7RUFDN0IsR0FBRyxFQUFFO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvLXRhcC8uL3NyYy9zY3JpcHRzL2NvbnN0YW50cy5qcz83NzhiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBTExfRElSUyA9IFsnbCcsICdkJywgJ3UnLCAnciddO1xuXG5leHBvcnQgY29uc3QgRElNX1ggPSAxMDAwOyAgXG5leHBvcnQgY29uc3QgRElNX1kgPSA2MDA7IFxuXG5leHBvcnQgY29uc3QgQVJST1dfV0lEVEggPSA0MDtcbmV4cG9ydCBjb25zdCBBUlJPV19IRUlHSFQgPSA4MDtcblxuZXhwb3J0IGNvbnN0IEhPUklaX1kgPSAxMDA7XG5leHBvcnQgY29uc3QgVkVSVF9ZID0gODA7XG5cbmV4cG9ydCBjb25zdCBUQUJfWCA9IDQwMDtcbmV4cG9ydCBjb25zdCBHQVAgPSAxMDtcblxuZXhwb3J0IGNvbnN0IENPT1JEUyA9IHtcbiAgICBcImxcIjogW1RBQl9YLCBIT1JJWl9ZXSxcbiAgICBcImRcIjogW1RBQl9YICsgQVJST1dfSEVJR0hUICsgNypHQVAsIFZFUlRfWV0sXG4gICAgXCJ1XCI6IFtUQUJfWCArIEFSUk9XX0hFSUdIVCArIEFSUk9XX1dJRFRIICsgMTYqR0FQLCBWRVJUX1ldLFxuICAgIFwiclwiOiBbVEFCX1ggKyBBUlJPV19IRUlHSFQgKyAyKkFSUk9XX1dJRFRIICsgMjMqR0FQLCBIT1JJWl9ZXVxufTtcblxuZXhwb3J0IGNvbnN0IENPTE9SUyA9IHtcbiAgICBcImxcIjogXCIjQkY5NUZGXCIsIFxuICAgIFwiZFwiOiBcIiNGRjg5OUVcIixcbiAgICBcInVcIjogXCIjQzVDNUZGXCIsXG4gICAgXCJyXCI6IFwiI0EzRTlBM1wiXG59XG5cbmV4cG9ydCBjb25zdCBJTUFHRV9TUkMgPSB7IFxuICAgIFwibFwiOiBcIi4uL2ltYWdlcy9sZWZ0LWFycm93LnBuZ1wiLFxuICAgIFwiZFwiOiBcIi4uL2ltYWdlcy9kb3duLWFycm93LnBuZ1wiLFxuICAgIFwidVwiOiBcIi4uL2ltYWdlcy91cC1hcnJvdy5wbmdcIixcbiAgICBcInJcIjogXCIuLi9pbWFnZXMvcmlnaHQtYXJyb3cucG5nXCJcbn0iXSwibmFtZXMiOlsiQUxMX0RJUlMiLCJESU1fWCIsIkRJTV9ZIiwiQVJST1dfV0lEVEgiLCJBUlJPV19IRUlHSFQiLCJIT1JJWl9ZIiwiVkVSVF9ZIiwiVEFCX1giLCJHQVAiLCJDT09SRFMiLCJDT0xPUlMiLCJJTUFHRV9TUkMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/constants.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target */ \"./src/scripts/target.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate */ \"./src/scripts/animate.js\");\n\n\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.setupBoard();\n  }\n  setupBoard() {\n    this.ctx.clearRect(0, 0, _constants__WEBPACK_IMPORTED_MODULE_1__.DIM_X, _constants__WEBPACK_IMPORTED_MODULE_1__.DIM_Y);\n    // start music\n    const animation = new _animate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx);\n    animation.startGame();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBaUQ7QUFDTjtBQUNYO0FBRWhDLE1BQU1LLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDckI7RUFFQUEsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDUCw2Q0FBSyxFQUFFQyw2Q0FBSyxDQUFDO0lBQ3BDO0lBQ0EsTUFBTU8sU0FBUyxHQUFHLElBQUlOLGdEQUFPLENBQUMsSUFBSSxDQUFDRyxHQUFHLENBQUM7SUFDdkNHLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLENBQUM7RUFDekI7QUFFSjtBQUVBLCtEQUFlTixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzY28tdGFwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YWRkVGFyZ2V0cywgY3JlYXRlQXJyb3d9IGZyb20gXCIuL3RhcmdldFwiO1xuaW1wb3J0IHsgRElNX1gsIERJTV9ZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tIFwiLi9hbmltYXRlXCI7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICB0aGlzLnNldHVwQm9hcmQoKVxuICAgIH1cblxuICAgIHNldHVwQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsRElNX1gsIERJTV9ZKVxuICAgICAgICAvLyBzdGFydCBtdXNpY1xuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgICAgIGFuaW1hdGlvbi5zdGFydEdhbWUoKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiYWRkVGFyZ2V0cyIsImNyZWF0ZUFycm93IiwiRElNX1giLCJESU1fWSIsIkFuaW1hdGUiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJjdHgiLCJzZXR1cEJvYXJkIiwiY2xlYXJSZWN0IiwiYW5pbWF0aW9uIiwic3RhcnRHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/target.js":
/*!*******************************!*\
  !*** ./src/scripts/target.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTargets: function() { return /* binding */ addTargets; },\n/* harmony export */   createArrow: function() { return /* binding */ createArrow; }\n/* harmony export */ });\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow */ \"./src/scripts/arrow.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\n\nconst HORIZ_Y = 100;\nconst VERT_Y = 80;\nconst TAB_X = 400;\nconst COORDS = {\n  \"l\": [TAB_X, HORIZ_Y],\n  \"d\": [TAB_X + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT + 7 * _constants__WEBPACK_IMPORTED_MODULE_1__.GAP, VERT_Y],\n  \"u\": [TAB_X + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_WIDTH + 16 * _constants__WEBPACK_IMPORTED_MODULE_1__.GAP, VERT_Y],\n  \"r\": [TAB_X + _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT + 2 * _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_WIDTH + 23 * _constants__WEBPACK_IMPORTED_MODULE_1__.GAP, HORIZ_Y]\n};\nconst ALL_DIRS = ['l', 'd', 'u', 'r'];\nfunction addTargets(ctx) {\n  const targets = [];\n  ALL_DIRS.forEach(dir => {\n    let arrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, dir, COORDS[dir]);\n    arrow.createImage();\n    arrow.drawCircle();\n    targets.push(arrow);\n  });\n  return targets;\n}\n;\nfunction createArrow(ctx) {\n  let randDir = ALL_DIRS[Math.floor(Math.random() * 4)];\n  let startCoords = COORDS[randDir].slice();\n  startCoords[1] = _constants__WEBPACK_IMPORTED_MODULE_1__.DIM_Y - _constants__WEBPACK_IMPORTED_MODULE_1__.ARROW_HEIGHT;\n  let randArrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, randDir, startCoords);\n  randArrow.createImage();\n  return randArrow;\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YXJnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QjtBQUNzQztBQUVsRSxNQUFNSyxPQUFPLEdBQUcsR0FBRztBQUNuQixNQUFNQyxNQUFNLEdBQUcsRUFBRTtBQUVqQixNQUFNQyxLQUFLLEdBQUcsR0FBRztBQUVqQixNQUFNQyxNQUFNLEdBQUc7RUFDWCxHQUFHLEVBQUUsQ0FBQ0QsS0FBSyxFQUFFRixPQUFPLENBQUM7RUFDckIsR0FBRyxFQUFFLENBQUNFLEtBQUssR0FBR0wsb0RBQVksR0FBRyxDQUFDLEdBQUNDLDJDQUFHLEVBQUVHLE1BQU0sQ0FBQztFQUMzQyxHQUFHLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHTCxvREFBWSxHQUFHRCxtREFBVyxHQUFHLEVBQUUsR0FBQ0UsMkNBQUcsRUFBRUcsTUFBTSxDQUFDO0VBQzFELEdBQUcsRUFBRSxDQUFDQyxLQUFLLEdBQUdMLG9EQUFZLEdBQUcsQ0FBQyxHQUFDRCxtREFBVyxHQUFHLEVBQUUsR0FBQ0UsMkNBQUcsRUFBRUUsT0FBTztBQUNoRSxDQUFDO0FBRUQsTUFBTUksUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBRTlCLFNBQVNDLFVBQVVBLENBQUNDLEdBQUcsRUFBRTtFQUM1QixNQUFNQyxPQUFPLEdBQUcsRUFBRTtFQUNsQkgsUUFBUSxDQUFDSSxPQUFPLENBQUVDLEdBQUcsSUFBSTtJQUNyQixJQUFJQyxLQUFLLEdBQUcsSUFBSWYsOENBQUssQ0FBQ1csR0FBRyxFQUFFRyxHQUFHLEVBQUVOLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQUM7SUFDNUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDbkJELEtBQUssQ0FBQ0UsVUFBVSxDQUFDLENBQUM7SUFDbEJMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDSCxLQUFLLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0VBQ0YsT0FBT0gsT0FBTztBQUNsQjtBQUFDO0FBRU0sU0FBU08sV0FBV0EsQ0FBQ1IsR0FBRyxFQUFFO0VBQzdCLElBQUlTLE9BQU8sR0FBR1gsUUFBUSxDQUFDWSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25ELElBQUlDLFdBQVcsR0FBR2hCLE1BQU0sQ0FBQ1ksT0FBTyxDQUFDLENBQUNLLEtBQUssQ0FBQyxDQUFDO0VBQ3pDRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUdwQiw2Q0FBSyxHQUFDRixvREFBWTtFQUVuQyxJQUFJd0IsU0FBUyxHQUFHLElBQUkxQiw4Q0FBSyxDQUFDVyxHQUFHLEVBQUVTLE9BQU8sRUFBRUksV0FBVyxDQUFDO0VBQ3BERSxTQUFTLENBQUNWLFdBQVcsQ0FBQyxDQUFDO0VBQ3ZCLE9BQU9VLFNBQVM7QUFDcEI7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvLXRhcC8uL3NyYy9zY3JpcHRzL3RhcmdldC5qcz9lMjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnJvdyBmcm9tIFwiLi9hcnJvd1wiO1xuaW1wb3J0IHtBUlJPV19XSURUSCwgQVJST1dfSEVJR0hULCBHQVAsIERJTV9ZfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgSE9SSVpfWSA9IDEwMDtcbmNvbnN0IFZFUlRfWSA9IDgwO1xuXG5jb25zdCBUQUJfWCA9IDQwMDtcblxuY29uc3QgQ09PUkRTID0ge1xuICAgIFwibFwiOiBbVEFCX1gsIEhPUklaX1ldLFxuICAgIFwiZFwiOiBbVEFCX1ggKyBBUlJPV19IRUlHSFQgKyA3KkdBUCwgVkVSVF9ZXSxcbiAgICBcInVcIjogW1RBQl9YICsgQVJST1dfSEVJR0hUICsgQVJST1dfV0lEVEggKyAxNipHQVAsIFZFUlRfWV0sXG4gICAgXCJyXCI6IFtUQUJfWCArIEFSUk9XX0hFSUdIVCArIDIqQVJST1dfV0lEVEggKyAyMypHQVAsIEhPUklaX1ldXG59O1xuXG5jb25zdCBBTExfRElSUyA9IFsnbCcsICdkJywgJ3UnLCAnciddO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFyZ2V0cyhjdHgpIHtcbiAgICBjb25zdCB0YXJnZXRzID0gW107XG4gICAgQUxMX0RJUlMuZm9yRWFjaCgoZGlyKT0+IHtcbiAgICAgICAgbGV0IGFycm93ID0gbmV3IEFycm93KGN0eCwgZGlyLCBDT09SRFNbZGlyXSk7XG4gICAgICAgIGFycm93LmNyZWF0ZUltYWdlKCk7XG4gICAgICAgIGFycm93LmRyYXdDaXJjbGUoKTtcbiAgICAgICAgdGFyZ2V0cy5wdXNoKGFycm93KVxuICAgIH0pXG4gICAgcmV0dXJuIHRhcmdldHNcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJvdyhjdHgpIHtcbiAgICBsZXQgcmFuZERpciA9IEFMTF9ESVJTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KV07XG4gICAgbGV0IHN0YXJ0Q29vcmRzID0gQ09PUkRTW3JhbmREaXJdLnNsaWNlKCk7XG4gICAgc3RhcnRDb29yZHNbMV0gPSBESU1fWS1BUlJPV19IRUlHSFQ7XG5cbiAgICBsZXQgcmFuZEFycm93ID0gbmV3IEFycm93KGN0eCwgcmFuZERpciwgc3RhcnRDb29yZHMpO1xuICAgIHJhbmRBcnJvdy5jcmVhdGVJbWFnZSgpO1xuICAgIHJldHVybiByYW5kQXJyb3dcbn07XG4iXSwibmFtZXMiOlsiQXJyb3ciLCJBUlJPV19XSURUSCIsIkFSUk9XX0hFSUdIVCIsIkdBUCIsIkRJTV9ZIiwiSE9SSVpfWSIsIlZFUlRfWSIsIlRBQl9YIiwiQ09PUkRTIiwiQUxMX0RJUlMiLCJhZGRUYXJnZXRzIiwiY3R4IiwidGFyZ2V0cyIsImZvckVhY2giLCJkaXIiLCJhcnJvdyIsImNyZWF0ZUltYWdlIiwiZHJhd0NpcmNsZSIsInB1c2giLCJjcmVhdGVBcnJvdyIsInJhbmREaXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFydENvb3JkcyIsInNsaWNlIiwicmFuZEFycm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/target.js\n");

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