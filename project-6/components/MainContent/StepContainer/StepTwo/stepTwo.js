import $ from 'jquery'
import 'devbridge-autocomplete'
import find from 'lodash/find'
import GeoData from './geodata'

// Set Autocomplete Data
let parsedData = []
for (const data of GeoData) {
  parsedData.push({ value: `${data[0]}, ${data[1]}, ${data[2]}`, data: `${data[0]}, ${data[1]}, ${data[2]}` })
}
$('#postcode').autocomplete({
  lookup: parsedData,
  autoSelectFirst: true,
  onSelect: suggestion => {
    isPostcodeValid(suggestion)
  }
})

$(document).ready(() => {
  // Validation on Question 1
  $('#firstQuestion input[name="firstQuestion"]').on('change', () => {
    isRadioValid('firstQuestion')
  })

  // Validation on Question 2
  $('#secondQuestion input[name="secondQuestion"]').on('change', () => {
    isRadioValid('secondQuestion')
  })

  // Validation on First Name
  $('#firstName').on('input', () => {
    isFirstNameValid()
  })

  // Validation on Last Name
  $('#lastName').on('input', () => {
    isLastNameValid()
  })

  // Validation on Mobile Phone
  $('#mobilePhone').on('input', () => {
    isMobilePhoneValid()
  })

  // Validation on Email Address
  $('#emailAddress').on('input', () => {
    isEmailAddressValid()
  })

  // Validation on Postcode
  $('#postcode').on('change', () => {
    isPostcodeValid()
  })

  // On Button Submit
  $('#step-2-button-submit').on('click', () => {
    isRadioValid('firstQuestion')
    isRadioValid('secondQuestion')
    isFirstNameValid()
    isLastNameValid()
    isMobilePhoneValid()
    isEmailAddressValid()
    isPostcodeValid()

    if (
      isRadioValid('firstQuestion') &&
      isRadioValid('secondQuestion') &&
      isFirstNameValid() &&
      isLastNameValid() &&
      isMobilePhoneValid() &&
      isEmailAddressValid() &&
      isPostcodeValid()
    ) {
      alert("Good Job! Don't forget to smile :) and... you're awesome, dude ;)")
    }
  })
})

function isRadioValid(elementId) {
  const isSelected = $(`#${elementId} input[name="${elementId}"]:checked`).val() !== undefined
  if (!isSelected) {
    $(`#${elementId} + .step-2__form-info-message`).removeClass('invisible')

    return false
  } else {
    $(`#${elementId} + .step-2__form-info-message`).addClass('invisible')

    return true
  }
}

// Rule:
// ------
// 1. First name should be required
// 2. first name and last name shouldn't match
// 3. first name and last name can't be single character
// 4. Only strings can be allowed on the field
function isFirstNameValid() {
  const isEmpty = $('#firstName').val() === ''
  const isMatch = $('#firstName').val() === $('#lastName').val()
  const isSingleCharacter = $('#firstName').val().length <= 1
  const stringOnlyRegEx = /^[A-Za-z]+$/

  if (isEmpty || isMatch || isSingleCharacter || !stringOnlyRegEx.test($('#firstName').val())) {
    $('#firstName').addClass('error-state')
    $('#firstName + .step-2__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#firstName').removeClass('error-state')
    $('#firstName + .step-2__form-info-message').addClass('invisible')

    return true
  }
}

// Rule:
// ------
// 1. last name should be required
// 2. last name and first name shouldn't match
// 3. last name and first name can't be single character
// 4. Only strings can be allowed on the field
function isLastNameValid() {
  const isEmpty = $('#lastName').val() === ''
  const isMatch = $('#lastName').val() === $('#firstName').val()
  const isSingleCharacter = $('#lastName').val().length <= 1
  const stringOnlyRegEx = /^[A-Za-z]+$/

  if (isEmpty || isMatch || isSingleCharacter || !stringOnlyRegEx.test($('#lastName').val())) {
    $('#lastName').addClass('error-state')
    $('#lastName + .step-2__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#lastName').removeClass('error-state')
    $('#lastName + .step-2__form-info-message').addClass('invisible')

    return true
  }
}

// Rule:
// ------
// 1. Should match this regex  /^0(4){1}[0-9]{8}$/
function isMobilePhoneValid() {
  const mobilePhoneRegEx = /^0(4){1}[0-9]{8}$/

  if (!mobilePhoneRegEx.test($('#mobilePhone').val())) {
    $('#mobilePhone').addClass('error-state')
    $('#mobilePhone + .step-2__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#mobilePhone').removeClass('error-state')
    $('#mobilePhone + .step-2__form-info-message').addClass('invisible')

    return true
  }
}

// Rule:
// ------
// 1. Should match this regex  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function isEmailAddressValid() {
  const emailAddressRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailAddressRegEx.test($('#emailAddress').val())) {
    $('#emailAddress').addClass('error-state')
    $('#emailAddress + .step-2__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#emailAddress').removeClass('error-state')
    $('#emailAddress + .step-2__form-info-message').addClass('invisible')

    return true
  }
}

// Rule:
// ------
// 1. The value of the field should match the value on what's loaded on the autocomplete
function isPostcodeValid(newValue = $('#postcode').val()) {
  console.log(newValue)
  let isValidData
  if (newValue.value) {
    isValidData = find(parsedData, data => data.value === newValue.value)
  } else {
    isValidData = find(parsedData, data => data.value === newValue)
  }

  if (isValidData === undefined) {
    $('#postcode').val('')
    $('#postcode').addClass('error-state')
    $('#postcode + .step-2__form-info-message').removeClass('invisible')

    return false
  } else {
    if (newValue.value) $('#postcode').val(newValue.value)
    else $('#postcode').val(newValue)

    $('#postcode').removeClass('error-state')
    $('#postcode + .step-2__form-info-message').addClass('invisible')

    return true
  }
}
