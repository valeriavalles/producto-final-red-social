$(document).ready(function() {
  var $loginEmail = $('#login-email');
  var $loginPassword = $('#login-password')
  var $submit = $('.submit');

  // Validando el email que contenga @ y .
  $loginEmail.on('input', function() {
     var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
      correctEmail = false;
     if (PATTERNEMAIL.test($(this).val())) {
      correctEmail = true;
       activeButton();
     } else {
       disabledButton();;
     }
   });

  // Validando el password que ingresa usuario que sea letras o numeros
  $loginPassword.on('input', function() {
    var PATTERNNAME = /^[a-z\d\u00C0-\u00ff]+$/i;
      correctPassword = false;
    if (PATTERNNAME.test($(this).val())) {
      correctPassword = true;
       activeButton();
    } else {
       disabledButton();
    }
  });

  // Funcion que comprueba que habilita el boton
   function activeButton() {
     if (correctEmail && correctPassword) {
    /*  location.href = "../registrate.html";*/
      $submit.removeAttr('disabled');
    }
  }
    // Funcion que deshabilita el boton
   function disabledButton() {
     $submit.attr('disabled', 'disabled');
   }

});
