import $ from 'jquery'

$(document).ready(() => {
  // Validation on Name
  $('#step-7-name').on('input', () => {
    isNameValid()
  })

  // Validation on Phone
  $('#step-7-phone').on('input', () => {
    isPhoneValid()
  })

  // Validation on Email Address
  $('#step-7-email').on('input', () => {
    isEmailAddressValid()
  })

  // On Button Submit
  $('#step-7-button-submit').on('click', () => {
    isNameValid()
    isPhoneValid()
    isEmailAddressValid()

    if (isNameValid() && isPhoneValid() && isEmailAddressValid()) {
      alert("Good Job! Don't forget to smile :) and... you're awesome, dude ;)")
    }
  })
})

// Rule:
// ------
// 1. Name should be required
// 2. Name can't be single character
// 3. Only strings can be allowed on the field
function isNameValid() {
  const isEmpty = $('#step-7-name').val() === ''
  const isSingleCharacter = $('#step-7-name').val().length <= 1
  const stringOnlyRegEx = /^[a-z ,.'-]+$/i

  if (isEmpty || isSingleCharacter || !stringOnlyRegEx.test($('#step-7-name').val())) {
    $('#step-7-name').addClass('error-state')
    $('#step-7-name + .step-7__form-info-message').removeClass('d-none')

    return false
  } else {
    $('#step-7-name').removeClass('error-state')
    $('#step-7-name + .step-7__form-info-message').addClass('d-none')

    return true
  }
}

// Rule:
// ------
// 1. Should match this regex  /^0(2|3|4|7|8){1}[0-9]{8}$/
function isPhoneValid() {
  const phoneRegEx = /^0(2|3|4|7|8){1}[0-9]{8}$/

  if (!phoneRegEx.test($('#step-7-phone').val())) {
    $('#step-7-phone').addClass('error-state')
    $('#step-7-phone + .step-7__form-info-message').removeClass('d-none')

    return false
  } else {
    $('#step-7-phone').removeClass('error-state')
    $('#step-7-phone + .step-7__form-info-message').addClass('d-none')

    return true
  }
}

// Rule:
// ------
// 1. Should match this regex  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function isEmailAddressValid() {
  const emailAddressRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailAddressRegEx.test($('#step-7-email').val())) {
    $('#step-7-email').addClass('error-state')
    $('#step-7-email + .step-7__form-info-message').removeClass('d-none')

    return false
  } else {
    $('#step-7-email').removeClass('error-state')
    $('#step-7-email + .step-7__form-info-message').addClass('d-none')

    return true
  }
}
