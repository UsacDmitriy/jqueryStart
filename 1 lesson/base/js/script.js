window.onload = function(e) {

   /*let buttons =  document.querySelectorAll('.actions input');



   for (let index = 0; index < buttons.length; index++) {
       buttons[index].onclick = btnClick;
   }*/

   let a = ['a', 's', 'd', 'f'];

   for (let index = 0; index < a.length; index++) {
     console.log(a[index]);       
   }

   let b = { 
       russia: 'Moskow',
       usa: 'Washington',
       china: 'Beijing'
   };

   for (const i in b) {
        console.log(b[i]);
   }


}


function btnClick(e){

    /*for (let k in this){
        document.body.innerHTML += '<b>' + k + '</b>' + '    ' + this[k] +'<br>';
    }
    

    let name = this.getAttribute('data-value');
    
    if (name == 'save'){
        console.log(1);
    } else if (name == 'delete'){
        console.log('remove object');
    }*/



}