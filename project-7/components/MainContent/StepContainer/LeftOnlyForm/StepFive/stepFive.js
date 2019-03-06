import $ from 'jquery'
import { adjustProgressBar, hideLogosAnimation } from '../../methods'

$(document).ready(() => {
  // Check Validation
  $('#fifthStepRadio input[name="fifthStepRadioOption"]').on('change', () => {
    $('#fifthStepRadio input[name="fifthStepRadioOptionNo"]').prop('checked', false)
    isRadioValid()
  })
  $('#fifthStepRadio input[name="fifthStepRadioOptionNo"]').on('change', () => {
    $('#fifthStepRadio input[name="fifthStepRadioOption"]').prop('checked', false)
    isRadioValid()
  })

  // On Continue Button Clicked
  $('#step-5-button-submit').on('click', () => {
    if (!isRadioValid()) return

    $('.eng__left-only-form').addClass('animated faster fadeOut')
    $('.eng__left-only-form').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('.eng__left-only-form').addClass('d-none')
      $('.eng__left-only-form').removeClass('animated faster fadeOut')

      $('#eng__step-6').removeClass('d-none')
      $('#eng__step-6').addClass('animated faster fadeIn')
      $('#eng__step-6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-6').removeClass('animated faster fadeIn')

        hideLogosAnimation()
      })
    })

    adjustProgressBar('increase')
  })

  // On Back Button Clicked
  $('#step-5-button-back').on('click', () => {
    $('#eng__step-5').addClass('animated faster fadeOut')
    $('#eng__step-5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-5').addClass('d-none')
      $('#eng__step-5').removeClass('animated faster fadeOut')

      $('#eng__step-6').removeClass('d-none')
      $('#eng__step-6').addClass('animated faster fadeIn')
      $('#eng__step-6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-6').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('decrease')
  })
})

function isRadioValid() {
  const isSelected =
    $('#fifthStepRadio input[name="fifthStepRadioOption"]:checked').val() !== undefined ||
    $('#fifthStepRadio input[name="fifthStepRadioOptionNo"]:checked').val() !== undefined
  if (!isSelected) {
    $('#fifthStepRadio  .form-radio-item__label').addClass('error-state')
    $('#fifthStepRadio > .step-5__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#fifthStepRadio  .form-radio-item__label').removeClass('error-state')
    $('#fifthStepRadio > .step-5__form-info-message').addClass('invisible')

    return true
  }
}
