$(document).ready(function(){
  //Вывод сообщения об устаревшей версии браузера
  if((navigator.userAgent.indexOf("Chrome/61.0") != -1) || (navigator.userAgent.indexOf("Firefox/55.0") != -1) || (navigator.userAgent.indexOf("Edge/15") != -1) || ((navigator.userAgent.indexOf("MSIE") == -1) && (navigator.userAgent.indexOf("Trident/7.0") != -1))) {
    return;
  } else {
    showMessage();
  }

  function showMessage() {
    $('.js-message').fadeIn(300);
  }

  //закрываем сообщение об устаревшей версии браузера при клике на кнопку закрыть
  $('.js-message-close').on("click", function() {
    $('.js-message').fadeOut(300);
  })
});
