$(document).ready(function(){function e(){isNotMobile()?(isNotMobile()&&$(this).scrollTop()<$(this).height()-50&&$(".toggle").addClass("transparent"),$(window).scroll(function(){isNotMobile()&&$(this).scrollTop()<$(this).height()-50?$(".toggle").addClass("transparent"):$(".toggle").removeClass("transparent")})):$(".toggle").removeClass("transparent")}$("body").css("padding-top",0),isNotMobile()||($("section").css("height",$(window).height()+50),$(".dark-overlay").css("height",$(window).height()+50),$(".v-center").css("padding-top",$("section").height()/4)),$(".scroll-button").click(function(e){e.preventDefault(),$("html:not(:animated),body:not(:animated)").stop().animate({scrollTop:$(".scroll-send").offset().top},1e3)}),$("header").addClass("toggle"),e(),$(window).resize(function(){e()}),isNotMobile()&&($(".bg-main").css("background","black"),$("#bg-video").videoBG({poster:"/assets/WaterfallBG/Waterfall-7b71cf902159beefd8361edc936c6f98.jpg",mp4:"/assets/WaterfallBG/Waterfall-d4a13a48b39b11a629d508c2c4ccc138.mp4",ogv:"/assets/WaterfallBG/Waterfall-0399549f6e01f44f765e7007f84699a7.ogv",webm:"/assets/WaterfallBG/Waterfall-26b6c6f432ad960639677aefec8e777b.webm",autoplay:!0,loop:!0,scale:!0,zIndex:0,fullscreen:!0}))});