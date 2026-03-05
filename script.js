const openBtn = document.getElementById('openLetter');
const cover = document.getElementById('cover');
const content = document.getElementById('content');

let heartsIntervalStarted = false;

openBtn.addEventListener('click', () => {
  cover.style.display = 'none';
  content.classList.remove('hidden');
  window.scrollTo(0, 0);

  if (!heartsIntervalStarted) {
    heartsIntervalStarted = true;
    startHearts();
    showOtter();
  }
});

/* 💗 Continuous hearts – REAL mobile safe */
function startHearts() {
  const hearts = ['💗', '🤍', '💖', '💞'];

  setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + '%';

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 800);
}

/* 🦦 Otter emoji – centered & visible on mobile */
function showOtter() {
  const otter = document.createElement('div');
  otter.className = 'otter-emoji';
  otter.textContent = '🦦';

  document.body.appendChild(otter);

  setTimeout(() => {
    otter.remove();
  }, 3500);
}