const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollIndicator.style.opacity = '0';
    scrollIndicator.style.transition = 'opacity 0.3s ease';
  } else {
    scrollIndicator.style.opacity = '0.8';
  }
}); 