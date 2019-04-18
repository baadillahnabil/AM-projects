import $ from 'jquery'

$(document).ready(() => {
  // On Selection Changed
  $('#step6-form input[name="step6-form"]').on('change', () => {
    const selected = $('#step6-form input[name="step6-form"]:checked').val() !== undefined

    if (selected) {
      $('#step6-skip-button').addClass('d-none')
      $('#step6-chat-bubble').addClass('d-none')
      $('#step6-next-button').removeClass('d-none')
    } else {
      $('#step6-next-button').addClass('d-none')
      $('#step6-chat-bubble').removeClass('d-none')
      $('#step6-skip-button').removeClass('d-none')
    }
  })

  // On Next or Skip Button Clicked
  $('#step6-next-button').on('click', () => {
    goToStep7()
  })
  $('#step6-skip-button').on('click', () => {
    goToStep7()
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

function goToStep7() {
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
}
