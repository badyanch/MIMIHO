$('.slick-header').slick({
  dots: false,
  prevArrow:
    '<button type="button" class="slick-header-prev"><svg class="slick-arrow slick-header-prev-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 15.49h-26.16l6.019-6.061-1.419-1.429-8.44 8.5 8.44 8.5 1.419-1.429-6.019-6.061h26.16v-2.021z"></path></svg></button>',
  nextArrow:
    '<button type="button" class="slick-header-next"><svg class="slick-arrow slick-header-next-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.559 8l-1.419 1.429 6.019 6.061h-26.16v2.021h26.159l-6.018 6.061 1.419 1.429 8.441-8.5-8.441-8.5z"></path></svg></button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 1,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$('.slick-small').slick({
  dots: false,
  prevArrow:
    '<button type="button" class="slick-small-prev"><svg class="slick-arrow slick-small-prev-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 15.49h-26.16l6.019-6.061-1.419-1.429-8.44 8.5 8.44 8.5 1.419-1.429-6.019-6.061h26.16v-2.021z"></path></svg></button>',
  nextArrow:
    '<button type="button" class="slick-small-next"><svg class="slick-arrow slick-small-next-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.559 8l-1.419 1.429 6.019 6.061h-26.16v2.021h26.159l-6.018 6.061 1.419 1.429 8.441-8.5-8.441-8.5z"></path></svg></button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 2,

  //   responsive: none,
});

$('.slick-details').slick({
  dots: false,
  prevArrow:
    '<button type="button" class="slick-details-prev"><svg class="slick-arrow slick-details-prev-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 15.49h-26.16l6.019-6.061-1.419-1.429-8.44 8.5 8.44 8.5 1.419-1.429-6.019-6.061h26.16v-2.021z"></path></svg></button>',
  nextArrow:
    '<button type="button" class="slick-details-next"><svg class="slick-arrow slick-details-next-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.559 8l-1.419 1.429 6.019 6.061h-26.16v2.021h26.159l-6.018 6.061 1.419 1.429 8.441-8.5-8.441-8.5z"></path></svg></button>',
  infinite: true,
  speed: 300,
  slidesToScroll: 1,
  adaptiveHeight: true,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,

  //   responsive: none,
});

$('.room__slick').slick({
    // dots: true,
    prevArrow: '<button type="button" class="room__slick-prev"><svg class="room__icon-arrow-left" width="32" height="32"><use href="./src/images/icons.svg#icon-32arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="room__slick-next"><svg class="room__icon-arrow-right" width="32" height="32"><use href="./src/images/icons.svg#icon-32arrow-right"></use></button>',
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
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

