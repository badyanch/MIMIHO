$('.slick-hero').slick({
  dots: false,
  prevArrow:
    '<button type="button" class="slick-hero-prev"><svg class="hero-slick-arrow slick-hero-prev-icon" width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 15.49h-26.16l6.019-6.061-1.419-1.429-8.44 8.5 8.44 8.5 1.419-1.429-6.019-6.061h26.16v-2.021z"></path></svg></button>',
  nextArrow:
    '<button type="button" class="slick-hero-next"><svg class="hero-slick-arrow slick-hero-next-icon" width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.559 8l-1.419 1.429 6.019 6.061h-26.16v2.021h26.159l-6.018 6.061 1.419 1.429 8.441-8.5-8.441-8.5z"></path></svg></button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 1,
  // centerMode: true,

  // responsive: [
  //   {
  //     breakpoint: 1280,
  //     settings: {
  //       slidesToShow: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //     },
  //   },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  // ],
});

// $('.responsive').slick({
//     // dots: true,
//     prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
//     nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
//     infinite: true,
//     speed: 300,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     slidesToShow: 3,

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ],
//   });
