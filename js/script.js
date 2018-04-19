//animation effect(waypoint)
//paste this code under head tag or in a seperate js file.
 // Wait for window load
 $(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");

  function onScrollInit( items, trigger ) {
    items.each( function() {
      var osElement = $(this),
      osAnimationClass = osElement.attr('data-os-animation'),
      osAnimationDelay = osElement.attr('data-os-animation-delay');

      osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
      });

      var osTrigger = ( trigger ) ? trigger : osElement;

      osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
      },{
        triggerOnce: true,
        offset: '90%'
      });
    });
  }
  onScrollInit( $('.os-animation') );
  onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));

  // scroll image
    $(function () {
      var $image = $('#skew-filler-box').children('img');
      function animate_img() {
          if ($image.css('top') == '0px') {
              $image.animate({top: -($image.height()-468)+"px"}, $image.height()*5, function () {
                  animate_img();
              });
          } else {
              $image.animate({top: '0px'}, $image.height()*5, function () {
                  animate_img();
              });
          }
      }
      animate_img();
  });

});

 $(window).scroll(function() {

  if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});
