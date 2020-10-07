// this program is used to detect a downward swipe on the curtain and to then 
// activate the curtain animation

// sets dead zone in css-pixels for the swipe
// hides curtain grid because of bug where items were clickable even though they were invisible
var sens = 0
// initial hide of later items top items due to bug
document.getElementById("curtain-grid").classList.add("hide")

// defines addin a margin to long button for consistency
function longButtonTopMarginAdd(){
    document.querySelector(".long-button").classList.add("longButtonTopmargin")
}
function longButtonTopMarginRemove(){
    document.querySelector(".long-button").classList.remove("longButtonTopmargin")
}

// adds margin
longButtonTopMarginAdd()

// defines what transitions to use
function curtainDown() {
    var targetElement = document.getElementById("curtain");
    targetElement.className = "roll-down";
    var targetElement = document.getElementById("curtain-grid");
    targetElement.className = "tile-transition";   
    targetElement.classList.remove("hide")
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
        
        
    });

    var endCoord = {}
    curtain.addEventListener("touchmove", function(e) {
        endCoord = e.targetTouches[0];
    });
    
    curtain.addEventListener("touchend", function(e) {
        y2 = endCoord.pageY;
        
        if(y2-y1 > sens){ 
            // removes margin
            longButtonTopMarginRemove()
            curtainDown();
            wifiSwitch();
        }
    });





        // resets all to their og state
        function reset(){
            document.querySelector(".security").classList.add("hide")
            document.querySelector(".sound").classList.add("hide")
            document.querySelector(".light").classList.add("hide")
            document.querySelector(".furniture").classList.add("hide")
            document.querySelector(".cleaning").classList.add("hide")
            document.querySelector(".breakers").classList.add("hide")
            document.querySelector(".addons").classList.add("hide")
            document.querySelector(".contact").classList.add("hide")
        }

        function anyText(word) {
            // adds title text for every different site
            document.getElementById("long-button-text").innerHTML = word;
        }


        reset()
        function buttonAction(button){
            if(button == 'security'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".security").classList.remove("hide")
                // destransitions grid so that it become gone
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                // same with curtain
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("STÄD")      
            }
            if(button == 'sound'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".sound").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("LJUD")    
            }
            if(button == 'light'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".light").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("LJUS")
            }
            if(button == 'furniture'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".furniture").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("MÖBLER")    
            }
            if(button == 'cleaning'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".cleaning").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("STÄD")    
            }
            if(button == 'breakers'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".breakers").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("SÄKRINGAR")    
            }
            if(button == 'addons'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".addons").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("TILLÄGG")    
            }
            if(button == 'contact'){
                reset();
                // hides start image after btn press
                document.querySelector(".start").classList.add("hide")
                // takes away hide properties for whatever class i choose
                document.querySelector(".contact").classList.remove("hide")
                document.getElementById("curtain-grid").classList.add("tile-detransition")
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("KONTAKT")    
            }
        };


