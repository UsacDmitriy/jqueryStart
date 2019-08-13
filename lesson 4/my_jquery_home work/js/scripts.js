$(function(){
    $('.question').on('click', function() { 
        $(this).next().toggle();
        //$(this).nextAll('.answer').hide();
        $(this).parent().nextAll().children('.answer').hide();
        $(this).parent().prevAll().children('.answer').hide();

     });
});
