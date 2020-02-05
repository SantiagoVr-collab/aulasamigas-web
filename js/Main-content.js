$(document).ready(function () {
  $('#sradio0').click(function () {
    if ($('#sradio0').is(':checked')) {
      $('#main-information').css('display', 'block');
    }else {
      $('#main-information').css('display', 'none');
    }


  })





      $('#sradio1').click(function () {
        if ($(this).is(':checked')) {

          $('.contenedor-maestros').css('display', 'block');



        }else {

          $('.contenedor-maestros').css('display', 'none');

        }


      })

      });

/*
$('#sradio1').on('change', function wwhm() {
  var container = $('#contenedor-maestros');
  var input-maestros = $('#sradio1');

  if (sradio1.checked == 0) {
    alert('por fin funciono');
  }

})*/
