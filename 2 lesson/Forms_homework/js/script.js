window.onload = function(e) {
    
    let text = document.querySelector('input[type=text]'),
        btn = document.querySelector('form');


    console.log('Apeear event: ' + event.type + ' on element ' + event.target);

    btn.onsubmit = function(event){
        
        
        if ((typeof(text.value)) === 'string' && (typeof(text.value)) != null && text.value != '' && text.value.length < 50){
            alert('Messege sent!');
        } else {
            alert('Invalid data');
            event.preventDefaultault();
    
        }

    }

}


