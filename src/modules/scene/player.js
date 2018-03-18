import { Keyboard, Mouse } from '../input';
import { Blend, MinAngleBetween, TwoPI } from '../maths';

class Player {
  constructor(domElement, scene, colliderSystem) {
    // handle player input
    this.scene = scene;
    this.colliderSystem = colliderSystem;
    this.domElement = domElement;
    var y = 10;
    this.position = new THREE.Vector3(0, y, 0);
    this.rotation = {pitch: 0, roll: 0, yaw: 0};
    this.motion = new THREE.Vector3();
    this.target = {
      position: new THREE.Vector3(0, y, 0),
      rotation: {pitch: 0, roll: 0, yaw: 0},
      motion: new THREE.Vector3()
    };
    this.collider = new Collider.Collider(this.target.position, this.motion);
    this.collider.setPhysics({gravity: 20});

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
    this.keyboard = new Keyboard((key) => { this.onKeyboard(key); });
    this.hookMouse();

    // add to scene
    this.group = new THREE.Group();
    this.light = new THREE.PointLight(0xffffff, 0.25);
    this.light.position.y = 1.8;
    this.group.add(this.light);
    this.scene.add(this.group);
  }

  onKeyboard(key) {
    switch (key) {
      case 'a': case 'A': case 'ArrowLeft':
        this.keys.left = this.keyboard.keys[key];
        break;
      case 'd': case 'D': case 'ArrowRight':
        this.keys.right = this.keyboard.keys[key];
        break;
      case 'w': case 'W': case 'ArrowUp':
        this.keys.up = this.keyboard.keys[key];
        break;
      case 's': case 'S': case 'ArrowDown':
        this.keys.down = this.keyboard.keys[key];
        break;
      case ' ':
        this.keys.jump = this.keyboard.keys[key];
        break;
      case 'x': case 'X':
        this.keys.noclip = this.keyboard.keys[key];
        break;
      default:
        break;
    }
  }

  move(delta) {
    // key input to motion
    if (this.keys.left || this.keys.right) {
      const d = ((this.keys.left) ? 1 : 0) + ((this.keys.right) ? -1 : 0);
      this.target.rotation.yaw += d * this.rotationSpeed * delta;
    }

    if (this.keys.up || this.keys.down) {
      const speed = (this.noclip) ? this.noclipSpeed * (1 - Math.abs(Math.sin(this.target.rotation.pitch))) : this.speed;
      const dir = ((this.keys.up) ? 1 : 0) + ((this.keys.down) ? -1 : 0);
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

    this.falling = (this.motion.y != 0);
    this.fallTime = (this.falling) ? this.fallTime + delta : 0;

    // noclip
    if (this.keys.noclip) {
      this.keys.noclip = false;
      this.keyboard.release('x');
      this.noclip = (this.noclip == false);
    }

    if (this.noclip) {
      this.falling = false;

      if (this.keys.up || this.keys.down) {
        const d = ((this.keys.up) ? 1 : 0) + ((this.keys.down) ? -1 : 0);
        this.target.motion.y = Math.sin(this.target.rotation.pitch) * d * this.noclipSpeed;
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
      this.motion.x = Blend(this.motion.x, this.target.motion.x, this.jumpSpeedMultiplier);
      this.motion.z = Blend(this.motion.z, this.target.motion.z, this.jumpSpeedMultiplier);
    }
  }

  hookMouse() {
    // hook up mouse events
    this.onDown = (e) => {
      this.mouse.start(e, this.rotation.pitch, this.rotation.yaw);
    };
    this.onMove = (e) => {
      if (this.mouse.isActive() && !(this.keys.left || this.keys.right)) {
        // click & drag
        this.mouse.move(e);
        this.target.rotation.yaw = this.mouse.getYaw();
        this.target.rotation.pitch = this.mouse.getPitch(this.minPitch, this.maxPitch);
      }
    };
    this.onUp = (e) => {
      this.mouse.stop();
    };
    this.mouse = new Mouse(this.domElement, this.onDown, this.onMove, this.onUp);
  }

  update(delta) {
    this.move(delta);
    if (!this.noclip) {
      this.collider.move(delta, this.colliderSystem);
    } else {
      this.target.position.x += this.motion.x * delta;
      this.target.position.y += this.motion.y * delta;
      this.target.position.z += this.motion.z * delta;
    }
    this.position.x = Blend(this.position.x, this.target.position.x, this.adjust.maximum);
    this.position.y = Blend(this.position.y, this.target.position.y, this.adjust.maximum);
    this.position.z = Blend(this.position.z, this.target.position.z, this.adjust.maximum);
    this.rotation.yaw += MinAngleBetween(this.rotation.yaw, this.target.rotation.yaw) * this.adjust.fast;
    this.rotation.pitch = Blend(this.rotation.pitch, this.target.rotation.pitch, this.adjust.slow);
    this.group.position.set(this.position.x, this.position.y, this.position.z);
	}
};

export { Player };
