window.$ = window.jQuery = require('jquery/dist/jquery.min.js')
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery-ui/ui/jquery-1-7.js'
import 'jquery-ui/ui/widgets/autocomplete.js'
import 'select2/dist/js/select2.full.js'
import 'jquery-autocomplete/jquery.autocomplete.js'

// $(document).ready(function() {
//   $('.cs-lets-go-email').click(function() {
//     if ($(window).width() < 960) {
//       $('html, body').animate(
//         {
//           scrollTop: $('.cs-form-body').offset().top
//         },
//         1000
//       )
//     }
//     $('#email').focus()
//   })
//   $('[data-toggle="popover"]').popover()
//   $('[data-toggle="popover"]').click(function() {
//     $('[data-toggle="popover"]').attr('src', 'assets/images/info-hover.svg')
//     $('[data-toggle="popover"]')
//       .not(this)
//       .popover('hide')
//       .attr('src', 'assets/images/info.svg')
//   })
//   $(document).on('click', function(e) {
//     if ($(e.target).attr('data-toggle') != 'popover') {
//       $('[data-toggle="popover"]').popover('hide')
//     }
//   })
//   $('#password').keyup(function() {
//     var value = $(this).val()
//     console.log(value)
//     error = 0
//     if (/[A-Z]/.test(value) && /[a-z]/.test(value)) {
//       $('.pswd-check-1').addClass('pswd-ok')
//     } else {
//       $('.pswd-check-1').removeClass('pswd-ok')
//       error = error + 1
//     }
//     if (/[0-9]/.test(value)) {
//       $('.pswd-check-2').addClass('pswd-ok')
//     } else {
//       $('.pswd-check-2').removeClass('pswd-ok')
//       error = error + 1
//     }
//     if (value.length >= 8 && value.length <= 50) {
//       $('.pswd-check-3').addClass('pswd-ok')
//     } else {
//       $('.pswd-check-3').removeClass('pswd-ok')
//       error = error + 1
//     }
//     if (error > 0) {
//       $(this).removeClass('ok')
//       $(this).addClass('error')
//     } else {
//       $(this).addClass('ok')
//       $(this).removeClass('error')
//     }
//   })
//   $('#dob').inputmask('99/99/9999', { placeholder: 'dd/mm/yyyy' })
//   $('.cs-expand').click(function() {
//     $(this).fadeOut()
//     $('.cs-fh-2').fadeIn()
//   })
// })

