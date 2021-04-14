// this program is used to detect a downward swipe on the curtain and to then 
// activate the curtain animation
// might need to add event listener for a string to the curtain at some point

// todo: add video load at curtain down





// sets dead zone in css-pixels for the swipe
// hides curtain grid because of bug where items were clickable even though they were invisible
var sens = 10
var ovlBackgroundArray = document.querySelectorAll(".ovlBackground")
var wifiOvl = document.querySelector(".wifi")
var body = document.querySelector(".body")
// initial hide of later items top items due to bug
document.getElementById("slide-box").classList.remove("hide")
// resets the hitbox to show
document.getElementById("curtain-grid").classList.add("hide")

// defines addin a margin to long button for consistency
function longButtonTopMarginAdd(){
    // add styling for page descriptions
    document.querySelector(".long-button").classList.add("longButtonTopmargin")
    document.querySelector(".long-button").classList.add("long-button-hidden")
    document.querySelector(".long-button-text").classList.add("long-button-big-text")
}
function longButtonTopMarginRemove(){
    console.log("removing styling")
    document.querySelector(".long-button").classList.remove("longButtonTopmargin")
    document.querySelector(".long-button").classList.remove("long-button-hidden")
    document.querySelector(".long-button-text").classList.remove("long-button-big-text")
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
    console.log("showing")
  }

// Changes the text in the long-button, as well as giving it
// the btn1 class for the purpose of an overlay.
function wifiSwitch() {
console.log("wifi text change")
  var targetElement = document.querySelector(".long-button-text");
  targetElement.innerText = "TRYCK HÄR FÖR WIFI";
  var targetElement = document.querySelector(".long-button");
  targetElement.classList.add("btn1")
}

// makes a reset for everything at every curtain draw :D
function hidebg(){
    ovlBackgroundArray.forEach(element => {
        element.classList.add("hide")
    });
}
function resetOvls(){
    // hides all overlays
    var everyOvl = document.querySelector(".overlay");
    everyOvl.classList.add("hide");
    console.log("hiding OVL")
    hidebg()
};

// brings elements to foreground to make the buttons work
function bringForward(){
    document.querySelector(".security").classList.add("bring-forward")
    document.querySelector(".sound").classList.add("bring-forward")
    document.querySelector(".light").classList.add("bring-forward")
    document.querySelector(".furniture").classList.add("bring-forward")
    document.querySelector(".cleaning").classList.add("bring-forward")
    document.querySelector(".breakers").classList.add("bring-forward")
    document.querySelector(".addons").classList.add("bring-forward")
    document.querySelector(".contact").classList.add("bring-forward")
}
// brings elements to background to make it not look ugly
function bringBack(){
    document.querySelector(".security").classList.remove("bring-forward")
    document.querySelector(".sound").classList.remove("bring-forward")
    document.querySelector(".light").classList.remove("bring-forward")
    document.querySelector(".furniture").classList.remove("bring-forward")
    document.querySelector(".cleaning").classList.remove("bring-forward")
    document.querySelector(".breakers").classList.remove("bring-forward")
    document.querySelector(".addons").classList.remove("bring-forward")
    document.querySelector(".contact").classList.remove("bring-forward")
}

// i called this curtain but its actually the hitbox for the curtain
var curtain = document.getElementById("slide-box");
var curtainGrid = document.getElementById("curtain-grid");
var curtainEdge = document.querySelector(".curtainEdge")
var curtainString = document.querySelector(".curtain-string")
// looks for y coord of cursor at click and compares to cursor coord at release

var y1 = 0
var y2 = 0

// this is what makes all the nessicairy actions for a curtain move
function curtains(){
    // removes margin
    longButtonTopMarginRemove()
    // removing styling for the page texts
    console.log("removing styling")
    document.querySelector(".long-button").classList.remove("longButtonTopmargin")
    document.querySelector(".long-button").classList.remove("long-button-hidden")
    document.querySelector(".long-button-text").classList.remove("long-button-big-text")

    document.getElementById("curtain-grid").classList.remove("tile-detransition")
    console.log("pressend")
    document.getElementById("curtain").classList.remove("roll-up")
    document.getElementById("slide-box").classList.add("hide")
    // added to show the wifi overlay when it nmeeds to be able to show
    wifiOvl.classList.remove("hide")
    bringBack()
    curtainDown();
    wifiSwitch();
    window.scrollTo(0,0); 
    body.classList.add("overflow")
}

// added clic kfor user acessibility
curtain.addEventListener("click", curtains)

function desktopTouch(){
    curtain.addEventListener("mousedown", function(e) {
        y1 = e.pageY
        console.log(y1);
        
    });

    
    curtain.addEventListener("mouseup", function(e) {
        y2 = e.pageY;
        console.log(y2);
        if(y1 < y2){
            curtains()
        }
    });
};
// for phones
function phoneTouch(){
    i = 0
    curtain.addEventListener("touchstart", function(e) {
        y1 = e.touches[0].pageY
        console.log("pressbegin")
        console.log(y1)   
            
            
    });

    var endCoord = {}
    curtain.addEventListener("touchmove", function(e) {
        endCoord = e.targetTouches[0];
    });
    y2 = 0  
    curtain.addEventListener("touchend", function(e) {
        y2 = endCoord.pageY;
        console.log(y2)    
        if(y2-y1 > sens){ 
            curtains()
            // i had to make y zer0 a bunch of times but it works now donw worry about it :D
            y2 = 0
            endCoord = 0
        }
    });
    endCoord = 0
    i += 1
}

desktopTouch()
phoneTouch()


// Here comes the functionality for buttons and different pages
// its pretty straight forward and basically just hides every element and thne shows one for each different input from buttons
// id recommend using ctrl + h for any changes as the document is pretty expansive
        // resets all buttons to their og state
        function reset(){
            document.querySelector(".security").classList.add("hide")
            document.querySelector(".sound").classList.add("hide")
            document.querySelector(".light").classList.add("hide")
            document.querySelector(".furniture").classList.add("hide")
            document.querySelector(".cleaning").classList.add("hide")
            document.querySelector(".breakers").classList.add("hide")
            document.querySelector(".addons").classList.add("hide")
            document.querySelector(".contact").classList.add("hide")
            wifiOvl.classList.add("hide")
            
            // removes roll down when curtain is rolled up
            body.classList.remove("overflow")
            var targetElement = document.getElementById("curtain");
            targetElement.classList.remove("roll-down")
            var targetElement = document.getElementById("curtain-grid");
            targetElement.classList.remove("tile-transition")
            console.log("transit")
            resetOvls()
        }

        function anyText(word) {
            // adds title text for every different site
            document.querySelector(".long-button-text").innerHTML = word;
            // here im also showing the slide box cause i needed it to run for every button click in the grid dont judge
            document.getElementById("slide-box").classList.remove("hide")
            // added to hide the wifi overlay when it shouldnt show
            wifiOvl.classList.add("hide")
        }

        // runs a reset before everything begins
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
                console.log("detran")
                // same with curtain
                document.getElementById("curtain").classList.add("roll-up")
                // hides curtain grid because of bug where items were clickable even though they were invisible
                document.getElementById("curtain-grid").classList.add("hide")
                longButtonTopMarginAdd()
                anyText("LÅS & LARM")      
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
            phoneTouch()
            setTimeout(function(){
                // brings element into z axis foreground after 500 msto make it work with event listeners :D
                bringForward()
            }, 500); 
        };
// this was the only solution my brain could come up with but i mean it works
// play with different orders of the different sub-functions to maybe make the animation smoother