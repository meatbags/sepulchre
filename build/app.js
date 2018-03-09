var stk =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modules = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  this.master = new _modules.Master();
};

window.onload = function () {
  var app = new App();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _master = __webpack_require__(2);

Object.keys(_master).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _master[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Master = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _render = __webpack_require__(3);

var _scene = __webpack_require__(5);

var _time = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master = function () {
  function Master() {
    _classCallCheck(this, Master);

    this.width = 960;
    this.height = 540;
    this.scene = new _scene.Scene(this.width, this.height);
    this.renderer = new _render.Renderer(this.width, this.height, this.scene.getScene(), this.scene.getCamera());
    this.timer = new _time.Timer();
    this.loop();
  }

  _createClass(Master, [{
    key: 'loop',
    value: function loop() {
      var _this = this;

      // the main loop

      if (!this.paused) {
        if (!this.loopGuard) {
          this.loopGuard = true;
          requestAnimationFrame(function () {
            _this.loopGuard = false;
            _this.loop();
          });
        }
        var delta = this.timer.getDelta();
        this.scene.update(delta);
        this.renderer.render(delta);
      }
    }
  }]);

  return Master;
}();

exports.Master = Master;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(4);

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../../lib/glsl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(width, height, scene, camera) {
    _classCallCheck(this, Renderer);

    // webgl renderer
    this.scene = scene;
    this.camera = camera;
    this.width = width;
    this.height = height;
    this.size = new THREE.Vector2(this.width, this.height);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x101010, 1);
    this.postProcessingSetup();

    // add to doc
    $('.content__inner').append(this.renderer.domElement);
  }

  _createClass(Renderer, [{
    key: 'resize',
    value: function resize(width, height) {
      this.width = width;
      this.height = height;
      this.size.x = this.width;
      this.size.y = this.height;
      this.FXAAPass.uniforms['resolution'].value.set(1 / this.width, 1 / this.height);
      this.bloomPass.setSize(this.width, this.height);
      this.renderer.setSize(this.width, this.height);
      this.composer.setSize(this.width, this.height);
    }
  }, {
    key: 'postProcessingSetup',
    value: function postProcessingSetup() {
      // post processing passes
      var strength = 0.7;
      var radius = 1.0;
      var threshold = 0.7;
      this.renderPass = new THREE.RenderPass(this.scene, this.camera);
      this.FXAAPass = new THREE.ShaderPass(THREE.FXAAShader);
      this.FXAAPass.uniforms['resolution'].value.set(1 / this.width, 1 / this.height);
      this.bloomPass = new THREE.UnrealBloomPass(this.size, strength, radius, threshold);
      this.noisePass = new THREE.NoisePass();
      this.noisePass.renderToScreen = true;

      // composer
      this.composer = new THREE.EffectComposer(this.renderer);
      this.composer.setSize(this.width, this.height);
      this.composer.addPass(this.renderPass);
      this.composer.addPass(this.FXAAPass);
      this.composer.addPass(this.bloomPass);
      this.composer.addPass(this.noisePass);
      this.renderer.gammaInput = true;
      this.renderer.gammaOutput = true;
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.composer.render(delta);
    }
  }]);

  return Renderer;
}();

exports.Renderer = Renderer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scene = __webpack_require__(6);

Object.keys(_scene).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scene[key];
    }
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camera = __webpack_require__(7);

var _lighting = __webpack_require__(8);

