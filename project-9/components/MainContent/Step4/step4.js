import $ from 'jquery'

$(document).ready(() => {
  // On Next Button Clicked
  $('#step4-next-button').on('click', () => {
    $('#lic__step4').addClass('animated faster fadeOut')
    $('#lic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step4').addClass('d-none')
      $('#lic__step4').removeClass('animated faster fadeOut')

      $('#lic__step5').removeClass('d-none')
      $('#lic__step5').addClass('animated faster fadeIn')

      $('#lic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step5').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step4-back-button').on('click', () => {
    $('#lic__step4').addClass('animated faster fadeOut')
    $('#lic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step4').addClass('d-none')
      $('#lic__step4').removeClass('animated faster fadeOut')

      $('#lic__step3').removeClass('d-none')
      $('#lic__step3').addClass('animated faster fadeIn')
      $('#lic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step3').removeClass('animated faster fadeIn')
      })
    })
  })
})
