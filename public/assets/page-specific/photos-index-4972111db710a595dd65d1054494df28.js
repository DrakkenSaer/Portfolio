//fancybox image viewer
$(document).ready(function() {
  $galleryHolder = $('<div id="gallery_holder"></div>').appendTo(document.body);
  $('a.fancybox').fancybox({
    parent: $galleryHolder
  });
});
