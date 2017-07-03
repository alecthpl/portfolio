// hide hero
$('#hero .button').on('click', function() {
    $('#hero').addClass('move-hero');
    $('#container').addClass('move-container');

    setTimeout(function() {
        $('header').css('position', 'fixed');
        $('body').css('overflow-y', 'auto');
    }, 600);

});
