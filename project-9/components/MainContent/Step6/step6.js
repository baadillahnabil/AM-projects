import $ from 'jquery'

$(document).ready(() => {
  // TODO : Validation

  // On Next or Skip Button Clicked
  $('#step6-next-button').on('click', () => {
    $('#hic__step6').addClass('animated faster fadeOut')
    $('#hic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step6').addClass('d-none')
      $('#hic__step6').removeClass('animated faster fadeOut')

      $('#hic__step7').removeClass('d-none')
      $('#hic__step7').addClass('animated faster fadeIn')

      $('#hic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step7').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step6-back-button').on('click', () => {
    $('#hic__step6').addClass('animated faster fadeOut')
    $('#hic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step6').addClass('d-none')
      $('#hic__step6').removeClass('animated faster fadeOut')

      $('#hic__step5').removeClass('d-none')
      $('#hic__step5').addClass('animated faster fadeIn')
      $('#hic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step5').removeClass('animated faster fadeIn')
      })
    })
  })
})
