var targetElement1 = document.getElementById("bod");

var targetElement2 = document.getElementById("curtain-grid");

var y1 = 0
var y2 = 0
$("body").on("touchstart", function(e) {
    y1 = e.pageY
});

// doesnt work but is supposed to i guess take the two y coords form when user starts/extends
// touch and them if theyre different initiate the animation
$("body").on("touchend", function(e) {
    y2 = e.pageY;
});

if(y1 < y2){
    targetElement1.addClass("roll-down")
    targetElement2.addClass("title transition")
}