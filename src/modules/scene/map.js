import { LoadOBJ } from '../loader';
import { Materials } from '../conf';
import { Blend, Rand } from '../maths';
import { TextNode } from './text_node';

class Map {
  constructor(scene, collider, camera, width, height) {
    // load map to scene
    this.scene = scene;
    this.collider = collider;
    this.camera = camera;
    this.cameraWorldDirection = new THREE.Vector3();
    this.centreX = width / 2;
    this.centreY = height / 2;
    this.interactive = [];
    this.loader = new LoadOBJ('./assets/');
    this.loadScene();
  }

  loadScene() {
    this.floor = new THREE.Mesh(new THREE.BoxBufferGeometry(100, 2, 100), Materials.default.clone());
    this.scene.add(this.floor);
    this.collider.add(this.floor);

    // test grid
    for (var x=-50; x<50; x+=8) {
      for (var z=-50; z<50; z+=8) {
        const h = 1 + Math.random() * 2;
        const box = new THREE.Mesh(new THREE.BoxBufferGeometry(3, h, 3), Materials.default.clone());
        box.position.set(x, h / 2 - 0.1, z);
        this.collider.add(box);
        this.scene.add(box);
        this.interactive.push(box);
      }
    }

    // test model load
    this.loader.load('blob').then((map) => {
      this.scene.add(map);
      map.children.forEach((child) => {
        this.collider.add(new Collider.Mesh(child));
      });
    }, (err) => { console.warn('Load error:', err); });

    // test text nodes
    this.textNodes = [];
    for (let i=0; i<40; ++i) {
      const textNode = new TextNode('Hello world.', Rand(100), 6 + Rand(10), Rand(100));
      this.textNodes.push(textNode);
      this.scene.add(textNode.mesh);
    }
  }

  update(delta) {
    const t = 0.25;

    this.camera.getWorldDirection(this.cameraWorldDirection);
    for (var i=0, len=this.textNodes.length; i<len; ++i) {
      this.textNodes[i].update(delta, this.camera, this.cameraWorldDirection, this.centreX, this.centreY)
    }

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

  resize(width, height) {
    this.centreX = width / 2;
    this.centreY = height / 2;
  }

  getObjects2d() {
    return this.textNodes;
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
