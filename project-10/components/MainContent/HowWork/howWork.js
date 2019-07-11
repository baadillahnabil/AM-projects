import $ from 'jquery'
import 'slick-carousel'

import leftArrow from '../../../static/icons/arrow_left.svg'
import rightArrow from '../../../static/icons/arrow_right.svg'

$(document).ready(() => {
  $('#howWorkServices').slick({
    infinite: true,
    dots: false,
    speed: 500,
    rows: 1,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })
})
