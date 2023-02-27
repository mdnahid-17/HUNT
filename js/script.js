$(function () {
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: ".right",
    nextArrow: ".left",

    // fade: true,
    // cssEase: 'linear'
  });

  $('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    vertical: true,
    rows: 0,
    centerMode: true,
    centerPadding: '1px',
    prevArrow: ".up",
    nextArrow: ".down",
  });


  $('.person-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    vertical: true,
    rows: 0,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.person-info-slider',
    prevArrow: ".person-up",
    nextArrow: ".person-down",
  });


  $('.person-info-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    asNavFor: '.person-slider'

  });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  $('.logo-wrap').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    arrows: false

  });

  //responsive

  //sidbar 
  $('.toggle-bars').on('click', function () {
    $('.sidebar').css("left", "0")
  })
  $('.cros').on('click', function () {
    $('.sidebar').css("left", "-100%")
  })

  //our service slider

  $('.our-service-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
    rows: 0,
    centerMode: true,
    centerPadding: '5px',

  });



})