(function($) {

  $(function() {

    var $gNav = $('.gNav'),
      $mainMenu = $('.gNav > li'),
      dir = location.href.split('/')[4];

    switch (dir) {
      case 'company':
        $mainMenu.eq(0).addClass('is-nav-selected');
        break;
      case 'news':
        $mainMenu.eq(1).addClass('is-nav-selected');
        break;
      case 'service':
        $mainMenu.eq(2).addClass('is-nav-selected');
        break;
      case 'offshore':
        $mainMenu.eq(3).addClass('is-nav-selected');
        break;
      case 'case':
        $mainMenu.eq(4).addClass('is-nav-selected');
        break;
      case 'recruit':
        $mainMenu.eq(5).addClass('is-nav-selected');
        break;
    }


    $gNav.find('a[href="#"]').click(function(){
      return false;
    });

    $('.l-stacked').parent('li').hover(function(){
      $(this).find('ul').fadeToggle(100);
    });

    var $topBtn = $('.pageTop');

    $topBtn.smoothScrollTop();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $topBtn.css('bottom',0);
      } else {
        $topBtn.css('bottom',-40);
      }
    });

    if(window.location.search) {
      anchorHandler();
    }

    var mode = 0;

    var url = {
      self: location.href,
      target: { portal: "http://framgia.co.jp", service: "http://framgia.com"},
      stage: { portal: "http://framgia.aipeacedev01.asia", service: "http://stg.framgia.com"},
      local: { portal: "http://localhost/framgia.co.jp", service: "http://framgia.localhost"}
    };
    if(mode === 0) {
      $("a").each(function(){
        var link = $(this).attr('href').replace(url.target.service,url.local.service);
        $(this).attr('href',link);
            link = $(this).attr('href').replace(url.target.portal,url.local.portal);
        $(this).attr('href',link);
      });
    }
    else if (mode===1) {
      $("a").each(function(){
        var link = $(this).attr('href').replace(url.target.service,url.stage.service);
        $(this).attr('href',link);
            link = $(this).attr('href').replace(url.target.portal,url.stage.portal);
        $(this).attr('href',link);
      });
    }


  });

  function anchorHandler() {
    var $heading = $("h1,h2"),
        query = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 6)),
        regExp = new RegExp("^"+query+"$"),
        position;

    $heading.each(function(){
      var $this = $(this),
          id = $this.attr("id");
        if(id && id.match(regExp)) {
          position = $(this).offset().top - 80;
        }
    });

    $('html,body').scrollTop(position);
    return false;
  }
  
  $.fn.smoothScrollTop = function() {

    $(this).click(function() {

      var speed = 300,
      position = 0;

      $('body').animate({scrollTop:position}, speed, 'swing');
      $('html').animate({scrollTop:position}, speed, 'swing');

      return false;

    });
  };

})(jQuery);