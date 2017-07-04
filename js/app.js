// smooth scroll to content
$('#hero .button, .nav a').on('click', function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 300);
});

$(window).scroll(function() {
    var top = $(window).scrollTop()

    if (top >= 100) {
        $('header').addClass('header-scrolled')
    } else {
        $('header').removeClass('header-scrolled')
    }
});
