$(document).ready(function() {
  $('#menu-out').on("click", function() {
    $('body').animate({
      left: '100px'
    }, 100);
  });
  
  $('#menu-in').on("click", function() {
    $('body').animate({
      left: '0px'
    }, 100)
  });
});
