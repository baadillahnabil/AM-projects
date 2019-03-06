import $ from 'jquery'
import 'devbridge-autocomplete'
import find from 'lodash/find'
import GeoData from './geodata'
import { adjustProgressBar } from '../../methods'

// Set Autocomplete Data
let parsedData = []
for (const data of GeoData) {
  parsedData.push({ value: `${data[0]}, ${data[1]}, ${data[2]}`, data: `${data[0]}, ${data[1]}, ${data[2]}` })
}
$('#postcode').autocomplete({
  lookup: parsedData,
  autoSelectFirst: true,
  lookupLimit: 30,
  onSearchStart: () => {
    $('.backdrop-layer').removeClass('d-none')
  },
  onHide: () => {
    $('.backdrop-layer').addClass('d-none')
  },
  onSelect: suggestion => {
    isPostcodeValid(suggestion)
  }
})

$(document).ready(() => {
  // Check Validation
  $('#postcode').on('blur', () => {
    if ($('#postcode').val() === '') $('.backdrop-layer').addClass('d-none')
  })
  $('#postcode').on('change', () => {
    isPostcodeValid()
  })

  // On Continue Button Clicked
  $('#step-2-button-submit').on('click', () => {
    if (!isPostcodeValid()) return

    $('#eng__step-2').addClass('animated faster fadeOut')
    $('#eng__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-2').addClass('d-none')
      $('#eng__step-2').removeClass('animated faster fadeOut')

      $('#eng__step-3').removeClass('d-none')
      $('#eng__step-3').addClass('animated faster fadeIn')
      $('#eng__step-3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-3').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('increase')
  })

  // On Back Button Clicked
  $('#step-2-button-back').on('click', () => {
    $('#eng__step-2').addClass('animated faster fadeOut')
    $('#eng__step-2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-2').addClass('d-none')
      $('#eng__step-2').removeClass('animated faster fadeOut')

      $('#eng__step-1').removeClass('d-none')
      $('#eng__step-1').addClass('animated faster fadeIn')
      $('#eng__step-1').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-1').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('decrease')
  })
})

// Rule:
// ------
// 1. The value of the field should match the value on what's loaded on the autocomplete
function isPostcodeValid(newValue = $('#postcode').val()) {
  let isValidData
  if (newValue.value) {
    isValidData = find(parsedData, data => data.value === newValue.value)
  } else {
    isValidData = find(parsedData, data => data.value === newValue)
  }

  if (isValidData === undefined) {
    $('#postcode').val('')
    $('#postcode').addClass('error-state')
    $('#postcode + .step-2__form-info-message').removeClass('invisible')

    return false
  } else {
    if (newValue.value) $('#postcode').val(newValue.value)
    else $('#postcode').val(newValue)

    $('#postcode').removeClass('error-state')
    $('#postcode + .step-2__form-info-message').addClass('invisible')

    return true
  }
}
