import $ from 'jquery'

$(document).ready(() => {
  // On Selection Changed
  $('#step3-form input[name="step3-form"]').on('change', () => {
    $('#step3-next-button').removeClass('disabled-state')
  })

  // On Next Button Clicked
  $('#step3-next-button').on('click', () => {
    const selected = $('#step3-form input[name="step3-form"]:checked').val() !== undefined
    if (!selected) return

    $('#lic__step3').addClass('animated faster fadeOut')
    $('#lic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step3').addClass('d-none')
      $('#lic__step3').removeClass('animated faster fadeOut')

      $('#lic__step4').removeClass('d-none')
      $('#lic__step4').addClass('animated faster fadeIn')

      $('#lic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step4').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step3-back-button').on('click', () => {
    $('#lic__step3').addClass('animated faster fadeOut')
    $('#lic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step3').addClass('d-none')
      $('#lic__step3').removeClass('animated faster fadeOut')

      $('#lic__step2').removeClass('d-none')
      $('#lic__step2').addClass('animated faster fadeIn')
      $('#lic__step2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step2').removeClass('animated faster fadeIn')
      })
    })
  })
})
