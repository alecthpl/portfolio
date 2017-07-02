$(document).ready(function() {
    // site info popup
    $('#sites img').on('click', function() {
        $('#site-bg, #site-info').fadeIn(150);
    });
    $('#site-close').on('click', function() {
        $('#site-bg, #site-info').fadeOut(150);
    })
});
