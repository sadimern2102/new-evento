var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("bday").innerHTML = days
  document.getElementById("bhour").innerHTML = hours
  document.getElementById("bmin").innerHTML = minutes
  document.getElementById("bsec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

}, 1000);

// =================Banner Venobox=====================

$(document).ready(function(){
  $('.venobox').venobox(); 
});

// =================About Slick========================

// $('.about-slider').slick({
//   dots: false,
//   arrows: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });

// =================Event Nicescroll===================

$(".event-main").niceScroll({
  cursorcolor:"#ffa913",
  cursorwidth:"15px",
  background:"#c7c7c7",
  cursorborderradius: "10px",
});



// =================Gallery Slick======================

$('.gallery-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// =================Gallery Venobox====================

$(document).ready(function(){
  $('.venobox').venobox(); 
});

// ====================Feedback Slick==================

$('.feed-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  // centerMode: true,
  // centerPadding: 0,
  autoplay: true,
  prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// ====================Price Slick==================

$('.price-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  // centerPadding: 0,
  // autoplay: true,
  prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});