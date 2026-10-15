/* script.js – NovaSMP landing page interactions */

document.addEventListener('DOMContentLoaded', () => {
  // Copy server IP on click
  const ipEl = document.querySelector('.hero .ip');
  if (ipEl) {
    ipEl.addEventListener('click', () => {
      const ip = ipEl.textContent.trim();
      navigator.clipboard.writeText(ip).then(() => {
        const original = ipEl.textContent;
        ipEl.textContent = 'Copied!';
        setTimeout(() => {
          ipEl.textContent = original;
        }, 1500);
      });
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple reveal-on-scroll for feature cards
  const cards = document.querySelectorAll('.feature');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  }
});
