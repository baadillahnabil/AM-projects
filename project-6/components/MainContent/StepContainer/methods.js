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

// Executed on Step 6
export function hideLogosAnimation() {
  for (let element = 1; element <= 6; element++) {
    $(`.hic__content-company-logos .row .company-logos:nth-child(${element})`).css('opacity', '0.4')
  }
  let iterate = 1
  const startAnimation = setInterval(() => {
    $(`.hic__content-company-logos .row .company-logos:nth-child(${iterate})`).css('opacity', '1')
    iterate++
    if (iterate >= 7) {
      clearInterval(startAnimation)

      $('#hic__step-6').addClass('animated faster fadeOut')
      $('#hic__step-6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step-6').addClass('d-none')
        $('#hic__step-6').removeClass('animated faster fadeOut')

        $('#hic__step-7').removeClass('d-none')
        $('#hic__step-7').addClass('animated faster fadeIn')
        $('#hic__step-7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
          $('#hic__step-7').removeClass('animated faster fadeIn')
        })
      })

      adjustProgressBar('increase')
    }
  }, 1000)
}
