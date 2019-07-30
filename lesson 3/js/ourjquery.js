function $(selector){
    let elements = document.querySelectorAll(selector);
    return new ourJquery(elements);
}


function ourJquery(elements){

    this.elements = elements;

    this.on = function(eventName, f){


        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventName, f);      
        }
    }

    this.addClass = function(name){
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(name);
            
        }
    }

}