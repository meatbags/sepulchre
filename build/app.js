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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keyboard = __webpack_require__(26);

Object.keys(_keyboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keyboard[key];
    }
  });
});

var _mouse = __webpack_require__(27);

Object.keys(_mouse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mouse[key];
    }
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _general = __webpack_require__(28);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modules = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  var _this = this;

  _classCallCheck(this, App);

  this.master = new _modules.Master();
  window.onresize = function () {
    _this.master.resize();
  };
};

window.onload = function () {
  var app = new App();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _master = __webpack_require__(4);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Master = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _render = __webpack_require__(5);

var _scene = __webpack_require__(21);

var _time = __webpack_require__(40);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master = function () {
  function Master() {
    _classCallCheck(this, Master);

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.domElement = document.getElementsByClassName('content')[0];
    this.scene = new _scene.Scene(this.domElement, this.width, this.height);
    this.renderer = new _render.Renderer(this.domElement, this.width, this.height, this.scene.getScene(), this.scene.getCamera());
    this.renderer2d = new _render.Renderer2d(this.domElement, this.width, this.height, this.scene.getCamera());
    this.timer = new _time.Timer();
    this.loop();
  }

  _createClass(Master, [{
    key: 'resize',
    value: function resize() {
      // resize from window
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.scene.resize(this.width, this.height);
      this.renderer.resize(this.width, this.height);
      this.renderer;
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this = this;

      // main game loop
      if (!this.paused) {
        if (!this.loopGuard) {
          // restrict async looping
          this.loopGuard = true;
          requestAnimationFrame(function () {
            _this.loopGuard = false;
            _this.loop();
          });
        }
        var delta = this.timer.getDelta();
        this.scene.update(delta);
        this.renderer.render(delta);
        this.renderer2d.render(delta, this.scene.getObjects2d());
      }
    }
  }]);

  return Master;
}();

exports.Master = Master;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(6);

Object.keys(_renderer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer[key];
    }
  });
});

var _renderer_2d = __webpack_require__(20);

Object.keys(_renderer_2d).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _renderer_2d[key];
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
exports.Renderer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(domElement, width, height, scene, camera) {
    _classCallCheck(this, Renderer);

    // webgl renderer
    this.scene = scene;
    this.camera = camera;
    this.width = width;
    this.height = height;
    this.size = new THREE.Vector2(this.width, this.height);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x444444, 1);
    this.postProcessingSetup();

    // add to doc
    domElement.append(this.renderer.domElement);
  }

  _createClass(Renderer, [{
    key: 'resize',
    value: function resize(width, height) {
      // resize screen and pp render passes
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
      var strength = 0.5;
      var radius = 0.5;
      var threshold = 0.85;
      this.renderPass = new THREE.RenderPass(this.scene, this.camera);
      this.FXAAPass = new THREE.ShaderPass(THREE.FXAAShader);
      this.FXAAPass.uniforms['resolution'].value.set(1 / this.width, 1 / this.height);
      this.bloomPass = new THREE.UnrealBloomPass(this.size, strength, radius, threshold);
      this.posterPass = new THREE.PosterPass(this.size);
      this.noisePass = new THREE.NoisePass();
      this.noisePass.renderToScreen = true;
      this.composer = new THREE.EffectComposer(this.renderer);
      this.composer.setSize(this.width, this.height);
      this.composer.addPass(this.renderPass);
      this.composer.addPass(this.FXAAPass);
      this.composer.addPass(this.posterPass);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

		uniforms: {

				"tDiffuse": { value: null },
				"opacity": { value: 1.0 }

		},

		vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

		fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")

};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function (renderer, renderTarget) {

	this.renderer = renderer;

	if (renderTarget === undefined) {

		var parameters = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			format: THREE.RGBAFormat,
			stencilBuffer: false
		};

		var size = renderer.getDrawingBufferSize();
		renderTarget = new THREE.WebGLRenderTarget(size.width, size.height, parameters);
		renderTarget.texture.name = 'EffectComposer.rt1';
	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();
	this.renderTarget2.texture.name = 'EffectComposer.rt2';

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	// dependencies

	if (THREE.CopyShader === undefined) {

		console.error('THREE.EffectComposer relies on THREE.CopyShader');
	}

	if (THREE.ShaderPass === undefined) {

		console.error('THREE.EffectComposer relies on THREE.ShaderPass');
	}

	this.copyPass = new THREE.ShaderPass(THREE.CopyShader);
};

Object.assign(THREE.EffectComposer.prototype, {

	swapBuffers: function swapBuffers() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;
	},

	addPass: function addPass(pass) {

		this.passes.push(pass);

		var size = this.renderer.getDrawingBufferSize();
		pass.setSize(size.width, size.height);
	},

	insertPass: function insertPass(pass, index) {

		this.passes.splice(index, 0, pass);
	},

	render: function render(delta) {

		var maskActive = false;

		var pass,
		    i,
		    il = this.passes.length;

		for (i = 0; i < il; i++) {

			pass = this.passes[i];

			if (pass.enabled === false) continue;

			pass.render(this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive);

			if (pass.needsSwap) {

				if (maskActive) {

					var context = this.renderer.context;

					context.stencilFunc(context.NOTEQUAL, 1, 0xffffffff);

					this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, delta);

					context.stencilFunc(context.EQUAL, 1, 0xffffffff);
				}

				this.swapBuffers();
			}

			if (THREE.MaskPass !== undefined) {

				if (pass instanceof THREE.MaskPass) {

					maskActive = true;
				} else if (pass instanceof THREE.ClearMaskPass) {

					maskActive = false;
				}
			}
		}
	},

	reset: function reset(renderTarget) {

		if (renderTarget === undefined) {

			var size = this.renderer.getDrawingBufferSize();

			renderTarget = this.renderTarget1.clone();
			renderTarget.setSize(size.width, size.height);
		}

		this.renderTarget1.dispose();
		this.renderTarget2.dispose();
		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;
	},

	setSize: function setSize(width, height) {

		this.renderTarget1.setSize(width, height);
		this.renderTarget2.setSize(width, height);

		for (var i = 0; i < this.passes.length; i++) {

			this.passes[i].setSize(width, height);
		}
	}

});

THREE.Pass = function () {

	// if set to true, the pass is processed by the composer
	this.enabled = true;

	// if set to true, the pass indicates to swap read and write buffer after rendering
	this.needsSwap = true;

	// if set to true, the pass clears its buffer before rendering
	this.clear = false;

	// if set to true, the result of the pass is rendered to screen
	this.renderToScreen = false;
};

Object.assign(THREE.Pass.prototype, {

	setSize: function setSize(width, height) {},

	render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

		console.error('THREE.Pass: .render() must be implemented in derived pass.');
	}

});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 * @author davidedc / http://www.sketchpatch.net/
 *
 * NVIDIA FXAA by Timothy Lottes
 * http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 */

THREE.FXAAShader = {

  uniforms: {

    "tDiffuse": { value: null },
    "resolution": { value: new THREE.Vector2(1 / 1024, 1 / 512) }

  },

  vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

  fragmentShader: ["precision highp float;", "", "uniform sampler2D tDiffuse;", "", "uniform vec2 resolution;", "", "varying vec2 vUv;", "", "// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)", "", "//----------------------------------------------------------------------------------", "// File:        es3-kepler\FXAA\assets\shaders/FXAA_DefaultES.frag", "// SDK Version: v3.00", "// Email:       gameworks@nvidia.com", "// Site:        http://developer.nvidia.com/", "//", "// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.", "//", "// Redistribution and use in source and binary forms, with or without", "// modification, are permitted provided that the following conditions", "// are met:", "//  * Redistributions of source code must retain the above copyright", "//    notice, this list of conditions and the following disclaimer.", "//  * Redistributions in binary form must reproduce the above copyright", "//    notice, this list of conditions and the following disclaimer in the", "//    documentation and/or other materials provided with the distribution.", "//  * Neither the name of NVIDIA CORPORATION nor the names of its", "//    contributors may be used to endorse or promote products derived", "//    from this software without specific prior written permission.", "//", "// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ``AS IS'' AND ANY", "// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE", "// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR", "// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR", "// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,", "// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,", "// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR", "// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY", "// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT", "// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE", "// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.", "//", "//----------------------------------------------------------------------------------", "", "#define FXAA_PC 1", "#define FXAA_GLSL_100 1", "#define FXAA_QUALITY_PRESET 12", "", "#define FXAA_GREEN_AS_LUMA 1", "", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_PC_CONSOLE", "    //", "    // The console algorithm for PC is included", "    // for developers targeting really low spec machines.", "    // Likely better to just run FXAA_PC, and use a really low preset.", "    //", "    #define FXAA_PC_CONSOLE 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_GLSL_120", "    #define FXAA_GLSL_120 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_GLSL_130", "    #define FXAA_GLSL_130 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_HLSL_3", "    #define FXAA_HLSL_3 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_HLSL_4", "    #define FXAA_HLSL_4 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_HLSL_5", "    #define FXAA_HLSL_5 0", "#endif", "/*==========================================================================*/", "#ifndef FXAA_GREEN_AS_LUMA", "    //", "    // For those using non-linear color,", "    // and either not able to get luma in alpha, or not wanting to,", "    // this enables FXAA to run using green as a proxy for luma.", "    // So with this enabled, no need to pack luma in alpha.", "    //", "    // This will turn off AA on anything which lacks some amount of green.", "    // Pure red and blue or combination of only R and B, will get no AA.", "    //", "    // Might want to lower the settings for both,", "    //    fxaaConsoleEdgeThresholdMin", "    //    fxaaQualityEdgeThresholdMin", "    // In order to insure AA does not get turned off on colors", "    // which contain a minor amount of green.", "    //", "    // 1 = On.", "    // 0 = Off.", "    //", "    #define FXAA_GREEN_AS_LUMA 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_EARLY_EXIT", "    //", "    // Controls algorithm's early exit path.", "    // On PS3 turning this ON adds 2 cycles to the shader.", "    // On 360 turning this OFF adds 10ths of a millisecond to the shader.", "    // Turning this off on console will result in a more blurry image.", "    // So this defaults to on.", "    //", "    // 1 = On.", "    // 0 = Off.", "    //", "    #define FXAA_EARLY_EXIT 1", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_DISCARD", "    //", "    // Only valid for PC OpenGL currently.", "    // Probably will not work when FXAA_GREEN_AS_LUMA = 1.", "    //", "    // 1 = Use discard on pixels which don't need AA.", "    //     For APIs which enable concurrent TEX+ROP from same surface.", "    // 0 = Return unchanged color on pixels which don't need AA.", "    //", "    #define FXAA_DISCARD 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_FAST_PIXEL_OFFSET", "    //", "    // Used for GLSL 120 only.", "    //", "    // 1 = GL API supports fast pixel offsets", "    // 0 = do not use fast pixel offsets", "    //", "    #ifdef GL_EXT_gpu_shader4", "        #define FXAA_FAST_PIXEL_OFFSET 1", "    #endif", "    #ifdef GL_NV_gpu_shader5", "        #define FXAA_FAST_PIXEL_OFFSET 1", "    #endif", "    #ifdef GL_ARB_gpu_shader5", "        #define FXAA_FAST_PIXEL_OFFSET 1", "    #endif", "    #ifndef FXAA_FAST_PIXEL_OFFSET", "        #define FXAA_FAST_PIXEL_OFFSET 0", "    #endif", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_GATHER4_ALPHA", "    //", "    // 1 = API supports gather4 on alpha channel.", "    // 0 = API does not support gather4 on alpha channel.", "    //", "    #if (FXAA_HLSL_5 == 1)", "        #define FXAA_GATHER4_ALPHA 1", "    #endif", "    #ifdef GL_ARB_gpu_shader5", "        #define FXAA_GATHER4_ALPHA 1", "    #endif", "    #ifdef GL_NV_gpu_shader5", "        #define FXAA_GATHER4_ALPHA 1", "    #endif", "    #ifndef FXAA_GATHER4_ALPHA", "        #define FXAA_GATHER4_ALPHA 0", "    #endif", "#endif", "", "", "/*============================================================================", "                        FXAA QUALITY - TUNING KNOBS", "------------------------------------------------------------------------------", "NOTE the other tuning knobs are now in the shader function inputs!", "============================================================================*/", "#ifndef FXAA_QUALITY_PRESET", "    //", "    // Choose the quality preset.", "    // This needs to be compiled into the shader as it effects code.", "    // Best option to include multiple presets is to", "    // in each shader define the preset, then include this file.", "    //", "    // OPTIONS", "    // -----------------------------------------------------------------------", "    // 10 to 15 - default medium dither (10=fastest, 15=highest quality)", "    // 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)", "    // 39       - no dither, very expensive", "    //", "    // NOTES", "    // -----------------------------------------------------------------------", "    // 12 = slightly faster then FXAA 3.9 and higher edge quality (default)", "    // 13 = about same speed as FXAA 3.9 and better than 12", "    // 23 = closest to FXAA 3.9 visually and performance wise", "    //  _ = the lowest digit is directly related to performance", "    // _  = the highest digit is directly related to style", "    //", "    #define FXAA_QUALITY_PRESET 12", "#endif", "", "", "/*============================================================================", "", "                           FXAA QUALITY - PRESETS", "", "============================================================================*/", "", "/*============================================================================", "                     FXAA QUALITY - MEDIUM DITHER PRESETS", "============================================================================*/", "#if (FXAA_QUALITY_PRESET == 10)", "    #define FXAA_QUALITY_PS 3", "    #define FXAA_QUALITY_P0 1.5", "    #define FXAA_QUALITY_P1 3.0", "    #define FXAA_QUALITY_P2 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 11)", "    #define FXAA_QUALITY_PS 4", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 3.0", "    #define FXAA_QUALITY_P3 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 12)", "    #define FXAA_QUALITY_PS 5", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 4.0", "    #define FXAA_QUALITY_P4 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 13)", "    #define FXAA_QUALITY_PS 6", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 4.0", "    #define FXAA_QUALITY_P5 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 14)", "    #define FXAA_QUALITY_PS 7", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 4.0", "    #define FXAA_QUALITY_P6 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 15)", "    #define FXAA_QUALITY_PS 8", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 4.0", "    #define FXAA_QUALITY_P7 12.0", "#endif", "", "/*============================================================================", "                     FXAA QUALITY - LOW DITHER PRESETS", "============================================================================*/", "#if (FXAA_QUALITY_PRESET == 20)", "    #define FXAA_QUALITY_PS 3", "    #define FXAA_QUALITY_P0 1.5", "    #define FXAA_QUALITY_P1 2.0", "    #define FXAA_QUALITY_P2 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 21)", "    #define FXAA_QUALITY_PS 4", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 22)", "    #define FXAA_QUALITY_PS 5", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 23)", "    #define FXAA_QUALITY_PS 6", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 24)", "    #define FXAA_QUALITY_PS 7", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 3.0", "    #define FXAA_QUALITY_P6 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 25)", "    #define FXAA_QUALITY_PS 8", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 4.0", "    #define FXAA_QUALITY_P7 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 26)", "    #define FXAA_QUALITY_PS 9", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 4.0", "    #define FXAA_QUALITY_P8 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 27)", "    #define FXAA_QUALITY_PS 10", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 4.0", "    #define FXAA_QUALITY_P9 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 28)", "    #define FXAA_QUALITY_PS 11", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 2.0", "    #define FXAA_QUALITY_P9 4.0", "    #define FXAA_QUALITY_P10 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 29)", "    #define FXAA_QUALITY_PS 12", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 2.0", "    #define FXAA_QUALITY_P9 2.0", "    #define FXAA_QUALITY_P10 4.0", "    #define FXAA_QUALITY_P11 8.0", "#endif", "", "/*============================================================================", "                     FXAA QUALITY - EXTREME QUALITY", "============================================================================*/", "#if (FXAA_QUALITY_PRESET == 39)", "    #define FXAA_QUALITY_PS 12", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.0", "    #define FXAA_QUALITY_P2 1.0", "    #define FXAA_QUALITY_P3 1.0", "    #define FXAA_QUALITY_P4 1.0", "    #define FXAA_QUALITY_P5 1.5", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 2.0", "    #define FXAA_QUALITY_P9 2.0", "    #define FXAA_QUALITY_P10 4.0", "    #define FXAA_QUALITY_P11 8.0", "#endif", "", "", "", "/*============================================================================", "", "                                API PORTING", "", "============================================================================*/", "#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)", "    #define FxaaBool bool", "    #define FxaaDiscard discard", "    #define FxaaFloat float", "    #define FxaaFloat2 vec2", "    #define FxaaFloat3 vec3", "    #define FxaaFloat4 vec4", "    #define FxaaHalf float", "    #define FxaaHalf2 vec2", "    #define FxaaHalf3 vec3", "    #define FxaaHalf4 vec4", "    #define FxaaInt2 ivec2", "    #define FxaaSat(x) clamp(x, 0.0, 1.0)", "    #define FxaaTex sampler2D", "#else", "    #define FxaaBool bool", "    #define FxaaDiscard clip(-1)", "    #define FxaaFloat float", "    #define FxaaFloat2 float2", "    #define FxaaFloat3 float3", "    #define FxaaFloat4 float4", "    #define FxaaHalf half", "    #define FxaaHalf2 half2", "    #define FxaaHalf3 half3", "    #define FxaaHalf4 half4", "    #define FxaaSat(x) saturate(x)", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_GLSL_100 == 1)", "  #define FxaaTexTop(t, p) texture2D(t, p, 0.0)", "  #define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_GLSL_120 == 1)", "    // Requires,", "    //  #version 120", "    // And at least,", "    //  #extension GL_EXT_gpu_shader4 : enable", "    //  (or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)", "    #define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)", "    #if (FXAA_FAST_PIXEL_OFFSET == 1)", "        #define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)", "    #else", "        #define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)", "    #endif", "    #if (FXAA_GATHER4_ALPHA == 1)", "        // use #extension GL_ARB_gpu_shader5 : enable", "        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)", "        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)", "        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)", "        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)", "    #endif", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_GLSL_130 == 1)", "    // Requires \"#version 130\" or better", "    #define FxaaTexTop(t, p) textureLod(t, p, 0.0)", "    #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)", "    #if (FXAA_GATHER4_ALPHA == 1)", "        // use #extension GL_ARB_gpu_shader5 : enable", "        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)", "        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)", "        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)", "        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)", "    #endif", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_HLSL_3 == 1)", "    #define FxaaInt2 float2", "    #define FxaaTex sampler2D", "    #define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))", "    #define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_HLSL_4 == 1)", "    #define FxaaInt2 int2", "    struct FxaaTex { SamplerState smpl; Texture2D tex; };", "    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)", "    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_HLSL_5 == 1)", "    #define FxaaInt2 int2", "    struct FxaaTex { SamplerState smpl; Texture2D tex; };", "    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)", "    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)", "    #define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)", "    #define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)", "    #define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)", "    #define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)", "#endif", "", "", "/*============================================================================", "                   GREEN AS LUMA OPTION SUPPORT FUNCTION", "============================================================================*/", "#if (FXAA_GREEN_AS_LUMA == 0)", "    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }", "#else", "    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }", "#endif", "", "", "", "", "/*============================================================================", "", "                             FXAA3 QUALITY - PC", "", "============================================================================*/", "#if (FXAA_PC == 1)", "/*--------------------------------------------------------------------------*/", "FxaaFloat4 FxaaPixelShader(", "    //", "    // Use noperspective interpolation here (turn off perspective interpolation).", "    // {xy} = center of pixel", "    FxaaFloat2 pos,", "    //", "    // Used only for FXAA Console, and not used on the 360 version.", "    // Use noperspective interpolation here (turn off perspective interpolation).", "    // {xy_} = upper left of pixel", "    // {_zw} = lower right of pixel", "    FxaaFloat4 fxaaConsolePosPos,", "    //", "    // Input color texture.", "    // {rgb_} = color in linear or perceptual color space", "    // if (FXAA_GREEN_AS_LUMA == 0)", "    //     {__a} = luma in perceptual color space (not linear)", "    FxaaTex tex,", "    //", "    // Only used on the optimized 360 version of FXAA Console.", "    // For everything but 360, just use the same input here as for \"tex\".", "    // For 360, same texture, just alias with a 2nd sampler.", "    // This sampler needs to have an exponent bias of -1.", "    FxaaTex fxaaConsole360TexExpBiasNegOne,", "    //", "    // Only used on the optimized 360 version of FXAA Console.", "    // For everything but 360, just use the same input here as for \"tex\".", "    // For 360, same texture, just alias with a 3nd sampler.", "    // This sampler needs to have an exponent bias of -2.", "    FxaaTex fxaaConsole360TexExpBiasNegTwo,", "    //", "    // Only used on FXAA Quality.", "    // This must be from a constant/uniform.", "    // {x_} = 1.0/screenWidthInPixels", "    // {_y} = 1.0/screenHeightInPixels", "    FxaaFloat2 fxaaQualityRcpFrame,", "    //", "    // Only used on FXAA Console.", "    // This must be from a constant/uniform.", "    // This effects sub-pixel AA quality and inversely sharpness.", "    //   Where N ranges between,", "    //     N = 0.50 (default)", "    //     N = 0.33 (sharper)", "    // {x__} = -N/screenWidthInPixels", "    // {_y_} = -N/screenHeightInPixels", "    // {_z_} =  N/screenWidthInPixels", "    // {__w} =  N/screenHeightInPixels", "    FxaaFloat4 fxaaConsoleRcpFrameOpt,", "    //", "    // Only used on FXAA Console.", "    // Not used on 360, but used on PS3 and PC.", "    // This must be from a constant/uniform.", "    // {x__} = -2.0/screenWidthInPixels", "    // {_y_} = -2.0/screenHeightInPixels", "    // {_z_} =  2.0/screenWidthInPixels", "    // {__w} =  2.0/screenHeightInPixels", "    FxaaFloat4 fxaaConsoleRcpFrameOpt2,", "    //", "    // Only used on FXAA Console.", "    // Only used on 360 in place of fxaaConsoleRcpFrameOpt2.", "    // This must be from a constant/uniform.", "    // {x__} =  8.0/screenWidthInPixels", "    // {_y_} =  8.0/screenHeightInPixels", "    // {_z_} = -4.0/screenWidthInPixels", "    // {__w} = -4.0/screenHeightInPixels", "    FxaaFloat4 fxaaConsole360RcpFrameOpt2,", "    //", "    // Only used on FXAA Quality.", "    // This used to be the FXAA_QUALITY_SUBPIX define.", "    // It is here now to allow easier tuning.", "    // Choose the amount of sub-pixel aliasing removal.", "    // This can effect sharpness.", "    //   1.00 - upper limit (softer)", "    //   0.75 - default amount of filtering", "    //   0.50 - lower limit (sharper, less sub-pixel aliasing removal)", "    //   0.25 - almost off", "    //   0.00 - completely off", "    FxaaFloat fxaaQualitySubpix,", "    //", "    // Only used on FXAA Quality.", "    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.", "    // It is here now to allow easier tuning.", "    // The minimum amount of local contrast required to apply algorithm.", "    //   0.333 - too little (faster)", "    //   0.250 - low quality", "    //   0.166 - default", "    //   0.125 - high quality", "    //   0.063 - overkill (slower)", "    FxaaFloat fxaaQualityEdgeThreshold,", "    //", "    // Only used on FXAA Quality.", "    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.", "    // It is here now to allow easier tuning.", "    // Trims the algorithm from processing darks.", "    //   0.0833 - upper limit (default, the start of visible unfiltered edges)", "    //   0.0625 - high quality (faster)", "    //   0.0312 - visible limit (slower)", "    // Special notes when using FXAA_GREEN_AS_LUMA,", "    //   Likely want to set this to zero.", "    //   As colors that are mostly not-green", "    //   will appear very dark in the green channel!", "    //   Tune by looking at mostly non-green content,", "    //   then start at zero and increase until aliasing is a problem.", "    FxaaFloat fxaaQualityEdgeThresholdMin,", "    //", "    // Only used on FXAA Console.", "    // This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.", "    // It is here now to allow easier tuning.", "    // This does not effect PS3, as this needs to be compiled in.", "    //   Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.", "    //   Due to the PS3 being ALU bound,", "    //   there are only three safe values here: 2 and 4 and 8.", "    //   These options use the shaders ability to a free *|/ by 2|4|8.", "    // For all other platforms can be a non-power of two.", "    //   8.0 is sharper (default!!!)", "    //   4.0 is softer", "    //   2.0 is really soft (good only for vector graphics inputs)", "    FxaaFloat fxaaConsoleEdgeSharpness,", "    //", "    // Only used on FXAA Console.", "    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.", "    // It is here now to allow easier tuning.", "    // This does not effect PS3, as this needs to be compiled in.", "    //   Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.", "    //   Due to the PS3 being ALU bound,", "    //   there are only two safe values here: 1/4 and 1/8.", "    //   These options use the shaders ability to a free *|/ by 2|4|8.", "    // The console setting has a different mapping than the quality setting.", "    // Other platforms can use other values.", "    //   0.125 leaves less aliasing, but is softer (default!!!)", "    //   0.25 leaves more aliasing, and is sharper", "    FxaaFloat fxaaConsoleEdgeThreshold,", "    //", "    // Only used on FXAA Console.", "    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.", "    // It is here now to allow easier tuning.", "    // Trims the algorithm from processing darks.", "    // The console setting has a different mapping than the quality setting.", "    // This only applies when FXAA_EARLY_EXIT is 1.", "    // This does not apply to PS3,", "    // PS3 was simplified to avoid more shader instructions.", "    //   0.06 - faster but more aliasing in darks", "    //   0.05 - default", "    //   0.04 - slower and less aliasing in darks", "    // Special notes when using FXAA_GREEN_AS_LUMA,", "    //   Likely want to set this to zero.", "    //   As colors that are mostly not-green", "    //   will appear very dark in the green channel!", "    //   Tune by looking at mostly non-green content,", "    //   then start at zero and increase until aliasing is a problem.", "    FxaaFloat fxaaConsoleEdgeThresholdMin,", "    //", "    // Extra constants for 360 FXAA Console only.", "    // Use zeros or anything else for other platforms.", "    // These must be in physical constant registers and NOT immedates.", "    // Immedates will result in compiler un-optimizing.", "    // {xyzw} = float4(1.0, -1.0, 0.25, -0.25)", "    FxaaFloat4 fxaaConsole360ConstDir", ") {", "/*--------------------------------------------------------------------------*/", "    FxaaFloat2 posM;", "    posM.x = pos.x;", "    posM.y = pos.y;", "    #if (FXAA_GATHER4_ALPHA == 1)", "        #if (FXAA_DISCARD == 0)", "            FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);", "            #if (FXAA_GREEN_AS_LUMA == 0)", "                #define lumaM rgbyM.w", "            #else", "                #define lumaM rgbyM.y", "            #endif", "        #endif", "        #if (FXAA_GREEN_AS_LUMA == 0)", "            FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);", "            FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));", "        #else", "            FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);", "            FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));", "        #endif", "        #if (FXAA_DISCARD == 1)", "            #define lumaM luma4A.w", "        #endif", "        #define lumaE luma4A.z", "        #define lumaS luma4A.x", "        #define lumaSE luma4A.y", "        #define lumaNW luma4B.w", "        #define lumaN luma4B.z", "        #define lumaW luma4B.x", "    #else", "        FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);", "        #if (FXAA_GREEN_AS_LUMA == 0)", "            #define lumaM rgbyM.w", "        #else", "            #define lumaM rgbyM.y", "        #endif", "        #if (FXAA_GLSL_100 == 1)", "          FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));", "        #else", "          FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));", "        #endif", "    #endif", "/*--------------------------------------------------------------------------*/", "    FxaaFloat maxSM = max(lumaS, lumaM);", "    FxaaFloat minSM = min(lumaS, lumaM);", "    FxaaFloat maxESM = max(lumaE, maxSM);", "    FxaaFloat minESM = min(lumaE, minSM);", "    FxaaFloat maxWN = max(lumaN, lumaW);", "    FxaaFloat minWN = min(lumaN, lumaW);", "    FxaaFloat rangeMax = max(maxWN, maxESM);", "    FxaaFloat rangeMin = min(minWN, minESM);", "    FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;", "    FxaaFloat range = rangeMax - rangeMin;", "    FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);", "    FxaaBool earlyExit = range < rangeMaxClamped;", "/*--------------------------------------------------------------------------*/", "    if(earlyExit)", "        #if (FXAA_DISCARD == 1)", "            FxaaDiscard;", "        #else", "            return rgbyM;", "        #endif", "/*--------------------------------------------------------------------------*/", "    #if (FXAA_GATHER4_ALPHA == 0)", "        #if (FXAA_GLSL_100 == 1)", "          FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));", "        #else", "          FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));", "        #endif", "    #else", "        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));", "        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));", "    #endif", "/*--------------------------------------------------------------------------*/", "    FxaaFloat lumaNS = lumaN + lumaS;", "    FxaaFloat lumaWE = lumaW + lumaE;", "    FxaaFloat subpixRcpRange = 1.0/range;", "    FxaaFloat subpixNSWE = lumaNS + lumaWE;", "    FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;", "    FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat lumaNESE = lumaNE + lumaSE;", "    FxaaFloat lumaNWNE = lumaNW + lumaNE;", "    FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;", "    FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat lumaNWSW = lumaNW + lumaSW;", "    FxaaFloat lumaSWSE = lumaSW + lumaSE;", "    FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);", "    FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);", "    FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;", "    FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;", "    FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;", "    FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;", "    FxaaFloat lengthSign = fxaaQualityRcpFrame.x;", "    FxaaBool horzSpan = edgeHorz >= edgeVert;", "    FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;", "/*--------------------------------------------------------------------------*/", "    if(!horzSpan) lumaN = lumaW;", "    if(!horzSpan) lumaS = lumaE;", "    if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;", "    FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat gradientN = lumaN - lumaM;", "    FxaaFloat gradientS = lumaS - lumaM;", "    FxaaFloat lumaNN = lumaN + lumaM;", "    FxaaFloat lumaSS = lumaS + lumaM;", "    FxaaBool pairN = abs(gradientN) >= abs(gradientS);", "    FxaaFloat gradient = max(abs(gradientN), abs(gradientS));", "    if(pairN) lengthSign = -lengthSign;", "    FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);", "/*--------------------------------------------------------------------------*/", "    FxaaFloat2 posB;", "    posB.x = posM.x;", "    posB.y = posM.y;", "    FxaaFloat2 offNP;", "    offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;", "    offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;", "    if(!horzSpan) posB.x += lengthSign * 0.5;", "    if( horzSpan) posB.y += lengthSign * 0.5;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat2 posN;", "    posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;", "    posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;", "    FxaaFloat2 posP;", "    posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;", "    posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;", "    FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;", "    FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));", "    FxaaFloat subpixE = subpixC * subpixC;", "    FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));", "/*--------------------------------------------------------------------------*/", "    if(!pairN) lumaNN = lumaSS;", "    FxaaFloat gradientScaled = gradient * 1.0/4.0;", "    FxaaFloat lumaMM = lumaM - lumaNN * 0.5;", "    FxaaFloat subpixF = subpixD * subpixE;", "    FxaaBool lumaMLTZero = lumaMM < 0.0;", "/*--------------------------------------------------------------------------*/", "    lumaEndN -= lumaNN * 0.5;", "    lumaEndP -= lumaNN * 0.5;", "    FxaaBool doneN = abs(lumaEndN) >= gradientScaled;", "    FxaaBool doneP = abs(lumaEndP) >= gradientScaled;", "    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;", "    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;", "    FxaaBool doneNP = (!doneN) || (!doneP);", "    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;", "    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;", "/*--------------------------------------------------------------------------*/", "    if(doneNP) {", "        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "        doneN = abs(lumaEndN) >= gradientScaled;", "        doneP = abs(lumaEndP) >= gradientScaled;", "        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;", "        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;", "        doneNP = (!doneN) || (!doneP);", "        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;", "        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;", "/*--------------------------------------------------------------------------*/", "        #if (FXAA_QUALITY_PS > 3)", "        if(doneNP) {", "            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "            doneN = abs(lumaEndN) >= gradientScaled;", "            doneP = abs(lumaEndP) >= gradientScaled;", "            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;", "            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;", "            doneNP = (!doneN) || (!doneP);", "            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;", "            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;", "/*--------------------------------------------------------------------------*/", "            #if (FXAA_QUALITY_PS > 4)", "            if(doneNP) {", "                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                doneN = abs(lumaEndN) >= gradientScaled;", "                doneP = abs(lumaEndP) >= gradientScaled;", "                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;", "                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;", "                doneNP = (!doneN) || (!doneP);", "                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;", "                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;", "/*--------------------------------------------------------------------------*/", "                #if (FXAA_QUALITY_PS > 5)", "                if(doneNP) {", "                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                    doneN = abs(lumaEndN) >= gradientScaled;", "                    doneP = abs(lumaEndP) >= gradientScaled;", "                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;", "                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;", "                    doneNP = (!doneN) || (!doneP);", "                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;", "                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;", "/*--------------------------------------------------------------------------*/", "                    #if (FXAA_QUALITY_PS > 6)", "                    if(doneNP) {", "                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                        doneN = abs(lumaEndN) >= gradientScaled;", "                        doneP = abs(lumaEndP) >= gradientScaled;", "                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;", "                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;", "                        doneNP = (!doneN) || (!doneP);", "                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;", "                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;", "/*--------------------------------------------------------------------------*/", "                        #if (FXAA_QUALITY_PS > 7)", "                        if(doneNP) {", "                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                            doneN = abs(lumaEndN) >= gradientScaled;", "                            doneP = abs(lumaEndP) >= gradientScaled;", "                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;", "                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;", "                            doneNP = (!doneN) || (!doneP);", "                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;", "                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;", "/*--------------------------------------------------------------------------*/", "    #if (FXAA_QUALITY_PS > 8)", "    if(doneNP) {", "        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "        doneN = abs(lumaEndN) >= gradientScaled;", "        doneP = abs(lumaEndP) >= gradientScaled;", "        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;", "        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;", "        doneNP = (!doneN) || (!doneP);", "        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;", "        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;", "/*--------------------------------------------------------------------------*/", "        #if (FXAA_QUALITY_PS > 9)", "        if(doneNP) {", "            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "            doneN = abs(lumaEndN) >= gradientScaled;", "            doneP = abs(lumaEndP) >= gradientScaled;", "            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;", "            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;", "            doneNP = (!doneN) || (!doneP);", "            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;", "            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;", "/*--------------------------------------------------------------------------*/", "            #if (FXAA_QUALITY_PS > 10)", "            if(doneNP) {", "                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                doneN = abs(lumaEndN) >= gradientScaled;", "                doneP = abs(lumaEndP) >= gradientScaled;", "                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;", "                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;", "                doneNP = (!doneN) || (!doneP);", "                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;", "                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;", "/*--------------------------------------------------------------------------*/", "                #if (FXAA_QUALITY_PS > 11)", "                if(doneNP) {", "                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                    doneN = abs(lumaEndN) >= gradientScaled;", "                    doneP = abs(lumaEndP) >= gradientScaled;", "                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;", "                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;", "                    doneNP = (!doneN) || (!doneP);", "                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;", "                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;", "/*--------------------------------------------------------------------------*/", "                    #if (FXAA_QUALITY_PS > 12)", "                    if(doneNP) {", "                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                        doneN = abs(lumaEndN) >= gradientScaled;", "                        doneP = abs(lumaEndP) >= gradientScaled;", "                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;", "                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;", "                        doneNP = (!doneN) || (!doneP);", "                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;", "                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;", "/*--------------------------------------------------------------------------*/", "                    }", "                    #endif", "/*--------------------------------------------------------------------------*/", "                }", "                #endif", "/*--------------------------------------------------------------------------*/", "            }", "            #endif", "/*--------------------------------------------------------------------------*/", "        }", "        #endif", "/*--------------------------------------------------------------------------*/", "    }", "    #endif", "/*--------------------------------------------------------------------------*/", "                        }", "                        #endif", "/*--------------------------------------------------------------------------*/", "                    }", "                    #endif", "/*--------------------------------------------------------------------------*/", "                }", "                #endif", "/*--------------------------------------------------------------------------*/", "            }", "            #endif", "/*--------------------------------------------------------------------------*/", "        }", "        #endif", "/*--------------------------------------------------------------------------*/", "    }", "/*--------------------------------------------------------------------------*/", "    FxaaFloat dstN = posM.x - posN.x;", "    FxaaFloat dstP = posP.x - posM.x;", "    if(!horzSpan) dstN = posM.y - posN.y;", "    if(!horzSpan) dstP = posP.y - posM.y;", "/*--------------------------------------------------------------------------*/", "    FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;", "    FxaaFloat spanLength = (dstP + dstN);", "    FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;", "    FxaaFloat spanLengthRcp = 1.0/spanLength;", "/*--------------------------------------------------------------------------*/", "    FxaaBool directionN = dstN < dstP;", "    FxaaFloat dst = min(dstN, dstP);", "    FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;", "    FxaaFloat subpixG = subpixF * subpixF;", "    FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;", "    FxaaFloat subpixH = subpixG * fxaaQualitySubpix;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;", "    FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);", "    if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;", "    if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;", "    #if (FXAA_DISCARD == 1)", "        return FxaaTexTop(tex, posM);", "    #else", "        return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);", "    #endif", "}", "/*==========================================================================*/", "#endif", "", "void main() {", "  gl_FragColor = FxaaPixelShader(", "    vUv,", "    vec4(0.0),", "    tDiffuse,", "    tDiffuse,", "    tDiffuse,", "    resolution,", "    vec4(0.0),", "    vec4(0.0),", "    vec4(0.0),", "    0.75,", "    0.166,", "    0.0833,", "    0.0,", "    0.0,", "    0.0,", "    vec4(0.0)", "  );", "", "  // TODO avoid querying texture twice for same texel", "  gl_FragColor.a = texture2D(tDiffuse, vUv).a;", "}"].join("\n")

};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author bhouston / http://clara.io/
 *
 * Luminosity
 * http://en.wikipedia.org/wiki/Luminosity
 */

THREE.LuminosityHighPassShader = {

		shaderID: "luminosityHighPass",

		uniforms: {

				"tDiffuse": { type: "t", value: null },
				"luminosityThreshold": { type: "f", value: 1.0 },
				"smoothWidth": { type: "f", value: 1.0 },
				"defaultColor": { type: "c", value: new THREE.Color(0x000000) },
				"defaultOpacity": { type: "f", value: 0.0 }

		},

		vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

		fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;", "uniform float defaultOpacity;", "uniform float luminosityThreshold;", "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );", "float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );", "gl_FragColor = mix( outputColor, texel, alpha );", "}"].join("\n")

};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.mobilecheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function (scene, camera, overrideMaterial, clearColor, clearAlpha) {

		THREE.Pass.call(this);

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = clearAlpha !== undefined ? clearAlpha : 0;

		this.clear = true;
		this.clearDepth = false;
		this.needsSwap = false;
};

