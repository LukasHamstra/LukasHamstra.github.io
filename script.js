$(document).ready(function(){
    var designDevelopment = false;
    var hostingDomein = false;
    var onderhoud = false;
    var blog = false;

    $("#nav-button").click(function() {
        $("#nav-open").toggle();
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
});