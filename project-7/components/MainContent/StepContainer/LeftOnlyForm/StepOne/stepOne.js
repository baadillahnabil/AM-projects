import $ from 'jquery'
import { adjustProgressBar } from '../../methods'

$(document).ready(() => {
  // Check Validation
  $('#firstStepRadio input[name="firstStepRadio"]').on('change', () => {
    isRadioValid()
  })

  // On Continue Button Clicked
  $('#step-1-button-submit').on('click', () => {
    if (!isRadioValid()) return

    $('#eng__step-1').addClass('animated faster fadeOut')
    $('#eng__step-1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-1').addClass('d-none')
      $('#eng__step-1').removeClass('animated faster fadeOut')

      $('#eng__step-2').removeClass('d-none')
      $('#eng__step-2').addClass('animated faster fadeIn')
      $('#eng__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-2').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('increase')
  })
})

function isRadioValid() {
  const isSelected = $('#firstStepRadio input[name="firstStepRadio"]:checked').val() !== undefined
  if (!isSelected) {
    $('#firstStepRadio  .form-radio-item__label').addClass('error-state')
    $('#firstStepRadio > .step-1__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#firstStepRadio  .form-radio-item__label').removeClass('error-state')
    $('#firstStepRadio > .step-1__form-info-message').addClass('invisible')

    return true
  }
}
