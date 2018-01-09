$(document).ready(function() {
// Llamando las variables
  var $name = $('#name');
  var $pleasures = $('#pleasures');
  var $email = $('#email');
  var $password = $('#password')
  var $checkbox = $(':checkbox');
  var $submit = $('.submit');

// Obteniendo el contenido validando que sea letras maximo de 10
$name.on('input', function() {
  var PATTERNNAME = /^([A-z ñáéíóú]{2,10})$/;
    correctName = false;
  if (PATTERNNAME.test($(this).val())) {
    correctName = true;
    activeButton();
  } else {
    disabledButton();
  }
});

// Obteniendo el contenido validando que sea letras maximo de 15
$pleasures.on('input', function() {
  var PATTERNLASTNAME = /^([A-z ñáéíóú]{2,15})$/;
    correctPleasures = false;
  if (PATTERNLASTNAME.test($(this).val())) {
    correctPleasures = true;
     activeButton();
   } else {
     disabledButton();
   }
});

// Validando el email que contenga @ y .
$email.on('input', function() {
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
$password.on('input', function() {
  var PATTERNNAME = /^[a-z\d\u00C0-\u00ff]+$/i;
    correctPassword = false;
  if (PATTERNNAME.test($(this).val())) {
    correctPassword = true;
     activeButton();
  } else {
     disabledButton();
  }
});

// Validando que este maracado el checkbox
$checkbox.on('click', function(event) {
   correctCheckbox = false;
  if ($checkbox.prop('checked')) {
   correctCheckbox = true;
    activeButton();
  } else {
    disabledButton();
  }
});

// Funcion que comprueba que habilita el boton
 function activeButton() {
   if (correctName && correctPleasures && correctEmail && correctPassword && correctCheckbox) {
     alert('Registro completado! \nDale click en REGISTRARSE y ya puedes INICIAR SESIÓN');
     location.href = "../index.html";
    $submit.removeAttr('disabled');
  }
}
  // Funcion que deshabilita el boton
 function disabledButton() {
   $submit.attr('disabled', 'disabled');
 }

});
