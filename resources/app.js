window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'magnific-popup/dist/jquery.magnific-popup.min.js'

const primaryColor = '#40a9bc'

$(document).ready(() => {
  $('.searchToggleTrigger').click(() => {
    if ($('#formSearch').css('display') === 'none') showSearch()
    else hideSearch()
  })

  $('#formSearch').focusout(() => {
    hideSearch()
  })

  $('.image_content').magnificPopup({
    type: 'image'
  })
})

function showSearch() {
  $('#formSearch').removeClass(['d-lg-none', 'd-xl-none'])
  $('#navbarMenus').css('display', 'none')
  $('.searchToggleTrigger > .fas').css('color', primaryColor)
  $('#searchInput').focus()
}

function hideSearch() {
  $('#formSearch').addClass(['d-lg-none', 'd-xl-none'])
  $('#navbarMenus').css('display', 'flex')
  $('.searchToggleTrigger > .fas').css('color', 'white')
}
