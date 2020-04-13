$(function () {
    AOS.init({
        easing: 'ease',
        duration: 1000,
    })
})

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
})