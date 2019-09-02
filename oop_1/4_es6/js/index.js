window.onload = function () { 

  let animals = [];
  animals.push(new Dog('Bobik', 20, 10));
  animals.push(new Cat('Murzik', 40, 30));
  animals.push(new Dog('Sharik', 5, 7));
  animals.push(new Cat('Vaska', 2, 1));

  for (const animal of animals) {
    animal.eat();
    console.log(animal.log()); 
  }

 }

class Animal {
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

class Cat extends Animal{
  constructor(name, x, y) {
    super( name, x, y);
    this.lifes = 9;
  }
  
  log(){
    return super.log() + " " + this.lifes;
  }
}

class Dog extends Animal{  
  eat(){
    this.weight +=2;
  }
}