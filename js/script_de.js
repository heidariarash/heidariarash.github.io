/*************************************
             Preloader
*************************************/
$(window).on('load', function() {
    $('#status').delay(500).fadeOut();
    $('#preloader').delay(500).fadeOut();
});

/*************************************
           Responsive Tabs
*************************************/
$(function () {
    $("#skills-tabs").responsiveTabs({
        animation: 'slide'
    });
    $(".r-tabs-accordion-title").parent().addClass("text-center");
});

/*************************************
             Navigation
*************************************/
$(function() {
    if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
        $("nav").addClass("nav-back");
    }
    else {
        $("nav").removeClass("nav-back");
    }

    $(window).scroll(function() {
        if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
            $("nav").addClass("nav-back");
        }
        else {
            $("nav").removeClass("nav-back");
        }
    })

    $(window).resize(function() {
        if (($(window).scrollTop() > 200) || ($(window).width() < 975)) {
            $("nav").addClass("nav-back");
        }
        else {
            $("nav").removeClass("nav-back");
        }
    })
})

$(function() {
    $(".smooth-class").click(function(event) {
        event.preventDefault();
        const section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250)
    })
})

/*************************************
             Animation
*************************************/
$(function() {
    new WOW().init();
});

$(window).on('load', function(){
    $("#home-heading-name").addClass("animated fadeInDown");
    $("#home-heading-title").addClass("animated fadeIn");
    $(".btn-home").addClass("animated fadeInUpBig");
    $(".fa-angle-down").addClass("animated fadeInDown infinite");
});
