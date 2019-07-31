window.onload = function(e) {
    
    let inputs = document.querySelectorAll('.check');


    document.querySelector('form').onsubmit = function(event){    
        let error = false;
           
       for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === ''){
            inputs[i].classList.add('err');
           error = true;
        } else {
            inputs[i].classList.remove('err'); 
        }         
       }
       
       if (error){
        event.preventDefault();
       }
    }

/*     for (let i = 0; i < inputs.length; i++) {
        inputs[i].oninput = function(e){
            this.classList.remove('err');
        }       
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = function(e){
            this.classList.add('focus');
        }       
    }
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onblur = function(e){
            this.classList.remove('focus');
        }       
    } */

    let jqInputs = $('.check');

    jqInputs.on('click', function(){
        this.classList.remove('err');
    })

    jqInputs.on('focus',function(){
        this.classList.add('focus');
    });

    jqInputs.on('blur',function(){
        this.classList.remove('focus');
    });

    console.log(jqInputs);

    jqInputs.addClass('a').addClass('b').addClass('c');

    $('.items .item').html('1').addClass('tst').on('click', function(){
        this.style.color = 'red';
    });


}