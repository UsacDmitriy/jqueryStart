window.onload = function(e) {
    // получаем как объект
    let slider = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    });
    let slider2 = new Slider({
        images: '.gallery-2 .photos img',
        btnPrev: '.gallery-2 .buttons .prev',
        btnNext: '.gallery-2 .buttons .next',
        auto: true
    });
}

function Slider(obj){
    this.images = document.querySelectorAll(obj.images);
    this.btnNext = obj.btnNext;
    this.btnPrev = obj.btnPrev;
    this.auto = obj.auto;
    this.rate = obj.rate || 1000;
    
    let i = 0;
    let self = this;
     
    this.prev = function(){

            self.images[i].classList.remove('showed');
            i--;
            console.log(this);
            if (i<0){
                i = self.images.length - 1;
            }
            self.images[i].classList.add('showed');        
    }

    this.next = function(){

            self.images[i].classList.remove('showed');
            i++; 
            console.log(this);
            if (i>(self.images.length-1)){
                i = 0;
            }
            self.images[i].classList.add('showed');
            console.log(i);    
    }

    document.querySelector(self.btnNext).onclick = self.next;
    document.querySelector(self.btnPrev).onclick = self.prev;

    if (self.auto){
        setInterval(self.next, self.rate);
    }
}