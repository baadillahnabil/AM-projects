import $ from 'jquery'

$(document).ready(() => {
  // On Continue Button Clicked
  $('#step-1-button-submit').on('click', () => {
    $('#hic__step-1').addClass('animated faster fadeOut')
    $('#hic__step-1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step-1').addClass('d-none')
      $('#hic__step-1').removeClass('animated faster fadeOut')

      $('#hic__step-2').removeClass('d-none')
      $('#hic__step-2').addClass('animated faster fadeIn')
      $('#hic__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-2').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('increase')
  })

  // On Back Button Clicked
  $('#step-2-button-back').on('click', () => {
    $('#hic__step-2').addClass('animated faster fadeOut')
    $('#hic__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step-2').addClass('d-none')
      $('#hic__step-2').removeClass('animated faster fadeOut')

      $('#hic__step-1').removeClass('d-none')
      $('#hic__step-1').addClass('animated faster fadeIn')
      $('#hic__step-1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-1').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('decrease')
  })
})

// Add progress bar
function adjustProgressBar(method, size = 14) {
  const currentWidth = Math.ceil(
    ($('.hic__content-progress .progress .progress-bar').width() /
      $('.hic__content-progress .progress .progress-bar')
        .parent()
        .width()) *
      100
  )
  if (method === 'increase') {
    $('.hic__content-progress .progress .progress-bar').css('width', `${currentWidth + size}%`)
    $('.hic__content-progress .progress-indicator .amount').html(currentWidth + size)
  } else if (method === 'decrease') {
    $('.hic__content-progress .progress .progress-bar').css('width', `${currentWidth - size}%`)
    $('.hic__content-progress .progress-indicator .amount').html(currentWidth - size)
  }
}
