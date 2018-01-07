var tiposcomida = []; 
$.each(data, function(i,item) {
  tiposcomida.push(i);
  console.log(data[i]);
  // $.each(data.i, function(j,item) {
  //   tiposcomida.push(i);
  // });
});
console.log(tiposcomida);



$(document).ready(function() {

  

  /* ------------------EVENTO MOUSEOVER----------------*/
  $('.men').on('mouseover', function() {
    var valorAtrr = $(this).attr('data-imag');
    var texto = $('#' + valorAtrr).addClass('hola');
    //  $('.men').append(texto);
    console.log(valorAtrr);
  });
  $('.men').on('click', function() {
    
  });

  /* -----------FUNCION PARA BUSCAR TIPO DE COMIDA--------*/
  $('#search').on('click', function() {
    var area = $('.buscar');
    event.preventDefault();
   
    switch (true) {
    case area.val() === 'comida peruana':
      mostrarImag();
      break;
    case area.val() === 'comida italiana':
      $('.men')
        .attr('src', '../assets/images/dos.jpg');
      // mostrarImag(); 
      break;
    case area.val() === 'comida china':
      $('.men')
        .attr('src', '../assets/images/china.jpg');
      // mostrarImag(); 
      break;
    case area.val() === 'comida cubana':
      $('.men')
        .attr('src', '../assets/images/cubana.jpg');
      // mostrarImag(); 
      break;
    case area.val() === 'comida mexicana':
      $('.men')
        .attr('src', '../assets/images/tres.jpg');
      // mostrarImag();
      break;
    default:
      alert('Disculpe aun estoy aprendiendo!');
    }
  });

  
  // probando con funciones //
  function mostrarImag() {
    $('.men')
      .attr('src', '../assets/images/ceviche.jpg')
      .addClass('img-thumbnail');
  }
});

