'use strict';

window.onload = function(e) {
    
    let items = document.querySelectorAll('.items .item');
    let divPrice = document.querySelector('.value');

    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function(){
            this.classList.toggle('item-active');
            calcPrice();
        }
    }

    function calcPrice() {
    
        let price = 0;
    
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('item-active')){
                price += parseInt(items[i].getAttribute('data-price'));
            }
        }            
            divPrice.innerHTML = price;
    }
    let t = new Timer(100);
/*     t.start();
 */
    let min = (a, b) => a - b;
   console.log(min(100, 67)); 
}


class Timer{
    constructor(time){
        this.time = time;
    }

    tick(){
        this.time--;
        console.log(this.time);
    }

    start(){
        setInterval(()=>{
            this.tick()
        }, 1000);
    }
}


