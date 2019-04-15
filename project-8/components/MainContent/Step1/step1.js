import $ from 'jquery'

$(document).ready(() => {
  $('#step1-next-button').on('click', () => {
    $('#hic__step1').addClass('animated faster fadeOut')
    $('#hic__step1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step1').addClass('d-none')
      $('#hic__step1').removeClass('animated faster fadeOut')

      $('#hic__step2').removeClass('d-none')
      $('#hic__step2').addClass('animated faster fadeIn')

      // Adjust Navbar and footer when have avatar assistant
      $('#navbar').addClass('with-avatar')
      $('#footer').addClass('with-avatar')

      $('#hic__step2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step2').removeClass('animated faster fadeIn')
      })
    })
  })
})
