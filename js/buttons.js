var start = document.getElementsByClassName("start");
var light = document.getElementsByClassName("light");
var lightButton = document.getElementsByClassName("lightButton")
var buttons = document.getElementsByClassName("buttons")
var pages = document.getElementsByClassName("pages")
var otherSite = false;
var lightSite = false;
var soundSite = false;
var secSite = false;
var cleanSite = false;
var furnSite = false;


function curtainUp(){}


function buttonPress(){
    // shows lights site
    if (lightSite == true){
        light.classList.add("show");
        otherSite = true;
    }

}
// makes so that light will be true
function showLight(){
    lightSite = true
    buttonPress()
   }
   console.log(lightSite)


// hides start thing if other site is present
if (otherSite == true){
    start.className("hide");   
}

lightButton.addEventListener("click", showLight())


// need to add curtain upp animation