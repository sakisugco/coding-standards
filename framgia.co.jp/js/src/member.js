 


(function($) {


  $(function() {
    $('.memberList').find('li').each(function(){
      var $this = $(this),
          $stage = $this.parent().next(),
          $target = $this.attr('class');




      $this.find('p').click(function() {


          var client = $('.gNav').css('content');
          var topPos = document.documentElement.scrollTop || document.body.scrollTop;


          var isselected = $(this).find('img').attr('class').search(/is-selected/i);
          $('img').removeClass('is-selected');

          $(this).find('img').addClass('is-selected');

          $('.stage').removeClass('is-opened');
          $stage.addClass('is-opened');
          $('.stage:not(.is-opened)').slideUp().children().fadeOut();

          if(isselected < 0) {
            $stage.children().fadeOut();
            $stage.find('.' + $target).fadeIn();
            console.log(client);
            if (client.match(/desktop/)) {
              $stage.slideDown();
            } else {
              $stage.css('top',topPos).fadeIn();
              $('body').css('overflow','hidden');
            }
          }
          else {
            $(this).find('img').removeClass('is-selected');
            $stage.slideUp();
          }
      });

        $stage.click(function(){
          var client = $('.gNav').css('content');
            if (client.match(/desktop/)) {
          } else {
            $(this).fadeOut();
            $('body').css('overflow','auto');
          }
        });
       $this.find('img').after('<span>Read Biography</span>');

    });

  });

})(jQuery);