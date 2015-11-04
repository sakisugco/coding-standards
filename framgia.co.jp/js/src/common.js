
(function($) {

  $(function() {
    var $wrapper = $('<div>').addClass('overlay').appendTo('body').hide();
    $('.gNav').clone().show().appendTo($wrapper);
    $('.l-header').find('.btn').clone().show().appendTo($wrapper);

    navHandler();


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

    var mode = 2;

    var url = {
      self: location.href,
      target: {
        portal: "http://framgia.co.jp",
        service: "http://framgia.com"
      },
      stage: {
        portal: "http://framgia.aipeacedev01.asia",
        service: "http://stg.framgia.com"
      },
      local: {
        portal: "http://localhost/framgia.co.jp",
        service: "http://framgia.localhost"
      }
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


  function navHandler() {

    var $gNav = $('.gNav'),
      $mainMenu = $('.gNav > li'),
      $overlay = $('.overlay'),
      dir = location.href.split('/')[4];

    var $spBtn = $('.spMenu');

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

      var client = $gNav.css('content');
      var isOpened = $(this).hasClass('isOpened');

      if (client.match(/desktop/)) {
      } else {
        if(isOpened) {
          $(this).removeClass('isOpened');
        }
        else {
          $(this).addClass('isOpened');
        }
        $(this).next('ul').slideToggle(100);
      }
      return false;
    });

    $spBtn.click(function(){
    var topPos = document.documentElement.scrollTop || document.body.scrollTop;
      $overlay.css('top',topPos).fadeIn();
      $('body').css('overflow','hidden');
    });

    $overlay.click(function(){
      $(this).fadeOut();
      $('body').css('overflow','auto');
    });

    $('.l-stacked').parent('li').hover(function(){

      var client = $gNav.css('content');
      if (client.match(/desktop/)) {
        $(this).find('ul').fadeToggle(100);
      }
      return false;
    });
  }

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
