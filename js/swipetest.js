var targetElement1 = document.getElementById("curtain");

var targetElement2 = document.getElementById("curtain-grid");


// looks for y coord of cursor at click and compares to cursor coord at release

var y1 = 0
var y2 = 0

// for desktop
    // targetElement1.addEventListener("mousedown", function(e) {
    //     y1 = e.pageY
    //     console.log(y1);
        
    // });

    
    // targetElement1.addEventListener("mouseup", function(e) {
    //     y2 = e.pageY;
    //     console.log(y2);
    //     if(y1 < y2){
    //         targetElement1.className = "roll-down"
    //         targetElement2.className = "title-transition"
            
    //     }
    // });

// for phones
    targetElement1.addEventListener("touchstart", function(e) {
        y1 = e.touches[0].pageY
        console.log(y1);
        
    });

    var endCoord = {}
    targetElement1.addEventListener("touchmove", function(e) {
        endCoord = e.targetTouches[0];
    });
    
    targetElement1.addEventListener("touchend", function(e) {
        y2 = endCoord.pageY;
        console.log(e);
        if(y2 > y1){
            targetElement1.className = "roll-down"
            targetElement2.className = "title-transition"
            
        }
    });


    




