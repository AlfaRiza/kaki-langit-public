$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('bg-black');
    } else {
        $('.navbar').removeClass('bg-black');
    }
});

$('.page-scroll').on('click', function (e) {
    var href = $(this).attr('href');
    var elemenhref = $(href);
    var body = $("html, body");
    body.stop().animate({
        scrollTop: elemenhref.offset().top
    }, 1250, 'easeInOutExpo', function () {
        ;
    })
    e.preventDefault();
});