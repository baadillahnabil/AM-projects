window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery-validation/dist/jquery.validate.min.js'

let currentStep = 1

function goNext(nextStep) {
  // 1. Check Validation
  if (currentStep === 1 || currentStep === 3 || currentStep === 4 || currentStep === 5) {
    $(`#eng__stepper__step-${currentStep} input[name="step-${currentStep}"]`).on('change', () => {
      isRadioValid()
    })
    if (!isRadioValid()) return
  } else if (currentStep === 2) {
    $(`#eng__stepper__step-${currentStep} #step-2-postcode`).on('input', () => {
      isStep2FormValid()
    })
    if (!isStep2FormValid()) return
  } else if (currentStep === 7) {
    $(`#eng__stepper__step-${currentStep} #step-7-name`).on('input', () => {
      isStep7FormValid()
    })
    $(`#eng__stepper__step-${currentStep} #step-7-phone`).on('input', () => {
      isStep7FormValid()
    })
    $(`#eng__stepper__step-${currentStep} #step-7-email`).on('input', () => {
      isStep7FormValid()
    })
    $(`#eng__stepper__step-${currentStep} #step-7-tnc`).on('input', () => {
      isStep7FormValid()
    })
    if (!isStep7FormValid()) return
    else {
      alert("Good Job! Don't forget to smile :) and... you're awesome, dude ;)")
      return
    }
  }

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

      if (currentStep === 6) {
        setTimeout(() => {
          goNext(currentStep + 1)
        }, 2000)
      }
      if (currentStep === 7) {
        $(`#eng__stepper__step-${currentStep} .eng__next-step > button`).on('click', () => goNext(currentStep + 1))
        $(`#eng__stepper__step-${currentStep} .eng__prev-step > button`).on('click', () => goBack(currentStep - 2))
      } else {
        $(`#eng__stepper__step-${currentStep} .eng__next-step > button`).on('click', () => goNext(currentStep + 1))
        $(`#eng__stepper__step-${currentStep} .eng__prev-step > button`).on('click', () => goBack(currentStep - 1))
      }
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
      $(`#eng__stepper__step-${currentStep} .eng__prev-step > button`).on('click', () => goBack(currentStep - 2))
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

function isStep2FormValid() {
  const isValid = $(`#eng__stepper__step-${currentStep} #step-2-postcode`).val() !== ''

  if (!isValid) {
    $(`#eng__stepper__step-${currentStep} .step-form .input-group`).addClass('error-state')
    $(`#eng__stepper__step-${currentStep} .step-info-message`).removeClass('invisible')

    return false
  } else {
    $(`#eng__stepper__step-${currentStep} .step-form .input-group`).removeClass('error-state')
    $(`#eng__stepper__step-${currentStep} .step-info-message`).addClass('invisible')

    return true
  }
}

function isStep7FormValid() {
  const isNameValid = $(`#eng__stepper__step-${currentStep} #step-7-name`).val() !== ''

  const phoneRegEx = /^\s*-?[0-9]{10,10}\s*$/
  const isPhoneValid =
    $(`#eng__stepper__step-${currentStep} #step-7-phone`).val() !== '' &&
    phoneRegEx.test($(`#eng__stepper__step-${currentStep} #step-7-phone`).val())

  const emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isEmailValid =
    $(`#eng__stepper__step-${currentStep} #step-7-email`).val() !== '' &&
    emailRegEx.test($(`#eng__stepper__step-${currentStep} #step-7-email`).val())

  const isTnCValid = $(`#eng__stepper__step-${currentStep} #step-7-tnc:checked`).val() !== undefined

  let isAllValid = true
  if (!isNameValid) {
    $(`#eng__stepper__step-${currentStep} #step-7-form-name`).addClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-name + .step-info-message`).removeClass('invisible')

    isAllValid = false
  } else {
    $(`#eng__stepper__step-${currentStep} #step-7-form-name`).removeClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-name + .step-info-message`).addClass('invisible')
  }

  if (!isPhoneValid) {
    $(`#eng__stepper__step-${currentStep} #step-7-form-phone`).addClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-phone + .step-info-message`).removeClass('invisible')

    isAllValid = false
  } else {
    $(`#eng__stepper__step-${currentStep} #step-7-form-phone`).removeClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-phone + .step-info-message`).addClass('invisible')
  }

  if (!isEmailValid) {
    $(`#eng__stepper__step-${currentStep} #step-7-form-email`).addClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-email + .step-info-message`).removeClass('invisible')

    isAllValid = false
  } else {
    $(`#eng__stepper__step-${currentStep} #step-7-form-email`).removeClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-email + .step-info-message`).addClass('invisible')
  }

  if (!isTnCValid) {
    $(`#eng__stepper__step-${currentStep} #step-7-form-tnc #step-7-tnc`).addClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-tnc + .step-info-message`).removeClass('invisible')

    isAllValid = false
  } else {
    $(`#eng__stepper__step-${currentStep} #step-7-form-tnc #step-7-tnc`).removeClass('error-state')
    $(`#eng__stepper__step-${currentStep} #step-7-form-tnc + .step-info-message`).addClass('invisible')
  }

  return isAllValid
}

$(document).ready(() => {
  $('.step-form-info').tooltip() // enable bootstrap tooltip

  $(`#eng__stepper__step-${currentStep} .eng__next-step > button`).on('click', () => goNext(currentStep + 1))
})
