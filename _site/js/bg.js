// JavaScript Document
//bg follow mouse with ease
var bg = $("body");
    
    
bg.mousemove(function(event) {
    var xPos = event.pageX;
  $("#log").text(xPos);
    TweenLite.to(bg, .5, {css:{backgroundPosition:xPos + "px"}});
});