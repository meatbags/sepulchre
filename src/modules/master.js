import { Renderer } from './render';
import { Scene } from './scene';
import { Timer } from './time';

class Master {
  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.domElement = document.getElementsByClassName('content')[0];
    this.scene = new Scene(this.domElement, this.width, this.height);
    this.renderer = new Renderer(this.domElement, this.width, this.height, this.scene.getScene(), this.scene.getCamera());
    this.timer = new Timer();
    this.loop();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scene.resize(this.width, this.height);
    this.renderer.resize(this.width, this.height);
  }

  loop() {
    if (!this.paused) {
      if (!this.loopGuard) {
        this.loopGuard = true;
        requestAnimationFrame(() => {
          this.loopGuard = false;
          this.loop();
        });
      }
      const delta = this.timer.getDelta();
      this.scene.update(delta);
      this.renderer.render(delta);
    }
  }
}

export { Master };
