// Toggle overlay functionality
(function toggleOverlay() {
  console.log('Overlay toggle loaded on page');
  document.addEventListener('keydown', (event) => {
    
    if(event.ctrlKey && event.altKey && event.key === 'u') {
      const overlay = document.querySelector('.overlay');
      if(overlay) {
        overlay.classList.toggle('display-none');
      }
      
    }
  });
})();