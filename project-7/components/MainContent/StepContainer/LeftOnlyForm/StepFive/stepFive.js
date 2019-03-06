import $ from 'jquery'
import { adjustProgressBar, hideLogosAnimation } from '../../methods'

$(document).ready(() => {
  $('#currentFund').on('change', () => {
    isSelectValid()
  })

  // On Continue Button Clicked
  $('#step-5-button-submit').on('click', () => {
    if (!isSelectValid()) return

    $('.hic__left-only-form').addClass('animated faster fadeOut')
    $('.hic__left-only-form').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('.hic__left-only-form').addClass('d-none')
      $('.hic__left-only-form').removeClass('animated faster fadeOut')

      $('#hic__step-6').removeClass('d-none')
      $('#hic__step-6').addClass('animated faster fadeIn')
      $('#hic__step-6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-6').removeClass('animated faster fadeIn')

        hideLogosAnimation()
      })
    })

    adjustProgressBar('increase')
  })

  // On Back Button Clicked
  $('#step-5-button-back').on('click', () => {
    $('#hic__step-5').addClass('animated faster fadeOut')
    $('#hic__step-5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step-5').addClass('d-none')
      $('#hic__step-5').removeClass('animated faster fadeOut')

      $('#hic__step-4').removeClass('d-none')
      $('#hic__step-4').addClass('animated faster fadeIn')
      $('#hic__step-4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-4').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('decrease')
  })
})

function isSelectValid() {
  const isSelected = $('#currentFund option:selected').val() !== ''
  if (!isSelected) {
    $('#currentFund').addClass('error-state')
    $('#currentFund + .step-5__form-info-message').removeClass('invisible')
  } else {
    $('#currentFund').removeClass('error-state')
    $('#currentFund + .step-5__form-info-message').addClass('invisible')
  }

  return isSelected
}
