/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n\r\n    $('.icon-menu').on('click', function () {\r\n        toggleClassActive();\r\n    });\r\n\r\n    $(window).on(\"resize\", function () {\r\n        if (window.matchMedia('(min-width: 768px)').matches) {\r\n            if (!($('.modal').hasClass('fixed'))) {\r\n                removeClassActive();\r\n            }\r\n        }\r\n    });//включение скрола при ресайзе\r\n\r\n    $(window).on('scroll', function () {\r\n        let beginH = $('.begin').innerHeight();\r\n        let scrollOffset = $(this).scrollTop();\r\n\r\n        checkBeginScroll(scrollOffset, beginH);\r\n        progressBar(scrollOffset, beginH);\r\n    });//Фиксирование шапки при прокрутке\r\n\r\n\r\n    $('a.menu__link').on(\"click\", function () {\r\n        removeClassActive();\r\n        //Закрытие burger при прокрутке к якорю\r\n\r\n        $(\"html, body\").animate({\r\n            scrollTop: ($($(this).attr(\"href\")).offset().top) + \"px\"\r\n        }, {\r\n            duration: 1000,\r\n            easing: \"swing\",\r\n        });\r\n    });\r\n    //Плавная прокрутка\r\n\r\n\r\n});\r\n\r\nfunction toggleClassActive() {\r\n    $('.icon-menu').toggleClass('active');\r\n    $('.menu__body').toggleClass('active');\r\n    $('body').toggleClass('no-scroll');\r\n}\r\n\r\nfunction removeClassActive() {\r\n    $('.icon-menu').removeClass('active');\r\n    $('.menu__body').removeClass('active');\r\n    $('body').removeClass('no-scroll');\r\n}\r\n\r\nfunction checkBeginScroll(scrollOffset, beginH) {\r\n    if (scrollOffset >= 130 && scrollOffset <= beginH) {\r\n        $('.header').addClass('hidden');\r\n    }\r\n    else {\r\n        $('.header').removeClass('hidden');\r\n    }\r\n    if (scrollOffset >= beginH) {\r\n        $('.header').addClass('fixed');\r\n    } else {\r\n        $('.header').removeClass('fixed');\r\n    }\r\n}\r\n\r\nfunction progressBar(scrollOffset, beginH) {\r\n    let documentHeight = $(document).height();\r\n    let windowHeight = $(window).height();\r\n\r\n    let percent = (scrollOffset / (documentHeight - windowHeight)) * 100;\r\n    $('.progress').css({\r\n        'width': percent + '%',\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/header.js?");

/***/ }),

