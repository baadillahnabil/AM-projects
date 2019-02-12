window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery-validation/dist/jquery.validate.min.js'

let currentStep = 1

function goNext(nextStep) {
  // 1. Check Validation
  $(`#eng__stepper__step-${currentStep} input[name="step-${currentStep}"]`).on('change', () => {
    isRadioValid()
  })
  if (!isRadioValid()) return

  // 2. FadeOut current step
  $(`#eng__stepper__step-${currentStep}`).addClass('animated faster fadeOutLeft')
  $(`#eng__stepper__step-${currentStep}`).one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    $(`#eng__stepper__step-${currentStep}`).addClass('d-none animated faster fadeOutLeft')
    $(`#eng__stepper__step-${currentStep}`).removeClass('animated faster fadeOutLeft')

    // 3. FadeIn Next Step
    $(`#eng__stepper__step-${nextStep}`).removeClass('d-none')
    $(`#eng__stepper__step-${nextStep}`).addClass('animated faster fadeInRight')
    $(`#eng__stepper__step-${nextStep}`).one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $(`#eng__stepper__step-${nextStep}`).removeClass('animated faster fadeInRight')

      currentStep = nextStep

      $(`#eng__stepper__step-${currentStep} .eng__prev-step > button`).on('click', () => goBack(currentStep - 1))
    })
  })
}

function goBack(prevStep) {
  // 1. FadeOut current step
  $(`#eng__stepper__step-${currentStep}`).addClass('animated faster fadeOutRight')
  $(`#eng__stepper__step-${currentStep}`).one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    $(`#eng__stepper__step-${currentStep}`).addClass('d-none')
    $(`#eng__stepper__step-${currentStep}`).removeClass('animated faster fadeOutRight')

    // 2. FadeIn Prev Step
    $(`#eng__stepper__step-${prevStep}`).removeClass('d-none')
    $(`#eng__stepper__step-${prevStep}`).addClass('animated faster fadeInLeft')
    $(`#eng__stepper__step-${prevStep}`).one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $(`#eng__stepper__step-${prevStep}`).removeClass('animated faster fadeInLeft')

      currentStep = prevStep

      $(`#eng__stepper__step-${currentStep} .eng__next-step > button`).on('click', () => goNext(currentStep + 1))
    })
  })
}

function isRadioValid() {
  const isStepSelected =
    $(`#eng__stepper__step-${currentStep} input[name="step-${currentStep}"]:checked`).val() !== undefined

  if (!isStepSelected) {
    $(`#eng__stepper__step-${currentStep} .step-options-container`)
      .tooltip({ trigger: 'manual' })
      .tooltip('show')
    $(`#eng__stepper__step-${currentStep} .step-options-container .step-option-item__label`).addClass('error-state')

    return false
  } else {
    $(`#eng__stepper__step-${currentStep} .step-options-container`)
      .tooltip({ trigger: 'manual' })
      .tooltip('hide')
    $(`#eng__stepper__step-${currentStep} .step-options-container .step-option-item__label`).removeClass('error-state')

    return true
  }
}

$(document).ready(() => {
  $('.step-form-info').tooltip() // enable bootstrap tooltip

  $(`#eng__stepper__step-${currentStep} .eng__next-step > button`).on('click', () => goNext(currentStep + 1))
})
