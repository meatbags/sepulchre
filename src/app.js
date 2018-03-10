import { Master } from './modules';

class App {
  constructor() {
    this.master = new Master();
    window.onresize = () => { this.master.resize(); };
  }
}

window.onload = () => { const app = new App(); };
