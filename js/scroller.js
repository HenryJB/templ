
  // scroll image
    $(function () {
      var $image = $('#skew-filler-box').children('img');
      function animate_img() {
          if ($image.css('top') == '0px') {
              $image.animate({top: -($image.height()-468)+"px"}, $image.height()*1, function () {
                  animate_img();
              });
          } else {
              $image.animate({top: '0px'}, $image.height()*1, function () {
                  animate_img();
              });
          }
      }
      animate_img();
  });