THREE.RenderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

		constructor: THREE.RenderPass,

		render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

				var oldAutoClear = renderer.autoClear;
				renderer.autoClear = false;

				this.scene.overrideMaterial = this.overrideMaterial;

				var oldClearColor, oldClearAlpha;

				if (this.clearColor) {

						oldClearColor = renderer.getClearColor().getHex();
						oldClearAlpha = renderer.getClearAlpha();

						renderer.setClearColor(this.clearColor, this.clearAlpha);
				}

				if (this.clearDepth) {

						renderer.clearDepth();
				}

				renderer.render(this.scene, this.camera, this.renderToScreen ? null : readBuffer, this.clear);

				if (this.clearColor) {

						renderer.setClearColor(oldClearColor, oldClearAlpha);
				}

				this.scene.overrideMaterial = null;
				renderer.autoClear = oldAutoClear;
		}

});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function (shader, textureID) {

	THREE.Pass.call(this);

	this.textureID = textureID !== undefined ? textureID : "tDiffuse";

	if (shader instanceof THREE.ShaderMaterial) {

		this.uniforms = shader.uniforms;

		this.material = shader;
	} else if (shader) {

		this.uniforms = THREE.UniformsUtils.clone(shader.uniforms);

		this.material = new THREE.ShaderMaterial({

			defines: shader.defines || {},
			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		});
	}

	this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
	this.scene = new THREE.Scene();

	this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add(this.quad);
};

THREE.ShaderPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

	constructor: THREE.ShaderPass,

	render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

		if (this.uniforms[this.textureID]) {

			this.uniforms[this.textureID].value = readBuffer.texture;
		}

		this.quad.material = this.material;

		if (this.renderToScreen) {

			renderer.render(this.scene, this.camera);
		} else {

			renderer.render(this.scene, this.camera, writeBuffer, this.clear);
		}
	}

});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author spidersharma / http://eduperiment.com/
 *
 * Inspired from Unreal Engine
 * https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/
 */
THREE.UnrealBloomPass = function (resolution, strength, radius, threshold) {

	THREE.Pass.call(this);

	this.strength = strength !== undefined ? strength : 1;
	this.radius = radius;
	this.threshold = threshold;
	this.resolution = resolution !== undefined ? new THREE.Vector2(resolution.x, resolution.y) : new THREE.Vector2(256, 256);

	// render targets
	var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat };
	this.renderTargetsHorizontal = [];
	this.renderTargetsVertical = [];
	this.nMips = 5;
	var resx = Math.round(this.resolution.x / 2);
	var resy = Math.round(this.resolution.y / 2);

	this.renderTargetBright = new THREE.WebGLRenderTarget(resx, resy, pars);
	this.renderTargetBright.texture.name = "UnrealBloomPass.bright";
	this.renderTargetBright.texture.generateMipmaps = false;

	for (var i = 0; i < this.nMips; i++) {

		var renderTarget = new THREE.WebGLRenderTarget(resx, resy, pars);

		renderTarget.texture.name = "UnrealBloomPass.h" + i;
		renderTarget.texture.generateMipmaps = false;

		this.renderTargetsHorizontal.push(renderTarget);

		var renderTarget = new THREE.WebGLRenderTarget(resx, resy, pars);

		renderTarget.texture.name = "UnrealBloomPass.v" + i;
		renderTarget.texture.generateMipmaps = false;

		this.renderTargetsVertical.push(renderTarget);

		resx = Math.round(resx / 2);

		resy = Math.round(resy / 2);
	}

	// luminosity high pass material

	if (THREE.LuminosityHighPassShader === undefined) console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");

	var highPassShader = THREE.LuminosityHighPassShader;
	this.highPassUniforms = THREE.UniformsUtils.clone(highPassShader.uniforms);

	this.highPassUniforms["luminosityThreshold"].value = threshold;
	this.highPassUniforms["smoothWidth"].value = 0.01;

	this.materialHighPassFilter = new THREE.ShaderMaterial({
		uniforms: this.highPassUniforms,
		vertexShader: highPassShader.vertexShader,
		fragmentShader: highPassShader.fragmentShader,
		defines: {}
	});

	// Gaussian Blur Materials
	this.separableBlurMaterials = [];
	var kernelSizeArray = [3, 5, 7, 9, 11];
	var resx = Math.round(this.resolution.x / 2);
	var resy = Math.round(this.resolution.y / 2);

	for (var i = 0; i < this.nMips; i++) {

		this.separableBlurMaterials.push(this.getSeperableBlurMaterial(kernelSizeArray[i]));

		this.separableBlurMaterials[i].uniforms["texSize"].value = new THREE.Vector2(resx, resy);

		resx = Math.round(resx / 2);

		resy = Math.round(resy / 2);
	}

	// Composite material
	this.compositeMaterial = this.getCompositeMaterial(this.nMips);
	this.compositeMaterial.uniforms["blurTexture1"].value = this.renderTargetsVertical[0].texture;
	this.compositeMaterial.uniforms["blurTexture2"].value = this.renderTargetsVertical[1].texture;
	this.compositeMaterial.uniforms["blurTexture3"].value = this.renderTargetsVertical[2].texture;
	this.compositeMaterial.uniforms["blurTexture4"].value = this.renderTargetsVertical[3].texture;
	this.compositeMaterial.uniforms["blurTexture5"].value = this.renderTargetsVertical[4].texture;
	this.compositeMaterial.uniforms["bloomStrength"].value = strength;
	this.compositeMaterial.uniforms["bloomRadius"].value = 0.1;
	this.compositeMaterial.needsUpdate = true;

	var bloomFactors = [1.0, 0.8, 0.6, 0.4, 0.2];
	this.compositeMaterial.uniforms["bloomFactors"].value = bloomFactors;
	this.bloomTintColors = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, 1)];
	this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;

	// copy material
	if (THREE.CopyShader === undefined) {

		console.error("THREE.BloomPass relies on THREE.CopyShader");
	}

	var copyShader = THREE.CopyShader;

	this.copyUniforms = THREE.UniformsUtils.clone(copyShader.uniforms);
	this.copyUniforms["opacity"].value = 1.0;

	this.materialCopy = new THREE.ShaderMaterial({
		uniforms: this.copyUniforms,
		vertexShader: copyShader.vertexShader,
		fragmentShader: copyShader.fragmentShader,
		blending: THREE.AdditiveBlending,
		depthTest: false,
		depthWrite: false,
		transparent: true
	});

	this.enabled = true;
	this.needsSwap = false;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
	this.scene = new THREE.Scene();

	this.basic = new THREE.MeshBasicMaterial();

	this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add(this.quad);
};

THREE.UnrealBloomPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {

	constructor: THREE.UnrealBloomPass,

	dispose: function dispose() {

		for (var i = 0; i < this.renderTargetsHorizontal.length; i++) {

			this.renderTargetsHorizontal[i].dispose();
		}

		for (var i = 0; i < this.renderTargetsVertical.length; i++) {

			this.renderTargetsVertical[i].dispose();
		}

		this.renderTargetBright.dispose();
	},

	setSize: function setSize(width, height) {

		var resx = Math.round(width / 2);
		var resy = Math.round(height / 2);

		this.renderTargetBright.setSize(resx, resy);

		for (var i = 0; i < this.nMips; i++) {

			this.renderTargetsHorizontal[i].setSize(resx, resy);
			this.renderTargetsVertical[i].setSize(resx, resy);

			this.separableBlurMaterials[i].uniforms["texSize"].value = new THREE.Vector2(resx, resy);

			resx = Math.round(resx / 2);
			resy = Math.round(resy / 2);
		}
	},

	render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {

		this.oldClearColor.copy(renderer.getClearColor());
		this.oldClearAlpha = renderer.getClearAlpha();
		var oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		renderer.setClearColor(new THREE.Color(0, 0, 0), 0);

		if (maskActive) renderer.context.disable(renderer.context.STENCIL_TEST);

		// Render input to screen

		if (this.renderToScreen) {

			this.quad.material = this.basic;
			this.basic.map = readBuffer.texture;

			renderer.render(this.scene, this.camera, undefined, true);
		}

		// 1. Extract Bright Areas

		this.highPassUniforms["tDiffuse"].value = readBuffer.texture;
		this.highPassUniforms["luminosityThreshold"].value = this.threshold;
		this.quad.material = this.materialHighPassFilter;

		renderer.render(this.scene, this.camera, this.renderTargetBright, true);

		// 2. Blur All the mips progressively

		var inputRenderTarget = this.renderTargetBright;

		for (var i = 0; i < this.nMips; i++) {

			this.quad.material = this.separableBlurMaterials[i];

			this.separableBlurMaterials[i].uniforms["colorTexture"].value = inputRenderTarget.texture;
			this.separableBlurMaterials[i].uniforms["direction"].value = THREE.UnrealBloomPass.BlurDirectionX;
			renderer.render(this.scene, this.camera, this.renderTargetsHorizontal[i], true);

			this.separableBlurMaterials[i].uniforms["colorTexture"].value = this.renderTargetsHorizontal[i].texture;
			this.separableBlurMaterials[i].uniforms["direction"].value = THREE.UnrealBloomPass.BlurDirectionY;
			renderer.render(this.scene, this.camera, this.renderTargetsVertical[i], true);

			inputRenderTarget = this.renderTargetsVertical[i];
		}

		// Composite All the mips

		this.quad.material = this.compositeMaterial;
		this.compositeMaterial.uniforms["bloomStrength"].value = this.strength;
		this.compositeMaterial.uniforms["bloomRadius"].value = this.radius;
		this.compositeMaterial.uniforms["bloomTintColors"].value = this.bloomTintColors;

		renderer.render(this.scene, this.camera, this.renderTargetsHorizontal[0], true);

		// Blend it additively over the input texture

		this.quad.material = this.materialCopy;
		this.copyUniforms["tDiffuse"].value = this.renderTargetsHorizontal[0].texture;

		if (maskActive) renderer.context.enable(renderer.context.STENCIL_TEST);

		if (this.renderToScreen) {

			renderer.render(this.scene, this.camera, undefined, false);
		} else {

			renderer.render(this.scene, this.camera, readBuffer, false);
		}

		// Restore renderer settings

		renderer.setClearColor(this.oldClearColor, this.oldClearAlpha);
		renderer.autoClear = oldAutoClear;
	},

	getSeperableBlurMaterial: function getSeperableBlurMaterial(kernelRadius) {

		return new THREE.ShaderMaterial({

			defines: {
				"KERNEL_RADIUS": kernelRadius,
				"SIGMA": kernelRadius
			},

			uniforms: {
				"colorTexture": { value: null },
				"texSize": { value: new THREE.Vector2(0.5, 0.5) },
				"direction": { value: new THREE.Vector2(0.5, 0.5) }
			},

			vertexShader: "varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}",

			fragmentShader: "#include <common>\
				varying vec2 vUv;\n\
				uniform sampler2D colorTexture;\n\
				uniform vec2 texSize;\
				uniform vec2 direction;\
				\
				float gaussianPdf(in float x, in float sigma) {\
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\
				}\
				void main() {\n\
					vec2 invSize = 1.0 / texSize;\
					float fSigma = float(SIGMA);\
					float weightSum = gaussianPdf(0.0, fSigma);\
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {\
						float x = float(i);\
						float w = gaussianPdf(x, fSigma);\
						vec2 uvOffset = direction * invSize * x;\
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\
						diffuseSum += (sample1 + sample2) * w;\
						weightSum += 2.0 * w;\
					}\
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\
				}"
		});
	},

	getCompositeMaterial: function getCompositeMaterial(nMips) {

		return new THREE.ShaderMaterial({

			defines: {
				"NUM_MIPS": nMips
			},

			uniforms: {
				"blurTexture1": { value: null },
				"blurTexture2": { value: null },
				"blurTexture3": { value: null },
				"blurTexture4": { value: null },
				"blurTexture5": { value: null },
				"dirtTexture": { value: null },
				"bloomStrength": { value: 1.0 },
				"bloomFactors": { value: null },
				"bloomTintColors": { value: null },
				"bloomRadius": { value: 0.0 }
			},

			vertexShader: "varying vec2 vUv;\n\
				void main() {\n\
					vUv = uv;\n\
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\
				}",

			fragmentShader: "varying vec2 vUv;\
				uniform sampler2D blurTexture1;\
				uniform sampler2D blurTexture2;\
				uniform sampler2D blurTexture3;\
				uniform sampler2D blurTexture4;\
				uniform sampler2D blurTexture5;\
				uniform sampler2D dirtTexture;\
				uniform float bloomStrength;\
				uniform float bloomRadius;\
				uniform float bloomFactors[NUM_MIPS];\
				uniform vec3 bloomTintColors[NUM_MIPS];\
				\
				float lerpBloomFactor(const in float factor) { \
					float mirrorFactor = 1.2 - factor;\
					return mix(factor, mirrorFactor, bloomRadius);\
				}\
				\
				void main() {\
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \
													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \
													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \
													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \
													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\
				}"
		});
	}

});

