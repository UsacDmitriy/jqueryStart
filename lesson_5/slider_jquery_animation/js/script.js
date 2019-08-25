$(function () { 
    // create new cool animations. Сделать из разных углов и плавно перемешать справа на лево
    
    let i = 0;
    let k = 0;

    let isRun = false;

    
    
    $('.next').on('click', function () {

        if (isRun){
            return;
        }

        isRun = true;

        $(`.gallery-1 .photos img:eq(${i})`) .css({
            left: 0,
            top: 0,
            right: 'auto',
            bottom: 'auto'
        })
        .animate({
            width: 0,
        }, 200);
 
        
        i++;
        
        if ( i >= $(`.gallery-1 .photos img`).length) {
            i = 0;
        }

        $(`.gallery-1 .photos img:eq(${i})`).css({
            left: 'auto',
            top: 'auto',
            right: 0,
            bottom: 0
        })
        .animate({
            width: '100%'
        }, 200, function () { 
            isRun = false;
         });

    });
    
    $('.prev').on('click', function () {

        if (isRun){
            return;
        }
        isRun = true;     
  
        $(`.gallery-1 .photos img:eq(${i})`)
                .css({
                    left: 0,
                    top: 0,
                    right: 'auto',
                    bottom: 'auto'
                })
                .animate({
                    width: 0,
                }, 200);
        i--;
        if ( i < 0) {
            i = $(`.gallery-1 .photos img`).length - 1;
        }
        
        $(`.gallery-1 .photos img:eq(${i})`)
            .css({
                left: 'auto',
                top: 'auto',
                right: 0,
                bottom: 0
            })
            .animate({
                width: '100%'
            }, 200, function () { 
                isRun = false;
             });
 
    });

    setInterval(function () { 

        $(`.gallery-2 .photos img:eq(${k})`).removeClass('showed');
        k++;
        if ( k >= $(`.gallery-2 .photos img`).length) {
            k = 0;
        }
        $(`.gallery-2 .photos img:eq(${k})`).addClass('showed');

     }, 200);


});
