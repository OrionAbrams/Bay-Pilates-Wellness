$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
        $('.logo').css('color', 'white')
        $('a').css('color', 'white')
  }

  else {
        $('nav').removeClass('black');
        $('.logo').css('color', '#000058')
        $('a').css('color', '#000058')
  }
})

