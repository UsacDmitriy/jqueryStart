window.onload = function(e) {
    
    let cat1 = new Cat('Mumu');
    console.log(cat1);
    let cat2 = new Cat('Mimi');
    console.log(cat2);
    let cat3 = new Cat('Momo');
    console.log(cat3);

    cat3.eat();
    cat3.eat();
    cat3.eat();
    cat3.eat();
    console.log(cat3);




    function Cat(name){
        this.name = name;
        this.age = 0;
        this.weight = 1;

        this.run = function(){
            this.weight--;
        }

        this.eat = function(){
            this.weight++;
        }
    }
}


