
var larmDesc = document.querySelector(".larmDesc");

function resetOvls(){
    // hides all overlays
    var everyOvl = document.querySelector(".overlay");
    everyOvl.classList.add("hide");
    console.log("hiding OVL")
};

function showOvl(which){
    if(which == "larmDesc"){
        resetOvls();
        // shows the specific overlay depending on what you input into the function
        larmDesc.classList.remove("hide")
        console.log("showing OVL")
    }
}


// wont recognize click events might have to do with z values...
function clicking(){
    // debug tool
    console.log("button clicked")
}
resetOvls()
document.querySelector(".larmBtn1").addEventListener("click", function(){
    clicking()
})
document.querySelector(".larmBtn1").addEventListener("click", function(){
    showOvl("larmDesc")
})