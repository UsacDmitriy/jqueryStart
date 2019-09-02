window.onload = function(e) {

    $('.b-popup').hide();

    setTimeout(()=>{
        $('.b-popup').show();
    }, 2000);

    $('.b-container').click(() => {
        $('.b-popup').show();
        $('.b-popup-content').html('<h1>I AM POP UP</h1>');

    });
    $('.b-popup').click(() => {
        $('.b-popup').hide();
    });


}