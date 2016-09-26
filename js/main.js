$(document).ready(function() {
    var siteHeaderOuterHeight = $('.site-header').outerHeight();

    $('.home-slider__list').slick({
        slidesToShow: 1
    });

    $('.testimonials__slider-list').slick({
        slidesToShow: 1
    });

    $('.site-header__nav-item a').princessScroll({
        offsetTop: -siteHeaderOuterHeight,
        animateSpeed: 500
    });

    $('.site-header__toggle-btn').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.site-header__nav').toggleClass('active');
        /* Act on the event */
    });

});
