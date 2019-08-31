window.onload = function () { 
  let a1 = new Dog('Bobik', 1, 2);
  let a2 = new Cat('Murzik', 1, 2);

  a1.log();
  a2.eat();
  a2.log();

 };

 function Animal(name, x, y){

  this.name = name;
  this.x = x;
  this.y = y;
  this.weight = 1;
 }

 Animal.prototype.eat = function () { 
  this.weight++;
}

Animal.prototype.log = function () {  
  console.log(this.name + " " +this.weight);
}

Cat.prototype = new Animal();

Dog.prototype = new Animal();



function Cat(name, x, y) {
  Animal.call(this, name, x, y);
  this.lifes = 9;
}

function Dog(name, x, y) {  
  Animal.call(this, name, x, y);
}