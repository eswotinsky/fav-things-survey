$(document).ready(function() {
  $("form#favThings").submit(function(event) {
    var colorInput = $("input#colorAnswer").val();
    var movieInput = $("input#movieAnswer").val();
    var iceCreamInput = $("input#iceCreamAnswer").val();

    var favArray = [colorInput, movieInput, iceCreamInput];
    $("#colorResults").text(favArray[0]);
    $("#movieResults").text(favArray[1]);
    $("#iceCreamResults").text(favArray[2]);

    event.preventDefault();
  });
});
