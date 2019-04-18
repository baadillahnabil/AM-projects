import $ from 'jquery'

$(document).ready(() => {
  // Validation on Email Address
  $('#step8-form__email input').on('input', () => {
    isEmailAddressValid()
  })

  // Validation on Phone
  $('#step8-form__phone input').on('input', () => {
    isPhoneValid()
  })

  // On Next Button Clicked
  $('#step8-next-button').on('click', () => {
    // Check Validation
    isEmailAddressValid()
    isPhoneValid()

    if (isEmailAddressValid() && isPhoneValid()) {
      goToStep9()
    }
  })
})

function goToStep9() {
  $('#hic__step8').addClass('animated faster fadeOut')
  $('#hic__step8').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    $('#hic__step8').addClass('d-none')
    $('#hic__step8').removeClass('animated faster fadeOut')

    $('#hic__step9').removeClass('d-none')
    $('#hic__step9').addClass('animated faster fadeIn')

    $('#hic__step9').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step9').removeClass('animated faster fadeIn')
    })
  })
}

// Rule:
// ------
// 1. Should match this regex  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function isEmailAddressValid() {
  const emailAddressRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailAddressRegEx.test($('#step8-form__email input').val())) {
    $('#step8-form__email').addClass('error-state')
    $('#step8-form__email + .info').removeClass('d-none')

    return false
  } else {
    $('#step8-form__email').removeClass('error-state')
    $('#step8-form__email + .info').addClass('d-none')

    return true
  }
}

// Rule:
// ------
// 1. Should match this regex  /^0(2|3|4|7|8){1}[0-9]{8}$/
function isPhoneValid() {
  const phoneRegEx = /^0(2|3|4|7|8){1}[0-9]{8}$/

  if (!phoneRegEx.test($('#step8-form__phone input').val())) {
    $('#step8-form__phone').addClass('error-state')
    $('#step8-form__phone + .info').removeClass('d-none')

    return false
  } else {
    $('#step8-form__phone').removeClass('error-state')
    $('#step8-form__phone + .info').addClass('d-none')

    return true
  }
}
