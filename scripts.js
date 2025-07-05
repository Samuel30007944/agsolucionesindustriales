const secciones = document.querySelectorAll('.seccion');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

secciones.forEach(sec => observer.observe(sec));