var _player = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(width, height) {
    _classCallCheck(this, Scene);

    this.scene = new THREE.Scene();
    this.colliderSystem = new Collider.System();
    this.player = new _player.Player(this.scene, this.colliderSystem);
    this.camera = new _camera.Camera(width, height, this.player.position);
    this.lighting = new _lighting.Lighting(this.scene);

    // test the scene

    for (var i = 1; i < 20; i++) {
      var size = Math.random() * 5 + 5;
      var mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(5, 1.5, 5), new THREE.MeshPhongMaterial({}));
      mesh.position.set(Math.random() * 15 - 7, i * 2.75, 0);
      mesh.rotation.set(Math.random() * Math.PI * 0.125 - Math.PI * 0.0625, Math.random() * Math.PI * 0.125 - Math.PI * 0.0625, Math.random() * Math.PI * 0.125 - Math.PI * 0.0625);
      this.scene.add(mesh);
      this.colliderSystem.add(new Collider.Mesh(mesh));
    }
  }

  _createClass(Scene, [{
    key: 'update',
    value: function update(delta) {
      this.player.update(delta);
      this.camera.update(delta);
    }
  }, {
    key: 'getScene',
    value: function getScene() {
      return this.scene;
    }
  }, {
    key: 'getCamera',
    value: function getCamera() {
      return this.camera.getCamera();
    }
  }]);

  return Scene;
}();

exports.Scene = Scene;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(width, height, origin) {
    _classCallCheck(this, Camera);

    // perspective camera

    this.origin = origin;
    this.fov = 75;
    this.aspectRatio = width / height;
    this.angle = -Math.PI * 0.5;
    this.len = 10;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, 0.1, 1000);
  }

  _createClass(Camera, [{
    key: "update",
    value: function update(delta) {
      this.camera.position.set(this.origin.x + Math.cos(this.angle) * this.len, this.origin.y + this.len * 0.625, this.origin.z + Math.sin(this.angle) * this.len);
      this.camera.lookAt(this.origin);
    }
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }
  }]);

  return Camera;
}();

exports.Camera = Camera;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lighting = function () {
  function Lighting(scene) {
    _classCallCheck(this, Lighting);

    // create scene lighting

    this.scene = scene;
    this.lights = {
      point: {
        a: new THREE.PointLight(0xffffff, 0.25, 30, 2)
      },
      ambient: {
        a: new THREE.AmbientLight(0xffffff, 0.05)
      }
    };
    this.setLightPositions();

    for (var p in this.lights.point) {
      if (this.lights.point.hasOwnProperty(p)) {
        this.scene.add(this.lights.point[p]);
      }
    }
    for (var a in this.lights.ambient) {
      if (this.lights.ambient.hasOwnProperty(a)) {
        this.scene.add(this.lights.ambient[a]);
      }
    }
  }

  _createClass(Lighting, [{
    key: "setLightPositions",
    value: function setLightPositions() {
      this.lights.point.a.position.set(1, 5, -2);
    }
  }]);

  return Lighting;
}();

exports.Lighting = Lighting;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _input = __webpack_require__(10);

