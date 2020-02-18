$(function(){
    $('#scroll-top').hide();
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 900) {
            $('#scroll-top').show()
        } else {
            $('#scroll-top').hide();
        }
    });

    $('#scroll-top').click(function() {
        $('#scroll-top').hide();
    })
});