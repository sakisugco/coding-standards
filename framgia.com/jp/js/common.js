!function($){function e(){var e=$(".gNav"),t=$(".gNav > li"),a=$(".overlay"),s=location.href.split("/")[4],o=$(".spMenu");switch(s){case"company":t.eq(0).addClass("is-nav-selected");break;case"news":t.eq(1).addClass("is-nav-selected");break;case"service":t.eq(2).addClass("is-nav-selected");break;case"offshore":t.eq(3).addClass("is-nav-selected");break;case"case":t.eq(4).addClass("is-nav-selected");break;case"recruit":t.eq(5).addClass("is-nav-selected")}e.find('a[href="#"]').click(function(){var t=e.css("content"),a=$(this).hasClass("isOpened");return t.match(/desktop/)||(a?$(this).removeClass("isOpened"):$(this).addClass("isOpened"),$(this).next("ul").slideToggle(100)),!1}),o.click(function(){var e=document.documentElement.scrollTop||document.body.scrollTop;a.css("top",e).fadeIn(),$("body").css("overflow","hidden")}),a.click(function(){$(this).fadeOut(),$("body").css("overflow","auto")}),$(".l-stacked").parent("li").hover(function(){var t=e.css("content");return t.match(/desktop/)&&$(this).find("ul").fadeToggle(100),!1})}function t(){var e=$("h1,h2"),t=decodeURIComponent(window.location.href.slice(window.location.href.indexOf("?")+6)),a=new RegExp("^"+t+"$"),s;return e.each(function(){var e=$(this),t=e.attr("id");t&&t.match(a)&&(s=$(this).offset().top-80)}),$("html,body").scrollTop(s),!1}$(function(){var a=$("<div>").addClass("overlay").appendTo("body").hide();$(".gNav").clone().show().appendTo(a),$(".l-header").find(".btn").clone().show().appendTo(a),e();var s=$(".pageTop");s.smoothScrollTop(),$(window).scroll(function(){$(this).scrollTop()>300?s.css("bottom",0):s.css("bottom",-40)}),window.location.search&&t();var o=2,r={self:location.href,target:{portal:"http://framgia.co.jp",service:"http://framgia.com"},stage:{portal:"http://framgia.aipeacedev01.asia",service:"http://stg.framgia.com"},local:{portal:"http://localhost/framgia.co.jp",service:"http://framgia.localhost"}};0===o?$("a").each(function(){var e=$(this).attr("href").replace(r.target.service,r.local.service);$(this).attr("href",e),e=$(this).attr("href").replace(r.target.portal,r.local.portal),$(this).attr("href",e)}):1===o&&$("a").each(function(){var e=$(this).attr("href").replace(r.target.service,r.stage.service);$(this).attr("href",e),e=$(this).attr("href").replace(r.target.portal,r.stage.portal),$(this).attr("href",e)})}),$.fn.smoothScrollTop=function(){$(this).click(function(){var e=300,t=0;return $("body").animate({scrollTop:t},e,"swing"),$("html").animate({scrollTop:t},e,"swing"),!1})}}(jQuery);