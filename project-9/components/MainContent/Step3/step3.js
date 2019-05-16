import $ from 'jquery'
import 'devbridge-autocomplete'
import find from 'lodash/find'
import GeoData from './geodata'

// Set Autocomplete Data
let parsedData = []
for (const data of GeoData) {
  parsedData.push({ value: `${data[0]}, ${data[1]}, ${data[2]}`, data: `${data[0]}, ${data[1]}, ${data[2]}` })
}
$('#step3-form__postcode input').autocomplete({
  lookup: parsedData,
  autoSelectFirst: true,
  lookupLimit: 30,
  onSelect: suggestion => {
    isPostcodeValid(suggestion)
  }
})

$(document).ready(() => {
  // Check Validation
  $('#step3-form__postcode input').on('change', () => {
    isPostcodeValid()
  })

  // On Next Button Clicked
  $('#step3-next-button').on('click', () => {
    if (!isPostcodeValid()) return

    $('#hic__step3').addClass('animated faster fadeOut')
    $('#hic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step3').addClass('d-none')
      $('#hic__step3').removeClass('animated faster fadeOut')

      $('#hic__step4').removeClass('d-none')
      $('#hic__step4').addClass('animated faster fadeIn')

      $('#hic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step4').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step3-back-button').on('click', () => {
    $('#hic__step3').addClass('animated faster fadeOut')
    $('#hic__step3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#hic__step3').addClass('d-none')
      $('#hic__step3').removeClass('animated faster fadeOut')

      $('#hic__step2').removeClass('d-none')
      $('#hic__step2').addClass('animated faster fadeIn')
      $('#hic__step2').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#hic__step2').removeClass('animated faster fadeIn')
      })
    })
  })
})

// Rule:
// ------
// 1. The value of the field should match the value on what's loaded on the autocomplete
function isPostcodeValid(newValue = $('#step3-form__postcode input').val()) {
  let isValidData
  if (newValue.value) {
    isValidData = find(parsedData, data => data.value === newValue.value)
  } else {
    isValidData = find(parsedData, data => data.value === newValue)
  }

  if (isValidData === undefined) {
    $('#step3-form__postcode input').val('')
    $('#step3-form__postcode').addClass('error-state')
    $('#step3-form__postcode + .info').removeClass('d-none')

    return false
  } else {
    if (newValue.value) $('#step3-form__postcode input').val(newValue.value)
    else $('#step3-form__postcode input').val(newValue)

    $('#step3-form__postcode').removeClass('error-state')
    $('#step3-form__postcode + .info').addClass('d-none')

    return true
  }
}
