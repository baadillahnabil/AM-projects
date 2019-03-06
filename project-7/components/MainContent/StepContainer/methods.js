import $ from 'jquery'

// Add progress bar
export const adjustProgressBar = (method, size = 14) => {
  const currentWidth = Math.ceil(
    ($('.eng__content-progress .progress .progress-bar').width() /
      $('.eng__content-progress .progress .progress-bar')
        .parent()
        .width()) *
      100
  )
  if (method === 'increase') {
    $('.eng__content-progress .progress .progress-bar').css('width', `${currentWidth + size}%`)
    $('.eng__content-progress .progress-indicator .amount').html(currentWidth + size)
  } else if (method === 'decrease') {
    $('.eng__content-progress .progress .progress-bar').css('width', `${currentWidth - size}%`)
    $('.eng__content-progress .progress-indicator .amount').html(currentWidth - size)
  }
}
