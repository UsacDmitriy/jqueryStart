window.onload = function () { 
  let a1 = new Animal('Bobik');
  let a2 = new Animal('Murzik');

  a1.log();
  a2.log();
  a1.eat();
  a2.eat();
  a1.log();
  a2.log();

 };

 function Animal(name){

  this.name = name;
  this.weight = 1;
 }

 Animal.prototype.eat = function () { 
  this.weight++;
}

Animal.prototype.log = function () {  
  console.log(this.name + " " +this.weight);
}