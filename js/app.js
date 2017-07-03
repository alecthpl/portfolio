$(document).ready(function() {
    // sites slider
    var slideCount = $('#sites .row').length;

    $('#prev').on('click', function() {
        var current = $('#sites .row.active').data('id');

        if (current == 1) {
            $('#sites .row').removeClass('active');
            $('#sites .row[data-id="' + slideCount + '"]').addClass('active');
            $('#site-count').html(slideCount + '/' + slideCount);
        } else {
            $('#sites .row').removeClass('active');
            $('#sites .row[data-id="' + (current - 1) + '"]').addClass('active');
            $('#site-count').html((current - 1) + '/' + slideCount);
        }
    });
    $('#next').on('click', function() {
        var current = $('#sites .row.active').data('id');

        if (current == slideCount) {
            $('#sites .row').removeClass('active');
            $('#sites .row[data-id="1"]').addClass('active');
            $('#site-count').html('1/' + slideCount);
        } else {
            $('#sites .row').removeClass('active');
            $('#sites .row[data-id="' + (current + 1) + '"]').addClass('active');
            $('#site-count').html((current + 1) + '/' + slideCount);
        }
    });

});
