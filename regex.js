function show(){
  $("#age").html(age());
}

function age(){
  var date = new Date ($("#geboortedatum").val());
  console.log (date.getFullYear());
  var today = new Date();

  if(today.getMonth()>date.getMonth()){
    return(today.getFullYear()-date.getFullYear()-1);
  } else {
    return(today.getFullYear()-date.getFullYear());
    if(today.getMonth()==date.getMonth()){
      if(today.getDate()>date.getDate()){
        return(today.getFullYear()-date.getFullYear());
      } else {
        return(today.getFullYear()-date.getFullYear()-1);
      }
    }
  }
}
$(document).ready(function(){
    $(".Nederlands").click(function(){
      $("#div1").fadeIn();
      });

    $(".Engels").click(function(){
      $("#div2").fadeIn();
      });

    $(".heer").click(function(){
      $("input").css("background-color", "lightgreen");
      $("textarea").css("background-color", "lightgreen");
      $("button").css("background-color", "lightgreen");
      $("body").css("background-color", "green");
      });

    $(".mevrouw").click(function(){
      $("input").css("background-color", "pink");
      $("textarea").css("background-color", "pink");
      $("button").css("background-color", "pink");
      $("body").css("background-color", "purple");
      });

    $("#button").click(function() {
        let voornaam = $("#voornaam").val();
        let pattern = /^[a-z A-Z]+$/;
          if(pattern.test(voornaam)) {
            $("#voornaamresult").html("Correct");
          } else {
            $("#voornaamresult").html("Incorrect");
          }
      });

      $("#button").click(function() {
          let achternaam = $("#achternaam").val();
          let pattern = /^[a-z A-Z]+$/;
            if(pattern.test(achternaam)) {
              $("#achternaamresult").html("Correct");
            } else {
              $("#achternaamresult").html("Incorrect");
            }
        });

    $("#button").click(function() {
      let adres = $("#adres").val();
      let pattern = /^([a-z A-Z]+[0-9]+)$/;
      if(pattern.test(adres)) {
        $("#adresresult").html("Correct");
      } else {
        $("#adresresult").html("Incorrect");
      }
    });

    $("#button").click(function() {
        let woonplaats = $("#woonplaats").val();
        let pattern = /^[a-z A-Z]+$/;
          if(pattern.test(woonplaats)) {
            $("#woonplaatsresult").html("Correct");
          } else {
            $("#woonplaatsresult").html("Incorrect");
          }
      });

    $("#button").click(function() {
      let postcode = $("#postcode").val();
      let pattern = /^([0-9]+[a-z A-Z]+)$/;
      if(pattern.test(postcode)) {
        $("#postcoderesult").html("Correct");
      } else {
        $("#postcoderesult").html("Incorrect");
      }
    });

    $("#button").click(function() {
        let nationaliteit = $("#nationaliteit").val();
        let pattern = /^[a-z A-Z]+$/;
          if(pattern.test(nationaliteit)) {
            $("#nationaliteitresult").html("Correct");
          } else {
            $("#nationaliteitresult").html("Incorrect");
          }
      });

      $("#button").click(function() {
          let beroep = $("#beroep").val();
          let pattern = /^[a-z A-Z]+$/;
            if(pattern.test(beroep)) {
              $("#beroepresult").html("Correct");
            } else {
              $("#beroepresult").html("Incorrect");
            }
        });
  });
