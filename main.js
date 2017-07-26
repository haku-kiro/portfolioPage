// jquery:
//add some hide functionallity
$(document).ready(function(){
    $(".c").hide();
    // document.getElementById("navBar").setAttribute("style", "display:none"); //just making the elem invis
    $(".content").css("width","100%");
    
//when you click the menu, shows the side bar    
  $(".menu").click(function(){
    //clicking on the nav makes the menu appear
    $(".content").css("width", "85%");
    $(".c").show();
    $(".menu").hide();
  });

  $(".content").click(function(){
    //clicking on content makes the menu disapear
    $(".c").hide();
    $(".content").css("width", "100%");
    $(".menu").show();
  });
});

