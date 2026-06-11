window.addEventListener('load', spawnPetals);

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
  const leftStart = Math.random() * 100;
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

  petal.addEventListener('animationiteration', () => {
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 6) + 's';
  });
}
