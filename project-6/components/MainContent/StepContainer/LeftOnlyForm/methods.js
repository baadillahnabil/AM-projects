import $ from 'jquery'

// Add progress bar
export const adjustProgressBar = (method, size = 14) => {
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