THREE.UnrealBloomPass.BlurDirectionX = new THREE.Vector2(1.0, 0.0);
THREE.UnrealBloomPass.BlurDirectionY = new THREE.Vector2(0.0, 1.0);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

// modify shader depending on time of day
var hours = new Date().getHours();
var BLUE = 'BLUE';
var GOLD = 'GOLD';
var RED = 'RED';
var SHADER_TYPE = hours < 6 || hours >= 21 ? BLUE : hours == 12 ? GOLD : RED;

// for testing
if (window.location.hash == '#red') {
  SHADER_TYPE = RED;
} else if (window.location.hash == '#blue') {
  SHADER_TYPE = BLUE;
} else if (window.location.hash == '#gold') {
  SHADER_TYPE = GOLD;
}

THREE.MechanicsShader = {
  uniforms: {
    'time': { value: 0.0 },
    'width': { value: 100.0 },
    'height': { value: 100.0 },
    'tDiffuse': { value: null }
  },
  vertexShader: '\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ',
  fragmentShader: '\n    #define PI 3.14159\n    #define UV_SCALE 0.02\n    #define MAX_HEIGHT 4.0\n\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform float time;\n\n    float rand(vec2 seed) {\n      return fract(sin(dot(seed.xy, vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    vec2 randVec2() {\n      return vec2(rand(vUv + time), rand(vUv + time + 1.));\n    }\n\n    vec3 getPosition(vec2 coords) {\n      vec4 sample = texture2D(tDiffuse, coords);\n      vec3 res = vec3(coords.x / UV_SCALE, sample.x * MAX_HEIGHT, coords.y / UV_SCALE);\n      return res;\n    }\n\n    float computeAO(vec2 uvOff, vec3 P, vec3 N) {\n      vec3 Vpos = getPosition(vUv + uvOff * UV_SCALE) - P;\n      vec3 Vnorm = normalize(Vpos);\n      float dist = length(Vpos);\n      return max(dot(N, Vnorm) * (1.0 / (1.0 + dist)), 0.0);\n    }\n\n    float sampleAO(vec3 P) {\n      vec3 N = vec3(0., 1., 0.);\n      vec2 randOffset = randVec2();\n      const int iterations = 4;\n      float totalAO = 0.0;\n\n      for (int i=0; i<iterations; i++) {\n        vec2 coord1 = reflect(vec2(\n          (i < 2) ? ((i == 0) ? 1.0 : -1.0) : 0.0,\n          (i > 1) ? ((i == 2) ? 1.0 : -1.0) : 0.0\n        ), randOffset);\n        vec2 coord2 = vec2(\n          coord1.x * 0.707 - coord1.y * 0.707,\n          coord1.x * 0.707 + coord1.y * 0.707\n        );\n        totalAO += computeAO(coord1 * 0.25, P, N);\n        totalAO += computeAO(coord2 * 0.5, P, N);\n        totalAO += computeAO(coord1 * 0.75, P, N);\n        totalAO += computeAO(coord2, P, N);\n      }\n\n      return (totalAO / (float(iterations) * 4.));\n    }\n\n    void main() {\n      float minc = 0.0625;\n      //float invc = 0.9375;\n\n      vec4 tex = texture2D(tDiffuse, vUv);\n      vec3 P = getPosition(vUv);\n      float ao = sampleAO(P);\n      vec4 frag = max(tex - ao, minc);\n\n      ' + (SHADER_TYPE == RED ? "frag.r += ao * 0.5;" : SHADER_TYPE == BLUE ? "frag.g += ao * 0.2; frag.b += ao * 0.6;" : "frag.r += ao * 0.3; frag.g += ao * 0.2;") + '\n\n      gl_FragColor = frag;\n    }\n  '
};

// render pass
THREE.MechanicsPass = function (size) {
  THREE.Pass.call(this);

  this.shader = THREE.MechanicsShader;
  this.material = new THREE.ShaderMaterial(this.shader);
  this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  this.scene = new THREE.Scene();
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), this.material);
  this.quad.frustumCulled = false;
  this.scene.add(this.quad);
  this.time = 0;
};

THREE.MechanicsPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.MechanicsPass,
  render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
    this.shader.uniforms['tDiffuse'].value = readBuffer.texture;
    this.time = (this.time + delta) % 10.;
    this.shader.uniforms['time'].value = this.time;

    if (this.renderToScreen) {
      renderer.render(this.scene, this.camera);
    } else {
      renderer.render(this.scene, this.camera, writeBuffer, this.clear);
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

THREE.NoiseShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'time': { value: 0.0 }
  },
  vertexShader: '\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ',
  fragmentShader: '\n    varying vec2 vUv;\n    uniform float time;\n    uniform sampler2D tDiffuse;\n\n    float rand(vec2 seed) {\n      return fract(sin(dot(seed.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    void main() {\n      vec4 tex = texture2D(tDiffuse, vUv);\n      float scale = 1.0 - tex.r;\n      float r = tex.r + rand(vUv + time) * 0.04 * scale;\n      float g = tex.g + rand(vUv + time + 1.) * 0.04 * scale;\n      float b = tex.b + rand(vUv + time + 2.) * 0.06 * scale;\n      gl_FragColor = vec4(r, g, b, tex.a);\n    }\n  '
};

// render pass
THREE.NoisePass = function () {
  THREE.Pass.call(this);

  this.shader = THREE.NoiseShader;
  this.material = new THREE.ShaderMaterial(this.shader);
  this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  this.scene = new THREE.Scene();
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), this.material);
  this.quad.frustumCulled = false;
  this.time = 0;
  this.scene.add(this.quad);
};

THREE.NoisePass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.NoisePass,
  render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
    // limit time
    this.time = (this.time + delta) % 10.0;
    this.shader.uniforms['time'].value = this.time;

    // set texture
    this.shader.uniforms['tDiffuse'].value = readBuffer.texture;

    // render
    if (this.renderToScreen) {
      renderer.render(this.scene, this.camera);
    } else {
      renderer.render(this.scene, this.camera, writeBuffer, this.clear);
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

THREE.DepthShader = {
  uniforms: {},
  vertexShader: "\n    varying vec4 vModel;\n    varying vec3 vNormal;\n\n    void main() {\n      vNormal = normal;\n      vModel = modelMatrix * vec4(position, 1.0);\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);\n    }\n  ",
  fragmentShader: "\n    varying vec4 vModel;\n    varying vec3 vNormal;\n\n    void main() {\n      float minc = 0.0625;\n      float invc = 0.9375;\n\n      if (vModel.y <= 0.) {\n        gl_FragColor = vec4(minc, minc, minc, 1.0);\n      } else {\n        float t = (vModel.y >= 0.0) ? vModel.y / 3.0 : 0.0;\n        float d = (t <= 1.0) ? t : max(1.0 - 0.75 * (t - 1.0), 0.0);\n        d = d * invc + minc;\n        gl_FragColor = vec4(d, d, d, 1.0);\n      }\n    }\n  "
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @author meatbags / https://github.com/meatbags
  **/

THREE.PosterShader = {
  uniforms: {
    'tDiffuse': { value: null }
  },
  vertexShader: '\n    varying vec2 vUv;\n\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ',
  fragmentShader: '\n    #define PI 3.14159\n    #define UV_SCALE 0.02\n    #define MAX_HEIGHT 0.5\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n\n    float posterise(float val, float amount) {\n      return floor(val * amount) / amount;\n    }\n\n    float posteriseCeil(float val, float amount) {\n      return ceil(val * amount) / amount;\n    }\n\n    void main() {\n      vec4 frag = texture2D(tDiffuse, vUv);\n      frag.r = posterise(frag.r, 64.0);\n      //frag.g = posterise(frag.g, 128.0);\n      //frag.b = posterise(frag.b, 128.0);\n      gl_FragColor = frag;\n    }\n  '
};

// render pass
THREE.PosterPass = function (size) {
  THREE.Pass.call(this);
  this.size = size;
  this.shader = THREE.PosterShader;
  this.material = new THREE.ShaderMaterial(this.shader);
  this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  this.scene = new THREE.Scene();
  this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), this.material);
  this.quad.frustumCulled = false;
  this.scene.add(this.quad);
  this.time = 0;
};

THREE.PosterPass.prototype = Object.assign(Object.create(THREE.Pass.prototype), {
  constructor: THREE.PosterPass,
  render: function render(renderer, writeBuffer, readBuffer, delta, maskActive) {
    this.shader.uniforms['tDiffuse'].value = readBuffer.texture;
    if (this.renderToScreen) {
      renderer.render(this.scene, this.camera);
    } else {
      renderer.render(this.scene, this.camera, writeBuffer, this.clear);
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer2d = function () {
  function Renderer2d(domElement, width, height, camera) {
    _classCallCheck(this, Renderer2d);

    // 2d canvas overlay
    this.cvs = document.createElement('canvas');
    this.ctx = this.cvs.getContext('2d');
    this.cvs.width = width;
    this.cvs.height = height;
    this.ctx.font = '20px Playfair Display';
    this.camera = camera;

    // add to doc
    domElement.append(this.cvs);
  }

  _createClass(Renderer2d, [{
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.cvs.width = width;
      this.cvs.height = height;
    }
  }, {
    key: 'render',
    value: function render(delta, objects) {
      this.clear();
      for (var i = 0, len = objects.length; i < len; ++i) {
        objects[i].draw(this.ctx);
      }
      this.ctx.fillRect(0, 0, 20, 20);
    }
  }]);

  return Renderer2d;
}();

exports.Renderer2d = Renderer2d;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scene = __webpack_require__(22);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camera = __webpack_require__(23);

var _lighting = __webpack_require__(24);

var _player = __webpack_require__(25);

var _map = __webpack_require__(29);

var _raycaster = __webpack_require__(39);

var _input = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(domElement, width, height) {
    var _this = this;

    _classCallCheck(this, Scene);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x444444, 0.02);
    this.collider = new Collider.System();
    this.player = new _player.Player(domElement, this.scene, this.collider);
    this.camera = new _camera.Camera(width, height, this.player.position, this.player.rotation);
    this.lighting = new _lighting.Lighting(this.scene);
    this.map = new _map.Map(this.scene, this.collider, this.camera.getCamera(), width, height);
    this.raycaster = new _raycaster.Raycaster(domElement, this.camera.getCamera());
    this.mouse = new _input.Mouse(domElement, function (e) {
      _this.mouse.start(e);
    }, function (e) {
      _this.onMouseMove(e);
    }, function (e) {
      _this.onMouseUp(e);
    });
  }

  _createClass(Scene, [{
    key: 'getObjects2d',
    value: function getObjects2d() {
      return this.map.getObjects2d();
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      if (!this.mouse.isActive()) {
        this.map.activateObjects(this.raycaster.cast(e, this.map.getInteractive()));
      }
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      var t = new Date().getTime();
      this.mouse.stop();
      if (t - this.mouse.getTimestamp() < 100) {
        // do something
      }
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.camera.resize(width, height);
      this.map.resize(width, height);
      this.raycaster.resize();
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.player.update(delta);
      this.camera.update(delta);
      this.map.update(delta);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(width, height, position, rotation) {
    _classCallCheck(this, Camera);

    // perspective camera which tracks player movement
    this.position = position;
    this.rotation = rotation;
    this.fov = 75;
    this.aspectRatio = width / height;
    this.offset = 0.1;
    this.height = 2;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, 0.1, 1000);
    this.camera.up = new THREE.Vector3(0, 1, 0);
  }

  _createClass(Camera, [{
    key: "resize",
    value: function resize(width, height) {
      this.aspectRatio = width / height;
      this.camera.aspect = this.aspectRatio;
      this.camera.updateProjectionMatrix();
    }
  }, {
    key: "update",
    value: function update(delta) {
      var offsetXZ = this.offset - this.offset * Math.abs(Math.sin(this.rotation.pitch));
      var offsetY = this.offset;
      var y = this.position.y + this.height;
      this.camera.up.z = -Math.sin(this.rotation.yaw) * this.rotation.roll;
      this.camera.up.x = Math.cos(this.rotation.yaw) * this.rotation.roll;
      this.camera.position.set(this.position.x - Math.sin(this.rotation.yaw) * offsetXZ / 4, y - Math.sin(this.rotation.pitch) * offsetY / 4, this.position.z - Math.cos(this.rotation.yaw) * offsetXZ / 4);
      this.camera.lookAt(new THREE.Vector3(this.position.x + Math.sin(this.rotation.yaw) * offsetXZ, y + Math.sin(this.rotation.pitch) * offsetY, this.position.z + Math.cos(this.rotation.yaw) * offsetXZ));
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
/* 24 */
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
        //a: new THREE.PointLight(0xffffff, 1, 100, 2)
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
      //this.lights.point.a.position.set(10, 10, 10);
    }
  }]);

  return Lighting;
}();

exports.Lighting = Lighting;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _input = __webpack_require__(0);

var _maths = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(domElement, scene, colliderSystem) {
    var _this = this;

    _classCallCheck(this, Player);

    // handle player input
    this.scene = scene;
    this.colliderSystem = colliderSystem;
    this.domElement = domElement;
    var y = 10;
    this.position = new THREE.Vector3(0, y, 0);
    this.rotation = { pitch: 0, roll: 0, yaw: 0 };
    this.motion = new THREE.Vector3();
    this.target = {
      position: new THREE.Vector3(0, y, 0),
      rotation: { pitch: 0, roll: 0, yaw: 0 },
      motion: new THREE.Vector3()
    };
    this.collider = new Collider.Collider(this.target.position, this.motion);
    this.collider.setPhysics({ gravity: 20 });

    // physics attribs, all time in seconds, speeds in m/s
    this.speed = 8;
    this.rotationSpeed = Math.PI * 0.8;
    this.jump = 11;
    this.jumpSpeedMultiplier = 0.25;
    this.falling = false;
    this.fallTime = 0;
    this.fallTimeThreshold = 0.2;
    this.noclip = false;
    this.noclipSpeed = 30;
    this.minPitch = -Math.PI * 0.15;
    this.maxPitch = Math.PI * 0.15;
    this.adjust = {
      slow: 0.05,
      normal: 0.1,
      fast: 0.15,
      maximum: 0.3
    };

    // events
    this.keys = {};
    this.keyboard = new _input.Keyboard(function (key) {
      _this.onKeyboard(key);
    });
    this.hookMouse();

    // add to scene
    this.group = new THREE.Group();
    this.light = new THREE.PointLight(0xffffff, 0.25);
    this.light.position.y = 1.8;
    this.group.add(this.light);
    this.scene.add(this.group);
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
        case 'x':case 'X':
          this.keys.noclip = this.keyboard.keys[key];
          break;
        default:
          break;
      }
    }
  }, {
    key: 'move',
    value: function move(delta) {
      // key input to motion
      if (this.keys.left || this.keys.right) {
        var d = (this.keys.left ? 1 : 0) + (this.keys.right ? -1 : 0);
        this.target.rotation.yaw += d * this.rotationSpeed * delta;
      }

      if (this.keys.up || this.keys.down) {
        var speed = this.noclip ? this.noclipSpeed * (1 - Math.abs(Math.sin(this.target.rotation.pitch))) : this.speed;
        var dir = (this.keys.up ? 1 : 0) + (this.keys.down ? -1 : 0);
        this.target.motion.x = Math.sin(this.rotation.yaw) * speed * dir;
        this.target.motion.z = Math.cos(this.rotation.yaw) * speed * dir;
      } else {
        this.target.motion.x = 0;
        this.target.motion.z = 0;
      }

      if (this.keys.jump) {
        if (this.motion.y == 0 || this.fallTime < this.fallTimeThreshold) {
          this.motion.y = this.jump;
          this.fallTime = this.fallTimeThreshold;
        }
      }

      this.falling = this.motion.y != 0;
      this.fallTime = this.falling ? this.fallTime + delta : 0;

      // noclip
      if (this.keys.noclip) {
        this.keys.noclip = false;
        this.keyboard.release('x');
        this.noclip = this.noclip == false;
      }

      if (this.noclip) {
        this.falling = false;

        if (this.keys.up || this.keys.down) {
          var _d = (this.keys.up ? 1 : 0) + (this.keys.down ? -1 : 0);
          this.target.motion.y = Math.sin(this.target.rotation.pitch) * _d * this.noclipSpeed;
        } else {
          this.target.motion.y = 0;
        }

        this.motion.y = this.target.motion.y;
      }

      // reduce speed if falling
      if (!this.falling) {
        this.motion.x = this.target.motion.x;
        this.motion.z = this.target.motion.z;
      } else {
        this.motion.x = (0, _maths.Blend)(this.motion.x, this.target.motion.x, this.jumpSpeedMultiplier);
        this.motion.z = (0, _maths.Blend)(this.motion.z, this.target.motion.z, this.jumpSpeedMultiplier);
      }
    }
  }, {
    key: 'hookMouse',
    value: function hookMouse() {
      var _this2 = this;

      // hook up mouse events
      this.onDown = function (e) {
        _this2.mouse.start(e, _this2.rotation.pitch, _this2.rotation.yaw);
      };
      this.onMove = function (e) {
        if (_this2.mouse.isActive() && !(_this2.keys.left || _this2.keys.right)) {
          // click & drag
          _this2.mouse.move(e);
          _this2.target.rotation.yaw = _this2.mouse.getYaw();
          _this2.target.rotation.pitch = _this2.mouse.getPitch(_this2.minPitch, _this2.maxPitch);
        }
      };
      this.onUp = function (e) {
        _this2.mouse.stop();
      };
      this.mouse = new _input.Mouse(this.domElement, this.onDown, this.onMove, this.onUp);
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.move(delta);
      if (!this.noclip) {
        this.collider.move(delta, this.colliderSystem);
      } else {
        this.target.position.x += this.motion.x * delta;
        this.target.position.y += this.motion.y * delta;
        this.target.position.z += this.motion.z * delta;
      }
      this.position.x = (0, _maths.Blend)(this.position.x, this.target.position.x, this.adjust.maximum);
      this.position.y = (0, _maths.Blend)(this.position.y, this.target.position.y, this.adjust.maximum);
      this.position.z = (0, _maths.Blend)(this.position.z, this.target.position.z, this.adjust.maximum);
      this.rotation.yaw += (0, _maths.MinAngleBetween)(this.rotation.yaw, this.target.rotation.yaw) * this.adjust.fast;
      this.rotation.pitch = (0, _maths.Blend)(this.rotation.pitch, this.target.rotation.pitch, this.adjust.slow);
      this.group.position.set(this.position.x, this.position.y, this.position.z);
    }
  }]);

  return Player;
}();

;

exports.Player = Player;

