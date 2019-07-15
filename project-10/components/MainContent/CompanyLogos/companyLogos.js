import $ from 'jquery'
import 'slick-carousel'

import leftArrow from '../../../static/icons/arrow_left.svg'
import rightArrow from '../../../static/icons/arrow_right.svg'

$(document).ready(() => {
  $('#companyLogosList').slick({
    infinite: true,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    prevArrow: `<img src="${leftArrow}" class="carousel-left-arrow" />`,
    nextArrow: `<img src="${rightArrow}" class="carousel-right-arrow" />`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          arrows: true,
          variableWidth: false,
          slidesToShow: 6
        }
      },
      {
        breakpoint: 767,
        settings: {
          rows: 2,
          arrows: true,
          variableWidth: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 100,
        settings: {
          rows: 1,
          slidesToShow: 2,
          arrows: false,
          variableWidth: true
        }
      }
    ]
  })
})
