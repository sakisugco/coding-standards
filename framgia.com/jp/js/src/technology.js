(function($) {


  $(function() {
    var stick = $('.stickHead');

    stick.each(function(){

      var cursor = $('<img>').attr('src','images/icon_cursor.png').prependTo($(this));



      $(this).click(function(){
        var $this = $(this),
            isopened = $this.attr('class').search(/is-opened/i);
        $this.next('.description').slideToggle();
        if(isopened < 0) {
          cursor.removeClass('is-closed');
          cursor.addClass('is-opened');
          $this.addClass('is-opened');
        }
        else {
          cursor.removeClass('is-opened');
          cursor.addClass('is-closed');
          $this.removeClass('is-opened');
        }
      });
    });
    init();

  });

  function init() {
    if(window.location.search) {
      anchorHandler();
    }
  }

  function anchorHandler() {
    var $heading = $("h1"),
        query = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 6)),
        regExp = new RegExp("^"+query+"$");


    $heading.each(function(){
      var $this = $(this),
          id = $this.attr("id");
        if(id && id.match(regExp)) {
          var $container = $this.parent('.stickHead');
          $container.next('.description').show();
          $container.find('img').addClass('is-opened');
          $container.addClass('is-opened');
        }
    });
    return false;
  }

})(jQuery);