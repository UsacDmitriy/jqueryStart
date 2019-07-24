window.onload = function(e) {
    
   let links = document.querySelectorAll('a[target=_blank]');
   console.log(links);

   for (let i = 0; i < links.length; i++) {
       links[i].onclick = confirmAway;      
   }

   function confirmAway(){
        if (!confirm('we do not garantee')){
            return false;
        }
        
   }

   let images = document.querySelectorAll('.gallery img');

   for (let i = 0; i < images.length; i++) {
    images[i].onmousedown = stopMove;      
    images[i].oncontextmenu = stopMove;      
    }

    function stopMove(){
        return false;
    }

}


