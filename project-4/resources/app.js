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
