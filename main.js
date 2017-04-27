console.log("Test");

function test() {
  console.log("You clicked the menu button"); //traditional js
}
// jquery:

//add some hide functionallity

$(document).ready(function(){
    $("nav").hide();
    $(".content").css("width","100%");
  $(".nav").click(function(){
    //clicking on the nav makes the menu appear
    $(".content").css("width", "85%");
    $("nav").show();
    $(".nav").hide();
  });

  $(".content").click(function(){
    //clicking on content makes the menu disapear
    $("nav").hide();
    $(".content").css("width", "100%");
    $(".nav").show();
  });

});
