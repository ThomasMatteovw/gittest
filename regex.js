function show(){
  $("#age").html(age());
  $("#age").fadeIn(3000);
}

  function age(){
    var date = new Date ($("#geboortedatum").val());
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
      $("#div1").fadeIn(2000);
    });

    $(".Engels").click(function(){
      $("#div2").fadeIn(2000);
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
        let naam = $("#naam").val();
        let pattern = /^[a-z A-Z]+$/;
          if(pattern.test(voornaam)) {
            $("#naamresult").html("Correct");
          } else {
            alert("Something is wrong with first name");
          }
    });

    $("#button").click(function() {
      let adres = $("#adres").val();
      let pattern = /^([a-z A-Z]+[0-9]+)$/;
      if(pattern.test(adres)) {
        $("#adresresult").html("Correct");
      } else {
        alert("Something is wrong with address");
      }
    });

    $("#button").click(function() {
      let woonplaats = $("#woonplaats").val();
      let pattern = /^[a-z A-Z]+$/;
        if(pattern.test(woonplaats)) {
          $("#woonplaatsresult").html("Correct");
        } else {
          alert("Something is wrong with residence");
        }
    });

    $("#button").click(function() {
      let postcode = $("#postcode").val();
      let pattern = /^([0-9]+[a-z A-Z]+)$/;
        if(pattern.test(postcode)) {
          $("#postcoderesult").html("Correct");
        } else {
          alert("Something is wrong with your zipcode");
        }
    });

    $("#button").click(function() {
        let nationaliteit = $("#nationaliteit").val();
        let pattern = /^[a-z A-Z]+$/;
          if(pattern.test(nationaliteit)) {
            $("#nationaliteitresult").html("Correct");
          } else {
            alert("Something is wrong with adres with Nationality");
          }
      });

      $("#button").click(function() {
        let beroep = $("#beroep").val();
        let pattern = /^[a-z A-Z]+$/;
          if(pattern.test(beroep)) {
            $("#beroepresult").html("Correct");
          } else {
            alert("Something is wrong with adres your occupation");
          }
      });
  });
