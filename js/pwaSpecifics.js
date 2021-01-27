let deferredPrompt;
var user = detect.parse(navigator.userAgent);
window.addEventListener('beforeinstallprompt', (e) => {
//   prevents the top thingy from appearing
  
  deferredPrompt = e;
//   promotes installing the pwa
  

  showInstallPromotion();
});
if(user.os.name != "Windows 7" || user.os.name != "Windows 8" || user.os.name != "Windows 10" || user.os.name != "Mac OS"){
  console.log("this is not a desktop")
  if(user.browser.family == "Mobile Safari" || user.browser.family == "Chrome Mobile iOS" ){
    console.log("detected apple")
    if(!(( "standalone" in window.navigator) && window.navigator.standalone)){
      console.log("detected not installed")   
    }
  }
}