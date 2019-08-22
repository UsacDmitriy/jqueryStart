$(function () { 
    // create new cool animations. Сделать из разных углов и плавно перемешать справа на лево
    
    let i = 0;
    let k = 0;

    $('.next').on('click', function () {
        $(`.gallery-1 .photos img:eq(${i})`).animate( {
            opacity: "0",
            
          }, 300);
        /* $(`.gallery-1 .photos img:eq(${i})`).removeClass('showed'); */
        
        i++;
        
        if ( i >= $(`.gallery-1 .photos img`).length) {
            i = 0;
        }

        $(`.gallery-1 .photos img:eq(${i})`).animate( {
            opacity: "1",
           
          }, 300);

    });
    
    $('.prev').on('click', function () {
        
        $(`.gallery-1 .photos img:eq(${i})`).removeClass('showed');
        $(`.gallery-1 .photos img:eq(${i})`).animate({
            opacity: "hide",
            height: "hide"
          }, 300);
        i--;
        if ( i < 0) {
            i = $(`.gallery-1 .photos img`).length - 1;
        }
        
        $(`.gallery-1 .photos img:eq(${i})`).addClass('showed');
 
    });

    setInterval(function () { 

        $(`.gallery-2 .photos img:eq(${k})`).removeClass('showed');
        k++;
        if ( k >= $(`.gallery-2 .photos img`).length) {
            k = 0;
        }
        $(`.gallery-2 .photos img:eq(${k})`).addClass('showed');

     }, 1000);


});
