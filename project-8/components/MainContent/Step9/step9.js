import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

$(document).ready(() => {
  setTimeout(() => {
    $('.hic__step9 .progress .progress-bar').css('width', '0')
    $('.hic__step9 .progress .progress-bar').css('width', '30%')
    setTimeout(() => {
      $('.hic__step9 .progress .progress-bar').css('width', '70%')
      setTimeout(() => {
        $('.hic__step9 .progress .progress-bar').css('width', '100%')

        success()
      }, 800)
    }, 1000)
  }, 500)
})

function success() {
  $('#step9-firstTitle').addClass('d-none')
  $('#step9-secondTitle').removeClass('d-none')

  $('#step9-loading .success').removeClass('d-none')
  $('#step9-loading .loading').addClass('d-none')
  $('#step9-loading .message').html('Analysis complete')
}
