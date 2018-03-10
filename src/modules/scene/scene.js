import { Camera } from './camera';
import { Lighting } from './lighting';
import { Player } from './player';
import { Map } from './map';

class Scene {
  constructor(domElement, width, height) {
    this.scene = new THREE.Scene();
    this.collider = new Collider.System();
    this.player = new Player(domElement, this.scene, this.collider);
    this.camera = new Camera(width, height, this.player.position, this.player.rotation);
    this.lighting = new Lighting(this.scene);
    this.map = new Map(this.scene, this.collider);

    // test a scene
    /*
    let floor = new THREE.Mesh(
      new THREE.BoxBufferGeometry(200, 1, 200),
      new THREE.MeshPhysicalMaterial({emissive: 0x222222, roughness:1})
    );
    this.scene.add(floor);
    this.colliderSystem.add(new Collider.Mesh(floor));
    const rand = (v) => { return Math.random() * v - v / 2; };
    var angle = 0;
    var len = 40;
    for (var i=0; i<1000; i++) {
      angle += 0.03;
      const x = Math.sin(angle) * len + rand(5);
      const y = i * 0.3 + rand(2);
      const z = Math.cos(angle) * len + rand(10);
      const s = 5 + 2 * Math.random();
      const h = 3 + Math.random() * 5;
      const box = new THREE.Mesh(
        new THREE.BoxBufferGeometry(s, h, s),
        new THREE.MeshPhysicalMaterial({roughness: 1})
      );
      box.position.set(x, y, z);
      const rx = rand(Math.PI / 3);
      const ry = rand(Math.PI / 3);
      const rz = rand(Math.PI / 3);
      box.rotation.set(rx, ry, rz);
      this.scene.add(box);
      this.colliderSystem.add(new Collider.Mesh(box));
    }
    */
  }

  resize(width, height) {
    this.camera.resize(width, height);
  }

  update(delta) {
    this.player.update(delta);
    this.camera.update(delta);
  }

  getScene() {
    return this.scene;
  }

  getCamera() {
    return this.camera.getCamera();
  }
}

export { Scene };
