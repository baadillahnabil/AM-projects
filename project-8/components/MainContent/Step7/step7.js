import $ from 'jquery'

$(document).ready(() => {
  // Check Validation
  $('#currentFund').on('change', () => {
    isSelectValid()

    const value = $('#currentFund').val()
    if (value === 'not insured') {
      $('#step7-chat-bubble .message').html('No worries, we will find suitable health insurance cover for you.')
    } else {
      $('#step7-chat-bubble .message').html(
        'We will take into account your current fund when putting together your health insurance quotes.'
      )
    }
  })

  // On Next or Skip Button Clicked
  $('#step7-next-button').on('click', () => {
    if (!isSelectValid()) return
    goToStep8()
  })

  // On Back Button Clicked
  $('#step7-back-button').on('click', () => {
    $('#hic__step7').addClass('animated faster fadeOut')
    $('#hic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step7').addClass('d-none')
      $('#hic__step7').removeClass('animated faster fadeOut')

      $('#hic__step6').removeClass('d-none')
      $('#hic__step6').addClass('animated faster fadeIn')
      $('#hic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step6').removeClass('animated faster fadeIn')
      })
    })
  })
})

function goToStep8() {
  $('#hic__step7').addClass('animated faster fadeOut')
  $('#hic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
    $('#hic__step7').addClass('d-none')
    $('#hic__step7').removeClass('animated faster fadeOut')

    $('#hic__step8').removeClass('d-none')
    $('#hic__step8').addClass('animated faster fadeIn')

    $('#hic__step8').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step8').removeClass('animated faster fadeIn')
    })
  })
}

function isSelectValid() {
  const isSelected = $('#currentFund option:selected').val() !== ''
  if (!isSelected) {
    $('#currentFund').addClass('error-state')
    $('#currentFund + .info').removeClass('d-none')
  } else {
    $('#currentFund').removeClass('error-state')
    $('#currentFund + .info').addClass('d-none')
  }

  return isSelected
}
