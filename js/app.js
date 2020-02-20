var lang = 'nl';

$(function(){
    loadText();
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

function setLanguage(newLang) {
    lang = newLang;
    loadText();
}

function loadText() {
    var url = 'LukasHamstra.github.io/assets/languages/' + lang + '.json';
    $.getJSON(url, function(data) {
        console.log(data);
        $('#nav-home').html(data.navbar[0]);
        $('#nav-services').html(data.navbar[1]);
        $('#nav-portfolio').html(data.navbar[2]);
        $('#nav-about').html(data.navbar[3]);
        $('#nav-contact').html(data.navbar[4]);
    });
}