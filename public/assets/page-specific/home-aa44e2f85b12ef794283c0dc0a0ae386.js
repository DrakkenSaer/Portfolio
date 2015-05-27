$(document).ready(function (){
  //counter absolute bg-main position being overlayed by nav
  $("body").css("padding-top", 0);

  //adjust height for mobile devices
  if (!isNotMobile()) {
    $("section").css("height", $(window).height() + 50);
    $(".dark-overlay").css("height", $(window).height() + 50);
    $(".v-center").css("padding-top", $("section").height()/4);
  }

  //glyph scroll button functionality
  $(".scroll-button").click(function(e) {
    e.preventDefault();
    $('html:not(:animated),body:not(:animated)').stop().animate({
      scrollTop: $(".scroll-send").offset().top
    }, 1000);
  });

  //disable transparent nav bar on mobile browsers as "toggle" for nav breaks transparency
  $("header").addClass("toggle");
  function navbarTransparency(){
    if (isNotMobile()) {
      if (isNotMobile() && $(this).scrollTop() < $(this).height() - 50) {
        $(".toggle").addClass("transparent");
      }
      $(window).scroll(function(){
        if (isNotMobile() && $(this).scrollTop() < $(this).height() - 50) {
          $(".toggle").addClass("transparent");
        } else {
          $(".toggle").removeClass("transparent");
        }
      });
    } else {
      $(".toggle").removeClass("transparent");
    }
  }

  navbarTransparency();

  $(window).resize(function() {
    navbarTransparency();
  });

  //fall back to GIF for mobile browsers, otherwise use VideoBG
  if(isNotMobile()) {
    $('.bg-main').css("background", "black")
    $('#bg-video').videoBG({
      poster: "/assets/WaterfallBG/Waterfall.jpg",
      mp4: "/assets/WaterfallBG/Waterfall.mp4",
      ogv: "/assets/WaterfallBG/Waterfall.ogv",
      webm: "/assets/WaterfallBG/Waterfall.webm",
      autoplay: true,
      loop: true,
      scale: true,
      zIndex: 0,
      fullscreen: true
    });
  }  
});
