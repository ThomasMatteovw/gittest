$(document).ready( function () {
  $("#test").click(function() {
    let testwaarde = $("#testwaarde").val();
    let pattern = /^[a-z]+$/;
    if(pattern.test(testwaarde)) {
      $("#result").html("Waar");
    } else {
      $("#result").html("Onwaar");
    }
  })
});
