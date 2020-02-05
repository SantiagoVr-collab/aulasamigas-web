$(document).ready(function () {
  $("#slider input").on('change', function () {
    var selvalue = $("[type'radio']:checked").val();
    $("#selvalue").val($("[type='radio']:checked").val());
  });

});
