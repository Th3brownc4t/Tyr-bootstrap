$(document).ready(function () {
    var altura = $('.trailer').offset().top;
  
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > altura) {
        $(".trailer").addClass("trailer-fixed")
      } else {
        $(".trailer").removeClass("trailer-fixed")
      }
    });
  });