/***/ "./src/assets/js/jqueryParallax.js":
/*!*****************************************!*\
  !*** ./src/assets/js/jqueryParallax.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("!function (T, y, u, d) { \"use strict\"; function a(t, i) { this.element = t, this.$context = T(t).data(\"api\", this), this.$layers = this.$context.find(\".layer\"); var e = { calibrateX: this.$context.data(\"calibrate-x\") || null, calibrateY: this.$context.data(\"calibrate-y\") || null, invertX: this.$context.data(\"invert-x\") || null, invertY: this.$context.data(\"invert-y\") || null, limitX: parseFloat(this.$context.data(\"limit-x\")) || null, limitY: parseFloat(this.$context.data(\"limit-y\")) || null, scalarX: parseFloat(this.$context.data(\"scalar-x\")) || null, scalarY: parseFloat(this.$context.data(\"scalar-y\")) || null, frictionX: parseFloat(this.$context.data(\"friction-x\")) || null, frictionY: parseFloat(this.$context.data(\"friction-y\")) || null, originX: parseFloat(this.$context.data(\"origin-x\")) || null, originY: parseFloat(this.$context.data(\"origin-y\")) || null }; for (var s in e) null === e[s] && delete e[s]; T.extend(this, r, i, e), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise() } var o = \"parallax\", r = { relativeInput: !1, clipRelativeInput: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5, type: [\"translate\"] }; a.prototype.transformSupport = function (t) { for (var i = u.createElement(\"div\"), e = !1, s = null, a = !1, o = null, r = null, n = 0, h = this.vendors.length; n < h; n++)if (null !== this.vendors[n] ? (o = this.vendors[n][0] + \"transform\", r = this.vendors[n][1] + \"Transform\") : r = o = \"transform\", i.style[r] !== d) { e = !0; break } switch (t) { case \"2D\": a = e; break; case \"3D\": if (e) { var l = u.body || u.createElement(\"body\"), p = u.documentElement, c = p.style.overflow; u.body || (p.style.overflow = \"hidden\", p.appendChild(l), l.style.overflow = \"hidden\", l.style.background = \"\"), l.appendChild(i), i.style[r] = \"translate3d(1px,1px,1px)\", a = (s = y.getComputedStyle(i).getPropertyValue(o)) !== d && 0 < s.length && \"none\" !== s, p.style.overflow = c, l.removeChild(i) } }return a }, a.prototype.ww = null, a.prototype.wh = null, a.prototype.wcx = null, a.prototype.wcy = null, a.prototype.wrx = null, a.prototype.wry = null, a.prototype.portrait = null, a.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), a.prototype.vendors = [null, [\"-webkit-\", \"webkit\"], [\"-moz-\", \"Moz\"], [\"-o-\", \"O\"], [\"-ms-\", \"ms\"]], a.prototype.motionSupport = !!y.DeviceMotionEvent, a.prototype.orientationSupport = !!y.DeviceOrientationEvent, a.prototype.orientationStatus = 0, a.prototype.transform2DSupport = a.prototype.transformSupport(\"2D\"), a.prototype.transform3DSupport = a.prototype.transformSupport(\"3D\"), a.prototype.propertyCache = {}, a.prototype.initialise = function () { this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay) }, a.prototype.updateLayers = function () { this.$layers = this.$context.find(\".layer\"), this.depths = [], this.accelerate(this.$layers), this.$layers.each(T.proxy(function (t, i) { this.depths.push(T(i).data(\"depth\") || 0) }, this)) }, a.prototype.updateDimensions = function () { this.ww = y.innerWidth, this.wh = y.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy) }, a.prototype.updateBounds = function () { this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy) }, a.prototype.queueCalibration = function (t) { clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t) }, a.prototype.enable = function () { this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, y.addEventListener(\"deviceorientation\", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, y.addEventListener(\"mousemove\", this.onMouseMove)), y.addEventListener(\"resize\", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame)) }, a.prototype.disable = function () { this.enabled && (this.enabled = !1, this.orientationSupport ? y.removeEventListener(\"deviceorientation\", this.onDeviceOrientation) : y.removeEventListener(\"mousemove\", this.onMouseMove), y.removeEventListener(\"resize\", this.onWindowResize), cancelAnimationFrame(this.raf)) }, a.prototype.calibrate = function (t, i) { this.calibrateX = t === d ? this.calibrateX : t, this.calibrateY = i === d ? this.calibrateY : i }, a.prototype.invert = function (t, i) { this.invertX = t === d ? this.invertX : t, this.invertY = i === d ? this.invertY : i }, a.prototype.friction = function (t, i) { this.frictionX = t === d ? this.frictionX : t, this.frictionY = i === d ? this.frictionY : i }, a.prototype.scalar = function (t, i) { this.scalarX = t === d ? this.scalarX : t, this.scalarY = i === d ? this.scalarY : i }, a.prototype.limit = function (t, i) { this.limitX = t === d ? this.limitX : t, this.limitY = i === d ? this.limitY : i }, a.prototype.origin = function (t, i) { this.originX = t === d ? this.originX : t, this.originY = i === d ? this.originY : i }, a.prototype.clamp = function (t, i, e) { return t = Math.max(t, i), t = Math.min(t, e) }, a.prototype.css = function (t, i, e) { var s = this.propertyCache[i]; if (!s) for (var a = 0, o = this.vendors.length; a < o; a++)if (s = null !== this.vendors[a] ? T.camelCase(this.vendors[a][1] + \"-\" + i) : i, t.style[s] !== d) { this.propertyCache[i] = s; break } t.style[s] = e }, a.prototype.accelerate = function (t) { for (var i = 0, e = t.length; i < e; i++) { var s = t[i]; this.css(s, \"transform\", \"translate3d(0,0,0)\"), this.css(s, \"transform-style\", \"preserve-3d\"), this.css(s, \"backface-visibility\", \"hidden\") } }, a.prototype.setPosition = function (i, e, s) { var a = this, t = T(i).data(\"translate-calibration\") || 1, o = T(i).data(\"rotate-calibration\") || 1, r = T(i).data(\"scale-calibration\") || 1, n = T(i).data(\"grayscale-calibration\") || 1, h = T(i).data(\"blur-calibration\") || 1, l = T(i).data(\"brightness-calibration\") || 1, p = (T(i).data(\"contrast-calibration\"), T(i).data(\"hue-rotate-calibration\") || 1), c = T(i).data(\"opacity-calibration\") || 1, y = T(i).data(\"saturate-calibration\") || 1, u = T(i).data(\"sepia-calibration\") || 1, d = T(i).data(\"skewX-calibration\") || 1, m = (T(i).data(\"skewX-calibration\"), T(i).data(\"perspective\") || 0), b = (e + s) * o / 2 + \"deg\", v = 1 + (e + s) * r / 2, f = (e + s) * d / 2 + \"deg\", x = 100 - (e + s) * n / 2 + \"%\", w = Math.max((e + s) * h / 2, 0) + \"px\", g = 100 - (e + s) * l / 2 + \"%\", X = (e + s) * p / 2 + \"deg\", Y = 1 - (e + s) * c / 200, M = 100 - (e + s) * y / 2 + \"%\", D = 100 - (e + s) * u / 2 + \"%\"; e = e * t + \"px\", s = s * t + \"px\"; var F = \"\", $ = \"\", S = T(i).data(\"parallax-type\") || \"\"; if (0 < S.length) var k = S.split(\",\"); else k = this.type; k.forEach(function (t) { \"translate\" == (t = t.trim()) && (a.transform3DSupport ? F = F + \"translate3d(\" + e + \",\" + s + \",0) \" : a.transform2DSupport ? F = F + \"translate(\" + e + \",\" + s + \") \" : (i.style.left = e, i.style.top = s)), \"rotate\" == t && (F = a.transform3DSupport ? F + \"rotate3d(0, 0, 1, \" + b + \") \" : F + \"rotate(\" + b + \") \"), \"rotateX\" == t && (F = F + \"rotateX(\" + b + \") \"), \"rotateY\" == t && (F = F + \"rotateY(\" + b + \") \"), \"scale\" == t && (F = a.transform3DSupport ? F + \"scale3d(\" + v + \", \" + v + \", 1) \" : F + \"scale(\" + v + \") \"), \"skewX\" == t && (F = F + \"skewX(\" + f + \") \"), \"skewY\" == t && (F = F + \"skewX(\" + f + \") \"), \"grayscale\" == t && ($ = $ + \"grayscale(\" + x + \") \"), \"blur\" == t && ($ = $ + \"blur(\" + w + \") \"), \"brightness\" == t && ($ = $ + \"brightness(\" + g + \") \"), \"contrast\" == t && ($ = $ + \"contrast(\" + g + \") \"), \"hue-rotate\" == t && ($ = $ + \"hue-rotate(\" + X + \") \"), \"saturate\" == t && ($ = $ + \"saturate(\" + M + \") \"), \"sepia\" == t && ($ = $ + \"sepia(\" + D + \") \"), \"opacity\" == t && (i.style.opacity = Y), \"perspective\" == t && (F = F + \"perspective(\" + m + \") \") }), this.css(i, \"-webkit-transform\", F), this.css(i, \"transform\", F), this.css(i, \"-moz-filter\", $), this.css(i, \"-webkit-filter\", $), this.css(i, \"filter\", $) }, a.prototype.onOrientationTimer = function (t) { this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable()) }, a.prototype.onCalibrationTimer = function (t) { this.calibrationFlag = !0 }, a.prototype.onWindowResize = function (t) { this.updateDimensions() }, a.prototype.onAnimationFrame = function () { this.updateBounds(); var t = this.ix - this.cx, i = this.iy - this.cy; (Math.abs(t) > this.calibrationThreshold || Math.abs(i) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? i : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? i : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY; for (var e = 0, s = this.$layers.length; e < s; e++) { var a = this.depths[e], o = this.$layers[e], r = this.vx * a * (this.invertX ? -1 : 1), n = this.vy * a * (this.invertY ? -1 : 1); this.setPosition(o, r, n) } this.raf = requestAnimationFrame(this.onAnimationFrame) }, a.prototype.onDeviceOrientation = function (t) { if (!this.desktop && null !== t.beta && null !== t.gamma) { this.orientationStatus = 1; var i = (t.beta || 0) / 30, e = (t.gamma || 0) / 30, s = y.innerHeight > y.innerWidth; this.portrait !== s && (this.portrait = s, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = e), this.ix = i, this.iy = e } }, a.prototype.onMouseMove = function (t) { var i = t.clientX, e = t.clientY; !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (i = Math.max(i, this.ex), i = Math.min(i, this.ex + this.ew), e = Math.max(e, this.ey), e = Math.min(e, this.ey + this.eh)), this.ix = (i - this.ex - this.ecx) / this.erx, this.iy = (e - this.ey - this.ecy) / this.ery) : (this.ix = (i - this.wcx) / this.wrx, this.iy = (e - this.wcy) / this.wry) }; var n = { enable: a.prototype.enable, disable: a.prototype.disable, updateLayers: a.prototype.updateLayers, calibrate: a.prototype.calibrate, friction: a.prototype.friction, invert: a.prototype.invert, scalar: a.prototype.scalar, limit: a.prototype.limit, origin: a.prototype.origin }; T.fn[o] = function (e) { var s = arguments; return this.each(function () { var t = T(this), i = t.data(o); i || (i = new a(this, e), t.data(o, i)), n[e] && i[e].apply(i, Array.prototype.slice.call(s, 1)) }) } }(window.jQuery || window.Zepto, window, document);\n\n//# sourceURL=webpack:///./src/assets/js/jqueryParallax.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    const registr = $('#registr');\r\n    const login = $('#login');\r\n\r\n    $('.register').on('click', function () {\r\n        removeBurger();\r\n        removeModal();\r\n        addModal(registr);\r\n    });//клик на регистрацию\r\n\r\n    $('.login').on('click', function () {\r\n        removeBurger();\r\n        removeModal();\r\n        addModal(login);\r\n    });//клик на вход\r\n\r\n    $('.modal__block').on('click', function (e) {\r\n        e.stopPropagation();\r\n    });//остновка клика по модал блок\r\n\r\n    $('.modal').on('click', function () {\r\n        removeModal();\r\n    });//закрытие модал блок\r\n\r\n    $('.modal__close').on('click', function () {\r\n        removeModal();\r\n    });//закрытие модал блок\r\n});\r\n\r\nfunction removeModal() {\r\n    $('.modal').removeClass('fixed');\r\n    $('body').removeClass('no-scroll');\r\n}\r\nfunction addModal(currentModal) {\r\n    currentModal.addClass('fixed');\r\n    $('body').addClass('no-scroll');\r\n}\r\nfunction removeBurger() {\r\n    $('.icon-menu').removeClass('active');\r\n    $('.menu__body').removeClass('active');\r\n    $('body').removeClass('no-scroll');\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/parallax.js":
/*!***********************************!*\
  !*** ./src/assets/js/parallax.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.parallax').parallax();\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/parallax.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n    $('.slider').slick({\r\n        slidesToShow: 1,\r\n\r\n        autoplaySpeed: 5000,\r\n        speed: 700,\r\n        adaptiveHeight: true,\r\n        appendArrows: $('.testimonials__arrows'),\r\n        prevArrow: '.arrow-left',\r\n        nextArrow: '.arrow-right',\r\n    });\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/webpForCss.js":
/*!*************************************!*\
  !*** ./src/assets/js/webpForCss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function testWebP(callback) {\r\n\r\n    var webP = new Image();\r\n    webP.onload = webP.onerror = function () {\r\n        callback(webP.height == 2);\r\n    };\r\n    webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n}\r\n\r\ntestWebP(function (support) {\r\n\r\n    if (support == true) {\r\n        document.querySelector('body').classList.add('webp');\r\n    } else {\r\n        document.querySelector('body').classList.add('no-webp');\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/webpForCss.js?");

/***/ }),

