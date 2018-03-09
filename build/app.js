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


/**
 * @author meatbags / https://github.com/meatbags
*/

var App = {
  init: function init() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    // set up
    App.renderer = new THREE.WebGLRenderer();
    App.renderer.setSize(width, height);
    App.renderer.setClearColor(0x444444, 1); //0xf9e5e2
    document.getElementById('wrapper').appendChild(App.renderer.domElement);

    // scene
    App.scene = new THREE.Scene();
    App.player = new Collider.Player(App.renderer.domElement);
    App.scene.add(App.player.object);
    App.colliderSystem = new Collider.System();
    App.loadModels();
    App.loadLighting();
    App.initPostProcessing(width, height);

    // run
    App.time = new Date().getTime();
    App.age = 0;
    App.loop();
  },

  initPostProcessing: function initPostProcessing(width, height) {
    //onlyAO: false, radius: 32, aoClamp: 0.25, lumInfluence: 0.7
    App.renderScene = new THREE.RenderPass(App.scene, App.player.camera);
    App.FXAAPass = new THREE.ShaderPass(THREE.FXAAShader);
    App.FXAAPass.uniforms['resolution'].value.set(1 / width, 1 / height);
    App.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(width, height), 0.5, 0.7, .9); // resolution, strength, radius, threshold
    App.bloomPass.renderToScreen = true;
    //App.depthPass = new THREE.DepthBufferPass(App.scene, App.player.camera, width, height);

    App.effectsComposer = new THREE.EffectComposer(App.renderer);
    App.effectsComposer.setSize(width, height);
    App.effectsComposer.addPass(App.renderScene);
    //App.effectsComposer.addPass(App.depthPass);
    App.effectsComposer.addPass(App.FXAAPass);
    App.effectsComposer.addPass(App.bloomPass);

    App.renderer.gammaInput = true;
    App.renderer.gammaOutput = true;
  },

  loadModels: function loadModels() {
    App.ready = true;
    var floor = new THREE.Mesh(new THREE.BoxBufferGeometry(200, 1, 200), new THREE.MeshPhysicalMaterial({ emissive: 0x222222, roughness: 1 }));
    App.scene.add(floor);
    App.colliderSystem.add(new Collider.Mesh(floor));

    var rand = function rand(v) {
      return Math.random() * v - v / 2;
    };
    var angle = 0;
    var len = 40;

    for (var i = 0; i < 1000; i++) {
      angle += 0.03;
      var x = Math.sin(angle) * len + rand(5);
      var y = i * 0.3 + rand(2);
      var z = Math.cos(angle) * len + rand(10);
      var s = 5 + 2 * Math.random();
      var h = 3 + Math.random() * 5;
      var box = new THREE.Mesh(new THREE.BoxBufferGeometry(s, h, s), new THREE.MeshPhysicalMaterial({ roughness: 1 }));
      box.position.set(x, y, z);
      var rx = rand(Math.PI / 3);
      var ry = rand(Math.PI / 3);
      var rz = rand(Math.PI / 3);
      box.rotation.set(rx, ry, rz);
      //box.position.x += (Math.abs(box.position.x) < 5) ? 10 : 0;
      //box.position.z += (Math.abs(box.position.z) < 5) ? 10 : 0;
      App.scene.add(box);
      App.colliderSystem.add(new Collider.Mesh(box));
    }
  },

  loadLighting: function loadLighting() {
    App.lights = {
      p1: new THREE.PointLight(0xffffff, 1, 100, 2),
      a1: new THREE.AmbientLight(0xffffff, 0.05)
    };

    App.lights.p1.position.set(0, 5, 0);
    App.scene.add(App.lights.a1, App.lights.p1);
  },

  update: function update(delta) {
    App.player.update(delta, App.colliderSystem);
  },

  render: function render() {
    App.effectsComposer.render();
  },

  loop: function loop() {
    requestAnimationFrame(App.loop);

    // timing
    var now = new Date().getTime();
    var delta = (now - App.time) / 1000.;
    App.time = now;

    if (App.ready) {
      App.update(delta);
      App.render();
    }
  }
};

window.onload = App.init;

/***/ })
/******/ ]);