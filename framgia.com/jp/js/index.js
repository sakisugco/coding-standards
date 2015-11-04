
var _ga_url = {
  conf : {
    f : ["facebook", "social"],
    g : ["facebook_group", "social"],
    a : ["facebook_ad", "social"],
    t : ["twitter", "social"]
  },

  getQuery : function(name) {
    if(location.search) {
      var query = location.search;
      query = query.substring(1,query.length);
      var qArray = [];
      qArray = query.split("&");
      for(var i=0;i<qArray.length;i++) {
        var param = qArray[i].split("=");
        if(param[0] == name){
          return param[1];
        }
      }
    }
  },

  get_param : function(str){
    var param_str = this.getQuery(str)
    return "&utm_campaign=" + param_str
  },

  main : function() {
    for (var i in this.conf) {
      if((!(location.search).match(/utm_source/)) && this.getQuery(i)) {
        var str = "&utm_source=" + this.conf[i][0] + "&utm_medium=" + this.conf[i][1] + this.get_param(i);
        var url_str = document.URL + str;
        location.href = url_str;
      }
    }
  }
}
_ga_url.main();
function initialize(){var e={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,scaleControl:!0,scrollwheel:!1,center:japan},o={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,scaleControl:!0,scrollwheel:!1,center:singapore},a={zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,scaleControl:!0,scrollwheel:!1,center:vietnam},n="http://framgia.com/jp/images/icon_marker.png";map.jp=new google.maps.Map(document.getElementById("map_jp"),e),map.sg=new google.maps.Map(document.getElementById("map_sg"),o),map.vn=new google.maps.Map(document.getElementById("map_vn"),a),marker.jp=new google.maps.Marker({map:map.jp,animation:google.maps.Animation.DROP,position:japan,icon:n}),marker.sg=new google.maps.Marker({map:map.sg,animation:google.maps.Animation.DROP,position:singapore,icon:n}),marker.vn=new google.maps.Marker({map:map.vn,animation:google.maps.Animation.DROP,position:vietnam,icon:n})}function toggleBounce(){null!=marker_jp.getAnimation()?marker_jp.setAnimation(null):marker_jp.setAnimation(google.maps.Animation.DROP)}!function($){function e(){var e=$(".portal").find(".l-main"),a=e.find("p").remove();$(a[0]).appendTo(e).show(),setTimeout(o,5e3,a)}function o(e){var a=$(".portal").find(".l-main"),n=1*$(".portal").find(".l-main").find("p").attr("class").slice(1)-1,t=n===e.size()-1?0:n+1;$(e[t]).appendTo(a).fadeIn(1e3,function(){$(e[n]).hide().remove()}),setTimeout(o,9e3,e)}function a(){var e=0;n(e),$(".carousel-prev").click(function(){var o=$(".l-offshore-stage").position();return console.log(o),e--,n(e),$(".l-offshore-stage").animate({left:o.left+315+"px"},300),!1}),$(".carousel-next").click(function(){var o=$(".l-offshore-stage").position();return console.log(o),e++,n(e),$(".l-offshore-stage").animate({left:o.left-355+"px"},300),!1})}function n(e){var o=$(".l-offshore-stage").find("section").size()-3;1>e?($(".carousel-prev").hide(),$(".carousel-next").show()):e===o?($(".carousel-prev").show(),$(".carousel-next").hide()):($(".carousel-prev").show(),$(".carousel-next").show())}$(function(){e(),a()})}(jQuery);var japan=new google.maps.LatLng(35.689689,139.765095),singapore=new google.maps.LatLng(1.289214,103.846753),vietnam=new google.maps.LatLng(21.017323,105.783896),marker={},map={};