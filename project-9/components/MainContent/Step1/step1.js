import $ from 'jquery'
import 'slick-carousel'

import leftArrow from '../../../static/icons/arrow-left-carousel.svg'
import rightArrow from '../../../static/icons/arrow-right-carousel.svg'

$(document).ready(() => {
  // Companies Slide
  $('#step1-partnersLogo').slick({
    infinite: true,
    dots: false,
    speed: 300,
    rows: 2,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    prevArrow: `<img src="${leftArrow}" class="step1-carousel-left-arrow" />`,
    nextArrow: `<img src="${rightArrow}" class="step1-carousel-right-arrow" />`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 1,
          slidesToShow: 8
        }
      },
      {
        breakpoint: 767,
        settings: {
          rows: 1,
          slidesToShow: 5
        }
      }
    ]
  })

  // $('.step1-carousel-left-arrow.slick-arrow').on('click', function() {
  //   $('.carousel-selector').slickNext()
  // })
  // $('.step1-carousel-right-arrow.slick-arrow').on('click', function() {
  //   $('.carousel-selector').slickPrev()
  // })

  // On Next Button
  $('#step1-next-button').on('click', () => {
    $('#lic__step1').addClass('animated faster fadeOut')
    $('#lic__step1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step1').addClass('d-none')
      $('#lic__step1').removeClass('animated faster fadeOut')

      $('#lic__step2').removeClass('d-none')
      $('#lic__step2').addClass('animated faster fadeIn')

      // Adjust Navbar and footer when have avatar assistant
      $('#navbar').addClass('with-avatar')
      $('#footer').addClass('with-avatar')

      $('#lic__step2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step2').removeClass('animated faster fadeIn')
      })
    })
  })
})
