// =========barfiller part start =========
$(document).ready(function () {
  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
});
// =========barfiller part end =========

// ==========project part start ======
$('.counter').counterUp();
// ==========project part end ======

// =========portfolio part start =========
$('.pfolio_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-right prevarrow"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-left nextarrow"></i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// =========portfolio part end =========

// =====review part start ======
$('.reviews_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-left prevarrow">prev---</i>',
  nextArrow: '<i class="fa-solid fa-arrow-left nextarrow">Next---</i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// =====review part end ======

// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll", function () {
  main_menu.classList.toggle("sticky", window.scrollY > 100);
})
// =========sticky menu part ========


// ========back to top part ======
var back_to_top = document.querySelector(".back_to_top")

window.addEventListener("scroll", function () {

  back_to_top.classList.toggle("bottom_to_top", window.scrollY > 150)
})
// ========back to top part ======