/***/ }),
/* 26 */
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
    key: 'release',
    value: function release(key) {
      // force release
      this.keys[key] = false;
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mouse = function () {
  function Mouse(domElement, onDown, onMove, onUp) {
    _classCallCheck(this, Mouse);

    // mouse handler
    this.x = 0;
    this.y = 0;
    this.origin = new THREE.Vector2(0, 0);
    this.delta = new THREE.Vector2(0, 0);
    this.rotation = { pitch: 0, yaw: 0, roll: 0 };
    this.active = false;
    this.timestamp = 0;
    this.domElement = domElement;
    this.domElement.addEventListener('mousedown', onDown, false);
    this.domElement.addEventListener('mousemove', onMove, false);
    this.domElement.addEventListener('mouseup', onUp, false);
    this.domElement.addEventListener('mouseleave', onUp, false);
  }

  _createClass(Mouse, [{
    key: 'start',
    value: function start(e, pitch, yaw) {
      // set mouse position [-1, 1]
      this.active = true;
      var bound = this.domElement.getBoundingClientRect();
      this.origin.x = (e.clientX - bound.x) / bound.width * 2 - 1;
      this.origin.y = (e.clientY - bound.y) / bound.height * 2 - 1;
      this.rotation.pitch = pitch || 0;
      this.rotation.yaw = yaw || 0;
      this.timestamp = new Date().getTime();
    }
  }, {
    key: 'stop',
    value: function stop() {
      // flag off
      this.active = false;
    }
  }, {
    key: 'move',
    value: function move(e) {
      // move mouse
      var bound = this.domElement.getBoundingClientRect();
      this.x = (e.clientX - bound.x) / bound.width * 2 - 1;
      this.y = (e.clientY - bound.y) / bound.height * 2 - 1;
      this.delta.x = this.x - this.origin.x;
      this.delta.y = this.y - this.origin.y;
    }
  }, {
    key: 'getPitch',
    value: function getPitch(min, max) {
      // get clamped pitch
      var pitch = Math.max(min, Math.min(max, this.rotation.pitch + this.delta.y));
      if (pitch == min || pitch == max) {
        this.origin.y = this.y;
        this.rotation.pitch = pitch;
      }
      return pitch;
    }
  }, {
    key: 'getYaw',
    value: function getYaw() {
      return this.rotation.yaw + this.delta.x;
    }
  }, {
    key: 'getTimestamp',
    value: function getTimestamp() {
      return this.timestamp;
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return this.active;
    }
  }]);

  return Mouse;
}();

exports.Mouse = Mouse;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Blend = function Blend(a, b, factor) {
  return (b - a) * factor + a;
};

var MinAngleBetween = function MinAngleBetween(a1, a2) {
  return Math.atan2(Math.sin(a2 - a1), Math.cos(a2 - a1));
};

var Rand = function Rand(n) {
  return Math.random() * n - n / 2;
};

var TwoPI = Math.PI * 2;

exports.Blend = Blend;
exports.MinAngleBetween = MinAngleBetween;
exports.Rand = Rand;
exports.TwoPI = TwoPI;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loader = __webpack_require__(30);

var _conf = __webpack_require__(36);

var _maths = __webpack_require__(1);

var _text_node = __webpack_require__(38);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
  function Map(scene, collider, camera, width, height) {
    _classCallCheck(this, Map);

    // load map to scene
    this.scene = scene;
    this.collider = collider;
    this.camera = camera;
    this.cameraWorldDirection = new THREE.Vector3();
    this.centreX = width / 2;
    this.centreY = height / 2;
    this.interactive = [];
    this.loader = new _loader.LoadOBJ('./assets/');
    this.loadScene();
  }

  _createClass(Map, [{
    key: 'loadScene',
    value: function loadScene() {
      var _this = this;

      this.floor = new THREE.Mesh(new THREE.BoxBufferGeometry(200, 2, 200), _conf.Materials.default.clone());
      this.ceiling = new THREE.Mesh(new THREE.BoxBufferGeometry(200, 1, 200), _conf.Materials.default.clone());
      this.floor.position.y = 0;
      this.ceiling.position.y = 22.4;
      this.scene.add(this.floor, this.ceiling);
      this.collider.add(this.floor);

      // test grid
      for (var x = -50; x < 50; x += 8) {
        for (var z = -50; z < 50; z += 8) {
          var h = 1 + Math.random() * 2;
          var box = new THREE.Mesh(new THREE.BoxBufferGeometry(3, h, 3), _conf.Materials.default.clone());
          box.position.set(x, h / 2 - 0.1, z);
          this.collider.add(box);
          this.scene.add(box);
          this.interactive.push(box);
        }
      }

      // test model load
      this.loader.load('blob').then(function (map) {
        for (var x = -100; x < 101; x += 25) {
          for (var z = -100; z < 101; z += 25) {
            var clone = map.clone();
            clone.position.x = x;
            clone.position.z = z;
            _this.scene.add(clone);
          }
        }
        //this.scene.add(map);

        map.children.forEach(function (child) {
          _this.collider.add(new Collider.Mesh(child));
        });
      }, function (err) {
        console.warn('Load error:', err);
      });

      // test text nodes
      this.textNodes = [];
      for (var i = 0; i < 40; ++i) {
        var textNode = new _text_node.TextNode('Hello world.', (0, _maths.Rand)(100), 6 + (0, _maths.Rand)(10), (0, _maths.Rand)(100));
        this.textNodes.push(textNode);
        this.scene.add(textNode.mesh);
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      var t = 0.25;

      this.camera.getWorldDirection(this.cameraWorldDirection);
      for (var i = 0, len = this.textNodes.length; i < len; ++i) {
        this.textNodes[i].update(delta, this.camera, this.cameraWorldDirection, this.centreX, this.centreY);
      }

      for (var i = 0, len = this.interactive.length; i < len; ++i) {
        var box = this.interactive[i];
        if (box.active) {
          var c = (0, _maths.Blend)(box.material.emissive.r, 1, t);
          box.material.emissive.r = c;
          box.material.emissive.g = c;
          box.material.emissive.b = c;
        } else {
          var _c = (0, _maths.Blend)(box.material.emissive.r, 0, t);
          box.material.emissive.r = _c;
          box.material.emissive.g = _c;
          box.material.emissive.b = _c;
        }
      }
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.centreX = width / 2;
      this.centreY = height / 2;
    }
  }, {
    key: 'getObjects2d',
    value: function getObjects2d() {
      return this.textNodes;
    }
  }, {
    key: 'getInteractive',
    value: function getInteractive() {
      // get interactive objects
      return this.interactive;
    }
  }, {
    key: 'activateObjects',
    value: function activateObjects(objects) {
      for (var i = 0, len = this.interactive.length; i < len; ++i) {
        this.interactive[i].active = false;
      }
      if (objects.length) {
        objects[0].object.active = true;
      }
    }
  }]);

  return Map;
}();

exports.Map = Map;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _load_obj = __webpack_require__(31);

Object.keys(_load_obj).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _load_obj[key];
    }
  });
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadOBJ = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(32);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoadOBJ = function () {
  function LoadOBJ(path) {
    _classCallCheck(this, LoadOBJ);

    // load OBJ files
    this.path = path;
    this.materials = {};
    this.images = {};
    this.materialLoader = new THREE.MTLLoader();
    this.objectLoader = new THREE.OBJLoader();
    this.textureLoader = new THREE.TextureLoader();

    // conf
    this.bumpScale = 0.05;
    this.lightMapIntensity = 1;

    // set root
    this.materialLoader.setPath(this.path);
    this.objectLoader.setPath(this.path);
    this.textureLoader.setPath(this.path);
  }

  _createClass(LoadOBJ, [{
    key: 'load',
    value: function load(file) {
      var _this = this;

      // load OBJ from file
      return new Promise(function (resolve, reject) {
        try {
          _this.materialLoader.load(file + '.mtl', function (mtl) {
            // load mats async
            _this.preload(file, mtl.materialsInfo);
            _this.objectLoader.load(file + '.obj', function (obj) {
              obj.children.forEach(function (child) {
                _this.setMaterial(child, _this.materials[file]);
              });
              resolve(obj);
            });
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  }, {
    key: 'preload',
    value: function preload(key, meta) {
      // load materials from meta mat file
      this.materials[key] = {};

      for (var prop in meta) {
        if (meta.hasOwnProperty(prop)) {
          this.newMaterial(key, prop, meta[prop]);
        }
      }
    }
  }, {
    key: 'newMaterial',
    value: function newMaterial(key, target, prop) {
      // make new material from props
      this.materials[key][target] = new THREE.MeshPhongMaterial({});
      var mat = this.materials[key][target];

      // diffuse map (texture)
      if (prop.map_kd) {
        var tex_kd = this.textureLoader.load(prop.map_kd);
        mat.color = new THREE.Color(1, 1, 1);
        mat.map = tex_kd;

        if (prop.map_kd.indexOf('.png') != -1) {
          mat.transparent = true;
          mat.side = THREE.DoubleSide;
        }
      } else {
        // no diffuse map, set emissive to colour
        mat.emissive = new THREE.Color(prop.ka[0], prop.ka[1], prop.ka[2]);
      }

      // bump mapping
      if (prop.bump) {
        try {
          var opts = prop.bump.split(' ');
          var tex_bump = this.textureLoader.load(opts[0]);
          mat.bumpScale = parseFloat(opts[2]) * this.bumpScale;
          mat.bumpMap = tex_bump;
        } catch (err) {
          console.log('Bump map', err);
        }
      }

      // ambient map
      if (prop.map_ka) {
        mat.requireSecondUVSet = true;
        var tex_ka = this.textureLoader.load(prop.map_ka);
        mat.lightMap = tex_ka;
        mat.lightMapIntensity = this.lightMapIntensity;
      }
    }
  }, {
    key: 'setMaterial',
    value: function setMaterial(obj, materials) {
      // set material from materials
      if (materials[obj.material.name]) {
        obj.material = materials[obj.material.name];

        // copy uvs for lightmap
        if (obj.material.requireSecondUVSet) {
          obj.geometry.addAttribute('uv2', new THREE.BufferAttribute(obj.geometry.attributes.uv.array, 2));
        }
      }
    }
  }, {
    key: 'testLoad',
    value: function testLoad() {
      // test new loading funcs
      this.manager = THREE.DefaultLoadingManager;
      this.fileLoader = new THREE.FileLoader(this.manager);
      this.fileLoader.setPath(this.path);
      this.fileLoader.load('hangar_monday.mtl', function (res) {
        // console.log(res.split('\n'));
        // onLoad(this.parse(text));
      }, function () {}, function (err) {
        console.warn(err);
      });
    }
  }]);

  return LoadOBJ;
}();

exports.LoadOBJ = LoadOBJ;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 *
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or to be any version in Binary format.
 *
 * Supports:
 * 	Mesh Generation (Positional Data)
 * 	Normal Data (Per Vertex Drawing Instance)
 *	UV Data (Per Vertex Drawing Instance)
 *	Skinning
 *	Animation
 * 	- Separated Animations based on stacks.
 * 	- Skeletal & Non-Skeletal Animations
 *	NURBS (Open, Closed and Periodic forms)
 *
 * Needs Support:
 * 	Indexed Buffers
 * 	PreRotation support.
 *	Euler rotation order
 *
 * FBX format references:
 * 	https://wiki.blender.org/index.php/User:Mont29/Foundation/FBX_File_Structure
 *
 * 	Binary format specification:
 *		https://code.blender.org/2013/08/fbx-binary-file-format-specification/
 *		https://wiki.rogiken.org/specifications/file-format/fbx/ (more detail but Japanese)
 *
 *
 * Modifications
 * @author github.com/meatbags
 *
 * Added support for Maya 2018 Stingray PBR Shaders -> MeshStandardMaterial
 */

(function () {
		THREE.FBXLoader = function (manager) {
				this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
		};

		Object.assign(THREE.FBXLoader.prototype, {
				load: function load(url, onLoad, onProgress, onError) {
						var self = this;
						var resourceDirectory = THREE.LoaderUtils.extractUrlBase(url); //THREE.Loader.prototype.extractUrlBase( url );
						var loader = new THREE.FileLoader(this.manager);
						loader.setResponseType('arraybuffer');
						loader.load(url, function (buffer) {
								try {
										var scene = self.parse(buffer, resourceDirectory);
										onLoad(scene);
								} catch (error) {
										window.setTimeout(function () {
												if (onError) onError(error);
												self.manager.itemError(url);
										}, 0);
								}
						}, onProgress, onError);
				},

				parse: function parse(FBXBuffer, resourceDirectory) {
						var FBXTree;
						if (isFbxFormatBinary(FBXBuffer)) {
								FBXTree = new BinaryParser().parse(FBXBuffer);
						} else {
								var FBXText = convertArrayBufferToString(FBXBuffer);
								if (!isFbxFormatASCII(FBXText)) {
										throw new Error('THREE.FBXLoader: Unknown format.');
								}
								if (getFbxVersion(FBXText) < 7000) {
										throw new Error('THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion(FBXText));
								}
								FBXTree = new TextParser().parse(FBXText);
						}

						var connections = parseConnections(FBXTree);
						var images = parseImages(FBXTree);
						var textures = parseTextures(FBXTree, new THREE.TextureLoader(this.manager).setPath(resourceDirectory), images, connections);
						var materials = parseMaterials(FBXTree, textures, connections);
						var deformers = parseDeformers(FBXTree, connections);
						var geometryMap = parseGeometries(FBXTree, connections, deformers);
						var sceneGraph = parseScene(FBXTree, connections, deformers, geometryMap, materials);
						return sceneGraph;
				}

		});

		// Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
		// and details the connection type
		function parseConnections(FBXTree) {
				var connectionMap = new Map();
				if ('Connections' in FBXTree) {
						var connectionArray = FBXTree.Connections.properties.connections;
						for (var connectionArrayIndex = 0, connectionArrayLength = connectionArray.length; connectionArrayIndex < connectionArrayLength; ++connectionArrayIndex) {
								var connection = connectionArray[connectionArrayIndex];
								if (!connectionMap.has(connection[0])) {
										connectionMap.set(connection[0], {
												parents: [],
												children: []
										});
								}
								var parentRelationship = { ID: connection[1], relationship: connection[2] };
								connectionMap.get(connection[0]).parents.push(parentRelationship);
								if (!connectionMap.has(connection[1])) {
										connectionMap.set(connection[1], {
												parents: [],
												children: []
										});
								}

								var childRelationship = { ID: connection[0], relationship: connection[2] };
								connectionMap.get(connection[1]).children.push(childRelationship);
						}
				}

				return connectionMap;
		}

		// Parses map of images referenced in FBXTree.Objects.subNodes.Video
		// Images can either be referenced externally or embedded in the file
		// These images are connected to textures in FBXTree.Objects.subNodes.Textures
		// via FBXTree.Connections. Note that images can be duplicated here, in which case only one
		// will will have a .Content field
		function parseImages(FBXTree) {

				var imageMap = new Map();

				if ('Video' in FBXTree.Objects.subNodes) {

						var videoNodes = FBXTree.Objects.subNodes.Video;

						for (var nodeID in videoNodes) {

								var videoNode = videoNodes[nodeID];

								// raw image data is in videoNode.properties.Content
								if ('Content' in videoNode.properties) {

										var image = parseImage(videoNodes[nodeID]);
										imageMap.set(parseInt(nodeID), image);
								}
						}
				}

				return imageMap;
		}

		// Parse embedded image data in FBXTree.Video.properties.Content
		function parseImage(videoNode) {

				var content = videoNode.properties.Content;
				var fileName = videoNode.properties.RelativeFilename || videoNode.properties.Filename;
				var extension = fileName.slice(fileName.lastIndexOf('.') + 1).toLowerCase();

				var type;

				switch (extension) {

						case 'bmp':

								type = 'image/bmp';
								break;

						case 'jpg':
						case 'jpeg':

								type = 'image/jpeg';
								break;

						case 'png':

								type = 'image/png';
								break;

						case 'tif':

								type = 'image/tiff';
								break;

						default:

								console.warn('FBXLoader: Image type "' + extension + '" is not supported.');
								return;

				}

				if (typeof content === 'string') {

						return 'data:' + type + ';base64,' + content;
				} else {

						var array = new Uint8Array(content);
						return window.URL.createObjectURL(new Blob([array], { type: type }));
				}
		}

		// Parse nodes in FBXTree.Objects.subNodes.Texture
		// These contain details such as UV scaling, cropping, rotation etc and are connected
		// to images in FBXTree.Objects.subNodes.Video
		function parseTextures(FBXTree, loader, imageMap, connections) {

				var textureMap = new Map();
				var extensionWhitelist = ['jpg', 'jpeg', 'png', 'bmp'];

				if ('Texture' in FBXTree.Objects.subNodes) {

						var textureNodes = FBXTree.Objects.subNodes.Texture;

						for (var nodeID in textureNodes) {
								var textureNode = textureNodes[nodeID];
								var extension = textureNode.properties.FileName.slice(textureNode.properties.FileName.lastIndexOf('.') + 1).toLowerCase();
								if (extensionWhitelist.indexOf(extension) != -1) {
										var texture = parseTexture(textureNode, loader, imageMap, connections);
										textureMap.set(parseInt(nodeID), texture);
								}
						}
				}

				return textureMap;
		}

		// Parse individual node in FBXTree.Objects.subNodes.Texture
		function parseTexture(textureNode, loader, imageMap, connections) {

				var FBX_ID = textureNode.id;
				var name = textureNode.attrName;
				var fileName;
				var filePath = textureNode.properties.FileName;

				var relativeFilePath = textureNode.properties.RelativeFilename;
				var children = connections.get(FBX_ID).children;

				if (children !== undefined && children.length > 0 && imageMap.has(children[0].ID)) {
						fileName = imageMap.get(children[0].ID);
				} else if (relativeFilePath !== undefined && relativeFilePath[0] !== '/' && relativeFilePath.match(/^[a-zA-Z]:/) === null) {

						// use textureNode.properties.RelativeFilename
						// if it exists and it doesn't seem an absolute path

						fileName = relativeFilePath;
				} else {

						var split = filePath.split(/[\\\/]/);

						if (split.length > 0) {

								fileName = split[split.length - 1];
						} else {

								fileName = filePath;
						}
				}

				var currentPath = loader.path;

				if (fileName.indexOf('blob:') === 0 || fileName.indexOf('data:') === 0) {

						loader.setPath(undefined);
				}

				var texture = loader.load(fileName);
				texture.name = name;
				texture.FBX_ID = FBX_ID;

				var wrapModeU = textureNode.properties.WrapModeU;
				var wrapModeV = textureNode.properties.WrapModeV;

				var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
				var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

				// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
				// 0: repeat(default), 1: clamp

				texture.wrapS = valueU === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
				texture.wrapT = valueV === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

				if ('Scaling' in textureNode.properties) {

						var values = textureNode.properties.Scaling.value;

						texture.repeat.x = values[0];
						texture.repeat.y = values[1];
				}

				loader.setPath(currentPath);

				return texture;
		}

		// Parse nodes in FBXTree.Objects.subNodes.Material
		function parseMaterials(FBXTree, textureMap, connections) {
				var materialMap = new Map();

				if ('Material' in FBXTree.Objects.subNodes) {

						var materialNodes = FBXTree.Objects.subNodes.Material;
						for (var nodeID in materialNodes) {

								var material = parseMaterial(materialNodes[nodeID], textureMap, connections);
								if (material !== null) materialMap.set(parseInt(nodeID), material);
						}
				}

				return materialMap;
		}

		// Parse single node in FBXTree.Objects.subNodes.Material
		// Materials are connected to texture maps in FBXTree.Objects.subNodes.Textures
		// FBX format currently only supports Lambert and Phong shading models
		function parseMaterial(materialNode, textureMap, connections) {

				//console.log('NODE', materialNode, textureMap, connections);

				var FBX_ID = materialNode.id;
				var name = materialNode.attrName;
				var type = materialNode.properties.ShadingModel;

				// Case where FBX wraps shading model in property object.
				if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object') {
						type = type.value;
				}

				// Ignore unused materials which don't have any connections.
				if (!connections.has(FBX_ID)) return null;

				var children = connections.get(FBX_ID).children;

				var parameters = parseParameters(materialNode.properties, textureMap, children);
				var material;

				switch (type.toLowerCase()) {
						case 'phong':
								material = new THREE.MeshPhongMaterial();
								break;
						case 'lambert':
								material = new THREE.MeshLambertMaterial();
								break;
						case 'unknown':
								material = new THREE.MeshStandardMaterial();
								break;
						default:
								console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type);
								material = new THREE.MeshPhongMaterial({ color: 0x3300ff });
								break;
				}

				material.setValues(parameters);
				material.name = name;

				return material;
		}

		// Parse FBX material and return parameters suitable for a three.js material
		// Also parse the texture map and return any textures associated with the material
		function parseParameters(properties, textureMap, childrenRelationships) {
				var parameters = {};

				if (properties.BumpFactor) {
						parameters.bumpScale = properties.BumpFactor.value;
				}
				if (properties.Diffuse) {
						parameters.color = parseColor(properties.Diffuse);
				}
				if (properties.DisplacementFactor) {
						parameters.displacementScale = properties.DisplacementFactor.value;
				}
				if (properties.ReflectionFactor) {
						parameters.reflectivity = properties.ReflectionFactor.value;
				}
				if (properties.Specular) {
						parameters.specular = parseColor(properties.Specular);
				}
				if (properties.Shininess) {
						parameters.shininess = properties.Shininess.value;
				}
				if (properties.Emissive) {
						parameters.emissive = parseColor(properties.Emissive);
				}
				if (properties.EmissiveFactor) {
						parameters.emissiveIntensity = parseFloat(properties.EmissiveFactor.value);
				}
				if (properties.Opacity) {
						parameters.opacity = parseFloat(properties.Opacity.value);
				}
				if (parameters.opacity < 1.0) {
						parameters.transparent = true;
				}

				// Maya PBR export
				if (properties['Maya|base_color']) {
						var c = properties['Maya|base_color'].value;
						parameters.color = new THREE.Color(c[0], c[1], c[2]);
				}
				if (properties['Maya|emissive']) {
						var c = properties['Maya|emissive'];
						parameters.emissive = new THREE.Color(c[0], c[1], c[2]);
				}
				if (properties['Maya|emissive_intensity']) {
						parameters.emissiveIntensity = properties['Maya|emissive_intensity'].value;
				}
				if (properties['Maya|metallic']) {
						parameters.metalness = properties['Maya|metallic'].value;
				}
				if (properties['Maya|roughness']) {
						parameters.roughness = properties['Maya|roughness'].value;
				}

				// UV scale
				var uvScale = 1;
				if (properties['Maya|uv_scale']) {
						var uvScale = properties['Maya|uv_scale'].value;
				}

				for (var childrenRelationshipsIndex = 0, childrenRelationshipsLength = childrenRelationships.length; childrenRelationshipsIndex < childrenRelationshipsLength; ++childrenRelationshipsIndex) {
						var relationship = childrenRelationships[childrenRelationshipsIndex];
						var type = relationship.relationship;

						switch (type) {
								// Maya PBR material exports
								//case 'Maya|base_color':
								case 'Maya|TEX_color_map':
										var prop = 'Maya|use_color_map';
										if (properties[prop] && properties[prop].value == 1) {
												parameters.map = textureMap.get(relationship.ID);

												if (uvScale != 1) {
														parameters.map.wrapS = THREE.RepeatWrapping;
														parameters.map.wrapT = THREE.RepeatWrapping;
														parameters.map.repeat.set(uvScale, uvScale);
												}
										}
										break;
								case 'Maya|TEX_emissive_map':
										var prop = 'Maya|use_emissive_map';
										if (properties[prop] && properties[prop].value == 1) {
												parameters.emissiveMap = textureMap.get(relationship.ID);

												if (uvScale != 1) {
														parameters.emissiveMap.wrapS = THREE.RepeatWrapping;
														parameters.emissiveMap.wrapT = THREE.RepeatWrapping;
														parameters.emissiveMap.repeat.set(uvScale, uvScale);
												}
										}
										break;
								case 'Maya|TEX_roughness_map':
										var prop = 'Maya|use_roughness_map';
										if (properties[prop] && properties[prop].value == 1) {
												parameters.roughnessMap = textureMap.get(relationship.ID);

												if (uvScale != 1) {
														parameters.roughnessMap.wrapS = THREE.RepeatWrapping;
														parameters.roughnessMap.wrapT = THREE.RepeatWrapping;
														parameters.roughnessMap.repeat.set(uvScale, uvScale);
												}
										}
										break;
								case 'Maya|TEX_normal_map':
										var prop = 'Maya|use_normal_map';
										if (properties[prop] && properties[prop].value == 1) {
												parameters.normalMap = textureMap.get(relationship.ID);

												if (uvScale != 1) {
														parameters.normalMap.wrapS = THREE.RepeatWrapping;
														parameters.normalMap.wrapT = THREE.RepeatWrapping;
														parameters.normalMap.repeat.set(uvScale, uvScale);
												}
										}
										break;
								case 'Maya|TEX_metallic_map':
										var prop = 'Maya|use_metallic_map';
										if (properties[prop] && properties[prop].value == 1) {
												parameters.metalnessMap = textureMap.get(relationship.ID);

												if (uvScale != 1) {
														parameters.metalnessMap.wrapS = THREE.RepeatWrapping;
														parameters.metalnessMap.wrapT = THREE.RepeatWrapping;
														parameters.metalnessMap.repeat.set(uvScale, uvScale);
												}
										}
										break;
								case 'Maya|TEX_ao_map':
										var prop = 'Maya|use_ao_map';
										if (properties[prop] && properties[prop].value == 1) {
												parameters.aoMap = textureMap.get(relationship.ID);

												if (uvScale != 1) {
														parameters.aoMap.wrapS = THREE.RepeatWrapping;
														parameters.aoMap.wrapT = THREE.RepeatWrapping;
														parameters.aoMap.repeat.set(uvScale, uvScale);
												}
										}
										break;
								case 'Maya|TEX_brdf_lut':
								case 'Maya|TEX_global_specular_cube':
								case 'Maya|TEX_global_diffuse_cube':
										break;

								case 'Bump':
										parameters.bumpMap = textureMap.get(relationship.ID);
										break;
								case 'DiffuseColor':
										parameters.map = textureMap.get(relationship.ID);
										break;
								case 'DisplacementColor':
										parameters.displacementMap = textureMap.get(relationship.ID);
										break;
								case 'EmissiveColor':
										parameters.emissiveMap = textureMap.get(relationship.ID);
										break;
								case 'NormalMap':
										parameters.normalMap = textureMap.get(relationship.ID);
										break;
								case 'ReflectionColor':
										parameters.envMap = textureMap.get(relationship.ID);
										parameters.envMap.mapping = THREE.EquirectangularReflectionMapping;
										break;
								case 'SpecularColor':
										parameters.specularMap = textureMap.get(relationship.ID);
										break;
								case 'TransparentColor':
										parameters.alphaMap = textureMap.get(relationship.ID);
										parameters.transparent = true;
										break;
								case 'AmbientColor':
								case 'ShininessExponent': // AKA glossiness map
								case 'SpecularFactor': // AKA specularLevel
								case 'VectorDisplacementColor': // NOTE: Seems to be a copy of DisplacementColor
								default:
										console.warn('THREE.FBXLoader: %s map is not supported in three.js, skipping texture.', type);
										break;

						}
				}

				return parameters;
		}

		// Parse nodes in FBXTree.Objects.subNodes.Deformer
		// Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
		// Generates map of Skeleton-like objects for use later when generating and binding skeletons.
		function parseDeformers(FBXTree, connections) {

				var deformers = {};

				if ('Deformer' in FBXTree.Objects.subNodes) {

						var DeformerNodes = FBXTree.Objects.subNodes.Deformer;

						for (var nodeID in DeformerNodes) {

								var deformerNode = DeformerNodes[nodeID];

								if (deformerNode.attrType === 'Skin') {

										var conns = connections.get(parseInt(nodeID));
										var skeleton = parseSkeleton(conns, DeformerNodes);
										skeleton.FBX_ID = parseInt(nodeID);

										deformers[nodeID] = skeleton;
								}
						}
				}

				return deformers;
		}

		// Parse single nodes in FBXTree.Objects.subNodes.Deformer
		// Generates a "Skeleton Representation" of FBX nodes based on an FBX Skin Deformer's connections
		// and an object containing SubDeformer nodes.
		function parseSkeleton(connections, DeformerNodes) {

				var subDeformers = {};
				var children = connections.children;

				for (var i = 0, l = children.length; i < l; ++i) {

						var child = children[i];

						var subDeformerNode = DeformerNodes[child.ID];

						var subDeformer = {
								FBX_ID: child.ID,
								index: i,
								indices: [],
								weights: [],
								transform: new THREE.Matrix4().fromArray(subDeformerNode.subNodes.Transform.properties.a),
								transformLink: new THREE.Matrix4().fromArray(subDeformerNode.subNodes.TransformLink.properties.a),
								linkMode: subDeformerNode.properties.Mode
						};

						if ('Indexes' in subDeformerNode.subNodes) {

								subDeformer.indices = subDeformerNode.subNodes.Indexes.properties.a;
								subDeformer.weights = subDeformerNode.subNodes.Weights.properties.a;
						}

						subDeformers[child.ID] = subDeformer;
				}

				return {
						map: subDeformers,
						bones: []
				};
		}

		// Parse nodes in FBXTree.Objects.subNodes.Geometry
		function parseGeometries(FBXTree, connections, deformers) {

				var geometryMap = new Map();

				if ('Geometry' in FBXTree.Objects.subNodes) {

						var geometryNodes = FBXTree.Objects.subNodes.Geometry;

						for (var nodeID in geometryNodes) {

								var relationships = connections.get(parseInt(nodeID));
								var geo = parseGeometry(geometryNodes[nodeID], relationships, deformers);
								geometryMap.set(parseInt(nodeID), geo);
						}
				}

				return geometryMap;
		}

		// Parse single node in FBXTree.Objects.subNodes.Geometry
		function parseGeometry(geometryNode, relationships, deformers) {

				switch (geometryNode.attrType) {

						case 'Mesh':
								return parseMeshGeometry(geometryNode, relationships, deformers);
								break;

						case 'NurbsCurve':
								return parseNurbsGeometry(geometryNode);
								break;

				}
		}

		// Parse single node mesh geometry in FBXTree.Objects.subNodes.Geometry
		function parseMeshGeometry(geometryNode, relationships, deformers) {

				for (var i = 0; i < relationships.children.length; ++i) {

						var deformer = deformers[relationships.children[i].ID];
						if (deformer !== undefined) break;
				}

				return genGeometry(geometryNode, deformer);
		}

		// Generate a THREE.BufferGeometry from a node in FBXTree.Objects.subNodes.Geometry
		function genGeometry(geometryNode, deformer) {

				var subNodes = geometryNode.subNodes;

				var vertexPositions = subNodes.Vertices.properties.a;
				var vertexIndices = subNodes.PolygonVertexIndex.properties.a;

				// create arrays to hold the final data used to build the buffergeometry
				var vertexBuffer = [];
				var normalBuffer = [];
				var colorsBuffer = [];
				var uvsBuffer = [];
				var materialIndexBuffer = [];
				var vertexWeightsBuffer = [];
				var weightsIndicesBuffer = [];

				if (subNodes.LayerElementColor) {

						var colorInfo = getColors(subNodes.LayerElementColor[0]);
				}

				if (subNodes.LayerElementMaterial) {

						var materialInfo = getMaterials(subNodes.LayerElementMaterial[0]);
				}

				if (subNodes.LayerElementNormal) {

						var normalInfo = getNormals(subNodes.LayerElementNormal[0]);
				}

				if (subNodes.LayerElementUV) {

						var uvInfo = [];
						var i = 0;
						while (subNodes.LayerElementUV[i]) {

								uvInfo.push(getUVs(subNodes.LayerElementUV[i]));
								i++;
						}
				}

				var weightTable = {};

				if (deformer) {

						var subDeformers = deformer.map;

						for (var key in subDeformers) {

								var subDeformer = subDeformers[key];
								var indices = subDeformer.indices;

								for (var j = 0; j < indices.length; j++) {

										var index = indices[j];
										var weight = subDeformer.weights[j];

										if (weightTable[index] === undefined) weightTable[index] = [];

										weightTable[index].push({
												id: subDeformer.index,
												weight: weight
										});
								}
						}
				}

				var polygonIndex = 0;
				var faceLength = 0;
				var displayedWeightsWarning = false;

				// these will hold data for a single face
				var vertexPositionIndexes = [];
				var faceNormals = [];
				var faceColors = [];
				var faceUVs = [];
				var faceWeights = [];
				var faceWeightIndices = [];

				for (var polygonVertexIndex = 0; polygonVertexIndex < vertexIndices.length; polygonVertexIndex++) {

						var vertexIndex = vertexIndices[polygonVertexIndex];

						var endOfFace = false;

						// Face index and vertex index arrays are combined in a single array
						// A cube with quad faces looks like this:
						// PolygonVertexIndex: *24 {
						//  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
						//  }
						// Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
						// to find index of last vertex multiply by -1 and subtract 1: -3 * - 1 - 1 = 2
						if (vertexIndex < 0) {

								vertexIndex = vertexIndex ^ -1; // equivalent to ( x * -1 ) - 1
								vertexIndices[polygonVertexIndex] = vertexIndex;
								endOfFace = true;
						}

						var weightIndices = [];
						var weights = [];

						vertexPositionIndexes.push(vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2);

						if (colorInfo) {

								var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, colorInfo);

								faceColors.push(data[0], data[1], data[2]);
						}

						if (deformer) {

								if (weightTable[vertexIndex] !== undefined) {

										var array = weightTable[vertexIndex];

										for (var j = 0, jl = array.length; j < jl; j++) {

												weights.push(array[j].weight);
												weightIndices.push(array[j].id);
										}
								}

								if (weights.length > 4) {

										if (!displayedWeightsWarning) {

												console.warn('THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.');
												displayedWeightsWarning = true;
										}

										var WIndex = [0, 0, 0, 0];
										var Weight = [0, 0, 0, 0];

										weights.forEach(function (weight, weightIndex) {

												var currentWeight = weight;
												var currentIndex = weightIndices[weightIndex];

												Weight.forEach(function (comparedWeight, comparedWeightIndex, comparedWeightArray) {

														if (currentWeight > comparedWeight) {

																comparedWeightArray[comparedWeightIndex] = currentWeight;
																currentWeight = comparedWeight;

																var tmp = WIndex[comparedWeightIndex];
																WIndex[comparedWeightIndex] = currentIndex;
																currentIndex = tmp;
														}
												});
										});

										weightIndices = WIndex;
										weights = Weight;
								}

								// if the weight array is shorter than 4 pad with 0s
								for (var i = weights.length; i < 4; ++i) {

										weights[i] = 0;
										weightIndices[i] = 0;
								}

								for (var i = 0; i < 4; ++i) {

										faceWeights.push(weights[i]);
										faceWeightIndices.push(weightIndices[i]);
								}
						}

						if (normalInfo) {

								var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, normalInfo);

								faceNormals.push(data[0], data[1], data[2]);
						}

						if (uvInfo) {

								for (var i = 0; i < uvInfo.length; i++) {

										var data = getData(polygonVertexIndex, polygonIndex, vertexIndex, uvInfo[i]);

										if (faceUVs[i] === undefined) {

												faceUVs[i] = [];
										}

										faceUVs[i].push(data[0], data[1]);
								}
						}

						faceLength++;

						// we have reached the end of a face - it may have 4 sides though
						// in which case the data is split into to represent 3 sides faces
						if (endOfFace) {

								for (var i = 2; i < faceLength; i++) {

										vertexBuffer.push(vertexPositions[vertexPositionIndexes[0]]);
										vertexBuffer.push(vertexPositions[vertexPositionIndexes[1]]);
										vertexBuffer.push(vertexPositions[vertexPositionIndexes[2]]);

										vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i - 1) * 3]]);
										vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i - 1) * 3 + 1]]);
										vertexBuffer.push(vertexPositions[vertexPositionIndexes[(i - 1) * 3 + 2]]);

										vertexBuffer.push(vertexPositions[vertexPositionIndexes[i * 3]]);
										vertexBuffer.push(vertexPositions[vertexPositionIndexes[i * 3 + 1]]);
										vertexBuffer.push(vertexPositions[vertexPositionIndexes[i * 3 + 2]]);
								}

								if (deformer) {

										for (var i = 2; i < faceLength; i++) {

												vertexWeightsBuffer.push(faceWeights[0]);
												vertexWeightsBuffer.push(faceWeights[1]);
												vertexWeightsBuffer.push(faceWeights[2]);
												vertexWeightsBuffer.push(faceWeights[3]);

												vertexWeightsBuffer.push(faceWeights[(i - 1) * 4]);
												vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 1]);
												vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 2]);
												vertexWeightsBuffer.push(faceWeights[(i - 1) * 4 + 3]);

												vertexWeightsBuffer.push(faceWeights[i * 4]);
												vertexWeightsBuffer.push(faceWeights[i * 4 + 1]);
												vertexWeightsBuffer.push(faceWeights[i * 4 + 2]);
												vertexWeightsBuffer.push(faceWeights[i * 4 + 3]);

												weightsIndicesBuffer.push(faceWeightIndices[0]);
												weightsIndicesBuffer.push(faceWeightIndices[1]);
												weightsIndicesBuffer.push(faceWeightIndices[2]);
												weightsIndicesBuffer.push(faceWeightIndices[3]);

												weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4]);
												weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 1]);
												weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 2]);
												weightsIndicesBuffer.push(faceWeightIndices[(i - 1) * 4 + 3]);

												weightsIndicesBuffer.push(faceWeightIndices[i * 4]);
												weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 1]);
												weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 2]);
												weightsIndicesBuffer.push(faceWeightIndices[i * 4 + 3]);
										}
								}

								if (normalInfo) {

										for (var i = 2; i < faceLength; i++) {

												normalBuffer.push(faceNormals[0]);
												normalBuffer.push(faceNormals[1]);
												normalBuffer.push(faceNormals[2]);

												normalBuffer.push(faceNormals[(i - 1) * 3]);
												normalBuffer.push(faceNormals[(i - 1) * 3 + 1]);
												normalBuffer.push(faceNormals[(i - 1) * 3 + 2]);

												normalBuffer.push(faceNormals[i * 3]);
												normalBuffer.push(faceNormals[i * 3 + 1]);
												normalBuffer.push(faceNormals[i * 3 + 2]);
										}
								}

								if (uvInfo) {

										for (var j = 0; j < uvInfo.length; j++) {

												if (uvsBuffer[j] === undefined) uvsBuffer[j] = [];

												for (var i = 2; i < faceLength; i++) {

														uvsBuffer[j].push(faceUVs[j][0]);
														uvsBuffer[j].push(faceUVs[j][1]);

														uvsBuffer[j].push(faceUVs[j][(i - 1) * 2]);
														uvsBuffer[j].push(faceUVs[j][(i - 1) * 2 + 1]);

														uvsBuffer[j].push(faceUVs[j][i * 2]);
														uvsBuffer[j].push(faceUVs[j][i * 2 + 1]);
												}
										}
								}

								if (colorInfo) {

										for (var i = 2; i < faceLength; i++) {

												colorsBuffer.push(faceColors[0]);
												colorsBuffer.push(faceColors[1]);
												colorsBuffer.push(faceColors[2]);

												colorsBuffer.push(faceColors[(i - 1) * 3]);
												colorsBuffer.push(faceColors[(i - 1) * 3 + 1]);
												colorsBuffer.push(faceColors[(i - 1) * 3 + 2]);

												colorsBuffer.push(faceColors[i * 3]);
												colorsBuffer.push(faceColors[i * 3 + 1]);
												colorsBuffer.push(faceColors[i * 3 + 2]);
										}
								}

								if (materialInfo && materialInfo.mappingType !== 'AllSame') {

										var materialIndex = getData(polygonVertexIndex, polygonIndex, vertexIndex, materialInfo)[0];

										for (var i = 2; i < faceLength; i++) {

												materialIndexBuffer.push(materialIndex);
												materialIndexBuffer.push(materialIndex);
												materialIndexBuffer.push(materialIndex);
										}
								}

								polygonIndex++;

								endOfFace = false;
								faceLength = 0;

								// reset arrays for the next face
								vertexPositionIndexes = [];
								faceNormals = [];
								faceColors = [];
								faceUVs = [];
								faceWeights = [];
								faceWeightIndices = [];
						}
				}

				var geo = new THREE.BufferGeometry();
				geo.name = geometryNode.name;

				geo.addAttribute('position', new THREE.Float32BufferAttribute(vertexBuffer, 3));

				if (colorsBuffer.length > 0) {

						geo.addAttribute('color', new THREE.Float32BufferAttribute(colorsBuffer, 3));
				}

				if (deformer) {

						geo.addAttribute('skinIndex', new THREE.Float32BufferAttribute(weightsIndicesBuffer, 4));

						geo.addAttribute('skinWeight', new THREE.Float32BufferAttribute(vertexWeightsBuffer, 4));

						// used later to bind the skeleton to the model
						geo.FBX_Deformer = deformer;
				}

				if (normalBuffer.length > 0) {

						geo.addAttribute('normal', new THREE.Float32BufferAttribute(normalBuffer, 3));
				}
				if (uvsBuffer.length > 0) {

						for (var i = 0; i < uvsBuffer.length; i++) {

								var name = 'uv' + (i + 1).toString();
								if (i == 0) {

										name = 'uv';
								}

								geo.addAttribute(name, new THREE.Float32BufferAttribute(uvsBuffer[i], 2));
						}
				}

				if (materialInfo && materialInfo.mappingType !== 'AllSame') {

						// Convert the material indices of each vertex into rendering groups on the geometry.
						var prevMaterialIndex = materialIndexBuffer[0];
						var startIndex = 0;

						for (var i = 0; i < materialIndexBuffer.length; ++i) {

								if (materialIndexBuffer[i] !== prevMaterialIndex) {

										geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);

										prevMaterialIndex = materialIndexBuffer[i];
										startIndex = i;
								}
						}

						// the loop above doesn't add the last group, do that here.
						if (geo.groups.length > 0) {

								var lastGroup = geo.groups[geo.groups.length - 1];
								var lastIndex = lastGroup.start + lastGroup.count;

								if (lastIndex !== materialIndexBuffer.length) {

										geo.addGroup(lastIndex, materialIndexBuffer.length - lastIndex, prevMaterialIndex);
								}
						}

						// case where there are multiple materials but the whole geometry is only
						// using one of them
						if (geo.groups.length === 0) {

								geo.addGroup(0, materialIndexBuffer.length, materialIndexBuffer[0]);
						}
				}

				return geo;
		}

		// Parse normal from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementNormal if it exists
		function getNormals(NormalNode) {

				var mappingType = NormalNode.properties.MappingInformationType;
				var referenceType = NormalNode.properties.ReferenceInformationType;
				var buffer = NormalNode.subNodes.Normals.properties.a;
				var indexBuffer = [];
				if (referenceType === 'IndexToDirect') {

						if ('NormalIndex' in NormalNode.subNodes) {

								indexBuffer = NormalNode.subNodes.NormalIndex.properties.a;
						} else if ('NormalsIndex' in NormalNode.subNodes) {

								indexBuffer = NormalNode.subNodes.NormalsIndex.properties.a;
						}
				}

				return {
						dataSize: 3,
						buffer: buffer,
						indices: indexBuffer,
						mappingType: mappingType,
						referenceType: referenceType
				};
		}

		// Parse UVs from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementUV if it exists
		function getUVs(UVNode) {

				var mappingType = UVNode.properties.MappingInformationType;
				var referenceType = UVNode.properties.ReferenceInformationType;
				var buffer = UVNode.subNodes.UV.properties.a;
				var indexBuffer = [];
				if (referenceType === 'IndexToDirect') {

						indexBuffer = UVNode.subNodes.UVIndex.properties.a;
				}

				return {
						dataSize: 2,
						buffer: buffer,
						indices: indexBuffer,
						mappingType: mappingType,
						referenceType: referenceType
				};
		}

		// Parse Vertex Colors from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementColor if it exists
		function getColors(ColorNode) {

				var mappingType = ColorNode.properties.MappingInformationType;
				var referenceType = ColorNode.properties.ReferenceInformationType;
				var buffer = ColorNode.subNodes.Colors.properties.a;
				var indexBuffer = [];
				if (referenceType === 'IndexToDirect') {

						indexBuffer = ColorNode.subNodes.ColorIndex.properties.a;
				}

				return {
						dataSize: 4,
						buffer: buffer,
						indices: indexBuffer,
						mappingType: mappingType,
						referenceType: referenceType
				};
		}

		// Parse mapping and material data in FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementMaterial if it exists
		function getMaterials(MaterialNode) {

				var mappingType = MaterialNode.properties.MappingInformationType;
				var referenceType = MaterialNode.properties.ReferenceInformationType;

				if (mappingType === 'NoMappingInformation') {

						return {
								dataSize: 1,
								buffer: [0],
								indices: [0],
								mappingType: 'AllSame',
								referenceType: referenceType
						};
				}

				var materialIndexBuffer = MaterialNode.subNodes.Materials.properties.a;

				// Since materials are stored as indices, there's a bit of a mismatch between FBX and what
				// we expect.So we create an intermediate buffer that points to the index in the buffer,
				// for conforming with the other functions we've written for other data.
				var materialIndices = [];

				for (var materialIndexBufferIndex = 0, materialIndexBufferLength = materialIndexBuffer.length; materialIndexBufferIndex < materialIndexBufferLength; ++materialIndexBufferIndex) {

						materialIndices.push(materialIndexBufferIndex);
				}

				return {
						dataSize: 1,
						buffer: materialIndexBuffer,
						indices: materialIndices,
						mappingType: mappingType,
						referenceType: referenceType
				};
		}

		// Functions use the infoObject and given indices to return value array of geometry.
		// infoObject can be materialInfo, normalInfo, UVInfo or colorInfo
		// polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
		// polygonIndex - Index of polygon in geometry.
		// vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
		var dataArray = [];

		var GetData = {

				ByPolygonVertex: {

						Direct: function Direct(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

								var from = polygonVertexIndex * infoObject.dataSize;
								var to = polygonVertexIndex * infoObject.dataSize + infoObject.dataSize;

								// return infoObject.buffer.slice( from, to );
								return slice(dataArray, infoObject.buffer, from, to);
						},

						IndexToDirect: function IndexToDirect(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

								var index = infoObject.indices[polygonVertexIndex];
								var from = index * infoObject.dataSize;
								var to = index * infoObject.dataSize + infoObject.dataSize;

								// return infoObject.buffer.slice( from, to );
								return slice(dataArray, infoObject.buffer, from, to);
						}

				},

				ByPolygon: {

						Direct: function Direct(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

								var from = polygonIndex * infoObject.dataSize;
								var to = polygonIndex * infoObject.dataSize + infoObject.dataSize;

								// return infoObject.buffer.slice( from, to );
								return slice(dataArray, infoObject.buffer, from, to);
						},

						IndexToDirect: function IndexToDirect(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

								var index = infoObject.indices[polygonIndex];
								var from = index * infoObject.dataSize;
								var to = index * infoObject.dataSize + infoObject.dataSize;

								// return infoObject.buffer.slice( from, to );
								return slice(dataArray, infoObject.buffer, from, to);
						}

				},

				ByVertice: {

						Direct: function Direct(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

								var from = vertexIndex * infoObject.dataSize;
								var to = vertexIndex * infoObject.dataSize + infoObject.dataSize;

								// return infoObject.buffer.slice( from, to );
								return slice(dataArray, infoObject.buffer, from, to);
						}

				},

				AllSame: {

						IndexToDirect: function IndexToDirect(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

								var from = infoObject.indices[0] * infoObject.dataSize;
								var to = infoObject.indices[0] * infoObject.dataSize + infoObject.dataSize;

								// return infoObject.buffer.slice( from, to );
								return slice(dataArray, infoObject.buffer, from, to);
						}

				}

		};

		function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {

				return GetData[infoObject.mappingType][infoObject.referenceType](polygonVertexIndex, polygonIndex, vertexIndex, infoObject);
		}

		// Generate a NurbGeometry from a node in FBXTree.Objects.subNodes.Geometry
		function parseNurbsGeometry(geometryNode) {

				if (THREE.NURBSCurve === undefined) {

						console.error('THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.');
						return new THREE.BufferGeometry();
				}

				var order = parseInt(geometryNode.properties.Order);

				if (isNaN(order)) {

						console.error('THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geometryNode.properties.Order, geometryNode.id);
						return new THREE.BufferGeometry();
				}

				var degree = order - 1;

				var knots = geometryNode.subNodes.KnotVector.properties.a;
				var controlPoints = [];
				var pointsValues = geometryNode.subNodes.Points.properties.a;

				for (var i = 0, l = pointsValues.length; i < l; i += 4) {

						controlPoints.push(new THREE.Vector4().fromArray(pointsValues, i));
				}

				var startKnot, endKnot;

				if (geometryNode.properties.Form === 'Closed') {

						controlPoints.push(controlPoints[0]);
				} else if (geometryNode.properties.Form === 'Periodic') {

						startKnot = degree;
						endKnot = knots.length - 1 - startKnot;

						for (var i = 0; i < degree; ++i) {

								controlPoints.push(controlPoints[i]);
						}
				}

				var curve = new THREE.NURBSCurve(degree, knots, controlPoints, startKnot, endKnot);
				var vertices = curve.getPoints(controlPoints.length * 7);

				var positions = new Float32Array(vertices.length * 3);

				for (var i = 0, l = vertices.length; i < l; ++i) {

						vertices[i].toArray(positions, i * 3);
				}

				var geometry = new THREE.BufferGeometry();
				geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));

				return geometry;
		}

		// parse nodes in FBXTree.Objects.subNodes.Model and generate a THREE.Group
		function parseScene(FBXTree, connections, deformers, geometryMap, materialMap) {

				var sceneGraph = new THREE.Group();

				var ModelNode = FBXTree.Objects.subNodes.Model;

				var modelArray = [];

				var modelMap = new Map();

				for (var nodeID in ModelNode) {

						var id = parseInt(nodeID);
						var node = ModelNode[nodeID];
						var conns = connections.get(id);
						var model = null;

						for (var i = 0; i < conns.parents.length; ++i) {

								for (var FBX_ID in deformers) {

										var deformer = deformers[FBX_ID];
										var subDeformers = deformer.map;
										var subDeformer = subDeformers[conns.parents[i].ID];

										if (subDeformer) {

												var model2 = model;
												model = new THREE.Bone();
												deformer.bones[subDeformer.index] = model;

												// seems like we need this not to make non-connected bone, maybe?
												// TODO: confirm
												if (model2 !== null) model.add(model2);
										}
								}
						}

						if (!model) {

								switch (node.attrType) {

										// create a THREE.PerspectiveCamera or THREE.OrthographicCamera
										case 'Camera':

												var cameraAttribute;

												for (var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++childrenIndex) {

														var childID = conns.children[childrenIndex].ID;

														var attr = FBXTree.Objects.subNodes.NodeAttribute[childID];

														if (attr !== undefined && attr.properties !== undefined) {

																cameraAttribute = attr.properties;
														}
												}

												if (cameraAttribute === undefined) {

														model = new THREE.Object3D();
												} else {

														var type = 0;
														if (cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1) {

																type = 1;
														}

														var nearClippingPlane = 1;
														if (cameraAttribute.NearPlane !== undefined) {

																nearClippingPlane = cameraAttribute.NearPlane.value / 1000;
														}

														var farClippingPlane = 1000;
														if (cameraAttribute.FarPlane !== undefined) {

																farClippingPlane = cameraAttribute.FarPlane.value / 1000;
														}

														var width = window.innerWidth;
														var height = window.innerHeight;

														if (cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined) {

																width = cameraAttribute.AspectWidth.value;
																height = cameraAttribute.AspectHeight.value;
														}

														var aspect = width / height;

														var fov = 45;
														if (cameraAttribute.FieldOfView !== undefined) {

																fov = cameraAttribute.FieldOfView.value;
														}

														switch (type) {

																case 0:
																		// Perspective
																		model = new THREE.PerspectiveCamera(fov, aspect, nearClippingPlane, farClippingPlane);
																		break;

																case 1:
																		// Orthographic
																		model = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, nearClippingPlane, farClippingPlane);
																		break;

																default:
																		console.warn('THREE.FBXLoader: Unknown camera type ' + type + '.');
																		model = new THREE.Object3D();
																		break;

														}
												}

												break;

										// Create a THREE.DirectionalLight, THREE.PointLight or THREE.SpotLight
										case 'Light':

												var lightAttribute;

												for (var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++childrenIndex) {

														var childID = conns.children[childrenIndex].ID;

														var attr = FBXTree.Objects.subNodes.NodeAttribute[childID];

														if (attr !== undefined && attr.properties !== undefined) {

																lightAttribute = attr.properties;
														}
												}

												if (lightAttribute === undefined) {

														model = new THREE.Object3D();
												} else {

														var type;

														// LightType can be undefined for Point lights
														if (lightAttribute.LightType === undefined) {

																type = 0;
														} else {

																type = lightAttribute.LightType.value;
														}

														var color = 0xffffff;

														if (lightAttribute.Color !== undefined) {

																color = parseColor(lightAttribute.Color.value);
														}

														var intensity = lightAttribute.Intensity === undefined ? 1 : lightAttribute.Intensity.value / 100;

														// light disabled
														if (lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0) {

																intensity = 0;
														}

														var distance = 0;
														if (lightAttribute.FarAttenuationEnd !== undefined) {

																if (lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0) {

																		distance = 0;
																} else {

																		distance = lightAttribute.FarAttenuationEnd.value / 1000;
																}
														}

														// TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
														var decay = 1;

														switch (type) {

																case 0:
																		// Point
																		model = new THREE.PointLight(color, intensity, distance, decay);
																		break;

																case 1:
																		// Directional
																		model = new THREE.DirectionalLight(color, intensity);
																		break;

																case 2:
																		// Spot
																		var angle = Math.PI / 3;

																		if (lightAttribute.InnerAngle !== undefined) {

																				angle = THREE.Math.degToRad(lightAttribute.InnerAngle.value);
																		}

																		var penumbra = 0;
																		if (lightAttribute.OuterAngle !== undefined) {

																				// TODO: this is not correct - FBX calculates outer and inner angle in degrees
																				// with OuterAngle > InnerAngle && OuterAngle <= Math.PI
																				// while three.js uses a penumbra between (0, 1) to attenuate the inner angle
																				penumbra = THREE.Math.degToRad(lightAttribute.OuterAngle.value);
																				penumbra = Math.max(penumbra, 1);
																		}

																		model = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
																		break;

																default:
																		console.warn('THREE.FBXLoader: Unknown light type ' + lightAttribute.LightType.value + ', defaulting to a THREE.PointLight.');
																		model = new THREE.PointLight(color, intensity);
																		break;

														}

														if (lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1) {

																model.castShadow = true;
														}
												}

												break;

										case 'Mesh':

												var geometry = null;
												var material = null;
												var materials = [];

												for (var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++childrenIndex) {

														var child = conns.children[childrenIndex];

														if (geometryMap.has(child.ID)) {

																geometry = geometryMap.get(child.ID);
														}

														if (materialMap.has(child.ID)) {

																materials.push(materialMap.get(child.ID));
														}
												}
												if (materials.length > 1) {

														material = materials;
												} else if (materials.length > 0) {

														material = materials[0];
												} else {

														material = new THREE.MeshPhongMaterial({ color: 0xcccccc });
														materials.push(material);
												}
												if ('color' in geometry.attributes) {

														for (var materialIndex = 0, numMaterials = materials.length; materialIndex < numMaterials; ++materialIndex) {

																materials[materialIndex].vertexColors = THREE.VertexColors;
														}
												}
												if (geometry.FBX_Deformer) {

														for (var materialsIndex = 0, materialsLength = materials.length; materialsIndex < materialsLength; ++materialsIndex) {

																materials[materialsIndex].skinning = true;
														}
														model = new THREE.SkinnedMesh(geometry, material);
												} else {

														model = new THREE.Mesh(geometry, material);
												}
												break;

										case 'NurbsCurve':
												var geometry = null;

												for (var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++childrenIndex) {

														var child = conns.children[childrenIndex];

														if (geometryMap.has(child.ID)) {

																geometry = geometryMap.get(child.ID);
														}
												}

												// FBX does not list materials for Nurbs lines, so we'll just put our own in here.
												material = new THREE.LineBasicMaterial({ color: 0x3300ff, linewidth: 5 });
												model = new THREE.Line(geometry, material);
												break;

										default:
												model = new THREE.Group();
												break;

								}
						}

						model.name = THREE.PropertyBinding.sanitizeNodeName(node.attrName);
						model.FBX_ID = id;

						modelArray.push(model);
						modelMap.set(id, model);
				}

				for (var modelArrayIndex = 0, modelArrayLength = modelArray.length; modelArrayIndex < modelArrayLength; ++modelArrayIndex) {

						var model = modelArray[modelArrayIndex];

						var node = ModelNode[model.FBX_ID];

						if ('Lcl_Translation' in node.properties) {

								model.position.fromArray(node.properties.Lcl_Translation.value);
						}

						if ('Lcl_Rotation' in node.properties) {

								var rotation = node.properties.Lcl_Rotation.value.map(THREE.Math.degToRad);
								rotation.push('ZYX');
								model.rotation.fromArray(rotation);
						}

						if ('Lcl_Scaling' in node.properties) {

								model.scale.fromArray(node.properties.Lcl_Scaling.value);
						}

						if ('PreRotation' in node.properties) {

								var array = node.properties.PreRotation.value.map(THREE.Math.degToRad);
								array[3] = 'ZYX';

								var preRotations = new THREE.Euler().fromArray(array);

								preRotations = new THREE.Quaternion().setFromEuler(preRotations);
								var currentRotation = new THREE.Quaternion().setFromEuler(model.rotation);
								preRotations.multiply(currentRotation);
								model.rotation.setFromQuaternion(preRotations, 'ZYX');
						}

						// allow transformed pivots - see https://github.com/mrdoob/three.js/issues/11895
						if ('GeometricTranslation' in node.properties) {

								var array = node.properties.GeometricTranslation.value;

								model.traverse(function (child) {

										if (child.geometry) {

												child.geometry.translate(array[0], array[1], array[2]);
										}
								});
						}

						if ('LookAtProperty' in node.properties) {

								var conns = connections.get(model.FBX_ID);

								for (var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++childrenIndex) {

										var child = conns.children[childrenIndex];

										if (child.relationship === 'LookAtProperty') {

												var lookAtTarget = FBXTree.Objects.subNodes.Model[child.ID];

												if ('Lcl_Translation' in lookAtTarget.properties) {

														var pos = lookAtTarget.properties.Lcl_Translation.value;

														// DirectionalLight, SpotLight
														if (model.target !== undefined) {

																model.target.position.set(pos[0], pos[1], pos[2]);
																sceneGraph.add(model.target);
														} else {
																// Cameras and other Object3Ds

																model.lookAt(new THREE.Vector3(pos[0], pos[1], pos[2]));
														}
												}
										}
								}
						}

						var conns = connections.get(model.FBX_ID);
						for (var parentIndex = 0; parentIndex < conns.parents.length; parentIndex++) {

								var pIndex = findIndex(modelArray, function (mod) {

										return mod.FBX_ID === conns.parents[parentIndex].ID;
								});
								if (pIndex > -1) {

										modelArray[pIndex].add(model);
										break;
								}
						}
						if (model.parent === null) {

								sceneGraph.add(model);
						}
				}

				// Now with the bones created, we can update the skeletons and bind them to the skinned meshes.
				sceneGraph.updateMatrixWorld(true);

				var worldMatrices = new Map();

				// Put skeleton into bind pose.
				if ('Pose' in FBXTree.Objects.subNodes) {

						var BindPoseNode = FBXTree.Objects.subNodes.Pose;
						for (var nodeID in BindPoseNode) {

								if (BindPoseNode[nodeID].attrType === 'BindPose') {

										BindPoseNode = BindPoseNode[nodeID];
										break;
								}
						}

						var PoseNode = BindPoseNode.subNodes.PoseNode;

						for (var PoseNodeIndex = 0, PoseNodeLength = PoseNode.length; PoseNodeIndex < PoseNodeLength; ++PoseNodeIndex) {

								var node = PoseNode[PoseNodeIndex];

								var rawMatWrd = new THREE.Matrix4().fromArray(node.subNodes.Matrix.properties.a);

								worldMatrices.set(parseInt(node.properties.Node), rawMatWrd);
						}
				}

				for (var FBX_ID in deformers) {

						var deformer = deformers[FBX_ID];
						var subDeformers = deformer.map;

						for (var key in subDeformers) {

								var subDeformer = subDeformers[key];
								var subDeformerIndex = subDeformer.index;

								var bone = deformer.bones[subDeformerIndex];
								if (!worldMatrices.has(bone.FBX_ID)) {

										break;
								}
								var mat = worldMatrices.get(bone.FBX_ID);
								bone.matrixWorld.copy(mat);
						}

						// Now that skeleton is in bind pose, bind to model.
						deformer.skeleton = new THREE.Skeleton(deformer.bones);

						var conns = connections.get(deformer.FBX_ID);
						var parents = conns.parents;

						for (var parentsIndex = 0, parentsLength = parents.length; parentsIndex < parentsLength; ++parentsIndex) {

								var parent = parents[parentsIndex];

								if (geometryMap.has(parent.ID)) {

										var geoID = parent.ID;
										var geoConns = connections.get(geoID);

										for (var i = 0; i < geoConns.parents.length; ++i) {

												if (modelMap.has(geoConns.parents[i].ID)) {

														var model = modelMap.get(geoConns.parents[i].ID);

														model.bind(deformer.skeleton, model.matrixWorld);
														break;
												}
										}
								}
						}
				}

				//Skeleton is now bound, return objects to starting world positions.
				sceneGraph.updateMatrixWorld(true);

				// Silly hack with the animation parsing. We're gonna pretend the scene graph has a skeleton
				// to attach animations to, since FBX treats animations as animations for the entire scene,
				// not just for individual objects.
				sceneGraph.skeleton = {
						bones: modelArray
				};

				var animations = parseAnimations(FBXTree, connections, sceneGraph);

				addAnimations(sceneGraph, animations);

				// Parse ambient color - if it's not set to black (default), create an ambient light
				if ('GlobalSettings' in FBXTree && 'AmbientColor' in FBXTree.GlobalSettings.properties) {

						var ambientColor = FBXTree.GlobalSettings.properties.AmbientColor.value;
						var r = ambientColor[0];
						var g = ambientColor[1];
						var b = ambientColor[2];

						if (r !== 0 || g !== 0 || b !== 0) {

								var color = new THREE.Color(r, g, b);
								sceneGraph.add(new THREE.AmbientLight(color, 1));
						}
				}

				return sceneGraph;
		}

		// Parses animation information from nodes in
		// FBXTree.Objects.subNodes.AnimationCurve ( connected to AnimationCurveNode )
		// FBXTree.Objects.subNodes.AnimationCurveNode ( connected to AnimationLayer and an animated property in some other node )
		// FBXTree.Objects.subNodes.AnimationLayer ( connected to AnimationStack )
		// FBXTree.Objects.subNodes.AnimationStack
		function parseAnimations(FBXTree, connections, sceneGraph) {

				var rawNodes = FBXTree.Objects.subNodes.AnimationCurveNode;
				var rawCurves = FBXTree.Objects.subNodes.AnimationCurve;
				var rawLayers = FBXTree.Objects.subNodes.AnimationLayer;
				var rawStacks = FBXTree.Objects.subNodes.AnimationStack;

				var fps = 30; // default framerate

				if ('GlobalSettings' in FBXTree && 'TimeMode' in FBXTree.GlobalSettings.properties) {

						/* Autodesk time mode documentation can be found here:
      *	http://docs.autodesk.com/FBX/2014/ENU/FBX-SDK-Documentation/index.html?url=cpp_ref/class_fbx_time.html,topicNumber=cpp_ref_class_fbx_time_html
      */
						var timeModeEnum = [30, // 0: eDefaultMode
						120, // 1: eFrames120
						100, // 2: eFrames100
						60, // 3: eFrames60
						50, // 4: eFrames50
						48, // 5: eFrames48
						30, // 6: eFrames30 (black and white NTSC )
						30, // 7: eFrames30Drop
						29.97, // 8: eNTSCDropFrame
						29.97, // 90: eNTSCFullFrame
						25, // 10: ePal ( PAL/SECAM )
						24, // 11: eFrames24 (Film/Cinema)
						1, // 12: eFrames1000 (use for date time))
						23.976, // 13: eFilmFullFrame
						30, // 14: eCustom: use GlobalSettings.properties.CustomFrameRate.value
						96, // 15: eFrames96
						72, // 16: eFrames72
						59.94];

						var eMode = FBXTree.GlobalSettings.properties.TimeMode.value;

						if (eMode === 14) {

								if ('CustomFrameRate' in FBXTree.GlobalSettings.properties) {

										fps = FBXTree.GlobalSettings.properties.CustomFrameRate.value;

										fps = fps === -1 ? 30 : fps;
								}
						} else if (eMode <= 17) {
								// for future proofing - if more eModes get added, they will default to 30fps

								fps = timeModeEnum[eMode];
						}
				}

				var returnObject = {
						curves: new Map(),
						layers: {},
						stacks: {},
						length: 0,
						fps: fps,
						frames: 0
				};

				var animationCurveNodes = [];
				for (var nodeID in rawNodes) {

						if (nodeID.match(/\d+/)) {

								var animationNode = parseAnimationNode(FBXTree, rawNodes[nodeID], connections, sceneGraph);
								animationCurveNodes.push(animationNode);
						}
				}

				var tmpMap = new Map();
				for (var animationCurveNodeIndex = 0; animationCurveNodeIndex < animationCurveNodes.length; ++animationCurveNodeIndex) {

						if (animationCurveNodes[animationCurveNodeIndex] === null) {

								continue;
						}
						tmpMap.set(animationCurveNodes[animationCurveNodeIndex].id, animationCurveNodes[animationCurveNodeIndex]);
				}

				var animationCurves = [];
				for (nodeID in rawCurves) {

						if (nodeID.match(/\d+/)) {

								var animationCurve = parseAnimationCurve(rawCurves[nodeID]);

								// seems like this check would be necessary?
								if (!connections.has(animationCurve.id)) continue;

								animationCurves.push(animationCurve);

								var firstParentConn = connections.get(animationCurve.id).parents[0];
								var firstParentID = firstParentConn.ID;
								var firstParentRelationship = firstParentConn.relationship;
								var axis = '';

								if (firstParentRelationship.match(/X/)) {

										axis = 'x';
								} else if (firstParentRelationship.match(/Y/)) {

										axis = 'y';
								} else if (firstParentRelationship.match(/Z/)) {

										axis = 'z';
								} else {

										continue;
								}

								tmpMap.get(firstParentID).curves[axis] = animationCurve;
						}
				}

				tmpMap.forEach(function (curveNode) {

						var id = curveNode.containerBoneID;
						if (!returnObject.curves.has(id)) {

								returnObject.curves.set(id, { T: null, R: null, S: null });
						}
						returnObject.curves.get(id)[curveNode.attr] = curveNode;

						if (curveNode.attr === 'R') {

								var curves = curveNode.curves;

								// Some FBX files have an AnimationCurveNode
								// which isn't any connected to any AnimationCurve.
								// Setting animation parameter for them here.

								if (curves.x === null) {

										curves.x = {
												version: null,
												times: [0.0],
												values: [0.0]
										};
								}

								if (curves.y === null) {

										curves.y = {
												version: null,
												times: [0.0],
												values: [0.0]
										};
								}

								if (curves.z === null) {

										curves.z = {
												version: null,
												times: [0.0],
												values: [0.0]
										};
								}

								curves.x.values = curves.x.values.map(THREE.Math.degToRad);
								curves.y.values = curves.y.values.map(THREE.Math.degToRad);
								curves.z.values = curves.z.values.map(THREE.Math.degToRad);

								if (curveNode.preRotations !== null) {

										var preRotations = new THREE.Euler().setFromVector3(curveNode.preRotations, 'ZYX');
										preRotations = new THREE.Quaternion().setFromEuler(preRotations);
										var frameRotation = new THREE.Euler();
										var frameRotationQuaternion = new THREE.Quaternion();
										for (var frame = 0; frame < curves.x.times.length; ++frame) {

												frameRotation.set(curves.x.values[frame], curves.y.values[frame], curves.z.values[frame], 'ZYX');
												frameRotationQuaternion.setFromEuler(frameRotation).premultiply(preRotations);
												frameRotation.setFromQuaternion(frameRotationQuaternion, 'ZYX');
												curves.x.values[frame] = frameRotation.x;
												curves.y.values[frame] = frameRotation.y;
												curves.z.values[frame] = frameRotation.z;
										}
								}
						}
				});

				for (var nodeID in rawLayers) {

						var layer = [];
						var children = connections.get(parseInt(nodeID)).children;

						for (var childIndex = 0; childIndex < children.length; childIndex++) {

								// Skip lockInfluenceWeights
								if (tmpMap.has(children[childIndex].ID)) {

										var curveNode = tmpMap.get(children[childIndex].ID);
										var boneID = curveNode.containerBoneID;
										if (layer[boneID] === undefined) {

												layer[boneID] = {
														T: null,
														R: null,
														S: null
												};
										}

										layer[boneID][curveNode.attr] = curveNode;
								}
						}

						returnObject.layers[nodeID] = layer;
				}

				for (var nodeID in rawStacks) {

						var layers = [];
						var children = connections.get(parseInt(nodeID)).children;
						var timestamps = { max: 0, min: Number.MAX_VALUE };

						for (var childIndex = 0; childIndex < children.length; ++childIndex) {

								var currentLayer = returnObject.layers[children[childIndex].ID];

								if (currentLayer !== undefined) {

										layers.push(currentLayer);

										for (var currentLayerIndex = 0, currentLayerLength = currentLayer.length; currentLayerIndex < currentLayerLength; ++currentLayerIndex) {

												var layer = currentLayer[currentLayerIndex];

												if (layer) {

														getCurveNodeMaxMinTimeStamps(layer, timestamps);
												}
										}
								}
						}

						// Do we have an animation clip with actual length?
						if (timestamps.max > timestamps.min) {

								returnObject.stacks[nodeID] = {
										name: rawStacks[nodeID].attrName,
										layers: layers,
										length: timestamps.max - timestamps.min,
										frames: (timestamps.max - timestamps.min) * returnObject.fps
								};
						}
				}

				return returnObject;
		}

		function parseAnimationNode(FBXTree, animationCurveNode, connections, sceneGraph) {

				var rawModels = FBXTree.Objects.subNodes.Model;

				var returnObject = {

						id: animationCurveNode.id,
						attr: animationCurveNode.attrName,
						internalID: animationCurveNode.id,
						attrX: false,
						attrY: false,
						attrZ: false,
						containerBoneID: -1,
						containerID: -1,
						curves: {
								x: null,
								y: null,
								z: null
						},
						preRotations: null

				};

				if (returnObject.attr.match(/S|R|T/)) {

						for (var attributeKey in animationCurveNode.properties) {

								if (attributeKey.match(/X/)) {

										returnObject.attrX = true;
								}
								if (attributeKey.match(/Y/)) {

										returnObject.attrY = true;
								}
								if (attributeKey.match(/Z/)) {

										returnObject.attrZ = true;
								}
						}
				} else {

						return null;
				}

				var conns = connections.get(returnObject.id);
				var containerIndices = conns.parents;

				for (var containerIndicesIndex = containerIndices.length - 1; containerIndicesIndex >= 0; --containerIndicesIndex) {

						var boneID = findIndex(sceneGraph.skeleton.bones, function (bone) {

								return bone.FBX_ID === containerIndices[containerIndicesIndex].ID;
						});
						if (boneID > -1) {

								returnObject.containerBoneID = boneID;
								returnObject.containerID = containerIndices[containerIndicesIndex].ID;
								var model = rawModels[returnObject.containerID.toString()];
								if ('PreRotation' in model.properties) {

										returnObject.preRotations = parseVector3(model.properties.PreRotation).multiplyScalar(Math.PI / 180);
								}
								break;
						}
				}

				return returnObject;
		}

		function parseAnimationCurve(animationCurve) {

				return {
						version: null,
						id: animationCurve.id,
						internalID: animationCurve.id,
						times: animationCurve.subNodes.KeyTime.properties.a.map(convertFBXTimeToSeconds),
						values: animationCurve.subNodes.KeyValueFloat.properties.a,

						attrFlag: animationCurve.subNodes.KeyAttrFlags.properties.a,
						attrData: animationCurve.subNodes.KeyAttrDataFloat.properties.a
				};
		}

		// Sets the maxTimeStamp and minTimeStamp variables if it has timeStamps that are either larger or smaller
		// than the max or min respectively.
		function getCurveNodeMaxMinTimeStamps(layer, timestamps) {

				if (layer.R) {

						getCurveMaxMinTimeStamp(layer.R.curves, timestamps);
				}
				if (layer.S) {

						getCurveMaxMinTimeStamp(layer.S.curves, timestamps);
				}
				if (layer.T) {

						getCurveMaxMinTimeStamp(layer.T.curves, timestamps);
				}
		}

		// Sets the maxTimeStamp and minTimeStamp if one of the curve's time stamps
		// exceeds the maximum or minimum.
		function getCurveMaxMinTimeStamp(curve, timestamps) {

				if (curve.x) {

						getCurveAxisMaxMinTimeStamps(curve.x, timestamps);
				}
				if (curve.y) {

						getCurveAxisMaxMinTimeStamps(curve.y, timestamps);
				}
				if (curve.z) {

						getCurveAxisMaxMinTimeStamps(curve.z, timestamps);
				}
		}

		// Sets the maxTimeStamp and minTimeStamp if one of its timestamps exceeds the maximum or minimum.
		function getCurveAxisMaxMinTimeStamps(axis, timestamps) {

				timestamps.max = axis.times[axis.times.length - 1] > timestamps.max ? axis.times[axis.times.length - 1] : timestamps.max;
				timestamps.min = axis.times[0] < timestamps.min ? axis.times[0] : timestamps.min;
		}

		function addAnimations(group, animations) {

				if (group.animations === undefined) {

						group.animations = [];
				}

				var stacks = animations.stacks;

				for (var key in stacks) {

						var stack = stacks[key];

						var animationData = {
								name: stack.name,
								fps: animations.fps,
								length: stack.length,
								hierarchy: []
						};

						var bones = group.skeleton.bones;

						for (var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++bonesIndex) {

								var bone = bones[bonesIndex];

								var name = bone.name.replace(/.*:/, '');
								var parentIndex = findIndex(bones, function (parentBone) {

										return bone.parent === parentBone;
								});
								animationData.hierarchy.push({ parent: parentIndex, name: name, keys: [] });
						}

						for (var frame = 0; frame <= stack.frames; frame++) {

								for (var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++bonesIndex) {

										var bone = bones[bonesIndex];
										var boneIndex = bonesIndex;

										var animationNode = stack.layers[0][boneIndex];

										for (var hierarchyIndex = 0, hierarchyLength = animationData.hierarchy.length; hierarchyIndex < hierarchyLength; ++hierarchyIndex) {

												var node = animationData.hierarchy[hierarchyIndex];

												if (node.name === bone.name) {

														node.keys.push(generateKey(animations, animationNode, bone, frame));
												}
										}
								}
						}

						group.animations.push(THREE.AnimationClip.parseAnimation(animationData, bones));
				}
		}

		var euler = new THREE.Euler();
		var quaternion = new THREE.Quaternion();

		function generateKey(animations, animationNode, bone, frame) {

				var key = {
						time: frame / animations.fps,
						pos: bone.position.toArray(),
						rot: bone.quaternion.toArray(),
						scl: bone.scale.toArray()
				};

				if (animationNode === undefined) return key;

				euler.setFromQuaternion(bone.quaternion, 'ZYX', false);

				try {

						if (hasCurve(animationNode, 'T') && hasKeyOnFrame(animationNode.T, frame)) {

								if (animationNode.T.curves.x.values[frame]) {

										key.pos[0] = animationNode.T.curves.x.values[frame];
								}

								if (animationNode.T.curves.y.values[frame]) {

										key.pos[1] = animationNode.T.curves.y.values[frame];
								}

								if (animationNode.T.curves.z.values[frame]) {

										key.pos[2] = animationNode.T.curves.z.values[frame];
								}
						}

						if (hasCurve(animationNode, 'R') && hasKeyOnFrame(animationNode.R, frame)) {

								// Only update the euler's values if rotation is defined for the axis on this frame
								if (animationNode.R.curves.x.values[frame]) {

										euler.x = animationNode.R.curves.x.values[frame];
								}

								if (animationNode.R.curves.y.values[frame]) {

										euler.y = animationNode.R.curves.y.values[frame];
								}

								if (animationNode.R.curves.z.values[frame]) {

										euler.z = animationNode.R.curves.z.values[frame];
								}

								quaternion.setFromEuler(euler);
								key.rot = quaternion.toArray();
						}

						if (hasCurve(animationNode, 'S') && hasKeyOnFrame(animationNode.S, frame)) {

								if (animationNode.T.curves.x.values[frame]) {

										key.scl[0] = animationNode.S.curves.x.values[frame];
								}

								if (animationNode.T.curves.y.values[frame]) {

										key.scl[1] = animationNode.S.curves.y.values[frame];
								}

								if (animationNode.T.curves.z.values[frame]) {

										key.scl[2] = animationNode.S.curves.z.values[frame];
								}
						}
				} catch (error) {

						// Curve is not fully plotted.
						console.log('THREE.FBXLoader: ', bone);
						console.log('THREE.FBXLoader: ', error);
				}

				return key;
		}

		var AXES = ['x', 'y', 'z'];

		function hasCurve(animationNode, attribute) {

				if (animationNode === undefined) {

						return false;
				}

				var attributeNode = animationNode[attribute];

				if (!attributeNode) {

						return false;
				}

				return AXES.every(function (key) {

						return attributeNode.curves[key] !== null;
				});
		}

		function hasKeyOnFrame(attributeNode, frame) {

				return AXES.every(function (key) {

						return isKeyExistOnFrame(attributeNode.curves[key], frame);
				});
		}

		function isKeyExistOnFrame(curve, frame) {

				return curve.values[frame] !== undefined;
		}

		// parse an FBX file in ASCII format
		function TextParser() {}

		Object.assign(TextParser.prototype, {

				getPrevNode: function getPrevNode() {

						return this.nodeStack[this.currentIndent - 2];
				},

				getCurrentNode: function getCurrentNode() {

						return this.nodeStack[this.currentIndent - 1];
				},

				getCurrentProp: function getCurrentProp() {

						return this.currentProp;
				},

				pushStack: function pushStack(node) {

						this.nodeStack.push(node);
						this.currentIndent += 1;
				},

				popStack: function popStack() {

						this.nodeStack.pop();
						this.currentIndent -= 1;
				},

				setCurrentProp: function setCurrentProp(val, name) {

						this.currentProp = val;
						this.currentPropName = name;
				},

				parse: function parse(text) {

						this.currentIndent = 0;
						this.allNodes = new FBXTree();
						this.nodeStack = [];
						this.currentProp = [];
						this.currentPropName = '';

						var split = text.split('\n');

						for (var lineNum = 0, lineLength = split.length; lineNum < lineLength; lineNum++) {

								var l = split[lineNum];

								// skip comment line
								if (l.match(/^[\s\t]*;/)) {

										continue;
								}

								// skip empty line
								if (l.match(/^[\s\t]*$/)) {

										continue;
								}

								// beginning of node
								var beginningOfNodeExp = new RegExp('^\\t{' + this.currentIndent + '}(\\w+):(.*){', '');
								var match = l.match(beginningOfNodeExp);

								if (match) {

										var nodeName = match[1].trim().replace(/^"/, '').replace(/"$/, '');
										var nodeAttrs = match[2].split(',');

										for (var i = 0, l = nodeAttrs.length; i < l; i++) {

												nodeAttrs[i] = nodeAttrs[i].trim().replace(/^"/, '').replace(/"$/, '');
										}

										this.parseNodeBegin(l, nodeName, nodeAttrs || null);
										continue;
								}

								// node's property
								var propExp = new RegExp('^\\t{' + this.currentIndent + '}(\\w+):[\\s\\t\\r\\n](.*)');
								var match = l.match(propExp);

								if (match) {

										var propName = match[1].replace(/^"/, '').replace(/"$/, '').trim();
										var propValue = match[2].replace(/^"/, '').replace(/"$/, '').trim();

										// for special case: base64 image data follows "Content: ," line
										//	Content: ,
										//	 "iVB..."
										if (propName === 'Content' && propValue === ',') {

												propValue = split[++lineNum].replace(/"/g, '').replace(/,$/, '').trim();
										}

										this.parseNodeProperty(l, propName, propValue);
										continue;
								}

								// end of node
								var endOfNodeExp = new RegExp('^\\t{' + (this.currentIndent - 1) + '}}');

								if (l.match(endOfNodeExp)) {

										this.nodeEnd();
										continue;
								}

								// large arrays are split over multiple lines terminated with a ',' character
								// if this is encountered the line needs to be joined to the previous line
								if (l.match(/^[^\s\t}]/)) {

										this.parseNodePropertyContinued(l);
								}
						}

						return this.allNodes;
				},

				parseNodeBegin: function parseNodeBegin(line, nodeName, nodeAttrs) {

						var node = { 'name': nodeName, properties: {}, 'subNodes': {} };
						var attrs = this.parseNodeAttr(nodeAttrs);
						var currentNode = this.getCurrentNode();

						// a top node
						if (this.currentIndent === 0) {
								this.allNodes.add(nodeName, node);
						} else {
								// a subnode

								// if the subnode already exists, append it
								if (nodeName in currentNode.subNodes) {

										var tmp = currentNode.subNodes[nodeName];

										if (this.isFlattenNode(currentNode.subNodes[nodeName])) {
												if (attrs.id === '') {
														currentNode.subNodes[nodeName] = [];
														currentNode.subNodes[nodeName].push(tmp);
												} else {
														currentNode.subNodes[nodeName] = {};
														currentNode.subNodes[nodeName][tmp.id] = tmp;
												}
										}

										if (attrs.id === '') {
												currentNode.subNodes[nodeName].push(node);
										} else {
												currentNode.subNodes[nodeName][attrs.id] = node;
										}
								} else if (typeof attrs.id === 'number' || attrs.id.match(/^\d+$/)) {
										currentNode.subNodes[nodeName] = {};
										currentNode.subNodes[nodeName][attrs.id] = node;
								} else {
										currentNode.subNodes[nodeName] = node;
								}
						}

						// for this	↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
						// NodeAttribute: 1001463072, "NodeAttribute::", "LimbNode" {
						if (nodeAttrs) {
								node.id = attrs.id;
								node.attrName = attrs.name;
								node.attrType = attrs.type;
						}

						this.pushStack(node);
				},

				parseNodeAttr: function parseNodeAttr(attrs) {
						var id = attrs[0];

						if (attrs[0] !== '') {
								id = parseInt(attrs[0]);

								if (isNaN(id)) {
										id = attrs[0];
								}
						}

						var name = '',
						    type = '';

						if (attrs.length > 1) {
								name = attrs[1].replace(/^(\w+)::/, '');
								type = attrs[2];
						}

						return { id: id, name: name, type: type };
				},

				parseNodeProperty: function parseNodeProperty(line, propName, propValue) {
						var currentNode = this.getCurrentNode();
						var parentName = currentNode.name;

						// special case where the parent node is something like "Properties70"
						// these children nodes must treated carefully
						if (parentName !== undefined) {
								var propMatch = parentName.match(/Properties(\d)+/);
								if (propMatch) {
										this.parseNodeSpecialProperty(line, propName, propValue);
										return;
								}
						}

						// Connections
						if (propName === 'C') {

								var connProps = propValue.split(',').slice(1);
								var from = parseInt(connProps[0]);
								var to = parseInt(connProps[1]);
								var rest = propValue.split(',').slice(3);

								rest = rest.map(function (elem) {
										return elem.trim().replace(/^"/, '');
								});

								propName = 'connections';
								propValue = [from, to];
								append(propValue, rest);

								if (currentNode.properties[propName] === undefined) {
										currentNode.properties[propName] = [];
								}
						}

						// Node
						if (propName === 'Node') {
								var id = parseInt(propValue);
								currentNode.properties.id = id;
								currentNode.id = id;
						}

						// already exists in properties, then append this
						if (propName in currentNode.properties) {
								if (Array.isArray(currentNode.properties[propName])) {
										currentNode.properties[propName].push(propValue);
								} else {
										currentNode.properties[propName] += propValue;
								}
						} else {
								if (Array.isArray(currentNode.properties[propName])) {
										currentNode.properties[propName].push(propValue);
								} else {
										currentNode.properties[propName] = propValue;
								}
						}

						this.setCurrentProp(currentNode.properties, propName);

						// convert string to array, unless it ends in ',' in which case more will be added to it
						if (propName === 'a' && propValue.slice(-1) !== ',') {
								currentNode.properties.a = parseNumberArray(propValue);
						}
				},

				parseNodePropertyContinued: function parseNodePropertyContinued(line) {
						this.currentProp[this.currentPropName] += line;

						// if the line doesn't end in ',' we have reached the end of the property value
						// so convert the string to an array
						if (line.slice(-1) !== ',') {
								var currentNode = this.getCurrentNode();
								currentNode.properties.a = parseNumberArray(currentNode.properties.a);
						}
				},

				parseNodeSpecialProperty: function parseNodeSpecialProperty(line, propName, propValue) {
						// split this
						// P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
						// into array like below
						// ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
						var props = propValue.split('",');

						for (var i = 0, l = props.length; i < l; i++) {
								props[i] = props[i].trim().replace(/^\"/, '').replace(/\s/, '_');
						}

						var innerPropName = props[0];
						var innerPropType1 = props[1];
						var innerPropType2 = props[2];
						var innerPropFlag = props[3];
						var innerPropValue = props[4];

						// cast value to its type
						switch (innerPropType1) {
								case 'int':
								case 'enum':
								case 'bool':
								case 'ULongLong':
										innerPropValue = parseInt(innerPropValue);
										break;
								case 'double':
								case 'Number':
								case 'FieldOfView':
										innerPropValue = parseFloat(innerPropValue);
										break;
								case 'ColorRGB':
								case 'Vector3D':
								case 'Lcl_Translation':
								case 'Lcl_Rotation':
								case 'Lcl_Scaling':
										innerPropValue = parseNumberArray(innerPropValue);
										break;
						}

						// CAUTION: these props must append to parent's parent
						this.getPrevNode().properties[innerPropName] = {
								'type': innerPropType1,
								'type2': innerPropType2,
								'flag': innerPropFlag,
								'value': innerPropValue
						};
						this.setCurrentProp(this.getPrevNode().properties, innerPropName);
				},

				nodeEnd: function nodeEnd() {
						this.popStack();
				},

				isFlattenNode: function isFlattenNode(node) {
						return 'subNodes' in node && 'properties' in node ? true : false;
				}
		});

		// Parse an FBX file in Binary format
		function BinaryParser() {}

		Object.assign(BinaryParser.prototype, {
				parse: function parse(buffer) {
						var reader = new BinaryReader(buffer);
						reader.skip(23); // skip magic 23 bytes
						var version = reader.getUint32();

						//console.log( 'THREE.FBXLoader: FBX binary version: ' + version );
						var allNodes = new FBXTree();
						var count = 0;

						while (!this.endOfContent(reader)) {
								try {
										var node = this.parseNode(reader, version);
										if (node !== null) {
												allNodes.add(node.name, node);
										}
								} catch (err) {
										console.log(err);
								}
						}

						return allNodes;
				},

				// Check if reader has reached the end of content.
				endOfContent: function endOfContent(reader) {

						// footer size: 160bytes + 16-byte alignment padding
						// - 16bytes: magic
						// - padding til 16-byte alignment (at least 1byte?)
						//	(seems like some exporters embed fixed 15 or 16bytes?)
						// - 4bytes: magic
						// - 4bytes: version
						// - 120bytes: zero
						// - 16bytes: magic
						if (reader.size() % 16 === 0) {
								return (reader.getOffset() + 160 + 16 & ~0xf) >= reader.size();
						} else {
								return reader.getOffset() + 160 + 16 >= reader.size();
						}
				},

				parseNode: function parseNode(reader, version) {
						// The first three data sizes depends on version.
						var endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
						var numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32();

						// note: do not remove this even if you get a linter warning as it moves the buffer forward
						var propertyListLen = version >= 7500 ? reader.getUint64() : reader.getUint32();

						var nameLen = reader.getUint8();
						var name = reader.getString(nameLen);

						// Regards this node as NULL-record if endOffset is zero
						if (endOffset === 0) return null;

						var propertyList = [];

						for (var i = 0; i < numProperties; i++) {
								propertyList.push(this.parseProperty(reader));
						}

						// Regards the first three elements in propertyList as id, attrName, and attrType
						var id = propertyList.length > 0 ? propertyList[0] : '';
						var attrName = propertyList.length > 1 ? propertyList[1] : '';
						var attrType = propertyList.length > 2 ? propertyList[2] : '';

						var subNodes = {};
						var properties = {};

						var isSingleProperty = false;

						// check if this node represents just a single property
						// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
						if (numProperties === 1 && reader.getOffset() === endOffset) {

								isSingleProperty = true;
						}

						while (endOffset > reader.getOffset()) {

								var node = this.parseNode(reader, version);

								if (node === null) continue;

								// special case: child node is single property
								if (node.singleProperty === true) {

										var value = node.propertyList[0];

										if (Array.isArray(value)) {

												subNodes[node.name] = node;

												node.properties.a = value;
										} else {

												properties[node.name] = value;
										}

										continue;
								}

								// parse connections
								if (name === 'Connections' && node.name === 'C') {

										var array = [];

										for (var i = 1, il = node.propertyList.length; i < il; i++) {

												array[i - 1] = node.propertyList[i];
										}

										if (properties.connections === undefined) {

												properties.connections = [];
										}

										properties.connections.push(array);

										continue;
								}

								// special case: child node is Properties\d+
								// move child node's properties to this node.
								if (node.name.match(/^Properties\d+$/)) {

										var keys = Object.keys(node.properties);

										for (var i = 0, il = keys.length; i < il; i++) {

												var key = keys[i];
												properties[key] = node.properties[key];
										}

										continue;
								}

								// parse 'properties70'
								if (name.match(/^Properties\d+$/) && node.name === 'P') {

										var innerPropName = node.propertyList[0];
										var innerPropType1 = node.propertyList[1];
										var innerPropType2 = node.propertyList[2];
										var innerPropFlag = node.propertyList[3];
										var innerPropValue;

										if (innerPropName.indexOf('Lcl ') === 0) innerPropName = innerPropName.replace('Lcl ', 'Lcl_');
										if (innerPropType1.indexOf('Lcl ') === 0) innerPropType1 = innerPropType1.replace('Lcl ', 'Lcl_');

										if (innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf('Lcl_') === 0) {

												innerPropValue = [node.propertyList[4], node.propertyList[5], node.propertyList[6]];
										} else {

												innerPropValue = node.propertyList[4];
										}

										// this will be copied to parent, see above
										properties[innerPropName] = {

												'type': innerPropType1,
												'type2': innerPropType2,
												'flag': innerPropFlag,
												'value': innerPropValue

										};

										continue;
								}

								if (subNodes[node.name] === undefined) {

										if (typeof node.id === 'number') {

												subNodes[node.name] = {};
												subNodes[node.name][node.id] = node;
										} else {

												subNodes[node.name] = node;
										}
								} else {

										if (node.id === '') {

												if (!Array.isArray(subNodes[node.name])) {

														subNodes[node.name] = [subNodes[node.name]];
												}

												subNodes[node.name].push(node);
										} else {

												if (subNodes[node.name][node.id] === undefined) {

														subNodes[node.name][node.id] = node;
												} else {

														// conflict id. irregular?
														if (!Array.isArray(subNodes[node.name][node.id])) {

																subNodes[node.name][node.id] = [subNodes[node.name][node.id]];
														}

														subNodes[node.name][node.id].push(node);
												}
										}
								}
						}

						return {

								singleProperty: isSingleProperty,
								id: id,
								attrName: attrName,
								attrType: attrType,
								name: name,
								properties: properties,
								propertyList: propertyList, // raw property list used by parent
								subNodes: subNodes

						};
				},

				parseProperty: function parseProperty(reader) {

						var type = reader.getChar();

						switch (type) {

								case 'C':
										return reader.getBoolean();

								case 'D':
										return reader.getFloat64();

								case 'F':
										return reader.getFloat32();

								case 'I':
										return reader.getInt32();

								case 'L':
										return reader.getInt64();

								case 'R':
										var length = reader.getUint32();
										return reader.getArrayBuffer(length);

								case 'S':
										var length = reader.getUint32();
										return reader.getString(length);

								case 'Y':
										return reader.getInt16();

								case 'b':
								case 'c':
								case 'd':
								case 'f':
								case 'i':
								case 'l':
										var arrayLength = reader.getUint32();
										var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
										var compressedLength = reader.getUint32();

										if (encoding === 0) {
												switch (type) {
														case 'b':
														case 'c':
																return reader.getBooleanArray(arrayLength);
														case 'd':
																return reader.getFloat64Array(arrayLength);
														case 'f':
																return reader.getFloat32Array(arrayLength);
														case 'i':
																return reader.getInt32Array(arrayLength);
														case 'l':
																return reader.getInt64Array(arrayLength);
												}
										}

										if (window.Zlib === undefined) {
												throw new Error('THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js');
										}

										var inflate = new Zlib.Inflate(new Uint8Array(reader.getArrayBuffer(compressedLength))); // eslint-disable-line no-undef
										var reader2 = new BinaryReader(inflate.decompress().buffer);

										switch (type) {
												case 'b':
												case 'c':
														return reader2.getBooleanArray(arrayLength);
												case 'd':
														return reader2.getFloat64Array(arrayLength);
												case 'f':
														return reader2.getFloat32Array(arrayLength);
												case 'i':
														return reader2.getInt32Array(arrayLength);
												case 'l':
														return reader2.getInt64Array(arrayLength);
										}

								default:
										throw new Error('THREE.FBXLoader: Unknown property type ' + type);
						}
				}
		});

		function BinaryReader(buffer, littleEndian) {

				this.dv = new DataView(buffer);
				this.offset = 0;
				this.littleEndian = littleEndian !== undefined ? littleEndian : true;
		}

		Object.assign(BinaryReader.prototype, {

				getOffset: function getOffset() {

						return this.offset;
				},

				size: function size() {

						return this.dv.buffer.byteLength;
				},

				skip: function skip(length) {

						this.offset += length;
				},

				// seems like true/false representation depends on exporter.
				// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
				// then sees LSB.
				getBoolean: function getBoolean() {

						return (this.getUint8() & 1) === 1;
				},

				getBooleanArray: function getBooleanArray(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getBoolean());
						}

						return a;
				},

				getInt8: function getInt8() {

						var value = this.dv.getInt8(this.offset);
						this.offset += 1;
						return value;
				},

				getInt8Array: function getInt8Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getInt8());
						}

						return a;
				},

				getUint8: function getUint8() {

						var value = this.dv.getUint8(this.offset);
						this.offset += 1;
						return value;
				},

				getUint8Array: function getUint8Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getUint8());
						}

						return a;
				},

				getInt16: function getInt16() {

						var value = this.dv.getInt16(this.offset, this.littleEndian);
						this.offset += 2;
						return value;
				},

				getInt16Array: function getInt16Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getInt16());
						}

						return a;
				},

				getUint16: function getUint16() {

						var value = this.dv.getUint16(this.offset, this.littleEndian);
						this.offset += 2;
						return value;
				},

				getUint16Array: function getUint16Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getUint16());
						}

						return a;
				},

				getInt32: function getInt32() {

						var value = this.dv.getInt32(this.offset, this.littleEndian);
						this.offset += 4;
						return value;
				},

				getInt32Array: function getInt32Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getInt32());
						}

						return a;
				},

				getUint32: function getUint32() {

						var value = this.dv.getUint32(this.offset, this.littleEndian);
						this.offset += 4;
						return value;
				},

				getUint32Array: function getUint32Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getUint32());
						}

						return a;
				},

				// JavaScript doesn't support 64-bit integer so calculate this here
				// 1 << 32 will return 1 so using multiply operation instead here.
				// There's a possibility that this method returns wrong value if the value
				// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
				// TODO: safely handle 64-bit integer
				getInt64: function getInt64() {

						var low, high;

						if (this.littleEndian) {

								low = this.getUint32();
								high = this.getUint32();
						} else {

								high = this.getUint32();
								low = this.getUint32();
						}

						// calculate negative value
						if (high & 0x80000000) {

								high = ~high & 0xFFFFFFFF;
								low = ~low & 0xFFFFFFFF;

								if (low === 0xFFFFFFFF) high = high + 1 & 0xFFFFFFFF;

								low = low + 1 & 0xFFFFFFFF;

								return -(high * 0x100000000 + low);
						}

						return high * 0x100000000 + low;
				},

				getInt64Array: function getInt64Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getInt64());
						}

						return a;
				},

				// Note: see getInt64() comment
				getUint64: function getUint64() {

						var low, high;

						if (this.littleEndian) {

								low = this.getUint32();
								high = this.getUint32();
						} else {

								high = this.getUint32();
								low = this.getUint32();
						}

						return high * 0x100000000 + low;
				},

				getUint64Array: function getUint64Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getUint64());
						}

						return a;
				},

				getFloat32: function getFloat32() {

						var value = this.dv.getFloat32(this.offset, this.littleEndian);
						this.offset += 4;
						return value;
				},

				getFloat32Array: function getFloat32Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getFloat32());
						}

						return a;
				},

				getFloat64: function getFloat64() {

						var value = this.dv.getFloat64(this.offset, this.littleEndian);
						this.offset += 8;
						return value;
				},

				getFloat64Array: function getFloat64Array(size) {

						var a = [];

						for (var i = 0; i < size; i++) {

								a.push(this.getFloat64());
						}

						return a;
				},

				getArrayBuffer: function getArrayBuffer(size) {

						var value = this.dv.buffer.slice(this.offset, this.offset + size);
						this.offset += size;
						return value;
				},

				getChar: function getChar() {

						return String.fromCharCode(this.getUint8());
				},

				getString: function getString(size) {

						var s = '';

						while (size > 0) {

								var value = this.getUint8();
								size--;

								if (value === 0) break;

								s += String.fromCharCode(value);
						}

						// Manage UTF8 encoding
						s = decodeURIComponent(escape(s));

						this.skip(size);

						return s;
				}

		});

		// FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
		// and BinaryParser( FBX Binary format)
		function FBXTree() {}

		Object.assign(FBXTree.prototype, {

				add: function add(key, val) {

						this[key] = val;
				}

		});

		function isFbxFormatBinary(buffer) {

				var CORRECT = 'Kaydara FBX Binary  \0';

				return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length);
		}

		function isFbxFormatASCII(text) {

				var CORRECT = ['K', 'a', 'y', 'd', 'a', 'r', 'a', '\\', 'F', 'B', 'X', '\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\', '\\'];

				var cursor = 0;

				function read(offset) {

						var result = text[offset - 1];
						text = text.slice(cursor + offset);
						cursor++;
						return result;
				}

				for (var i = 0; i < CORRECT.length; ++i) {

						var num = read(1);
						if (num === CORRECT[i]) {

								return false;
						}
				}

				return true;
		}

		function getFbxVersion(text) {

				var versionRegExp = /FBXVersion: (\d+)/;
				var match = text.match(versionRegExp);
				if (match) {

						var version = parseInt(match[1]);
						return version;
				}
				throw new Error('THREE.FBXLoader: Cannot find the version number for the file given.');
		}

		// Converts FBX ticks into real time seconds.
		function convertFBXTimeToSeconds(time) {

				return time / 46186158000;
		}

		// Parses comma separated list of numbers and returns them an array.
		// Used internally by the TextParser
		function parseNumberArray(value) {

				var array = value.split(',');

				for (var i = 0, l = array.length; i < l; i++) {

						array[i] = parseFloat(array[i]);
				}

				return array;
		}

		function parseVector3(property) {

				return new THREE.Vector3().fromArray(property.value);
		}

		function parseColor(property) {

				return new THREE.Color().fromArray(property.value);
		}

		// Converts ArrayBuffer to String.
		function convertArrayBufferToString(buffer, from, to) {

				if (from === undefined) from = 0;
				if (to === undefined) to = buffer.byteLength;

				var array = new Uint8Array(buffer, from, to);

				if (window.TextDecoder !== undefined) {

						return new TextDecoder().decode(array);
				}

				var s = '';

				for (var i = 0, il = array.length; i < il; i++) {
						s += String.fromCharCode(array[i]);
				}

				return s;
		}

		function findIndex(array, func) {
				for (var i = 0, l = array.length; i < l; i++) {
						if (func(array[i])) return i;
				}
				return -1;
		}

		function append(a, b) {
				for (var i = 0, j = a.length, l = b.length; i < l; i++, j++) {
						a[j] = b[i];
				}
		}

		function slice(a, b, from, to) {
				for (var i = from, j = 0; i < to; i++, j++) {
						a[j] = b[i];
				}

				return a;
		}
})();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */

