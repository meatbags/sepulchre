class Raycaster {
  constructor(domElement, camera) {
    this.domElement = domElement;
    this.camera = camera;
    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 30;
    this.mouse = new THREE.Vector2();
    this.rect = this.domElement.getBoundingClientRect();
  }

  resize() {
    this.rect = this.domElement.getBoundingClientRect();
  }

  cast(e, objects) {
    // cast from mouse, intersect objects
    const x = e.clientX;
    const y = e.clientY;
    this.mouse.x = ((x - this.rect.left) / this.rect.width) * 2 - 1;
    this.mouse.y = -(((y - this.rect.top) / this.rect.height) * 2 - 1);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    return this.raycaster.intersectObjects(objects);
  }
}

export { Raycaster };
