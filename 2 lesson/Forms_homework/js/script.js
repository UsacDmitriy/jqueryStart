window.onload = function(e) {
    
    let text = document.querySelectorAll('input[type=text]'),
        btn = document.querySelector('form');

        console.log(text);

    btn.onsubmit = function(event){    
        let error = false;
           
       for (let i = 0; i < text.length; i++) {
        if (text[i].value === ''){
            text[i].classList.add('err');
           error = true;
        } else {
            text[i].classList.remove('err'); 
        }         
       }
       
       if (error){
        event.preventDefault();
       }
    }
}


