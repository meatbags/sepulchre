import { LoadOBJ } from '../loader';
import { Materials } from '../conf';

class Map {
  constructor(scene, collider) {
    // load map to scene
    this.scene = scene;
    this.collider = collider;
    this.loader = new LoadOBJ('./assets/');
    this.loadScene();
  }

  loadScene() {
    this.floor = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 2, 100), Materials.default);
    this.scene.add(this.floor);
    this.collider.add(this.floor);

    for (var x=-50; x<50; x+=8) {
      for (var z=-50; z<50; z+=8) {
        const box = new THREE.Mesh(new THREE.BoxBufferGeometry(3, 6, 3), Materials.default);
        box.position.set(x, 0, z);
        this.collider.add(box);
        this.scene.add(box);
      }
    }

    this.loader.load('blob').then((map) => {
      this.scene.add(map);
      map.children.forEach((child) => {
        this.collider.add(new Collider.Mesh(child));
      });
    }, (err) => { console.warn('Load error:', err); });
  }
}

export { Map };
