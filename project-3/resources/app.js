window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip() // enable bootstrap tooltip
})
