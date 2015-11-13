/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 210
});

/* smooth scrolling sections */
$('.section-link a').click(function() {
    $(".section-link").removeClass('active');
    $(this).parent('li').addClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 220
        }, 1000);
        return false;
      }
    }
});

$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight()-210;
    $('section').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
