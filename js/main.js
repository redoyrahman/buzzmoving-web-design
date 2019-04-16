

$('a[href*="#form"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay:1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})
jQuery(document).ready(function () {
  $('.details').meanmenu({
    meanScreenWidth: "992",
    meanRevealPosition: "left",
    meanMenuContainer: '.mobile-menu-active'
  })
  $( "#pop-up" ).click(function() {
    $(".bg-form").css("display", "flex");
  });
  $( "#back" ).click(function() {
    $(".bg-form").css("display", "none");
  });
  $( "#form-zip" ).click(function() {
    $(".zip-form").css("display", "block");
  });
  $( "#zip-back " ).click(function() {
    $(".zip-form").css("display", "none");
  });
});


jQuery(document).ready(function () {
  $("#services").hover(function () {
    $('.mega-menu').show();
  }, function () {
    $('.mega-menu').hide();
  });
});