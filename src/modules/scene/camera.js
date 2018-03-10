class Camera {
  constructor(width, height, position, rotation) {
    // perspective camera which tracks player movement
    this.position = position;
    this.rotation = rotation;
    this.fov = 75;
    this.aspectRatio = width / height;
    this.height = 2;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, 0.1, 1000);
    this.camera.up = new THREE.Vector3(0, 1, 0);
  }

  resize(width, height) {
    this.aspectRatio = width / height;
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();
  }

  update(delta) {
    const offsetXZ = 1 - Math.abs(Math.sin(this.rotation.pitch));
    const offsetY = 1;
    const y = this.position.y + this.height;
    this.camera.up.z = -Math.sin(this.rotation.yaw) * this.rotation.roll;
    this.camera.up.x = Math.cos(this.rotation.yaw) * this.rotation.roll;
    this.camera.position.set(this.position.x - Math.sin(this.rotation.yaw) * offsetXZ / 4, y - Math.sin(this.rotation.pitch) * offsetY / 4, this.position.z - Math.cos(this.rotation.yaw) * offsetXZ / 4);
    this.camera.lookAt(new THREE.Vector3(this.position.x + Math.sin(this.rotation.yaw) * offsetXZ, y + Math.sin(this.rotation.pitch) * offsetY, this.position.z + Math.cos(this.rotation.yaw) * offsetXZ));
  }

  getCamera() {
    return this.camera;
  }
}

export { Camera };
