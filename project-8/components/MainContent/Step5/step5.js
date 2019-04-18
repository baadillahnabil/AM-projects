import $ from 'jquery'

$(document).ready(() => {
  // On Selection Changed
  $('#step5-form input[name="step5-form"]').on('change', () => {
    const selected = $('#step5-form input[name="step5-form"]:checked').val() !== undefined

    if (selected) {
      $('#step5-skip-button').addClass('d-none')
      $('#step5-chat-bubble').addClass('d-none')
      $('#step5-next-button').removeClass('d-none')
    } else {
      $('#step5-next-button').addClass('d-none')
      $('#step5-chat-bubble').removeClass('d-none')
      $('#step5-skip-button').removeClass('d-none')
    }
  })

  // On Next or Skip Button Clicked
  $('#step5-next-button').on('click', () => {
    goToStep6()
  })
  $('#step5-skip-button').on('click', () => {
    goToStep6()
  })

  // On Back Button Clicked
  $('#step5-back-button').on('click', () => {
    $('#hic__step5').addClass('animated faster fadeOut')
    $('#hic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step5').addClass('d-none')
      $('#hic__step5').removeClass('animated faster fadeOut')

      $('#hic__step4').removeClass('d-none')
      $('#hic__step4').addClass('animated faster fadeIn')
      $('#hic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step4').removeClass('animated faster fadeIn')
      })
    })
  })
})

function goToStep6() {
  $('#hic__step5').addClass('animated faster fadeOut')
  $('#hic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    $('#hic__step5').addClass('d-none')
    $('#hic__step5').removeClass('animated faster fadeOut')

    $('#hic__step6').removeClass('d-none')
    $('#hic__step6').addClass('animated faster fadeIn')

    $('#hic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step6').removeClass('animated faster fadeIn')
    })
  })
}
