!function($){$(function(){var i=location.href.split("/").pop().split(".")[0],n=$(".pagination").eq(0).find("li").size()-2;$(".pagination").find("li").each(function(){var t=$(this),a=t.find("a"),e=a.attr("href").split("/").pop().split(".")[0];if(e===i){var r=t.index();a.addClass("is-selected");var f=t.next().find("a").attr("href"),p=t.prev().find("a").attr("href");1>r?($(".preview").find("a").replaceWith(function(i,n){return $("<span>"+n+"</span>")}),$(".next").find("a").attr("href",f)):r>n?($(".next").find("a").replaceWith(function(i,n){return $("<span>"+n+"</span>")}),$(".preview").find("a").attr("href",p)):($(".next").find("a").attr("href",f),$(".preview").find("a").attr("href",p))}})})}(jQuery);