/***/ "./src/assets/js/wow.js":
/*!******************************!*\
  !*** ./src/assets/js/wow.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/assets/js/wow.js?");

/***/ }),

/***/ "./src/assets/js/wow.min.js":
/*!**********************************!*\
  !*** ./src/assets/js/wow.min.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! WOW wow.js - v1.3.0 - 2016-10-04\n* https://wowjs.uk\n* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module,exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }}(this,function(a,b){\"use strict\";function c(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent(\"CustomEvent\"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():\"on\"+b in(null!=a)&&a[\"on\"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent(\"on\"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent(\"on\"+b,c):delete a[b]}function k(){return\"innerHeight\"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,\"__esModule\",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,\"value\"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:\"get\",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:\"set\",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),\"undefined\"!=typeof console&&null!==console&&(console.warn(\"MutationObserver is not supported by your browser.\"),console.warn(\"WOW.js cannot detect dom mutations, please call .sync() after loading new content.\"))}return n(a,[{key:\"observe\",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\\-([a-z]){1})/g;return{getPropertyValue:function(c){\"float\"===c&&(c=\"styleFloat\"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:\"wow\",animateClass:\"animated\",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return\"requestAnimationFrame\"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=[\"moz\",\"webkit\"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:\"init\",value:function(){this.element=window.document.documentElement,d(document.readyState,[\"interactive\",\"complete\"])?this.start():i(document,\"DOMContentLoaded\",this.start),this.finished=[]}},{key:\"start\",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll(\".\"+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,\"scroll\",this.scrollHandler),i(window,\"resize\",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:\"stop\",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,\"scroll\",this.scrollHandler),j(window,\"resize\",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:\"sync\",value:function(){p.notSupported&&this.doSync(this.element)}},{key:\"doSync\",value:function(a){if(\"undefined\"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll(\".\"+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:\"show\",value:function(a){return this.applyStyle(a),a.className=a.className+\" \"+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,\"animationend\",this.resetAnimation),i(a,\"oanimationend\",this.resetAnimation),i(a,\"webkitAnimationEnd\",this.resetAnimation),i(a,\"MSAnimationEnd\",this.resetAnimation)),a}},{key:\"applyStyle\",value:function(a,b){var c=this,d=a.getAttribute(\"data-wow-duration\"),e=a.getAttribute(\"data-wow-delay\"),f=a.getAttribute(\"data-wow-iteration\");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:\"resetStyle\",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility=\"visible\"}}},{key:\"resetAnimation\",value:function(a){if(a.type.toLowerCase().indexOf(\"animationend\")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,\"\").trim()}}},{key:\"customStyle\",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?\"hidden\":\"visible\",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?\"none\":this.cachedAnimationName(a)}),a}},{key:\"vendorSet\",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[\"\"+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[\"\"+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:\"vendorCSS\",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue(\"-\"+f+\"-\"+b)}return d}},{key:\"animationName\",value:function(a){var b=void 0;try{b=this.vendorCSS(a,\"animation-name\").cssText}catch(c){b=q(a).getPropertyValue(\"animation-name\")}return\"none\"===b?\"\":b}},{key:\"cacheAnimationName\",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:\"cachedAnimationName\",value:function(a){return this.animationNameCache.get(a)}},{key:\"scrollHandler\",value:function(){this.scrolled=!0}},{key:\"scrollCallback\",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:\"offsetTop\",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:\"isVisible\",value:function(a){var b=a.getAttribute(\"data-wow-offset\")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:\"disabled\",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b[\"default\"]=r,a.exports=b[\"default\"]});\n\n//# sourceURL=webpack:///./src/assets/js/wow.min.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/header.js ./src/assets/js/jqueryParallax.js ./src/assets/js/modal.js ./src/assets/js/parallax.js ./src/assets/js/slider.js ./src/assets/js/webpForCss.js ./src/assets/js/wow.js ./src/assets/js/wow.min.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\header.js */\"./src/assets/js/header.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\jqueryParallax.js */\"./src/assets/js/jqueryParallax.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\parallax.js */\"./src/assets/js/parallax.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\webpForCss.js */\"./src/assets/js/webpForCss.js\");\n__webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\wow.js */\"./src/assets/js/wow.js\");\nmodule.exports = __webpack_require__(/*! E:\\Any\\WEB\\ПРОЕКТ --thousand sunny--\\src\\assets\\js\\wow.min.js */\"./src/assets/js/wow.min.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/header.js_./src/assets/js/jqueryParallax.js_./src/assets/js/modal.js_./src/assets/js/parallax.js_./src/assets/js/slider.js_./src/assets/js/webpForCss.js_./src/assets/js/wow.js_./src/assets/js/wow.min.js?");

/***/ })

/******/ });