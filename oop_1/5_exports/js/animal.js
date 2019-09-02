export default class Animal {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.weight = 1;
  }
  
  eat() {
    this.weight++;
  }

  log() {
   return this.name + " " + this.weight + " " + this.x + ' ' + this.y
  }
}