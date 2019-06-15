import $ from 'jquery'

$(document).ready(() => {
  // On Selection Changed
  $('#step9-form input[name="step9-form"]').on('change', () => {
    $('#step9-next-button').removeClass('disabled-state')

    const value = $('#step9-form input[name="step9-form"]:checked').val()

    if (value === 'no') {
      const chat1 = $('#step8-chat-1').html()
      const chat2 = $('#step8-chat-2').html()

      $('#step8-chat-1').html(chat2)
      $('#step8-chat-2').html(chat1)
      $('#step8-chat-2').removeClass('d-none')
    } else {
      $('#step8-chat-1').html('Your smoking status can increase the cost of your premium.')
      $('#step8-chat-2').html("<b>That's what we like to hear!</b> Your premium wont be affected.")
      $('#step8-chat-2').addClass('d-none')
    }
  })

  // On Next Button Clicked
  $('#step9-next-button').on('click', () => {
    const selected = $('#step9-form input[name="step9-form"]:checked').val() !== undefined
    if (!selected) return

    $('#lic__step9').addClass('animated faster fadeOut')
    $('#lic__step9').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step9').addClass('d-none')
      $('#lic__step9').removeClass('animated faster fadeOut')

      $('#lic__step10').removeClass('d-none')
      $('#lic__step10').addClass('animated faster fadeIn')

      $('#lic__step10').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step10').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step9-back-button').on('click', () => {
    $('#lic__step9').addClass('animated faster fadeOut')
    $('#lic__step9').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step9').addClass('d-none')
      $('#lic__step9').removeClass('animated faster fadeOut')

      $('#lic__step8').removeClass('d-none')
      $('#lic__step8').addClass('animated faster fadeIn')
      $('#lic__step8').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step8').removeClass('animated faster fadeIn')
      })
    })
  })
})
