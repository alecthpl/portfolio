// smooth scroll to content
$('#hero .button, .nav a').on('click', function() {
    var anchor = $(this).attr('href');

    console.log(anchor);

    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 300);
});

$(window).scroll(function() {
    var top = $(window).scrollTop()

    if (top >= $('header').offset().top) {
        $('header').css('position', 'fixed');
    } else {
        $('header').css('position', 'absolute');
    }
});
