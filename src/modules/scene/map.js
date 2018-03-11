import { LoadOBJ } from '../loader';
import { Materials } from '../conf';
import { Blend } from '../maths';

class Map {
  constructor(scene, collider) {
    // load map to scene
    this.scene = scene;
    this.collider = collider;
    this.interactive = [];
    this.loader = new LoadOBJ('./assets/');
    this.loadScene();
  }

  loadScene() {
    this.floor = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 2, 100), Materials.default.clone());
    this.scene.add(this.floor);
    this.collider.add(this.floor);

    for (var x=-50; x<50; x+=8) {
      for (var z=-50; z<50; z+=8) {
        const h = 3 + Math.random() * 10;
        const box = new THREE.Mesh(new THREE.BoxBufferGeometry(3, h, 3), Materials.default.clone());
        box.position.set(x, h / 2 - 0.1, z);
        this.collider.add(box);
        this.scene.add(box);
        this.interactive.push(box);
      }
    }

    this.loader.load('blob').then((map) => {
      this.scene.add(map);
      map.children.forEach((child) => {
        this.collider.add(new Collider.Mesh(child));
      });
    }, (err) => { console.warn('Load error:', err); });
  }

  update(delta) {
    const t = 0.25;

    for (var i=0, len=this.interactive.length; i<len; ++i) {
      const box = this.interactive[i];
      if (box.active) {
        const c = Blend(box.material.emissive.r, 1, t);
        box.material.emissive.r = c;
        box.material.emissive.g = c;
        box.material.emissive.b = c;
      } else {
        const c = Blend(box.material.emissive.r, 0, t);
        box.material.emissive.r = c;
        box.material.emissive.g = c;
        box.material.emissive.b = c;
      }
    }
  }

  getInteractive() {
    // get interactive objects
    return this.interactive;
  }

  activateObjects(objects) {
    for (var i=0, len=this.interactive.length; i<len; ++i) {
      this.interactive[i].active = false;
    }
    if (objects.length) {
      objects[0].object.active = true;
    }
  }
}

export { Map };
