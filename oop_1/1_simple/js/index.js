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

   this.eat = function () { 
    this.weight++;
  }

  this.log = function () {  
    console.log(this.name + " " +this.weight);
  }  }