THREE.MTLLoader = function (manager) {

		this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;
};

THREE.MTLLoader.prototype = {

		constructor: THREE.MTLLoader,

		/**
   * Loads and parses a MTL asset from a URL.
   *
   * @param {String} url - URL to the MTL file.
   * @param {Function} [onLoad] - Callback invoked with the loaded object.
   * @param {Function} [onProgress] - Callback for download progress.
   * @param {Function} [onError] - Callback for download errors.
   *
   * @see setPath setTexturePath
   *
   * @note In order for relative texture references to resolve correctly
   * you must call setPath and/or setTexturePath explicitly prior to load.
   */
		load: function load(url, onLoad, onProgress, onError) {

				var scope = this;

				var loader = new THREE.FileLoader(this.manager);
				loader.setPath(this.path);
				loader.load(url, function (text) {

						onLoad(scope.parse(text));
				}, onProgress, onError);
		},

		/**
   * Set base path for resolving references.
   * If set this path will be prepended to each loaded and found reference.
   *
   * @see setTexturePath
   * @param {String} path
   *
   * @example
   *     mtlLoader.setPath( 'assets/obj/' );
   *     mtlLoader.load( 'my.mtl', ... );
   */
		setPath: function setPath(path) {

				this.path = path;
		},

		/**
   * Set base path for resolving texture references.
   * If set this path will be prepended found texture reference.
   * If not set and setPath is, it will be used as texture base path.
   *
   * @see setPath
   * @param {String} path
   *
   * @example
   *     mtlLoader.setPath( 'assets/obj/' );
   *     mtlLoader.setTexturePath( 'assets/textures/' );
   *     mtlLoader.load( 'my.mtl', ... );
   */
		setTexturePath: function setTexturePath(path) {

				this.texturePath = path;
		},

		setBaseUrl: function setBaseUrl(path) {

				console.warn('THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead.');

				this.setTexturePath(path);
		},

		setCrossOrigin: function setCrossOrigin(value) {

				this.crossOrigin = value;
		},

		setMaterialOptions: function setMaterialOptions(value) {

				this.materialOptions = value;
		},

		/**
   * Parses a MTL file.
   *
   * @param {String} text - Content of MTL file
   * @return {THREE.MTLLoader.MaterialCreator}
   *
   * @see setPath setTexturePath
   *
   * @note In order for relative texture references to resolve correctly
   * you must call setPath and/or setTexturePath explicitly prior to parse.
   */
		parse: function parse(text) {

				var lines = text.split('\n');
				var info = {};
				var delimiter_pattern = /\s+/;
				var materialsInfo = {};

				for (var i = 0; i < lines.length; i++) {

						var line = lines[i];
						line = line.trim();

						if (line.length === 0 || line.charAt(0) === '#') {

								// Blank line or comment ignore
								continue;
						}

						var pos = line.indexOf(' ');

						var key = pos >= 0 ? line.substring(0, pos) : line;
						key = key.toLowerCase();

						var value = pos >= 0 ? line.substring(pos + 1) : '';
						value = value.trim();

						if (key === 'newmtl') {

								// New material

								info = { name: value };
								materialsInfo[value] = info;
						} else if (info) {

								if (key === 'ka' || key === 'kd' || key === 'ks') {

										var ss = value.split(delimiter_pattern, 3);
										info[key] = [parseFloat(ss[0]), parseFloat(ss[1]), parseFloat(ss[2])];
								} else {

										info[key] = value;
								}
						}
				}

				var materialCreator = new THREE.MTLLoader.MaterialCreator(this.texturePath || this.path, this.materialOptions);
				materialCreator.setCrossOrigin(this.crossOrigin);
				materialCreator.setManager(this.manager);
				materialCreator.setMaterials(materialsInfo);
				return materialCreator;
		}

};

