import $ from 'jquery'
import 'slick-carousel'

import leftArrow from '../../../static/icons/arrow_left.svg'
import rightArrow from '../../../static/icons/arrow_right.svg'

$(document).ready(() => {
  $('#testimonialList').slick({
    infinite: true,
    dots: false,
    speed: 300,
    rows: 1,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    mobileFirst: true,
    adaptiveHeight: true,
    // autoplay: true,
    prevArrow: `<img src="${leftArrow}" class="carousel-left-arrow" />`,
    nextArrow: `<img src="${rightArrow}" class="carousel-right-arrow" />`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  })
})
