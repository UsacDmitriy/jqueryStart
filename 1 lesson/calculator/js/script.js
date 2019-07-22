window.onload = function(e) {
    
    let btnPlus = document.querySelector('input[name=increase]');
    let btnMinus = document.querySelector('input[name=decrease]');
    let btnAsterisk = document.querySelector('input[name=multi]');
    let btnSlash = document.querySelector('input[name=divide]');
    let inp1 = document.querySelector('input[name=num1]');
    let inp2 = document.querySelector('input[name=num2]');
    let resBtn = document.querySelector('.res');
    let buttons = document.querySelectorAll('input[type=button]');


    for (let index = 0; index < buttons.length; index++) {
        buttons[index].onclick = function(){
            let op =this.getAttribute('data-op');
            calcForm(op);
        };
        
    }

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

    /*btnPlus.addEventListener('click', function () { 
        calcForm ('+');
     });
    btnMinus.addEventListener('click', function () { 
        calcForm ('-');
     });
    btnAsterisk.addEventListener('click', function () { 
        calcForm ('*');
     });
    btnSlash.addEventListener('click', function () { 
        calcForm ('/');
     });*/

    
    function calcForm (op){
        let a = parseInt(inp1.value),
            b = parseInt(inp2. value);
        let res;

        switch (op) {
            case '+':
                res = a+b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a*b;
                break;
            case '/':
                if (b != 0) {
                    res = a/b;
                }             
                else {
                    res = 'Нельзя делить на ноль';
                } 
                break;
        
            default:
                break;
        }

        resBtn.innerHTML  = res;

    }

   

}


