function curtainDown() {
    var targetElement = document.getElementById("curtain");
    targetElement.className = "roll-down";
    var targetElement = document.getElementById("curtain-grid");
    targetElement.className = "tile-transition";
    
  }

function wifiSwitch() {
  document.getElementById("long-button-text").innerHTML = "TRYCK HÄR FÖR WIFI";
}