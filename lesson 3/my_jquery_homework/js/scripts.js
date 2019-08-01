window.onload = function(e) {
    



    let jqInputs = $('.items .item');

    jqInputs.on('click', function(){
        this.classList.remove('err');
    })

    jqInputs.on('focus',function(){
        this.classList.add('focus');
    });

    jqInputs.on('blur',function(){
        this.classList.remove('focus');
    });

  

   // jqInputs.addClass('a').addClass('b').addClass('c');

    /* $('.items .item').html('1').addClass('tst').on('click', function(){
        this.style.color = 'red';
    }); */

    jqInputs.fade();
}