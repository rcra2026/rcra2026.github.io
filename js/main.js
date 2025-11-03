$(".navbar .nav-link").click(function () {
    const target = $(this).attr("href");
    const position = $(target).offset().top;
    $("html,body").stop().animate({
        scrollTop: position
    }, 1000);

    $('.navbar-collapse').collapse('hide');
})


