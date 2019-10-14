'use strict';

window.addEventListener('DOMContentLoaded', function (e) {
    let timer1 = new Timer(document.querySelector('.timer1'), 10)
    console.log(timer1);
})

class Timer{
    constructor(el, time){
        this.time = time;
        this.el = el;
        this.interval;

        this.render();
        this.start();
    }

    tick(){
        this.time--;
        this.render();

        if(this.time <= 0){
            this.stop();
        }
    }

    start(){
        this.interval = setInterval(()=>{
            this.tick()
        }, 1000);
    }

    stop(){
        clearInterval(this.interval)
    }

    render(){
        this.el.innerHTML = this.time;
    }

}