var _maths = __webpack_require__(12);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(scene, colliderSystem) {
    var _this = this;

    _classCallCheck(this, Player);

    // represents the player

    this.position = new THREE.Vector3(0, 1, 0);
    this.motion = new THREE.Vector3();
    this.target = {
      position: new THREE.Vector3(),
      motion: new THREE.Vector3()
    };
    this.speed = 10;
    this.jump = 17;
    this.falling = false;
    this.fallTime = 0;
    this.fallTimeThreshold = 0.125;
    this.keys = {};
    this.keyboard = new _input.Keyboard(function (key) {
      _this.onKeyboard(key);
    });
    this.collider = new Collider.Collider(this.target.position, this.motion);
    this.collider.setPhysics({ gravity: 38 });
    this.colliderSystem = colliderSystem;
    this.group = new THREE.Group();
    this.mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new THREE.MeshPhongMaterial({}));
    this.mesh.position.y = 0.5;
    this.light = new THREE.PointLight(0xffffff, 0.25, 5, 2);
    this.light.position.y = 2;
    this.group.add(this.mesh, this.light);

    // add to scene

    scene.add(this.group);
  }

  _createClass(Player, [{
    key: 'onKeyboard',
    value: function onKeyboard(key) {
      switch (key) {
        case 'a':case 'A':case 'ArrowLeft':
          this.keys.left = this.keyboard.keys[key];
          break;
        case 'd':case 'D':case 'ArrowRight':
          this.keys.right = this.keyboard.keys[key];
          break;
        case 'w':case 'W':case 'ArrowUp':
          this.keys.up = this.keyboard.keys[key];
          break;
        case 's':case 'S':case 'ArrowDown':
          this.keys.down = this.keyboard.keys[key];
          break;
        case ' ':
          this.keys.jump = this.keyboard.keys[key];
          break;
        default:
          break;
      }
    }
  }, {
    key: 'move',
    value: function move(delta) {
      // translate key input to motion

      if (this.keys.left || this.keys.right) {
        this.target.motion.x = ((this.keys.left ? 1 : 0) + (this.keys.right ? -1 : 0)) * this.speed;
      } else {
        this.target.motion.x = 0;
      }

      if (this.keys.up || this.keys.down) {
        this.target.motion.z = ((this.keys.up ? 1 : 0) + (this.keys.down ? -1 : 0)) * this.speed;
      } else {
        this.target.motion.z = 0;
      }

      if (this.keys.jump) {
        this.keys.jump = false;

        if (this.motion.y == 0 || this.fallTime < this.fallTimeThreshold) {
          this.motion.y = this.jump;
          this.fallTime = this.fallTimeThreshold;
        }
      }

      this.falling = this.motion.y != 0;
      this.fallTime = this.falling ? this.fallTime + delta : 0;

      if (!this.falling) {
        this.motion.x = this.target.motion.x;
        this.motion.z = this.target.motion.z;
      } else {
        this.motion.x = (0, _maths.Blend)(this.motion.x, this.target.motion.x, 0.15);
        this.motion.z = (0, _maths.Blend)(this.motion.z, this.target.motion.z, 0.15);
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.move(delta);
      this.collider.move(delta, this.colliderSystem);
      this.position.x = (0, _maths.Blend)(this.position.x, this.target.position.x, 0.4);
      this.position.y = (0, _maths.Blend)(this.position.y, this.target.position.y, 0.4);
      this.position.z = (0, _maths.Blend)(this.position.z, this.target.position.z, 0.4);
      this.group.position.set(this.position.x, this.position.y, this.position.z);
    }
  }]);

  return Player;
}();

exports.Player = Player;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboard = __webpack_require__(11);

Object.keys(_keyboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keyboard[key];
    }
  });
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard(onEvent) {
    var _this = this;

    _classCallCheck(this, Keyboard);

    // keyboard event handlers

    this.keys = {};
    this.onEvent = onEvent;
    document.addEventListener('keydown', function (key) {
      _this.onKeyDown(key);
    });
    document.addEventListener('keyup', function (key) {
      _this.onKeyUp(key);
    });
  }

  _createClass(Keyboard, [{
    key: 'onKeyDown',
    value: function onKeyDown(key) {
      this.keys[key.key] = true;
      this.onEvent(key.key);
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(key) {
      this.keys[key.key] = false;
      this.onEvent(key.key);
    }
  }, {
    key: 'isSpecial',
    value: function isSpecial() {
      return this.keys['Shift'] || this.keys['Control'] || this.keys['Alt'];
    }
  }, {
    key: 'isControl',
    value: function isControl() {
      return this.keys['Control'];
    }
  }, {
    key: 'isShift',
    value: function isShift() {
      return this.keys['Shift'];
    }
  }, {
    key: 'isAlt',
    value: function isAlt() {
      return this.keys['Alt'];
    }
  }]);

  return Keyboard;
}();

exports.Keyboard = Keyboard;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _general = __webpack_require__(13);

Object.keys(_general).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _general[key];
    }
  });
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Blend = function Blend(a, b, factor) {
  return (b - a) * factor + a;
};

exports.Blend = Blend;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(15);

Object.keys(_timer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timer[key];
    }
  });
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = function () {
  function Timer() {
    _classCallCheck(this, Timer);

    // timekeeping

    this.time = new Date().getTime();
    this.age = 0;
  }

  _createClass(Timer, [{
    key: "getDelta",
    value: function getDelta() {
      // update timer, get delta time

      var now = new Date().getTime();
      var delta = (now - this.time) / 1000.;
      this.age += delta;
      this.time = now;

      return delta;
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;

/***/ })
/******/ ]);