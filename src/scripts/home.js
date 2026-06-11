// Cherry blossom tree grows on page load
window.addEventListener('load', function () {
  const container = document.getElementById('cherryTree');
  const blossoms = document.querySelector('.blossom-cluster');

  // Step 1: fade in container (tree trunk)
  setTimeout(() => {
    container.style.transition = 'opacity 1.2s ease';
    container.style.opacity = '1';
  }, 300);

  // Step 2: reveal blossoms
  setTimeout(() => {
    if (blossoms) blossoms.style.opacity = '1';
  }, 1400);

  // Step 3: start falling petals
  setTimeout(() => {
    spawnPetals();
  }, 1800);
});

function spawnPetals() {
  const container = document.getElementById('petalsContainer');
  const colors = ['#ffb7c5', '#ffc8d3', '#ff9db0', '#ffd8e0', '#ffaec0'];

  for (let i = 0; i < 18; i++) {
    createPetal(container, colors, i * 600);
  }
}

function createPetal(container, colors, delay) {
  const petal = document.createElement('div');
  petal.className = 'petal';

  const size = 7 + Math.random() * 7;
  const leftStart = Math.random() * 30; // petals fall near the left tree
  const duration = 5 + Math.random() * 6;
  const color = colors[Math.floor(Math.random() * colors.length)];

  petal.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${leftStart}vw;
    background: ${color};
    animation-duration: ${duration}s;
    animation-delay: ${delay}ms;
    border-radius: 50% 0 50% 0;
  `;

  container.appendChild(petal);

  // Re-spawn when animation ends
  petal.addEventListener('animationiteration', () => {
    petal.style.left = Math.random() * 30 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 6) + 's';
  });
}
