$(document).ready(function() {

  $('#signUp').click(function(){
    $('#myModal').modal('show');
    
    var name = $('#name').val();
    var email = $('#email').val();
    $('.modal-body').text("Hi, " + name + " thank you for signing up! We will send an email to " + email + "shortly");
  });
 
  $(".socialIcon").hover(function(){
    $(this).find('img').animate({
        height: "25px",
        width: "25px"
    });
  }, function(){
    $(this).find('img').animate({
        height: "30px",
        width: "30px"
    })
  });

});