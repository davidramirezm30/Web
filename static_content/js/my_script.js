$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 450);
});

if ($(window).innerWidth() <= 768) {

  $('.navbar-toggle').on('click', function () {
    if ($(this).hasClass('collapsed')) {
      $('.navbar-default').css('background', '#85929E');

    }
    else {
      $('.navbar-default').css('background', 'transparent');
    }
  });

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $('.navbar-default').css('background', 'transparent');
  });
}
