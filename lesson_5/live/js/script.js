$(function () {

  $('form input[type="text"]').on('focus', function () {
    $(this).addClass('active');
  });
  
  $('form input[type="text"]').on('blur', function () {
    $(this).removeClass('active');
  });

  $('.addField').on('click', function () {

    let $div = $('<div/>').addClass('item');

    $('<input>').attr('type', 'text').addClass('check').appendTo($div);

    $('.items').append($div);

  });

  $('*').on('click', function(e){
    console.log(1);
  })

});
