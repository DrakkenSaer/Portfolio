$(document).ready(function (){
  $("body").css("padding-top", 0);
  $("section").css("height", $(window).height());
  $(".dark-overlay").css("height", $(window).height());
  $(".v-center").css("padding-top", $("section").height()/4);
  $("header").addClass("toggle");

  $(window).resize(function() {
    $("section").css( "height", $(window).height());
    $(".dark-overlay").css( "height", $(window).height());
    $(".v-center").css( "padding-top", $("section").height()/4);
  });

  $(".scroll-button").click(function(e) {
    e.preventDefault();
    $('html:not(:animated),body:not(:animated)').stop().animate({
      scrollTop: $(".scroll-send").offset().top
    }, 1000);
  });

  if ($(window).width() > 800) {
    $(".toggle").addClass("transparent");
    $(window).scroll(function(){
      if ($(this).scrollTop() < $(this).height() - 50) {
        $(".toggle").addClass("transparent");
      } else {
        $(".toggle").removeClass("transparent");
      }
    });
  }
});