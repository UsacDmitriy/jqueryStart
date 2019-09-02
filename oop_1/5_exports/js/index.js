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

import Animal from './animal';

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