// Scroll reveal
const _observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); _observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => _observer.observe(el));
});

function openContact() {
  document.getElementById('contactModal').classList.add('active');
}

function closeContact(e) {
  const modal = document.getElementById('contactModal');
  if (!e || e.target === modal) {
    modal.classList.remove('active');
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeContact();
});
