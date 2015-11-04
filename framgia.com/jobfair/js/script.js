
(function($) {

	$(function() {

		$('a.scroll').smoothScroll();
        var $header = $('.header');
            $headerBtn = $header.find('.pure-button');
        $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
            $header.css({
              'top': -56
            });
            $headerBtn.css({
              'top': 66,
              'height': 40,
              'lineHeight': '40px'
            });
          } else {
            $header.css({
              'top': 0
            });
            $headerBtn.css({
              'top': 34,
              'height': 48,
              'lineHeight': '48px'
            });
          }
        });

	});


	$.fn.smoothScroll = function(_target) {

		$(this).click(function(_target) {

			var speed = 300,
				href= $(this).attr("href"),
				target = $(href == "#" || href == "" ? 'html' : href),
				position = target.offset().top - 59;

			$('body').animate({scrollTop:position}, speed, 'swing');
			$('html').animate({scrollTop:position}, speed, 'swing');

			return false;

		});
	};


})(jQuery);