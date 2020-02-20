var lang = 'nl';
// var texts = ["navbar", "splash-text", "services-title", "services-text", "services-title2",
//                 "services-text2", "service-price-indication", "service-sliders", "portfolio-title",
//                 "portfolio-project1-title", "portfolio-project1-text", "portfolio"];

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
    $.ajax({
        url:  '../assets/languages/' +  lang + '.json',
        dataType: 'json', async: false,
        success: function (lang) { data = lang } });

    console.log(data);
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            $('[data-text=' + key + ']').html(data[key]);
        }
    }
}