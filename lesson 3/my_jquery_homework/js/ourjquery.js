function $(selector){

    let elements;
    if (selector instanceof HTMLElement){
        elements = [selector];
    } else {
        elements = document.querySelectorAll(selector);
    }
    return new ourJquery(elements);
}

/* Include fade and show method in my library */

function ourJquery(elements){

    this.elements = elements;

    this.on = function(eventName, f){
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventName, f);      
        }

        return this;
    }

    this.addClass = function(name){
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(name);            
        }

        return this;
    }

    this.removeClass = function(name){
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(name);       
        }

        return this;
    }

    this.html = function(html){

        if(typeof(html) ==='undefined'){
            return this.elements[0].innerHTML;
        }

        for (let i = 0; i < this.elements.length; i++){
            this.elements[i].innerHTML = html;
        }
        return this;
    }

    this.removeClass = function(name){
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(name);       
        }
        return this;
    }

    this.fade = function(t, f) {
        for (let i = 0; i < this.elements.length; i++) {

            this.elements[i].addEventListener('click', function(){
                console.log(this);
                fade(this, t, f);
            });    
        }
        return this;
    }

}

function fade(elem, t, f){
    let fps = 50,
        time = t || 1000,
        steps = time/fps,
        op = 1,
        d0 = op/steps;

    let callback = f || function () {
        this.style.display = 'none';
    };

    let timer = setInterval(() => {
        op -= d0;
        elem.style.opacity = op;
        steps--;
        if (steps === 0){
            clearInterval(timer);
            callback.call(elem);
        }
    }, (1000 / fps));
}