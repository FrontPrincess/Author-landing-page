(function($) {
  $.fn.princessScroll = function(options) {
    var settings = $.extend({
      offsetTop: 0,
      animateSpeed: 1000
    }, options);
    this.on('click', function(ev) {
      ev.preventDefault();
      var $this = $(this);
      $this.parents('li').siblings('li').removeClass('site-header__nav-item--active');
      $this.parents('li').addClass('site-header__nav-item--active');
      $this.addClass('active');
      var thisHref = $this.attr('href');
      var anchorBlock = $(thisHref);
      $('html, body').animate({
        scrollTop: anchorBlock.offset().top + settings.offsetTop
      }, settings.animateSpeed);
    });
  }
}(jQuery));