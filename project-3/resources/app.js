window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

let currentStep = 1
function goNext(nextStep) {
  // 1. Check Validation

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

      $(`#eng__stepper__step-${currentStep} .eng__prev-step`).on('click', () => goBack(currentStep - 1))
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

      $(`#eng__stepper__step-${currentStep} .eng__next-step`).on('click', () => goNext(currentStep + 1))
    })
  })
}

$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip() // enable bootstrap tooltip

  $(`#eng__stepper__step-${currentStep} .eng__next-step`).on('click', () => goNext(currentStep + 1))
})
