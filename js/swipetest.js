// this program is used to detect a downward swipe on the curtain and to then 
// activate the curtain animation

// sets dead zone in css-pixels for the swipe
var sens = 0



// defines what transitions to use
function curtainDown() {
    var targetElement = document.getElementById("curtain");
    targetElement.className = "roll-down";
    var targetElement = document.getElementById("curtain-grid");
    targetElement.className = "tile-transition";   
  }

function wifiSwitch() {
  document.getElementById("long-button-text").innerHTML = "TRYCK HÄR FÖR WIFI";
}

var curtain = document.getElementById("curtain");

var curtainGrid = document.getElementById("curtain-grid");




// looks for y coord of cursor at click and compares to cursor coord at release

var y1 = 0
var y2 = 0

// for desktop
    // curtain.addEventListener("mousedown", function(e) {
    //     y1 = e.pageY
    //     console.log(y1);
        
    // });

    
    // curtain.addEventListener("mouseup", function(e) {
    //     y2 = e.pageY;
    //     console.log(y2);
    //     if(y1 < y2){
    //         curtainDown();
    //         wifiSwitch() 
            
    //     }
    // });

// for phones
    curtain.addEventListener("touchstart", function(e) {
        y1 = e.touches[0].pageY
        console.log(y1);
        
    });

    var endCoord = {}
    curtain.addEventListener("touchmove", function(e) {
        endCoord = e.targetTouches[0];
    });
    
    curtain.addEventListener("touchend", function(e) {
        y2 = endCoord.pageY;
        console.log(e);
        if(y2-y1 > sens){
            curtainDown();
            wifiSwitch()   
        }
    });


    




