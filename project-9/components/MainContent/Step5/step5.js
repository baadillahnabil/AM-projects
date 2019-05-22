import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import 'rangeslider.js'
import accounting from 'accounting'

$(document).ready(() => {
  renderRangeSlider()

  // On Next or Skip Button Clicked
  $('#step5-next-button').on('click', () => {
    $('#lic__step5').addClass('animated faster fadeOut')
    $('#lic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step5').addClass('d-none')
      $('#lic__step5').removeClass('animated faster fadeOut')

      $('#lic__step6').removeClass('d-none')
      $('#lic__step6').addClass('animated faster fadeIn')

      $('#lic__step6').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step6').removeClass('animated faster fadeIn')
      })
    })
  })

  // On Back Button Clicked
  $('#step5-back-button').on('click', () => {
    $('#lic__step5').addClass('animated faster fadeOut')
    $('#lic__step5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#lic__step5').addClass('d-none')
      $('#lic__step5').removeClass('animated faster fadeOut')

      $('#lic__step4').removeClass('d-none')
      $('#lic__step4').addClass('animated faster fadeIn')
      $('#lic__step4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#lic__step4').removeClass('animated faster fadeIn')
      })
    })
  })
})

function renderRangeSlider() {
  $('#step5-cover-range').rangeslider({
    // Feature detection the default is `true`.
    // Set this to `false` if you want to use
    // the polyfill also in Browsers which support
    // the native <input type="range"> element.
    polyfill: false,

    // Default CSS classes
    rangeClass: 'rangeslider',
    disabledClass: 'rangeslider--disabled',
    horizontalClass: 'rangeslider--horizontal',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle',

    // Callback function
    onInit: function() {
      var $rangeEl = this.$range
      // add value label to handle
      var $handle = $rangeEl.find('.rangeslider__handle')
      var handleValue = `<div class="rangeslider__handle__value">$${accounting.formatNumber(this.value, {
        thousand: ','
      })}</div>`
      $handle.append(handleValue)

      // get range index labels
      var rangeLabels = this.$element.attr('labels')
      rangeLabels = rangeLabels.split(', ')

      // add labels
      $rangeEl.append('<div class="rangeslider__labels"></div>')
      $(rangeLabels).each(function(index, value) {
        $rangeEl.find('.rangeslider__labels').append(`<span class="rangeslider__labels__label">${value}</span>`)
      })

      // set buttons value
      $('#step5-next-button-amount').html(
        `&nbsp;$${accounting.formatNumber(this.value, {
          thousand: ','
        })}&nbsp;`
      )
    },

    // Callback function
    onSlide: function(position, value) {
      var $handle = this.$range.find('.rangeslider__handle__value')
      $handle.text(
        `$${accounting.formatNumber(this.value, {
          thousand: ','
        })}`
      )

      // set buttons value
      $('#step5-next-button-amount').html(
        `&nbsp;$${accounting.formatNumber(this.value, {
          thousand: ','
        })}&nbsp;`
      )
    },

    // Callback function
    onSlideEnd: function(position, value) {}
  })
}
