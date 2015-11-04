(function($) {
  $(function() {

    var url_self = location.href.split('/').pop().split('.')[0],
        max_page = $('.pagination').eq(0).find('li').size() - 2;

    $('.pagination').find('li').each(function(){
      var $this = $(this),
          $link = $this.find('a'),
          url_target = $link.attr('href').split('/').pop().split('.')[0];

          if(url_target === url_self) {
            var index = $this.index();
            $link.addClass('is-selected');
              var url_next = $this.next().find('a').attr('href'),
                  url_prev = $this.prev().find('a').attr('href');


            if(index < 1) {
              $('.preview').find('a').replaceWith(function(i,text){
                return $('<span>' + text + '</span>');
              });
              $('.next').find('a').attr('href',url_next);

            }
            else if (index > max_page) {
              $('.next').find('a').replaceWith(function(i,text){
                return $('<span>' + text + '</span>');
              });
              $('.preview').find('a').attr('href',url_prev);
            }
            else {
              $('.next').find('a').attr('href',url_next);
              $('.preview').find('a').attr('href',url_prev);
            }
          }
    });

  });

})(jQuery);