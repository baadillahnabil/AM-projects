import $ from 'jquery'

$(document).ready(() => {
  // Validation on First Name
  $('#step2-form__firstName').on('input', () => {
    isFirstNameValid()
  })

  // Validation on Last Name
  $('#step2-form__lastName').on('input', () => {
    isLastNameValid()
  })

  $('#step2-next-button').on('click', () => {
    // Check Validation
    isFirstNameValid()
    isLastNameValid()

    if (isFirstNameValid() && isLastNameValid()) {
      // Save First Name on LocalStorage so that we can use that name
      const firstName = $('#step2-form__firstName').val()
      window.localStorage.setItem('first_name', firstName)

      // Go To Step 3
      goToStep3()
    }
  })
})

// Rule:
// ------
// 1. First name should be required
// 2. first name and last name shouldn't match
// 3. first name and last name can't be single character
// 4. Only strings can be allowed on the field
function isFirstNameValid() {
  const isEmpty = $('#step2-form__firstName').val() === ''
  const isMatch = $('#step2-form__firstName').val() === $('#step2-form__lastName').val()
  const isSingleCharacter = $('#step2-form__firstName').val().length <= 1
  const stringOnlyRegEx = /^[A-Za-z]+$/

  if (isEmpty || isMatch || isSingleCharacter || !stringOnlyRegEx.test($('#step2-form__firstName').val())) {
    $('#step2-form__firstName').addClass('error-state')
    $('#step2-form__firstName + .info').removeClass('invisible')

    return false
  } else {
    $('#step2-form__firstName').removeClass('error-state')
    $('#step2-form__firstName + .info').addClass('invisible')

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
  const isEmpty = $('#step2-form__lastName').val() === ''
  const isMatch = $('#step2-form__lastName').val() === $('#step2-form__firstName').val()
  const isSingleCharacter = $('#step2-form__lastName').val().length <= 1
  const stringOnlyRegEx = /^[A-Za-z]+$/

  if (isEmpty || isMatch || isSingleCharacter || !stringOnlyRegEx.test($('#step2-form__lastName').val())) {
    $('#step2-form__lastName').addClass('error-state')
    $('#step2-form__lastName + .info').removeClass('invisible')

    return false
  } else {
    $('#step2-form__lastName').removeClass('error-state')
    $('#step2-form__lastName + .info').addClass('invisible')

    return true
  }
}

function goToStep3() {
  // TODO
}
