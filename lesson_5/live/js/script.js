$(function () {

  $('.items').on('focus', 'input[type="text"]',  function () {
    console.log(this);
    $(this).addClass('active');
  });
  
  $('.items').on('blur', 'input[type="text"]', function () {
    $(this).removeClass('active');
  });

  $('.addField').on('click', function () {

    let $div = $('<div/>').addClass('item');

    $('<input>').attr('type', 'text').addClass('check').appendTo($div);

    $('.items').append($div);

  });

  $('body').on('click', function(e){
    console.log(e.target);
  })

});
