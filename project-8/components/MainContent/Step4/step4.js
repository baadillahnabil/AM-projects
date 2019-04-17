import $ from 'jquery'

$(document).ready(() => {
  // Check Validation
  $('#step2-form input[name="step2-form"]').on('change', () => {
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
  const isSelected = $('#step2-form input[name="step2-form"]:checked').val() !== undefined
  if (!isSelected) {
    $('#step2-form label.label').addClass('error-state')
    $('#step2-form + .info').removeClass('d-none')

    return false
  } else {
    $('#step2-form  label.label').removeClass('error-state')
    $('#step2-form + .info').addClass('d-none')

    return true
  }
}
