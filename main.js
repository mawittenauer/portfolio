$(document).ready(function() {
  $('#menu-out').on("click", function() {
    $('body').animate({
      left: '150px'
    }, 300);
  });
  
  $('#menu-in').on("click", function() {
    $('body').animate({
      left: '0px'
    }, 300);
  });
});
