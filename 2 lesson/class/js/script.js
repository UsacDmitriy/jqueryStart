window.onload = function(e) {
    
let cat1 = new Cat('Mumu');
console.log(cat1);
let cat2 = new Cat('Mimi');
console.log(cat2);
let cat3 = new Cat('Momo');
console.log(cat3);

    function Cat(name){
        this.name = name;
        this.age = 0;
        this.run = function(){
            console.log(1);
        }
    }
}


