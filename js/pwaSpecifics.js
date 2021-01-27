let deferredPrompt;
var user = detect.parse(navigator.userAgent);
var installPrompt = document.querySelector(".install-prompt");
var background = document.querySelector(".promptBackground");
var x = document.querySelector(".promptClose");
var start = document.querySelector(".start");

window.addEventListener('beforeinstallprompt', (e) => {
//   prevents the top thingy from appearing
  
  deferredPrompt = e;
//   promotes installing the pwa
  

  showInstallPromotion();
});
resetOvls
start.classList.remove("bring-forward");
// checks for desktop
if(user.os.name != "Windows 7" || user.os.name != "Windows 8" || user.os.name != "Windows 10" || user.os.name != "Mac OS"){
  console.log("this is not a desktop");
  // checks for apple
  if(user.browser.family == "Mobile Safari" || user.browser.family == "Chrome Mobile iOS" ){
    console.log("detected apple");
    // checks for not already installed
    if(!(( "standalone" in window.navigator) && window.navigator.standalone)){
      console.log("detected not installed");   
      // shows the installprompt overlay
      showOvl("1");
      // adjusts z index
      start.classList.add("bring-forward");

      // for a timed closing animation
      // setTimeout(() => {
      //   // brings back to normal
      //   start.classList.remove("bring-forward")
      //   resetOvls()
      // }, 5000);

    }
  }
}

x.addEventListener("click", function(){
  start.classList.remove("bring-forward")
  resetOvls();
});
background.addEventListener("click", function(){
  start.classList.remove("bring-forward")
  resetOvls();
});