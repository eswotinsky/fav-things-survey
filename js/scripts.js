$(document).ready(function() {
  $("form#favThings").submit(function(event) {
    var colorInput = $("input#colorAnswer").val();
    var movieInput = $("input#movieAnswer").val();
    console.log(colorInput, movieInput);
    event.preventDefault();
  });
});
