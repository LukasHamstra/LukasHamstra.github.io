$(document).ready(function(){
    var designDevelopment = false;
    var hostingDomein = false;
    var onderhoud = false;
    var blog = false;
    var openNav = $("#nav-open");

    console.log(openNav.css('right'));

    $("#nav-button").click(function() {
        $("#nav-button").toggleClass("is-active");
        const windowWidth = $(window).width() * 2;
        const negativeNavWidth = "-".concat(windowWidth.toString()).concat("px");
        if(openNav.css('right') === negativeNavWidth) {
            openNav.css('right', '0');
        } else if (openNav.css('right') === "0px") {
            openNav.css('right', '-200vw');
        }
    });
    $("#DesignDevelopment").click(function() {
        if(designDevelopment) {
            $("#DesignDevelopmentCaret").removeClass('caret-open');
        } else {
            $("#DesignDevelopmentCaret").addClass('caret-open');
        }

        designDevelopment = !designDevelopment;
    });
    $("#HostingDomein").click(function() {
        if(hostingDomein) {
            $("#HostingDomeinCaret").removeClass('caret-open');
        } else {
            $("#HostingDomeinCaret").addClass('caret-open');
        }

        hostingDomein = !hostingDomein;
    });
    $("#Onderhoud").click(function() {
        if(onderhoud) {
            $("#OnderhoudCaret").removeClass('caret-open');
        } else {
            $("#OnderhoudCaret").addClass('caret-open');
        }

        onderhoud = !onderhoud;
    });
    $("#Blog").click(function() {
        if(blog) {
            $("#BlogCaret").removeClass('caret-open');
        } else {
            $("#BlogCaret").addClass('caret-open');
        }

        blog = !blog;
    });

    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});