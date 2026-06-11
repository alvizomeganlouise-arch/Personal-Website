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
