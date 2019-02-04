window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'magnific-popup/dist/jquery.magnific-popup.min.js'
import 'slick-carousel/slick/slick.min.js'

const primaryColor = '#40a9bc'

$(document).ready(() => {
  $('.searchToggleTrigger').click(() => {
    if ($('#formSearch').css('display') === 'none') showSearch()
    else hideSearch()
  })

  $('#formSearch').focusout(() => {
    hideSearch()
  })

  $('.image_content').magnificPopup({
    type: 'image'
  })

  $('.similar-items__cards-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    mobileFirst: true,
    adaptiveHeight: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    rows: 2,
    slidesPerRow: 1,
    appendDots: $('.similar-items__cards-dots'),
    customPaging: () => {
      return '<button class="button-dots"></button>'
    },
    prevArrow: $('.similar-items__cards-arrows > .arrow-left'),
    nextArrow: $('.similar-items__cards-arrows > .arrow-right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 75,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  })

  // $('.similar-items__cards-slider').on('afterChange', () => {
  //   console.log($('.similar-items__cards-slider').slick('slickCurrentSlide'))
  //   console.log($('.similar-items__cards-slider').slick('slickGetOption'))
  // })
})

function showSearch() {
  $('#formSearch').removeClass(['d-lg-none', 'd-xl-none'])
  $('#navbarMenus').css('display', 'none')
  $('.searchToggleTrigger > .fas').css('color', primaryColor)
  $('#searchInput').focus()
}

function hideSearch() {
  $('#formSearch').addClass(['d-lg-none', 'd-xl-none'])
  $('#navbarMenus').css('display', 'flex')
  $('.searchToggleTrigger > .fas').css('color', 'white')
}
