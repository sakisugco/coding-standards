(function($) {
  $(function() {

    portalAnimation();
    carousel_handler();

  });


  function portalAnimation() {
    var $stage = $('.portal').find('.l-main'),
        pic = $stage.find('p').remove();

        $(pic[0]).appendTo($stage).show();

        setTimeout(slideShow,5000,pic);
  }

  function slideShow(pic) {
      var $stage = $('.portal').find('.l-main');
      var current = $('.portal').find('.l-main').find('p').attr('class').slice(1) * 1 -1;
      var next = (current === pic.size() - 1) ? 0: current + 1;

      $(pic[next]).appendTo($stage).fadeIn(1000,function(){
        $(pic[current]).hide().remove();
      });

        setTimeout(slideShow,9000,pic);
  }

  function carousel_handler() {
    var here = 0;
    carousen_button_handler(here);
    $(".carousel-prev").click(function(){

      var position = $(".l-offshore-stage").position();
      console.log(position);
      here--;
      carousen_button_handler(here);
      $(".l-offshore-stage").animate({"left": position.left + 315 + "px"},300);
      return false;
    });
    $(".carousel-next").click(function(){
      var position = $(".l-offshore-stage").position();
      console.log(position);
      here++;
      carousen_button_handler(here);
      $(".l-offshore-stage").animate({"left": position.left - 355 + "px"},300);
      return false;
    });
  }

  function carousen_button_handler(here) {
    var size = $(".l-offshore-stage").find("section").size() - 3;
    if(here < 1) {
      $(".carousel-prev").hide();
      $(".carousel-next").show();
    }
    else if(here === size) {
      $(".carousel-prev").show();
      $(".carousel-next").hide();
    }
    else {
      $(".carousel-prev").show();
      $(".carousel-next").show();
    }
  }

})(jQuery);



var japan = new google.maps.LatLng(35.689689, 139.765095);
var singapore= new google.maps.LatLng(1.289214, 103.846753);
var vietnam = new google.maps.LatLng(21.017323, 105.783896);
var marker = {};
var map = {};

function initialize() {

  var options_jp = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true, 
    scrollwheel: false,
    center: japan
  };
  var options_sg = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true, 
    scrollwheel: false,
    center: singapore
  };
  var options_vn = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true, 
    scrollwheel: false,
    center: vietnam
  };


  var image = 'http://framgia.com/jp/images/icon_marker.png';

  map.jp = new google.maps.Map(document.getElementById("map_jp"),
      options_jp);

  map.sg = new google.maps.Map(document.getElementById("map_sg"),
      options_sg);

  map.vn = new google.maps.Map(document.getElementById("map_vn"),
      options_vn);

  marker.jp = new google.maps.Marker({
    map:map.jp,
    animation: google.maps.Animation.DROP,
    position: japan,
    icon: image
  });

  marker.sg = new google.maps.Marker({
    map:map.sg,
    animation: google.maps.Animation.DROP,
    position: singapore,
    icon: image
  });

  marker.vn = new google.maps.Marker({
    map:map.vn,
    animation: google.maps.Animation.DROP,
    position: vietnam,
    icon: image
  });
}

function toggleBounce() {

  if (marker_jp.getAnimation() != null) {
    marker_jp.setAnimation(null);
  } else {
    marker_jp.setAnimation(google.maps.Animation.DROP);
  }
}