"use strict";

$(document).ready(function () {
  var buttonShowMore = $(".js-show-more-contests");
  var buttonHidden = $(".js-show-less-contests");
  var contests = $(".js-contests");

  buttonShowMore.on("click", function () {
    contests.addClass("active");
    $(this).fadeOut(50);
    buttonHidden.delay(50).fadeIn(50);
  });

  buttonHidden.on("click", function () {
    contests.removeClass("active");
    $(this).fadeOut(50);
    buttonShowMore.delay(50).fadeIn(50);
  });
});