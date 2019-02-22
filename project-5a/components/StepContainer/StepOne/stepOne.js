import $ from 'jquery'

$(document).ready(() => {
  $('#eng__step-1 .step-1__card-buttons .buttons-button').on('click', () => {
    $('#eng__step-1').addClass('animated faster fadeOutLeft')
    $('#eng__step-1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-1').addClass('d-none')
      $('#eng__step-1').removeClass('animated faster fadeOutLeft')

      $('#eng__step-2').removeClass('d-none')
      $('#eng__step-2').addClass('animated faster fadeInRight')
      $('#eng__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-2').removeClass('animated faster fadeInRight')
      })
    })
  })
})
