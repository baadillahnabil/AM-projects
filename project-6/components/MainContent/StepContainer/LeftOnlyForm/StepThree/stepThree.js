import $ from 'jquery'
import { adjustProgressBar } from '../../methods'

$(document).ready(() => {
  // Check Validation
  $('#thirdStepRadio input[name="thirdStepRadioOption"]').on('change', () => {
    $('#thirdStepRadio input[name="thirdStepRadioOptionNo"]').prop('checked', false)
    $('#fourthStepRadio input[name="fourthStepRadioOptionNo"]').removeAttr('disabled')
    $('#fourthStepRadio #noOptionStep4 + .form-radio-item__label').removeClass('disabled')
    isRadioValid()
  })
  $('#thirdStepRadio input[name="thirdStepRadioOptionNo"]').on('change', () => {
    $('#thirdStepRadio input[name="thirdStepRadioOption"]').prop('checked', false)
    $('#fourthStepRadio input[name="fourthStepRadioOptionNo"]').prop('checked', false)
    $('#fourthStepRadio input[name="fourthStepRadioOptionNo"]').attr('disabled', 'true')
    $('#fourthStepRadio #noOptionStep4 + .form-radio-item__label').addClass('disabled')
    isRadioValid()
  })

  // On Continue Button Clicked
  $('#step-3-button-submit').on('click', () => {
    if (!isRadioValid()) return

    $('#hic__step-3').addClass('animated faster fadeOut')
    $('#hic__step-3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step-3').addClass('d-none')
      $('#hic__step-3').removeClass('animated faster fadeOut')

      $('#hic__step-4').removeClass('d-none')
      $('#hic__step-4').addClass('animated faster fadeIn')
      $('#hic__step-4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-4').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('increase')
  })

  // On Back Button Clicked
  $('#step-3-button-back').on('click', () => {
    $('#hic__step-3').addClass('animated faster fadeOut')
    $('#hic__step-3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step-3').addClass('d-none')
      $('#hic__step-3').removeClass('animated faster fadeOut')

      $('#hic__step-2').removeClass('d-none')
      $('#hic__step-2').addClass('animated faster fadeIn')
      $('#hic__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-2').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('decrease')
  })
})

function isRadioValid() {
  const isSelected =
    $('#thirdStepRadio input[name="thirdStepRadioOption"]:checked').val() !== undefined ||
    $('#thirdStepRadio input[name="thirdStepRadioOptionNo"]:checked').val() !== undefined
  if (!isSelected) {
    $('#thirdStepRadio  .form-radio-item__label').addClass('error-state')
    $('#thirdStepRadio > .step-3__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#thirdStepRadio  .form-radio-item__label').removeClass('error-state')
    $('#thirdStepRadio > .step-3__form-info-message').addClass('invisible')

    return true
  }
}
