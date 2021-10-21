$(document).ready(function(){
  $(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('mu-fixed');
    else sticky.removeClass('mu-fixed');
  });
});

// select then remove current classes

$(document).ready(function(){
  $('.mob-menu-items ul li a').click(function(){
    $('.mob-header').removeClass('active');
    $('.line-top,.line-middle, .line-bottom').removeClass('active');
  });
});


AOS.init({
    offset : 150,
    duration : 1000,
    delay : 200,
});


// toggle btn

$(document).ready(function(){
  $('.toggl-btn').click(function(){
    $(this).toggleClass('active');
    $('.mob-header').toggleClass('active');
    $('.line-top,.line-middle, .line-bottom').toggleClass('active');
  });
});

// Clip banner

$(document).ready(function(){
    $('.main-div .box').click(function(){
        $(this).toggleClass('active');
        $('.main-div .box .box-content').toggleClass('op');
        $('.main-div .main-banner-heading h1').toggleClass('op'); 
    });
  });


//Read-More

$(document).ready(function(){
    $('#about-btn').click(function(){
        $('#about-btn').addClass('active');
        $('.about .inner-about .about-content .image-holder .para p').toggleClass('active');
    });
});


//slider-1

$(document).ready(function(){
    $('.deals-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 1219,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 813,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
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
  });


// magnific popup
$(document).ready(function() {
  $('.gallerys').magnificPopup({
    type:'image',
    delegate: 'a',
    mainClass: 'mfp-with-zoom', 
    zoom: {
      enabled: true, 
      duration: 300,
      easing: 'ease-in-out',
    },
    gallery:{
      enabled: true
    }
  });
});



  //slider-2

  $(document).ready(function(){
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: false,
        autoplaySpeed: 4000,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
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
  });
  