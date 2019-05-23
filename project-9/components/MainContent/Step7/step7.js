import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap-select'

$(document).ready(() => {
  // Init dropdown menu
  $('#step7-form__occupation').selectpicker({
    liveSearchPlaceholder: 'Typing...'
  })

  // render "I can’t find my occupation" to dropdown menu
  $('#step7-form__occupation').on('loaded.bs.select', () => {
    $('.lic__step7 .bootstrap-select .dropdown-menu').append($('#step7-no-selection'))
  })

  // on value changed
  $('#step7-form__occupation').on('changed.bs.select', (event, clickedIndex, isSelected, previousValue) => {
    const value = event.target.value

    if (value !== '__none__') {
      $('#step7-chat-1').html('The risk profile of your job can increase the price of your premium.')
      $('#step7-chat-2').html(
        "That's okay. We'll quote you as an <b>Office Worker </b>for now, but you can change this later."
      )
      $('#step7-chat-2').addClass('d-none')
    }

    isSelectValid()
  })

  // on "I can’t find my occupation" clicked
  $('#step7-no-selection').on('click', () => {
    $('#step7-form__occupation').val('__none__')
    $('#step7-form__occupation').selectpicker('render')

    // Show additional chat
    const chat1 = $('#step7-chat-1').html()
    const chat2 = $('#step7-chat-2').html()
    $('#step7-chat-1').html(chat2)
    $('#step7-chat-2').html(chat1)
    $('#step7-chat-2').removeClass('d-none')

    isSelectValid()
  })

  // On Next or Skip Button Clicked
  $('#step7-next-button').on('click', () => {
    if (!isSelectValid()) return

    $('#lic__step7').addClass('animated faster fadeOut')
    $('#lic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step7').addClass('d-none')
      $('#lic__step7').removeClass('animated faster fadeOut')

      $('#lic__step8').removeClass('d-none')
      $('#lic__step8').addClass('animated faster fadeIn')

      $('#lic__step8').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step8').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step7-back-button').on('click', () => {
    $('#lic__step7').addClass('animated faster fadeOut')
    $('#lic__step7').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step7').addClass('d-none')
      $('#lic__step7').removeClass('animated faster fadeOut')

      $('#lic__step6').removeClass('d-none')
      $('#lic__step6').addClass('animated faster fadeIn')
      $('#lic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step6').removeClass('animated faster fadeIn')
      })
    })
  })
})

function isSelectValid() {
  const isSelected = $('#step7-form__occupation').val() !== ''

  if (!isSelected) {
    $('#step7-form__form-group .bootstrap-select').addClass('error-state')
    $('#step7-form__form-group .info').removeClass('d-none')

    return false
  } else {
    $('#step7-form__form-group .bootstrap-select').removeClass('error-state')
    $('#step7-form__form-group .info').addClass('d-none')

    return true
  }
}
