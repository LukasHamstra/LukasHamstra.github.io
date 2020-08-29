$(document).ready(function () {
    const openNav = $("#nav-open");
    const buttonNav = $("#nav-button");
    let navChangeHeight = $(window).height() - (($(window).height()) * 0.3);

    let serviceDiv = document.getElementById("services").offsetTop - convertRemToPixels(5);
    let possibilitiesDiv = document.getElementById("possibilities").offsetTop - convertRemToPixels(5);
    let portfolioDiv = document.getElementById("portfolio").offsetTop - convertRemToPixels(5);
    let aboutDiv = document.getElementById("about").offsetTop - convertRemToPixels(5);
    let contactDiv = document.getElementById("contact").offsetTop - convertRemToPixels(6.5);

    function convertRemToPixels(rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    $("#serviceLink, #serviceLinkMobile").click(function() {
        setTimeout(function () {
            scrollTo(0, serviceDiv);
        }, 10);
    });

    $("#possibilitiesLinkMobile, #possibilitiesLinkMobile").click(function() {
        setTimeout(function() {
            scrollTo(0, possibilitiesDiv)
        }, 10);
    })

    $("#portfolioLink, #portfolioLinkMobile").click(function() {
        setTimeout(function() {
            scrollTo(0, portfolioDiv);
        }, 10);
    });

    $("#aboutLink, #aboutLinkMobile").click(function() {
        setTimeout(function() {
            scrollTo(0, aboutDiv);
        }, 10);
    });

    $("#contactLink, #contactLinkMobile").click(function() {
        setTimeout(function() {
            scrollTo(0, contactDiv);
        }, 10);
    });

    if($(window).scrollTop() > navChangeHeight && openNav.css('right') !== "0px") {
        $(".navbar").addClass("alternate-nav");
        $(".hamburger-inner").addClass("alternate-hamburger");
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > navChangeHeight && openNav.css('right') !== "0px") {
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

    let coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        let element = coll[i];
        element.addEventListener("click", function() {
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

    let mobileNavLinks = document.getElementsByClassName("mobileNavLink");

    for (let i = 1; i < mobileNavLinks.length; i++) {
        let element = mobileNavLinks[i];
        element.addEventListener("click", function() {
            setTimeout(function() {
                $(".navbar").addClass("alternate-nav");
            }, 750)
        })
    }
});