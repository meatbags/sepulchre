class Camera {
  constructor(width, height, position, rotation) {
    // perspective camera

    this.position = position;
    this.rotation = rotation;
    this.fov = 75;
    this.aspectRatio = width / height;
    this.height = 2;
    this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, 0.1, 1000);
    this.camera.up = new THREE.Vector3(0, 1, 0);
  }

  update(delta) {
    const offxz = 1 - Math.abs(Math.sin(this.rotation.pitch));
    const offy = 1;
    const height = this.position.y + this.height;
    this.camera.up.z = -Math.sin(this.rotation.yaw) * this.rotation.roll;
    this.camera.up.x = Math.cos(this.rotation.yaw) * this.rotation.roll;
    this.camera.position.set(
      this.position.x - Math.sin(this.rotation.yaw) * offxz / 4,
      height - Math.sin(this.rotation.pitch) * offy / 4,
      this.position.z - Math.cos(this.rotation.yaw) * offxz / 4
    );
    this.camera.lookAt(new THREE.Vector3(
      this.position.x + Math.sin(this.rotation.yaw) * offxz,
      this.position.y + this.height + Math.sin(this.rotation.pitch) * offy,
      this.position.z + Math.cos(this.rotation.yaw) * offxz
    ));
  }

  getCamera() {
    return this.camera;
  }
}

export { Camera };
