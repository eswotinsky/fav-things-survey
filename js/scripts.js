$(document).ready(function() {
  $("form#favThings").submit(function(event) {
    var colorInput = $("input#colorAnswer").val();
    var movieInput = $("input#movieAnswer").val();
    var iceCreamInput = $("input#iceCreamAnswer").val();
    var carInput = $("input#carAnswer").val();

    var favArray = [colorInput, movieInput, iceCreamInput, carInput];
    var shortArray = [];

    shortArray.push(favArray[0], favArray[1], favArray[2]);

    $("#colorResults").text(shortArray[0]);
    $("#movieResults").text(shortArray[1]);
    $("#iceCreamResults").text(shortArray[2]);

    event.preventDefault();
  });
});
