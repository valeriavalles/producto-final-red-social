/* ------------ FUNCIONALIDAD PARA POSTEAR ---------*/
$(document).ready(function() {
  $('#btn-publicar').attr('disabled', true);
  $('#textarea-publicar').keyup(function() {
    $('#btn-publicar').attr('disabled', false);
    var rest = '';
    var letters = $('#textarea-publicar').val().length;
  
  });

  $('#btn-publicar').click(function() {
    if ($('#textarea-publicar').val().length > 0) {
      var storyDiv = $('<div>', {'class': 'stylo-cont' });
      var container = $('<p>');
     
      var text = $('#textarea-publicar').val();
      storyDiv.text(text);
	  storyDiv.append(container);
	  $('#content-post').append(storyDiv);
      $('#textarea-publicar').val('');
      $('#btn-publicar').attr('disabled', true);
      $('#textarea-publicar').css('initial');
    } else {
      $('#btn-publicar').attr('disabled', true);
    }
  });
});

/* -----------  Fin FUNCIONALIDAD PARA POSTEAR---------*/

   