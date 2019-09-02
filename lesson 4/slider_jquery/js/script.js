$(function () { 

    let i = 0;
    let k = 0;

    $('.next').on('click', function () {

        $(`.gallery-1 .photos img:eq(${i})`).removeClass('showed');
        i++;
        if ( i >= $(`.gallery-1 .photos img`).length) {
            i = 0;
        }
        $(`.gallery-1 .photos img:eq(${i})`).addClass('showed');

    });
    
    $('.prev').on('click', function () {
        
        $(`.gallery-1 .photos img:eq(${i})`).removeClass('showed');
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
