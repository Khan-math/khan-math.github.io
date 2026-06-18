/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* ── MATH CANVAS BACKGROUND (static) ── */
(function() {
  const canvas = document.getElementById('math-canvas');
  const ctx = canvas.getContext('2d');

  const symbols = [
    'π', 'Σ', '∫', '√', '∞', 'Δ', 'θ', 'α', 'β', 'λ', 'μ', 'φ',
    'sin', 'cos', 'tan', 'log', 'lim', 'dx', 'dy', 'f(x)', 'x²', 'y³',
    'a²+b²=c²', 'eˣ', 'n!', '∂', '∇', '≈', '≠', '±',
    'x→∞', 'P(A|B)', '∀x∈ℝ', '∃y', 'det(A)', 'sin²+cos²=1'
  ];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function draw() {
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = document.documentElement.scrollHeight;
    const count = Math.floor((W * H) / 14000);
    ctx.fillStyle = '#0d6620';
    for (let i = 0; i < count; i++) {
      const size = rand(14, 32);
      ctx.globalAlpha = rand(0.35, 0.85);
      ctx.font = `300 ${size}px Inter, sans-serif`;
      ctx.fillText(
        symbols[Math.floor(Math.random() * symbols.length)],
        rand(0, W),
        rand(0, H)
      );
    }
    ctx.globalAlpha = 1;
  }

  // draw once on load, redraw on resize
  window.addEventListener('load', draw);
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(draw, 200);
  });
  draw();
})();

/* ── MOBILE MENU ── */
var burger = document.getElementById('nav-burger');
var mobileMenu = document.getElementById('mobile-menu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      burger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}
