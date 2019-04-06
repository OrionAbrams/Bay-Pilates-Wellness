$(document).ready(function () {
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect
$(window).on("scroll", function () {
      if (window.scrollY !== 0) {
            $('nav').addClass('black');
            $('.logo').css('color', 'white')
            $('a').css('color', 'white')
      }

      else if ($(window).width() > 1040) {
            $('nav').removeClass('black');
            $('.logo').css('color', '#000058')
            $('a').css('color', '#000058')
      }
})

$(window).resize(function(){
      if ($(window).width() < 1040) {
            $('nav').removeClass('black');
            $('.logo').css('color', 'white')
            $('a').css('color', 'white')
      }
      else if ($(window).width() > 1040 && window.scrollY !== 0) {
            $('nav').addClass('black');
            $('.logo').css('color', 'white')
            $('a').css('color', 'white')
      }
    });

