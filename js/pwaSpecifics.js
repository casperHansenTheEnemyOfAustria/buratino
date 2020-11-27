let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
//   prevents the top thingy from appearing
  e.preventDefault();
  
  deferredPrompt = e;
//   promotes installing the pwa
  showInstallPromotion();
});