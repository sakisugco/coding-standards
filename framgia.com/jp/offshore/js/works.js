
(function($) {
  $(function() {

    $links = $('.thumbnail-case');
    $links.each(function(){
      $(this).hover(function(){
        $(this).find('.hover').fadeIn();
      },function(){
        $(this).find('.hover').fadeOut();
      });
    })

  });

})(jQuery);