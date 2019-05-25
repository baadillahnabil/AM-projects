import $ from 'jquery'

$(document).ready(() => {
  // Validation on Email Address
  $('#step11-form__email input').on('input', () => {
    isEmailAddressValid()
  })

  // Validation on Phone
  $('#step11-form__phone input').on('input', () => {
    isPhoneValid()
  })

  // On Next Button Clicked
  $('#step11-next-button').on('click', () => {
    // Check Validation
    isEmailAddressValid()
    isPhoneValid()

    if (isEmailAddressValid() && isPhoneValid()) {
      goToStep12()
    }
  })
})

function goToStep12() {
  $('#lic__step11').addClass('animated faster fadeOut')
  $('#lic__step11').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    $('#lic__step11').addClass('d-none')
    $('#lic__step11').removeClass('animated faster fadeOut')

    $('#lic__step12').removeClass('d-none')
    $('#lic__step12').addClass('animated faster fadeIn')

    $('#lic__step12').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step12').removeClass('animated faster fadeIn')

      step12ProgressAnimation()
    })
  })
}

// Rule:
// ------
// 1. Should match this regex  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function isEmailAddressValid() {
  const emailAddressRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!emailAddressRegEx.test($('#step11-form__email input').val())) {
    $('#step11-form__email').addClass('error-state')
    $('#step11-form__email + .info').removeClass('d-none')

    return false
  } else {
    $('#step11-form__email').removeClass('error-state')
    $('#step11-form__email + .info').addClass('d-none')

    return true
  }
}

// Rule:
// ------
// 1. Should match this regex  /^0(2|3|4|7|8){1}[0-9]{8}$/
function isPhoneValid() {
  const phoneRegEx = /^0(2|3|4|7|8){1}[0-9]{8}$/

  if (!phoneRegEx.test($('#step11-form__phone input').val())) {
    $('#step11-form__phone').addClass('error-state')
    $('#step11-form__phone + .info').removeClass('d-none')

    return false
  } else {
    $('#step11-form__phone').removeClass('error-state')
    $('#step11-form__phone + .info').addClass('d-none')

    return true
  }
}

function step12ProgressAnimation() {
  setTimeout(() => {
    $('.lic__step12 .progress .progress-bar').css('width', '0')
    $('.lic__step12 .progress .progress-bar').css('width', '30%')
    setTimeout(() => {
      $('.lic__step12 .progress .progress-bar').css('width', '70%')
      setTimeout(() => {
        $('.lic__step12 .progress .progress-bar').css('width', '100%')

        // on progress complete
        $('#step12-firstTitle').addClass('d-none')
        $('#step12-secondTitle').removeClass('d-none')
        $('#step12-loading .success').removeClass('d-none')
        $('#step12-next-button').removeClass('d-none')
        $('#step12-loading .loading').addClass('d-none')
        $('#step12-loading .message').html('Analysis complete')
      }, 800)
    }, 1000)
  }, 500)
}
