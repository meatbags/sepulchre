import '../../lib/glsl';

class Renderer {
  constructor(domElement, width, height, scene, camera) {
    // webgl renderer
    this.scene = scene;
    this.camera = camera;
    this.width = width;
    this.height = height;
    this.size = new THREE.Vector2(this.width, this.height);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x222222, 1);
    this.postProcessingSetup();

    // add to doc
    domElement.append(this.renderer.domElement);
  }

  resize(width, height) {
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

  postProcessingSetup() {
    // post processing passes
    const strength = 0.5;
    const radius = 0.5;
    const threshold = 0.85;
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

  render(delta) {
    this.composer.render(delta);
  }
}

export { Renderer };
