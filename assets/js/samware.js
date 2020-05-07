  AOS.init();

$(document).ready(function(){
  $(".bhidesec1").click(function(){
    $(".hidesec1").fadeToggle("fast");
  });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 120) {
    document.getElementById("navpad").style.padding = "0.5rem 2.5rem";
    document.getElementById("navpad").style.backgroundColor = "#ed1862";
    document.getElementById("logo").width = "45";
  } else {
    document.getElementById("navpad").style.padding = "3rem 2.5rem";
    document.getElementById("navpad").style.backgroundColor = "";
    document.getElementById("logo").width = "60";
  }
}