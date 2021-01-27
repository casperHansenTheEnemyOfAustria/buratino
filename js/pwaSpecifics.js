let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
//   prevents the top thingy from appearing
  
  deferredPrompt = e;
//   promotes installing the pwa
  showInstallPromotion();
});