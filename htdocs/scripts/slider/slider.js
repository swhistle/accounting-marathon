'use strict';

$(document).ready(function () {
  var $slick = $('.js-slider');

  $slick.slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});