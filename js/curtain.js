// This function is responsible for triggering the animation for the curtain rolling down, and the animation for how the tiles fade in.
function curtainDown() {
    var targetElement = document.getElementById("curtain");
    targetElement.className = "roll-down";
    var targetElement = document.getElementById("curtain-grid");
    targetElement.className = "tile-transition";
    
  }

// This function is responsible for changing the text of the long button, from "START" to "TRYCK HÄR FÖR WIFI".
function wifiSwitch() {
  document.getElementById("long-button-text").innerHTML = "TRYCK HÄR FÖR WIFI";
}