window.onload = function(e) {

   let buttons =  document.querySelectorAll('.actions input');


   for (let index = 0; index < buttons.length; index++) {
       buttons[index].onclick = btnClick;
   }
}


function btnClick(e){

    /*for (let k in this){
        document.body.innerHTML += '<b>' + k + '</b>' + '    ' + this[k] +'<br>';
    }
    */

    let name = this.getAttribute('data-value');
    console.log(name);
}