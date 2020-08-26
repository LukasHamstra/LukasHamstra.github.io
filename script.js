$(document).ready(function () {
    let designDevelopment = false;
    let hostingDomein = false;
    let onderhoud = false;
    let blog = false;
    const openNav = $("#nav-open");
    const buttonNav = $("#nav-button");
    let navChangeHeight = $(window).height() - (($(window).height()) * 0.2);

    if($(window).scrollTop() > navChangeHeight) {
        $(".navbar").addClass("alternate-nav");
        $(".hamburger-inner").addClass("alternate-hamburger");
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > navChangeHeight) {
            $(".navbar").addClass("alternate-nav");
            $(".hamburger-inner").addClass("alternate-hamburger");
        } else {
            $(".navbar").removeClass("alternate-nav");
            $(".hamburger-inner").removeClass("alternate-hamburger");
        }
    });

    buttonNav.click(function (e) {
        navClick();
        e.stopPropagation();
    });

    $(".mobileNavLink").click(function (e) {
        navClick();
        e.stopPropagation();
    });

    openNav.get(0).addEventListener('transitionend', function () {
        buttonNav.bind("click", function (e) {
            navClick();
            e.stopPropagation()
        });
    }, false);

    function navClick() {
        buttonNav.unbind("click");
        buttonNav.toggleClass("is-active");
        const windowWidth = $(window).width() * 2;
        const negativeNavWidth = "-".concat(windowWidth.toString()).concat("px");
        if (openNav.css('right') === negativeNavWidth) {
            openNav.css('right', '0');
            $(".navbar").removeClass("alternate-nav");
            $(".hamburger-inner").removeClass("alternate-hamburger");
        } else if (openNav.css('right') === "0px") {
            openNav.css('right', '-200vw');
            if ($(window).scrollTop() > navChangeHeight) {
                $(".navbar").addClass("alternate-nav");
                $(".hamburger-inner").addClass("alternate-hamburger");
            }
        }
    }

    // $("#DesignDevelopment").click(function () {
    //     if (designDevelopment) {
    //         $("#DesignDevelopmentCaret").removeClass('caret-open');
    //     } else {
    //         $("#DesignDevelopmentCaret").addClass('caret-open');
    //     }
    //
    //     designDevelopment = !designDevelopment;
    // });
    //
    // $("#HostingDomein").click(function () {
    //     if (hostingDomein) {
    //         $("#HostingDomeinCaret").removeClass('caret-open');
    //     } else {
    //         $("#HostingDomeinCaret").addClass('caret-open');
    //     }
    //
    //     hostingDomein = !hostingDomein;
    // });
    //
    // $("#Onderhoud").click(function () {
    //     if (onderhoud) {
    //         $("#OnderhoudCaret").removeClass('caret-open');
    //     } else {
    //         $("#OnderhoudCaret").addClass('caret-open');
    //     }
    //
    //     onderhoud = !onderhoud;
    // });
    //
    // $("#Blog").click(function () {
    //     if (blog) {
    //         $("#BlogCaret").removeClass('caret-open');
    //     } else {
    //         $("#BlogCaret").addClass('caret-open');
    //     }
    //
    //     blog = !blog;
    // });

    let coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        let element = coll[i];
        element.addEventListener("click", function () {
            if(jQuery(element).hasClass('caret-open')) {
                jQuery(element).removeClass('caret-open');
                const content = element.nextElementSibling;
                content.style.maxHeight = null;
            } else {
                for(let j = 0; j < coll.length; j++) {
                    jQuery(coll[j]).removeClass('caret-open');
                    let content = coll[j].nextElementSibling;
                    content.style.maxHeight = null;
                }
                const content = element.nextElementSibling;
                jQuery(element).addClass('caret-open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    }
});