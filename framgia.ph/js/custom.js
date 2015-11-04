"use strict";

$(document).ready(function() {

  // Call One page plugin
  $('#one-page').singlePageNav({
    updateHash: true,
    speed: 500
  });

  $('#one-page li a').on('click', function() {
    var wWidth = $(window).width();
    if (wWidth <= 768) {
      $('.navbar-collapse').attr('aria-expanded', 'false').removeClass('in');
    }
    return false;
  });


  $(".scroll-contact").on('click', function() {
    var Hash = $(this.hash);
    var HashOffset = $(Hash).offset().top;
    $("html,body").animate({
      scrollTop: HashOffset
    }, 500);
    return false;
  });


  // Call google map
  var map;
  var id_map = $('.framgia-map').attr('id');
  var lat = parseFloat($('.framgia-map').attr('data-latitude'));
  var lng = parseFloat($('.framgia-map').attr('data-longitude'));
  var place = $('.framgia-map').attr('data-place');

  map = new GMaps({
    el: '#' + id_map,
    lat: lat,
    lng: lng,
    zoomControl: true,
    zoomControlOpt: {
      style: 'SMALL',
      position: 'TOP_LEFT'
    },
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    overviewMapControl: false
  });
  map.addMarker({
    lat: lat,
    lng: lng,
    title: place
  });


  // Back to top
  var backtop = $('.back-top');
  var $window = $(window);
  var $scroll = $('.banner-box-content');

  $(window).scroll(function() {

    var yPos = -($window.scrollTop() / $scroll.data('speed'));
    var coords = '50% ' + yPos + 'px';
    $scroll.css({
      backgroundPosition: coords
    });

    if ($(this).scrollTop() > 450) {
      backtop.addClass('fadeIn');
    } else {
      backtop.removeClass('fadeIn');
    }
  });

  backtop.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  });


  // Validate contact
  function removeVal(){
    $('.remove-val').val('');
    return false;
  }

  $('.inner-contact-form').validate({
    // Add requirements to each of the fields
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    // Specify what error messages to display
    // when the user does something horrid
    messages: {
      name: {
        required: "Please enter your name.",
        minlength: jQuery.format("At least {0} characters required.")
      },
      email: {
        required: "Please enter your email.",
        email: "Please enter a valid email."
      },
      message: {
        required: "Please enter a message.",
        minlength: jQuery.format("At least {0} characters required.")
      }
    },
    submitHandler: function(form) {
      var $form = $('form');
      var formData = $form.serialize();

      $.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: formData
      }).done(function(response) {
        $("#myModalLabel").text(response);
        $('#employer-modal').removeClass('error').addClass('success').modal();
        removeVal();
        ga('send', 'event', 'button', 'click', 'inquiry', 1);
      }).fail(function(response) {
        $("#myModalLabel").text(response);
        $('#employer-modal').removeClass('success').addClass('error').modal();
      });
    }
  });


});