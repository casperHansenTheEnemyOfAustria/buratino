var start = document.getElementById("start")
var light = document.getElementById("light")


otherSite = false
// shows lights site
function showLight(){
    light.classList.toggle("show")
    otherSite = true
}
// hides start thing if other site is present
if (otherSite == true){
    start.className("hide");
    
}

light.addEventListener(showLight(),click)

// need to add curtain upp animation