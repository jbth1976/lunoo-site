// Action Svelte : effet parallaxe vertical lié au scroll.
// Usage : <div use:parallax={-0.05}>
export function parallax(node, speed = 0) {
  let s = speed;
  const apply = () => {
    const y = window.scrollY || window.pageYOffset || 0;
    node.style.transform = `translateY(${(y * s).toFixed(1)}px)`;
  };
  window.addEventListener('scroll', apply, { passive: true });
  apply();
  return {
    update(v) { s = v; apply(); },
    destroy() { window.removeEventListener('scroll', apply); },
  };
}

// Action Svelte : révèle l'élément quand il entre dans le viewport.
// Usage : <div use:reveal>
export function reveal(node) {
  node.setAttribute('data-reveal', '');
  if (!('IntersectionObserver' in window)) {
    node.classList.add('in');
    return {};
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  io.observe(node);
  return { destroy() { io.disconnect(); } };
}
