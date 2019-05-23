import $ from 'jquery'

$(document).ready(() => {
  // Validation
  $('#step6-form__age').on('input', () => {
    isAgeValid()
  })

  // On Next or Skip Button Clicked
  $('#step6-next-button').on('click', () => {
    if (!isAgeValid()) return

    $('#lic__step6').addClass('animated faster fadeOut')
    $('#lic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step6').addClass('d-none')
      $('#lic__step6').removeClass('animated faster fadeOut')

      $('#lic__step7').removeClass('d-none')
      $('#lic__step7').addClass('animated faster fadeIn')

      $('#lic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step7').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step6-back-button').on('click', () => {
    $('#lic__step6').addClass('animated faster fadeOut')
    $('#lic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step6').addClass('d-none')
      $('#lic__step6').removeClass('animated faster fadeOut')

      $('#lic__step5').removeClass('d-none')
      $('#lic__step5').addClass('animated faster fadeIn')
      $('#lic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step5').removeClass('animated faster fadeIn')
      })
    })
  })
})

function isAgeValid() {
  const isEmpty = $('#step6-form__age').val() === ''

  if (isEmpty) {
    $('#step6-form__age').addClass('error-state')
    $('#step6-form__age + .info').removeClass('d-none')

    return false
  } else {
    $('#step6-form__age').removeClass('error-state')
    $('#step6-form__age + .info').addClass('d-none')

    return true
  }
}
