window.onload = function(e) {
    // получаем как объект
    let slider = new Slider({
        images: '.gallery-1 images',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next',
        auto: false
    })


}


function Slider(images){
    
    
    
    this.images = images;
    let i = 0;

    this.prev = function(){
        this.images[i].classList.remove('showed');
        i--;

        if (i<0){
            i = this.images.length - 1;
        }

        this.images[i].classList.add('showed');
    }

    this.next = function(){
        this.images[i].classList.remove('showed');
        i++;

        if (i>(images.length-1)){
            i = 0;
        }

        this.images[i].classList.add('showed');
    }
}