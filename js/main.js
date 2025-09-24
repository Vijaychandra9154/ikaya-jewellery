// js/main.js - small helper for hero slideshow and mobile nav (if needed)
document.addEventListener('DOMContentLoaded', function(){
  // Simple hero slideshow: cycles images with class .hero-slide
  const slides = document.querySelectorAll('.hero-slide');
  if(slides && slides.length>1){
    let idx = 0;
    setInterval(()=>{
      slides.forEach(s=> s.style.display='none');
      idx = (idx+1) % slides.length;
      slides[idx].style.display = 'block';
    }, 3500);
  }
  // Mobile nav toggle (if present)
  const mbtn = document.getElementById('mobileToggle');
  if(mbtn){
    mbtn.addEventListener('click', ()=>{
      const nav = document.getElementById('mobileNav');
      if(nav) nav.classList.toggle('open');
    });
  }
});
