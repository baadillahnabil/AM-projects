import $ from 'jquery'

$(document).ready(() => {
  // On Selection Changed
  $('#step10-form input[name="step10-form"]').on('change', () => {
    const selected = $('#step10-form input[name="step10-form"]:checked').val() !== undefined
    if (selected) {
      $('#step10-next-button').removeClass('disabled-state')
    } else {
      $('#step10-next-button').addClass('disabled-state')
    }
  })

  // On Next Button Clicked
  $('#step10-next-button').on('click', () => {
    const selected = $('#step10-form input[name="step10-form"]:checked').val() !== undefined
    if (!selected) return

    $('#lic__step10').addClass('animated faster fadeOut')
    $('#lic__step10').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step10').addClass('d-none')
      $('#lic__step10').removeClass('animated faster fadeOut')

      $('#lic__step11').removeClass('d-none')
      $('#lic__step11').addClass('animated faster fadeIn')

      $('#lic__step11').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step11').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step10-back-button').on('click', () => {
    $('#lic__step10').addClass('animated faster fadeOut')
    $('#lic__step10').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step10').addClass('d-none')
      $('#lic__step10').removeClass('animated faster fadeOut')

      $('#lic__step9').removeClass('d-none')
      $('#lic__step9').addClass('animated faster fadeIn')
      $('#lic__step9').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step9').removeClass('animated faster fadeIn')
      })
    })
  })
})
