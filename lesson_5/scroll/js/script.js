$(function () { 
/* Должна появиться стрелка "Вверх" при нажатии на кнопку она должнв вернуться а верх */
    $('.menu a').on('click', function (e) {
        e.preventDefault();

        $('.menu a').removeClass('active').filter(this).addClass('active');

        let selector = $(this).attr('href');
        console.log(selector);
        let h = $(selector);

        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 700)
    });
 })
