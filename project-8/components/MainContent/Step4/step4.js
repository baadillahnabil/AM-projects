import $ from 'jquery'

$(document).ready(() => {
  // Check Validation
  $('#step4-form input[name="step4-form"]').on('change', () => {
    isRadioValid()
  })

  // On Next Button Clicked
  $('#step4-next-button').on('click', () => {
    if (!isRadioValid()) return

    $('#hic__step4').addClass('animated faster fadeOut')
    $('#hic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step4').addClass('d-none')
      $('#hic__step4').removeClass('animated faster fadeOut')

      $('#hic__step5').removeClass('d-none')
      $('#hic__step5').addClass('animated faster fadeIn')

      $('#hic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step5').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step4-back-button').on('click', () => {
    $('#hic__step4').addClass('animated faster fadeOut')
    $('#hic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step4').addClass('d-none')
      $('#hic__step4').removeClass('animated faster fadeOut')

      $('#hic__step3').removeClass('d-none')
      $('#hic__step3').addClass('animated faster fadeIn')
      $('#hic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step3').removeClass('animated faster fadeIn')
      })
    })
  })
})

function isRadioValid() {
  const isSelected = $('#step4-form input[name="step4-form"]:checked').val() !== undefined
  if (!isSelected) {
    $('#step4-form label.label').addClass('error-state')
    $('#step4-form + .info').removeClass('d-none')

    return false
  } else {
    $('#step4-form  label.label').removeClass('error-state')
    $('#step4-form + .info').addClass('d-none')

    return true
  }
}
