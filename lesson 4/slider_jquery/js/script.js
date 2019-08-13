$(function () { 

    let i = 0;

    $('.next').on('click', function () {
        
        if ( i >= $(`.gallery-1 .photos img`).length) {
            i = 0;
        }

        console.log(i);
        $(`.gallery-1 .photos img:eq(${i})`).removeClass('showed');
        i++;
        $(`.gallery-1 .photos img:eq(${i})`).addClass('showed');

    });

 })