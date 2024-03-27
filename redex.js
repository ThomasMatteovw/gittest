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
        $("#resultvoornaam").html("correct");
      } else {
        $("#resultvoornaam").html("Vul een voornaam in");
      }
    });

    $("#button").click(function() {
      let achternaam = $("#achternaam").val();
      let pattern = /^[a-z A-Z]+$/;
      if(pattern.test(achternaam)) {
        $("#resultachternaam").html("correct");
      } else {
        $("#resultachternaam").html("Vul een achternaam in");
      }
    });

    $("#button").click(function() {
      let adres = $("#adres").val();
      let pattern = /^([a-z A-Z]+[0-9]+)$/;
      if(pattern.test(adres)) {
        $("#resultadres").html("correct");
      } else {
        $("#resultadres").html("Vul een adres in");
      }
    });

    $("#button").click(function() {
      let woonplaats = $("#woonplaats").val();
      let pattern = /^[a-z A-Z]+$/;
      if(pattern.test(woonplaats)) {
        $("#resultwoonplaats").html("correct");
      } else {
        $("#resultwoonplaats").html("Vul een woonplaats in");
      }
    });

    $("#button").click(function() {
      let postcode = $("#postcode").val();
      let pattern = /^([0-9]+[a-z A-Z]+)$/;
      if(pattern.test(postcode)) {
        $("#resultpostcode").html("correct");
      } else {
        $("#resultpostcode").html("Vul een postcode in");
      }
    });

    $("#button").click(function() {
      let nationaliteit = $("#nationaliteit").val();
      let pattern = /^[a-z A-Z]+$/;
      if(pattern.test(nationaliteit)) {
        $("#resultnationaliteit").html("correct");
      } else {
        $("#resultnationaliteit").html("Vul een nationaliteit in");
      }
    });

    $("#button").click(function() {
      let beroep = $("#beroep").val();
      let pattern = /^[a-z A-Z]+$/;
      if(pattern.test(beroep)) {
        $("#resultberoep").html("correct");
      } else {
        $("#resultberoep").html("Vul een beroep in");
      }
    });
});
