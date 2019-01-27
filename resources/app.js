import * as $ from 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const primaryColor = '#40a9bc'

$(document).ready(() => {
  $('.searchToggleTrigger').click(() => {
    if ($('#formSearch').css('display') === 'none') {
      $('#formSearch').removeClass(['d-lg-none', 'd-xl-none'])
      $('#navbarMenus').css('display', 'none')

      $('.searchToggleTrigger > .fas').css('color', primaryColor)

      $('#searchInput').focus()
    } else {
      $('#formSearch').addClass(['d-lg-none', 'd-xl-none'])
      $('#navbarMenus').css('display', 'flex')

      $('.searchToggleTrigger > .fas').css('color', 'white')
    }
  })
})
