window.onload = function(e) {

    $('.b-popup').hide();

    $('.b-container').click(() => {
        $('.b-popup').show();
    });
    $('.b-popup').click(() => {
        $('.b-popup').hide();
    });


}