$(document).ready(function() {
  $('input[name="phone-7"]').keydown(function(e) {
    var key = e.charCode || e.keyCode || 0
    return (
      key == 8 ||
      key == 9 ||
      key == 13 ||
      key == 46 ||
      key == 110 ||
      key == 190 ||
      (key >= 35 && key <= 40) ||
      (key >= 48 && key <= 57) ||
      (key >= 96 && key <= 105)
    )
  })
  $('.hic-alert-valid-wrap').click(function() {
    $(this).fadeOut()
  })
  var url = window.location.href
  var step = url.substring(url.lastIndexOf('/') + 1)
  if (step) {
    step = step.replace('#step-', '')
  } else {
    step = 1
  }
  go(step)
  $.widget('app.autocomplete', $.ui.autocomplete, {
    options: {
      highlightClass: 'ui-state-highlight'
    },
    _renderItem: function(ul, item) {
      var re = new RegExp('(' + this.term + ')', 'gi'),
        cls = this.options.highlightClass,
        template = '<strong>$1</strong>',
        label = item.label.replace(re, template),
        $li = $('<li/>').appendTo(ul)
      $('<div/>')
        .html(label)
        .appendTo($li)
      return $li
    }
  })
  var choices = []
  var arr = []
  var suburbFull
  var suburValue
  var postValue
  var submitReport
  var geoJson = ''
  if (typeof geodata !== 'undefined') {
    geoJson = geodata
  } else {
    geoJson = 'geodata.json'
  }

  $.getJSON(geoJson, function(data) {
    $.each(data, function(name, value) {
      value[2] = value[2].length < 4 ? '0' + value[2] : value[2]
      arr.push('' + value.join(', '))
    })
    $('#hic-postcode, #work_postcode').autoComplete({
      minChars: 1,
      source: function(term, suggest) {
        term = term.toLowerCase()
        var choices = arr

        var matches = []
        for (i = 0; i < choices.length; i++) {
          if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i])
        }

        suggest(matches)
      },
      onSelect: function(e, term, item) {
        $(this).focus()
        var val = $('#hic-postcode').val()
        $('.autocomplete-suggestions').hide()
        localStorage.has_selected_address = 1
        localStorage.selected_address = val
      },
      cache: false
    })
  })

  $('#hic-postcode, #work_postcode').keydown(function(event) {
    if (event.keyCode == 13) {
      var val = $(this).val()
      localStorage.has_selected_address = 1
      localStorage.selected_address = val
    }
  })

  $('#hic-postcode').change(function() {
    var val = $(this).val()
    if (typeof localStorage.selected_address !== 'undefined') {
      if (localStorage.selected_address == val) {
        localStorage.has_selected_address = 1
        localStorage.selected_address = val
      } else {
        localStorage.has_selected_address = 0
      }
    }
  })
  // $('#hic-postcode').autocomplete({
  //     source: function (request, response) {
  //         $.getJSON("assets/postcode.json",{ q: request.term }, function (data) {
  //             response(
  //                 $.map(data.list, function (item) {
  //                     var pst = JSON.stringify(item.postcode);
  //                     var loc = JSON.stringify(item.locality);
  //                     var stt = JSON.stringify(item.State);
  //                     if (pst.toLowerCase().indexOf(request.term) != -1 || loc.toLowerCase().indexOf(request.term) != -1 || stt.toLowerCase().indexOf(request.term) != -1) {
  //                         return {
  //                             label: item.postcode+ ', ' + item.locality +', '+item.State,
  //                             value: item.postcode + ', ' + item.locality + ', ' + item.State
  //                         };
  //                     }
  //                 })
  //             );
  //         });
  //     },
  //     minLength: 2,
  //     delay: 100
  // });
  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
  $('.hic-btn-submit-form').click(function() {
    var name = $('input[name="name-7"]').val()
    var phone = $('input[name="phone-7"]').val()
    var email = $('input[name="email-7"]').val()
    if (name) {
      $('.hic-input-group-name .hic-alert-valid-wrap').fadeOut()
      $('.hic-input-group-name .input-group-text').removeAttr('style')
      $('.hic-input-group-name .form-control').removeAttr('style')
    } else {
      $('.hic-input-group-name .hic-alert-valid-wrap').fadeIn()
      $('.hic-input-group-name .input-group-text').css('border-color', '#ff0000')
      $('.hic-input-group-name .form-control').css('border-color', '#ff0000')
    }
    if (phone) {
      $('.hic-input-group-phone .hic-alert-valid-wrap').fadeOut()
      $('.hic-input-group-phone .input-group-text').removeAttr('style')
      $('.hic-input-group-phone .form-control').removeAttr('style')
    } else {
      $('.hic-input-group-phone .hic-alert-valid-wrap').fadeIn()
      $('.hic-input-group-phone .input-group-text').css('border-color', '#ff0000')
      $('.hic-input-group-phone .form-control').css('border-color', '#ff0000')
    }
    if (validateEmail(email)) {
      $('.hic-input-group-email .hic-alert-valid-wrap').fadeOut()
      $('.hic-input-group-email .input-group-text').removeAttr('style')
      $('.hic-input-group-email .form-control').removeAttr('style')
    } else {
      $('.hic-input-group-email .hic-alert-valid-wrap').fadeIn()
      $('.hic-input-group-email .input-group-text').css('border-color', '#ff0000')
      $('.hic-input-group-email .form-control').css('border-color', '#ff0000')
    }
  })
  $('.hic-step[data-no="3"] input[name="option_1_only[]"]').change(function() {
    if ($(this).is(':checked')) {
      $('.hic-step[data-no="3"] .hic-option-item').removeClass('active')
      $('.hic-option-item-full').addClass('active')
      $('.hic-step[data-no="3"] input[name="option_1[]"]')
        .prop('checked', false)
        .removeAttr('chcked')
    }
  })
  $('.hic-step[data-no="3"] input[name="option_1[]"]').change(function() {
    if ($(this).is(':checked')) {
      $('.hic-step[data-no="3"] .hic-option-item-full').removeClass('active')
      $('.hic-step[data-no="3"] input[name="option_1_only[]"]')
        .prop('checked', false)
        .removeAttr('chcked')
    }
  })
  $('.hic-step[data-no="4"] input[name="option_2_only[]"]').change(function() {
    if ($(this).is(':checked')) {
      $('.hic-step[data-no="4"] .hic-option-item').removeClass('active')
      $('.hic-option-item-full').addClass('active')
      $('.hic-step[data-no="4"] input[name="option_2[]"]')
        .prop('checked', false)
        .removeAttr('chcked')
    }
  })
  $('.hic-step[data-no="4"] input[name="option_2[]"]').change(function() {
    if ($(this).is(':checked')) {
      $('.hic-step[data-no="4"] .hic-option-item-full').removeClass('active')
      $('.hic-step[data-no="4"] input[name="option_2_only[]"]')
        .prop('checked', false)
        .removeAttr('chcked')
    }
  })
  if (window.history && window.history.pushState) {
    $(window).on('popstate', function() {
      var url = window.location.href
      var step = url.substring(url.lastIndexOf('/') + 1)
      if (step) {
        step = step.replace('#step-', '')
      } else {
        step = 1
      }
      console.log(step)
      go(step)
    })
  }
  $('[data-toggle="popover"]').popover({
    trigger: 'hover'
  })
  $('[data-toggle="tooltip"]').tooltip()
  $('.hic-ls-item').click(function() {
    $('.hic-ls-item').removeClass('active')
    $('.hic-step[data-no="1"] .hic-alert-valid-wrap').fadeOut()
    $('.hic-ls-item').removeAttr('style')
    $(this).toggleClass('active')
  })
  $('.hic-option-item').click(function() {
    // $('.hic-option-item').removeClass('active');
    $('.hic-step[data-no="3"] .hic-alert-valid-wrap').fadeOut()
    $('.hic-step[data-no="3"] .hic-option-item').removeAttr('style')
    $('.hic-step[data-no="4"] .hic-alert-valid-wrap').fadeOut()
    $('.hic-step[data-no="4"] .hic-option-item').removeAttr('style')
    $(this).toggleClass('active')
  })
  $('.hic-btn-next').click(function() {
    var active = $('.hic-step.active').attr('data-no')
    go(parseInt(active) + 1)
  })
  $('.hic-btn-back').click(function() {
    var active = $('.hic-step.active').attr('data-no')
    if (active == 7) {
      active = 6
    }
    go(parseInt(active) - 1)
  })
  var progress = (0 / 7) * 100
  $('.hic-progress-bar').css('width', progress + '%')
  $('.hic-progress-count span').text(Math.floor(progress) + '%')
  function do_loading() {
    var delay = 0
    var x = 1
    $('.hic-loader-product').each(function(index) {
      $(this)
        .delay(delay)
        .animate(
          {
            opacity: 1
          },
          500,
          function() {
            $('.hic-step[data-no="6"] p span').text(x)
            x++
          }
        )
      delay += 1000
    })
    // $('.hic-step[data-no="6"] p span').each(function () {
    //     $(this).prop('Counter', 0).animate({
    //         Counter: $(this).text()
    //     }, {
    //             duration: 3500,
    //             easing: 'swing',
    //             step: function (now) {
    //                 $(this).text(Math.ceil(now));
    //             }
    //         });
    // });
  }
  function go(step) {
    if (step < 7) {
      $('.hic-progress').show()
      var valid = false
      if (step == 1) {
        valid = true
      }
      if (step == 2) {
        var ls = $('input[name="ls"]:checked').val()
        console.log(ls)
        if (ls) {
          valid = true
          $('.hic-step[data-no="1"] .hic-alert-valid-wrap').fadeOut()
          $('.hic-ls-item').removeAttr('style')
        } else {
          $('.hic-step[data-no="1"] .hic-alert-valid-wrap').fadeIn()
          $('.hic-ls-item').css('border-color', '#ff0000')
        }
      }
      if (step == 3) {
        var pc = $('#hic-postcode').val()
        if (pc) {
          valid = true
          $('.hic-step[data-no="2"] .hic-alert-valid-wrap').fadeOut()
          $('.hic-step[data-no="2"] .input-group-prepend .input-group-text').removeAttr('style')
          $('.hic-step[data-no="2"] .form-control').removeAttr('style')
        } else {
          $('.hic-step[data-no="2"] .hic-alert-valid-wrap').fadeIn()
          $('.hic-step[data-no="2"] .input-group-prepend .input-group-text').css('border-color', '#ff0000')
          $('.hic-step[data-no="2"] .form-control').css('border-color', '#ff0000')
        }
      }
      if (step == 4) {
        var opt_1 = $('input[name="option_1[]"]:checked').length
        var opt_1_only = $('input[name="option_1_only[]"]:checked').length
        console.log(opt_1)
        if (opt_1 > 0 || opt_1_only > 0) {
          valid = true
          $('.hic-step[data-no="3"] .hic-alert-valid-wrap').fadeOut()
          $('.hic-step[data-no="3"] .hic-option-item').removeAttr('style')
        } else {
          $('.hic-step[data-no="3"] .hic-alert-valid-wrap').fadeIn()
          $('.hic-step[data-no="3"] .hic-option-item').css('border-color', '#ff0000')
        }
      }
      if (step == 5) {
        var opt_2 = $('input[name="option_2[]"]:checked').length
        var opt_2_only = $('input[name="option_2_only[]"]:checked').length
        console.log(opt_2)
        if (opt_2 > 0 || opt_2_only > 0) {
          valid = true
          $('.hic-step[data-no="4"] .hic-alert-valid-wrap').fadeOut()
          $('.hic-step[data-no="4"] .hic-option-item').removeAttr('style')
        } else {
          $('.hic-step[data-no="4"] .hic-alert-valid-wrap').fadeIn()
          $('.hic-step[data-no="4"] .hic-option-item').css('border-color', '#ff0000')
        }
      }
      if (step == 6) {
        var ychf = $('select[name="ychf"]').val()
        console.log(ychf)
        if (ychf) {
          valid = true
          $('.hic-step[data-no="5"] .hic-alert-valid-wrap').fadeOut()
          $('.hic-step[data-no="5"] .hic-select').removeAttr('style')
        } else {
          $('.hic-step[data-no="5"] .hic-alert-valid-wrap').fadeIn()
          $('.hic-step[data-no="5"] .hic-select').css('border-color', '#ff0000')
        }
      }
      // valid = true;
      if (valid == true) {
        window.history.pushState('', '', '#step-' + step)
        var progress = ((step - 1) / 7) * 100
        $('.hic-progress-bar').css('width', progress + '%')
        $('.hic-progress-count span').text(Math.floor(progress) + '%')
        $('.hic-step')
          .fadeOut(200)
          .removeClass('active')
        setTimeout(function() {
          $('.hic-step[data-no="' + step + '"]')
            .fadeIn(200)
            .addClass('active')
        }, 200)
        if (step == 6) {
          do_loading()
          setTimeout(function() {
            window.history.pushState('', '', '#step-7')
            var progress = (7 / 7) * 100
            $('.hic-progress-bar').css('width', progress + '%')
            $('.hic-step[data-no="' + step + '"]')
              .fadeOut(200)
              .removeClass('active')
            // $('.hic-box > hr,.hic-box > .hic-licence').hide();
            $('.hic-step[data-no="7"]')
              .fadeIn(200)
              .addClass('active')
            // $('.hic-box').addClass('no-padding');
            $('.hic-progress').hide()
          }, 8000)
        }
      }
    }
  }
  // function check_postcode(postcode){
  //     var resp = false;
  //     $.ajax({
  //         url : 'assets/postcode.json',
  //         type : 'GET',
  //         dataType : 'json',
  //         async : false,
  //         success : function(data){
  //             for (var x = 0; x < data.list.length; x++) {
  //                 if (data.list[x].postcode == postcode) {
  //                     console.log('bener');
  //                     console.log(data.list[x].postcode);
  //                     resp = true;
  //                     break;
  //                 }
  //             }
  //         }
  //     })
  //     return resp;
  // }
})
