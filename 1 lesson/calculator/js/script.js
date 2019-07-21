window.onload = function(e) {
    
    let btnPlus = document.querySelector('input[name=increase]');
    let btnMinus = document.querySelector('input[name=decrease]');
    let btnAsterisk = document.querySelector('input[name=multi]');
    let btnSlash = document.querySelector('input[name=divide]');
    let inp1 = document.querySelector('input[name=num1]');
    let inp2 = document.querySelector('input[name=num2]');
    let resBtn = document.querySelector('.res');
    

   /* btn.addEventListener('click', function(){

        let res =(+(inp1.value)) + (+(inp2.value));

        resBtn.innerHTML = res;
        this.disabled = 'true';

        console.log(resBtn);

    });

    inp1.onchange  = function(){

        btn.disabled = '';
    }
    inp2.onchange  = function(){

        btn.disabled = '';
    }*/

    btnPlus.addEventListener('click', function(){

        let res =(+(inp1.value)) + (+(inp2.value));

        resBtn.innerHTML = res;
        btn.disabled = true;

        console.log(resBtn);

    });
    btnMinus.addEventListener('click', function(){

        let res =(+(inp1.value)) - (+(inp2.value));

        resBtn.innerHTML = res;
        btn.disabled = 'true';

        console.log(resBtn);

    });
    btnAsterisk.addEventListener('click', function(){

        let res =(+(inp1.value)) * (+(inp2.value));

        resBtn.innerHTML = res;
        btn.disabled = 'true';

        console.log(resBtn);

    });
    btnSlash.addEventListener('click', function(){

        let res =(+(inp1.value))/(+(inp2.value));

        resBtn.innerHTML = res;
        btn.disabled = 'true';

        console.log(resBtn);

    });




}


