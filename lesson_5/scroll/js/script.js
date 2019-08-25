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

    var btn = $('.button');

    function scrollBtn() { 
      if ($(this).scrollTop() > 400) {
        btn.show();
      } else {
        btn.hide();
      }
     };

    scrollBtn();

    $(window).on('scroll', scrollBtn);
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '1300');
    });
 })
