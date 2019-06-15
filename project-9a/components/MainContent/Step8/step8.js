import $ from 'jquery'

$(document).ready(() => {
  // Check Validation
  $('#step8-form input[name="step8-form"]').on('change', () => {
    isRadioValid()
  })

  // On Next Button Clicked
  $('#step8-next-button').on('click', () => {
    if (!isRadioValid()) return

    $('#lic__step8').addClass('animated faster fadeOut')
    $('#lic__step8').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step8').addClass('d-none')
      $('#lic__step8').removeClass('animated faster fadeOut')

      $('#lic__step9').removeClass('d-none')
      $('#lic__step9').addClass('animated faster fadeIn')

      $('#lic__step9').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step9').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step8-back-button').on('click', () => {
    $('#lic__step8').addClass('animated faster fadeOut')
    $('#lic__step8').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step8').addClass('d-none')
      $('#lic__step8').removeClass('animated faster fadeOut')

      $('#lic__step7').removeClass('d-none')
      $('#lic__step7').addClass('animated faster fadeIn')
      $('#lic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step7').removeClass('animated faster fadeIn')
      })
    })
  })
})

function isRadioValid() {
  const isSelected = $('#step8-form input[name="step8-form"]:checked').val() !== undefined
  if (!isSelected) {
    $('#step8-form label.label').addClass('error-state')
    $('#step8-form + .info').removeClass('d-none')

    return false
  } else {
    $('#step8-form  label.label').removeClass('error-state')
    $('#step8-form + .info').addClass('d-none')

    return true
  }
}
