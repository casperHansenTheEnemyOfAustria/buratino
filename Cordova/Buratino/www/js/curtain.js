// This function is responsible for triggering the animation for the curtain rolling down, 
// and the animation for how the tiles fade in.
// This will only work on desktop once media queries have been set
  function curtainAction() {
    longButtonTopMarginRemove()
    document.getElementById("curtain-grid").classList.remove("tile-detransition")
    console.log("pressend")
    document.getElementById("curtain").classList.remove("roll-up")
    document.getElementById("slide-box").classList.add("hide")
    // added to show the wifi overlay when it nmeeds to be able to show
    wifiOvl.classList.remove("hide")
    bringBack()
    curtainDown();
    wifiSwitch() 
  }

  // This function is responsible for changing the text of the long button, from "START" to "TRYCK HÄR FÖR WIFI".
  function wifiSwitch() {
    document.getElementById("long-button-text").innerHTML = "TRYCK HÄR FÖR WIFI";
  }


  // defines what transitions to use
  function curtainDown() {
    var targetElement = document.getElementById("curtain");
    targetElement.className = "roll-down";
    var targetElement = document.getElementById("curtain-grid");
    targetElement.className = "tile-transition";   
    targetElement.classList.remove("hide")
    console.log("showing")
  }

  function longButtonTopMarginRemove(){
    document.querySelector(".long-button").classList.remove("longButtonTopmargin")
  }

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
  // Changes the text in the long-button, as well as giving it
  // the btn1 class for the purpose of an overlay.
  function wifiSwitch() {
  var targetElement = document.getElementById("long-button-text");
  targetElement.innerHTML = "TRYCK HÄR FÖR WIFI";
  var targetElement = document.querySelector(".long-button");
  targetElement.classList.add("btn1")
  }
