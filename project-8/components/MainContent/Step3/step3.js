import $ from 'jquery'

$(document).ready(() => {
  // On Next Button Clicked
  $('#step3-next-button').on('click', () => {
    $('#hic__step3').addClass('animated faster fadeOut')
    $('#hic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step3').addClass('d-none')
      $('#hic__step3').removeClass('animated faster fadeOut')

      $('#hic__step4').removeClass('d-none')
      $('#hic__step4').addClass('animated faster fadeIn')

      $('#hic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step4').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step3-back-button').on('click', () => {
    $('#hic__step3').addClass('animated faster fadeOut')
    $('#hic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step3').addClass('d-none')
      $('#hic__step3').removeClass('animated faster fadeOut')

      $('#hic__step2').removeClass('d-none')
      $('#hic__step2').addClass('animated faster fadeIn')
      $('#hic__step2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step2').removeClass('animated faster fadeIn')
      })
    })
  })
})
