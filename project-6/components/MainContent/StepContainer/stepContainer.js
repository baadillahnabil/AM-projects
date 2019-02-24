import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

import './LeftOnlyForm/leftOnlyForm'

$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip({
    template:
      '<div class="tooltip form-radio-tooltip-info" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  })
})
