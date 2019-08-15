/* $(function(){
    $('.question').on('click', function() { 
        let answer = $(this).next();

        $('.title .answer').not(answer).slideUp(400);
        answer.slideToggle(400);

     });
}); */


 $(function(){
    $('.question').on('click', function() { 
        $(this).next().toggle();
        //$(this).nextAll('.answer').hide();
        $(this).parent().nextAll().children('.answer').hide();
        $(this).parent().prevAll().children('.answer').hide();

     });
}); 
