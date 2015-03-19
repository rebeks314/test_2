$(document).ready(function() {

    $( ".btn" ).click(function() {
  $( ".div1" ).animate({
    opacity: 0.50,
    left: "+=100",
    height: "toggle"
  }, 5000, function() {
    
  });
});

});