import $ from 'jquery'

$(document).ready(() => {
  // Validation
  $('#step6-form__age').on('input', () => {
    const value = $('#step6-form__age').val()

    if (isNaN(value)) $('#step6-form__age').val('')

    if (value >= 74) {
      const chat1 = $('#step6-chat-1').html()
      const chat2 = $('#step6-chat-2').html()

      $('#step6-chat-1').html(chat2)
      $('#step6-chat-2').html(chat1)
      $('#step6-chat-2').removeClass('d-none')
    } else {
      $('#step6-chat-1').html('Your age will affect how much you pay for life insurance products.')
      $('#step6-chat-2').html(
        'Do to your age you maybe ineligible for life insurance. Your advisor will provide you with more information.'
      )
      $('#step6-chat-2').addClass('d-none')
    }

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
  const isBelow18 = $('#step6-form__age').val() < 18

  if (isEmpty || isBelow18) {
    $('#step6-form__age').addClass('error-state')
    $('#step6-form__age + .info').removeClass('d-none')

    if (isEmpty) $('#step6-form__age + .info').html('Please enter a valid age')
    else if (isBelow18) {
      $('#step6-form__age + .info').html(
        'Sorry, you must be 18 and above to purchase life insurance'
      )
    }

    return false
  } else {
    $('#step6-form__age').removeClass('error-state')
    $('#step6-form__age + .info').addClass('d-none')

    return true
  }
}