/**
 * Create a new THREE-MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 * @constructor
 */

THREE.MTLLoader.MaterialCreator = function (baseUrl, options) {

		this.baseUrl = baseUrl || '';
		this.options = options;
		this.materialsInfo = {};
		this.materials = {};
		this.materialsArray = [];
		this.nameLookup = {};

		this.side = this.options && this.options.side ? this.options.side : THREE.FrontSide;
		this.wrap = this.options && this.options.wrap ? this.options.wrap : THREE.RepeatWrapping;
};

THREE.MTLLoader.MaterialCreator.prototype = {

		constructor: THREE.MTLLoader.MaterialCreator,

		crossOrigin: 'Anonymous',

		setCrossOrigin: function setCrossOrigin(value) {

				this.crossOrigin = value;
		},

		setManager: function setManager(value) {

				this.manager = value;
		},

		setMaterials: function setMaterials(materialsInfo) {

				this.materialsInfo = this.convert(materialsInfo);
				this.materials = {};
				this.materialsArray = [];
				this.nameLookup = {};
		},

		convert: function convert(materialsInfo) {

				if (!this.options) return materialsInfo;

				var converted = {};

				for (var mn in materialsInfo) {

						// Convert materials info into normalized form based on options

						var mat = materialsInfo[mn];

						var covmat = {};

						converted[mn] = covmat;

						for (var prop in mat) {

								var save = true;
								var value = mat[prop];
								var lprop = prop.toLowerCase();

								switch (lprop) {

										case 'kd':
										case 'ka':
										case 'ks':

												// Diffuse color (color under white light) using RGB values

												if (this.options && this.options.normalizeRGB) {

														value = [value[0] / 255, value[1] / 255, value[2] / 255];
												}

												if (this.options && this.options.ignoreZeroRGBs) {

														if (value[0] === 0 && value[1] === 0 && value[2] === 0) {

																// ignore

																save = false;
														}
												}

												break;

										default:

												break;

								}

								if (save) {

										covmat[lprop] = value;
								}
						}
				}

				return converted;
		},

		preload: function preload() {

				for (var mn in this.materialsInfo) {

						this.create(mn);
				}
		},

		getIndex: function getIndex(materialName) {

				return this.nameLookup[materialName];
		},

		getAsArray: function getAsArray() {

				var index = 0;

				for (var mn in this.materialsInfo) {

						this.materialsArray[index] = this.create(mn);
						this.nameLookup[mn] = index;
						index++;
				}

				return this.materialsArray;
		},

		create: function create(materialName) {

				if (this.materials[materialName] === undefined) {

						this.createMaterial_(materialName);
				}

				return this.materials[materialName];
		},

		createMaterial_: function createMaterial_(materialName) {

				// Create material

				var scope = this;
				var mat = this.materialsInfo[materialName];
				var params = {

						name: materialName,
						side: this.side

				};

				function resolveURL(baseUrl, url) {

						if (typeof url !== 'string' || url === '') return '';

						// Absolute URL
						if (/^https?:\/\//i.test(url)) return url;

						return baseUrl + url;
				}

				function setMapForType(mapType, value) {

						if (params[mapType]) return; // Keep the first encountered texture

						var texParams = scope.getTextureParams(value, params);
						var map = scope.loadTexture(resolveURL(scope.baseUrl, texParams.url));

						map.repeat.copy(texParams.scale);
						map.offset.copy(texParams.offset);

						map.wrapS = scope.wrap;
						map.wrapT = scope.wrap;

						params[mapType] = map;
				}

				for (var prop in mat) {

						var value = mat[prop];
						var n;

						if (value === '') continue;

						switch (prop.toLowerCase()) {

								// Ns is material specular exponent

								case 'kd':

										// Diffuse color (color under white light) using RGB values

										params.color = new THREE.Color().fromArray(value);

										break;

								case 'ks':

										// Specular color (color when light is reflected from shiny surface) using RGB values
										params.specular = new THREE.Color().fromArray(value);

										break;

								case 'map_kd':

										// Diffuse texture map

										setMapForType("map", value);

										break;

								case 'map_ks':

										// Specular map

										setMapForType("specularMap", value);

										break;

								case 'norm':

										setMapForType("normalMap", value);

										break;

								case 'map_bump':
								case 'bump':

										// Bump texture map

										setMapForType("bumpMap", value);

										break;

								case 'ns':

										// The specular exponent (defines the focus of the specular highlight)
										// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

										params.shininess = parseFloat(value);

										break;

								case 'd':
										n = parseFloat(value);

										if (n < 1) {

												params.opacity = n;
												params.transparent = true;
										}

										break;

								case 'tr':
										n = parseFloat(value);

										if (n > 0) {

												params.opacity = 1 - n;
												params.transparent = true;
										}

										break;

								default:
										break;

						}
				}

				this.materials[materialName] = new THREE.MeshPhongMaterial(params);
				return this.materials[materialName];
		},

		getTextureParams: function getTextureParams(value, matParams) {

				var texParams = {

						scale: new THREE.Vector2(1, 1),
						offset: new THREE.Vector2(0, 0)

				};

				var items = value.split(/\s+/);
				var pos;

				pos = items.indexOf('-bm');

				if (pos >= 0) {

						matParams.bumpScale = parseFloat(items[pos + 1]);
						items.splice(pos, 2);
				}

				pos = items.indexOf('-s');

				if (pos >= 0) {

						texParams.scale.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
						items.splice(pos, 4); // we expect 3 parameters here!
				}

				pos = items.indexOf('-o');

				if (pos >= 0) {

						texParams.offset.set(parseFloat(items[pos + 1]), parseFloat(items[pos + 2]));
						items.splice(pos, 4); // we expect 3 parameters here!
				}

				texParams.url = items.join(' ').trim();
				return texParams;
		},

		loadTexture: function loadTexture(url, mapping, onLoad, onProgress, onError) {

				var texture;
				var loader = THREE.Loader.Handlers.get(url);
				var manager = this.manager !== undefined ? this.manager : THREE.DefaultLoadingManager;

				if (loader === null) {

						loader = new THREE.TextureLoader(manager);
				}

				if (loader.setCrossOrigin) loader.setCrossOrigin(this.crossOrigin);
				texture = loader.load(url, onLoad, onProgress, onError);

				if (mapping !== undefined) texture.mapping = mapping;

				return texture;
		}

};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.OBJLoader = function () {

				// o object_name | g group_name
				var object_pattern = /^[og]\s*(.+)?/;
				// mtllib file_reference
				var material_library_pattern = /^mtllib /;
				// usemtl material_name
				var material_use_pattern = /^usemtl /;

				function ParserState() {

								var state = {
												objects: [],
												object: {},

												vertices: [],
												normals: [],
												uvs: [],

												materialLibraries: [],

												startObject: function startObject(name, fromDeclaration) {

																// If the current object (initial from reset) is not from a g/o declaration in the parsed
																// file. We need to use it for the first parsed g/o to keep things in sync.
																if (this.object && this.object.fromDeclaration === false) {

																				this.object.name = name;
																				this.object.fromDeclaration = fromDeclaration !== false;
																				return;
																}

																var previousMaterial = this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined;

																if (this.object && typeof this.object._finalize === 'function') {

																				this.object._finalize(true);
																}

																this.object = {
																				name: name || '',
																				fromDeclaration: fromDeclaration !== false,

																				geometry: {
																								vertices: [],
																								normals: [],
																								uvs: []
																				},
																				materials: [],
																				smooth: true,

																				startMaterial: function startMaterial(name, libraries) {

																								var previous = this._finalize(false);

																								// New usemtl declaration overwrites an inherited material, except if faces were declared
																								// after the material, then it must be preserved for proper MultiMaterial continuation.
																								if (previous && (previous.inherited || previous.groupCount <= 0)) {

																												this.materials.splice(previous.index, 1);
																								}

																								var material = {
																												index: this.materials.length,
																												name: name || '',
																												mtllib: Array.isArray(libraries) && libraries.length > 0 ? libraries[libraries.length - 1] : '',
																												smooth: previous !== undefined ? previous.smooth : this.smooth,
																												groupStart: previous !== undefined ? previous.groupEnd : 0,
																												groupEnd: -1,
																												groupCount: -1,
																												inherited: false,

																												clone: function clone(index) {
																																var cloned = {
																																				index: typeof index === 'number' ? index : this.index,
																																				name: this.name,
																																				mtllib: this.mtllib,
																																				smooth: this.smooth,
																																				groupStart: 0,
																																				groupEnd: -1,
																																				groupCount: -1,
																																				inherited: false
																																};
																																cloned.clone = this.clone.bind(cloned);
																																return cloned;
																												}
																								};

																								this.materials.push(material);

																								return material;
																				},

																				currentMaterial: function currentMaterial() {

																								if (this.materials.length > 0) {
																												return this.materials[this.materials.length - 1];
																								}

																								return undefined;
																				},

																				_finalize: function _finalize(end) {

																								var lastMultiMaterial = this.currentMaterial();
																								if (lastMultiMaterial && lastMultiMaterial.groupEnd === -1) {

																												lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
																												lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
																												lastMultiMaterial.inherited = false;
																								}

																								// Ignore objects tail materials if no face declarations followed them before a new o/g started.
																								if (end && this.materials.length > 1) {

																												for (var mi = this.materials.length - 1; mi >= 0; mi--) {
																																if (this.materials[mi].groupCount <= 0) {
																																				this.materials.splice(mi, 1);
																																}
																												}
																								}

																								// Guarantee at least one empty material, this makes the creation later more straight forward.
																								if (end && this.materials.length === 0) {

																												this.materials.push({
																																name: '',
																																smooth: this.smooth
																												});
																								}

																								return lastMultiMaterial;
																				}
																};

																// Inherit previous objects material.
																// Spec tells us that a declared material must be set to all objects until a new material is declared.
																// If a usemtl declaration is encountered while this new object is being parsed, it will
																// overwrite the inherited material. Exception being that there was already face declarations
																// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

																if (previousMaterial && previousMaterial.name && typeof previousMaterial.clone === 'function') {

																				var declared = previousMaterial.clone(0);
																				declared.inherited = true;
																				this.object.materials.push(declared);
																}

																this.objects.push(this.object);
												},

												finalize: function finalize() {

																if (this.object && typeof this.object._finalize === 'function') {

																				this.object._finalize(true);
																}
												},

												parseVertexIndex: function parseVertexIndex(value, len) {

																var index = parseInt(value, 10);
																return (index >= 0 ? index - 1 : index + len / 3) * 3;
												},

												parseNormalIndex: function parseNormalIndex(value, len) {

																var index = parseInt(value, 10);
																return (index >= 0 ? index - 1 : index + len / 3) * 3;
												},

												parseUVIndex: function parseUVIndex(value, len) {

																var index = parseInt(value, 10);
																return (index >= 0 ? index - 1 : index + len / 2) * 2;
												},

												addVertex: function addVertex(a, b, c) {

																var src = this.vertices;
																var dst = this.object.geometry.vertices;

																dst.push(src[a + 0], src[a + 1], src[a + 2]);
																dst.push(src[b + 0], src[b + 1], src[b + 2]);
																dst.push(src[c + 0], src[c + 1], src[c + 2]);
												},

												addVertexLine: function addVertexLine(a) {

																var src = this.vertices;
																var dst = this.object.geometry.vertices;

																dst.push(src[a + 0], src[a + 1], src[a + 2]);
												},

												addNormal: function addNormal(a, b, c) {

																var src = this.normals;
																var dst = this.object.geometry.normals;

																dst.push(src[a + 0], src[a + 1], src[a + 2]);
																dst.push(src[b + 0], src[b + 1], src[b + 2]);
																dst.push(src[c + 0], src[c + 1], src[c + 2]);
												},

												addUV: function addUV(a, b, c) {

																var src = this.uvs;
																var dst = this.object.geometry.uvs;

																dst.push(src[a + 0], src[a + 1]);
																dst.push(src[b + 0], src[b + 1]);
																dst.push(src[c + 0], src[c + 1]);
												},

												addUVLine: function addUVLine(a) {

																var src = this.uvs;
																var dst = this.object.geometry.uvs;

																dst.push(src[a + 0], src[a + 1]);
												},

												addFace: function addFace(a, b, c, ua, ub, uc, na, nb, nc) {

																var vLen = this.vertices.length;

																var ia = this.parseVertexIndex(a, vLen);
																var ib = this.parseVertexIndex(b, vLen);
																var ic = this.parseVertexIndex(c, vLen);

																this.addVertex(ia, ib, ic);

																if (ua !== undefined) {

																				var uvLen = this.uvs.length;

																				ia = this.parseUVIndex(ua, uvLen);
																				ib = this.parseUVIndex(ub, uvLen);
																				ic = this.parseUVIndex(uc, uvLen);

																				this.addUV(ia, ib, ic);
																}

																if (na !== undefined) {

																				// Normals are many times the same. If so, skip function call and parseInt.
																				var nLen = this.normals.length;
																				ia = this.parseNormalIndex(na, nLen);

																				ib = na === nb ? ia : this.parseNormalIndex(nb, nLen);
																				ic = na === nc ? ia : this.parseNormalIndex(nc, nLen);

																				this.addNormal(ia, ib, ic);
																}
												},

												addLineGeometry: function addLineGeometry(vertices, uvs) {

																this.object.geometry.type = 'Line';

																var vLen = this.vertices.length;
																var uvLen = this.uvs.length;

																for (var vi = 0, l = vertices.length; vi < l; vi++) {

																				this.addVertexLine(this.parseVertexIndex(vertices[vi], vLen));
																}

																for (var uvi = 0, l = uvs.length; uvi < l; uvi++) {

																				this.addUVLine(this.parseUVIndex(uvs[uvi], uvLen));
																}
												}

								};

								state.startObject('', false);

								return state;
				}

				//

				function OBJLoader(manager) {

								this.manager = manager !== undefined ? manager : THREE.DefaultLoadingManager;

								this.materials = null;
				};

				OBJLoader.prototype = {

								constructor: OBJLoader,

								load: function load(url, onLoad, onProgress, onError) {

												var scope = this;

												var loader = new THREE.FileLoader(scope.manager);
												loader.setPath(this.path);
												loader.load(url, function (text) {

																onLoad(scope.parse(text));
												}, onProgress, onError);
								},

								setPath: function setPath(value) {

												this.path = value;
								},

								setMaterials: function setMaterials(materials) {

												this.materials = materials;

												return this;
								},

								parse: function parse(text) {

												console.time('OBJLoader');

												var state = new ParserState();

												if (text.indexOf('\r\n') !== -1) {

																// This is faster than String.split with regex that splits on both
																text = text.replace(/\r\n/g, '\n');
												}

												if (text.indexOf('\\\n') !== -1) {

																// join lines separated by a line continuation character (\)
																text = text.replace(/\\\n/g, '');
												}

												var lines = text.split('\n');
												var line = '',
												    lineFirstChar = '';
												var lineLength = 0;
												var result = [];

												// Faster to just trim left side of the line. Use if available.
												var trimLeft = typeof ''.trimLeft === 'function';

												for (var i = 0, l = lines.length; i < l; i++) {

																line = lines[i];

																line = trimLeft ? line.trimLeft() : line.trim();

																lineLength = line.length;

																if (lineLength === 0) continue;

																lineFirstChar = line.charAt(0);

																// @todo invoke passed in handler if any
																if (lineFirstChar === '#') continue;

																if (lineFirstChar === 'v') {

																				var data = line.split(/\s+/);

																				switch (data[0]) {

																								case 'v':
																												state.vertices.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
																												break;
																								case 'vn':
																												state.normals.push(parseFloat(data[1]), parseFloat(data[2]), parseFloat(data[3]));
																												break;
																								case 'vt':
																												state.uvs.push(parseFloat(data[1]), parseFloat(data[2]));
																												break;
																				}
																} else if (lineFirstChar === 'f') {

																				var lineData = line.substr(1).trim();
																				var vertexData = lineData.split(/\s+/);
																				var faceVertices = [];

																				// Parse the face vertex data into an easy to work with format

																				for (var j = 0, jl = vertexData.length; j < jl; j++) {

																								var vertex = vertexData[j];

																								if (vertex.length > 0) {

																												var vertexParts = vertex.split('/');
																												faceVertices.push(vertexParts);
																								}
																				}

																				// Draw an edge between the first vertex and all subsequent vertices to form an n-gon

																				var v1 = faceVertices[0];

																				for (var j = 1, jl = faceVertices.length - 1; j < jl; j++) {

																								var v2 = faceVertices[j];
																								var v3 = faceVertices[j + 1];

																								state.addFace(v1[0], v2[0], v3[0], v1[1], v2[1], v3[1], v1[2], v2[2], v3[2]);
																				}
																} else if (lineFirstChar === 'l') {

																				var lineParts = line.substring(1).trim().split(" ");
																				var lineVertices = [],
																				    lineUVs = [];

																				if (line.indexOf("/") === -1) {

																								lineVertices = lineParts;
																				} else {

																								for (var li = 0, llen = lineParts.length; li < llen; li++) {

																												var parts = lineParts[li].split("/");

																												if (parts[0] !== "") lineVertices.push(parts[0]);
																												if (parts[1] !== "") lineUVs.push(parts[1]);
																								}
																				}
																				state.addLineGeometry(lineVertices, lineUVs);
																} else if ((result = object_pattern.exec(line)) !== null) {

																				// o object_name
																				// or
																				// g group_name

																				// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
																				// var name = result[ 0 ].substr( 1 ).trim();
																				var name = (" " + result[0].substr(1).trim()).substr(1);

																				state.startObject(name);
																} else if (material_use_pattern.test(line)) {

																				// material

																				state.object.startMaterial(line.substring(7).trim(), state.materialLibraries);
																} else if (material_library_pattern.test(line)) {

																				// mtl file

																				state.materialLibraries.push(line.substring(7).trim());
																} else if (lineFirstChar === 's') {

																				result = line.split(' ');

																				// smooth shading

																				// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
																				// but does not define a usemtl for each face set.
																				// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
																				// This requires some care to not create extra material on each smooth value for "normal" obj files.
																				// where explicit usemtl defines geometry groups.
																				// Example asset: examples/models/obj/cerberus/Cerberus.obj

																				/*
                     * http://paulbourke.net/dataformats/obj/
                     * or
                     * http://www.cs.utah.edu/~boulos/cs3505/obj_spec.pdf
                     *
                     * From chapter "Grouping" Syntax explanation "s group_number":
                     * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
                     * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
                     * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
                     * than 0."
                     */
																				if (result.length > 1) {

																								var value = result[1].trim().toLowerCase();
																								state.object.smooth = value !== '0' && value !== 'off';
																				} else {

																								// ZBrush can produce "s" lines #11707
																								state.object.smooth = true;
																				}
																				var material = state.object.currentMaterial();
																				if (material) material.smooth = state.object.smooth;
																} else {

																				// Handle null terminated files without exception
																				if (line === '\0') continue;

																				throw new Error("Unexpected line: '" + line + "'");
																}
												}

												state.finalize();

												var container = new THREE.Group();
												container.materialLibraries = [].concat(state.materialLibraries);

												for (var i = 0, l = state.objects.length; i < l; i++) {

																var object = state.objects[i];
																var geometry = object.geometry;
																var materials = object.materials;
																var isLine = geometry.type === 'Line';

																// Skip o/g line declarations that did not follow with any faces
																if (geometry.vertices.length === 0) continue;

																var buffergeometry = new THREE.BufferGeometry();

																buffergeometry.addAttribute('position', new THREE.BufferAttribute(new Float32Array(geometry.vertices), 3));

																if (geometry.normals.length > 0) {

																				buffergeometry.addAttribute('normal', new THREE.BufferAttribute(new Float32Array(geometry.normals), 3));
																} else {

																				buffergeometry.computeVertexNormals();
																}

																if (geometry.uvs.length > 0) {

																				buffergeometry.addAttribute('uv', new THREE.BufferAttribute(new Float32Array(geometry.uvs), 2));
																}

																// Create materials

																var createdMaterials = [];

																for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

																				var sourceMaterial = materials[mi];
																				var material = undefined;

																				if (this.materials !== null) {

																								material = this.materials.create(sourceMaterial.name);

																								// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
																								if (isLine && material && !(material instanceof THREE.LineBasicMaterial)) {

																												var materialLine = new THREE.LineBasicMaterial();
																												materialLine.copy(material);
																												material = materialLine;
																								}
																				}

																				if (!material) {

																								material = !isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial();
																								material.name = sourceMaterial.name;
																				}

																				material.flatShading = sourceMaterial.smooth ? false : true;

																				createdMaterials.push(material);
																}

																// Create mesh

																var mesh;

																if (createdMaterials.length > 1) {

																				for (var mi = 0, miLen = materials.length; mi < miLen; mi++) {

																								var sourceMaterial = materials[mi];
																								buffergeometry.addGroup(sourceMaterial.groupStart, sourceMaterial.groupCount, mi);
																				}

																				mesh = !isLine ? new THREE.Mesh(buffergeometry, createdMaterials) : new THREE.LineSegments(buffergeometry, createdMaterials);
																} else {

																				mesh = !isLine ? new THREE.Mesh(buffergeometry, createdMaterials[0]) : new THREE.LineSegments(buffergeometry, createdMaterials[0]);
																}

																mesh.name = object.name;

																container.add(mesh);
												}

												console.timeEnd('OBJLoader');

												return container;
								}

				};

				return OBJLoader;
}();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materials = __webpack_require__(37);

