window.onload = function(e) {
    // получаем как объект
    let slider = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });

    slider.slideShow();


}

function Slider(obj){
    this.obj = obj;
    let i = 0;
    let self = this;
    
    this.start = function(){
            self.prev();
            self.next();       
    }
     
    this.prev = function(){
        let btn = document.querySelector(this.obj.btnPrev);
        let i = 0;
        btn.onclick = function(){
            
            console.log(self.obj.images);
            let imgs = document.querySelectorAll(self.obj.images); 
            console.log(imgs);
            imgs[i].classList.remove('showed');
            i--;

            if (i<0){
                i = imgs.length - 1;
            }

            imgs[i].classList.add('showed');
            console.log(i);
        }
    }

    this.next = function(){
        let btn = document.querySelector(this.obj.btnNext);
        let i = 0;
        btn.onclick = function(){
            console.log(self.obj.images);
            let imgs = document.querySelectorAll(self.obj.images);
            console.log(imgs);
            imgs[i].classList.remove('showed');
            i++; 
            if (i>(imgs.length-1)){
                i = 0;
            }
            imgs[i].classList.add('showed');
            console.log(i);
        }  
    }

    this.slideShow = function(){
        setInterval(function(){
            let imgs = document.querySelectorAll(self.obj.images);
            imgs[i].classList.remove('showed');
            i++; 
            if (i>(imgs.length-1)){
                i = 0;
            }
            imgs[i].classList.add('showed');
        }, 2000);
    }
}