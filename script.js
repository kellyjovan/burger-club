$(document).ready(function() {

  $('#signUp').click(function(){
    $('#myModal').modal('show');
    
    var name = $('#name').val();
    var email = $('#email').val();
    $('.modal-body').text("Hi, " + name + " thank you for signing up! We will send an email to " + email + "shortly");
  });
  $()

});