Object.keys(_materials).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _materials[key];
    }
  });
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Materials = {
  default: new THREE.MeshPhysicalMaterial({ emissive: 0, roughness: 1 })
};

exports.Materials = Materials;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextNode = function () {
  function TextNode(text, x, y, z) {
    _classCallCheck(this, TextNode);

    this.text = text;
    this.position = new THREE.Vector3(x, y, z);
    this.position2d = new THREE.Vector2();
    this.target = new THREE.Vector3();
    this.mesh = new THREE.Mesh(new THREE.SphereBufferGeometry(0.1, 12, 12), new THREE.MeshPhysicalMaterial({ emissive: 0xffffff }));
    this.mesh.position.set(x, y, z);
  }

  _createClass(TextNode, [{
    key: "update",
    value: function update(delta, camera, worldDirection, centreX, centreY) {
      // project perspective camera to screen
      this.target.copy(camera.position);
      this.target.sub(this.position);
      this.target.normalize();

      if (this.target.dot(worldDirection) <= 0) {
        this.behindCamera = false;
        this.target.copy(this.position);
        this.target.project(camera);
        this.position2d.x = (this.target.x + 1) * centreX;
        this.position2d.y = (-this.target.y + 1) * centreY;
      } else {
        this.behindCamera = true;
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // project text onto screen
      if (!this.behindCamera) {
        ctx.fillText(this.text, this.position2d.x, this.position2d.y);
      }
    }
  }]);

  return TextNode;
}();

exports.TextNode = TextNode;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Raycaster = function () {
  function Raycaster(domElement, camera) {
    _classCallCheck(this, Raycaster);

    this.domElement = domElement;
    this.camera = camera;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.rect = this.domElement.getBoundingClientRect();
  }

  _createClass(Raycaster, [{
    key: "resize",
    value: function resize() {
      // resize from doc target
      this.rect = this.domElement.getBoundingClientRect();
    }
  }, {
    key: "cast",
    value: function cast(e, objects) {
      // cast from mouse, intersect objects
      this.mouse.x = (e.clientX - this.rect.left) / this.rect.width * 2 - 1;
      this.mouse.y = -((e.clientY - this.rect.top) / this.rect.height * 2 - 1);
      this.raycaster.setFromCamera(this.mouse, this.camera);
      return this.raycaster.intersectObjects(objects);
    }
  }]);

  return Raycaster;
}();

exports.Raycaster = Raycaster;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timer = __webpack_require__(41);

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
/* 41 */
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