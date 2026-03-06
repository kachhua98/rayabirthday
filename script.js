const openBtn = document.getElementById('openLetter');
const cover = document.getElementById('cover');
const content = document.getElementById('content');

let heartsStarted = false;

/* OPEN LETTER */
openBtn.addEventListener('click', () => {
  cover.style.display = 'none';
  showOtterFirst();
});

/* 🦦 Otter FIRST (3s total) */
function showOtterFirst() {
  const otter = document.createElement('div');
  otter.className = 'otter-emoji';
  otter.textContent = '🦦';
  document.body.appendChild(otter);

  setTimeout(() => {
    otter.remove();
    showContent();
  }, 3000);
}

/* 💌 Content */
function showContent() {
  content.classList.remove('hidden');
  window.scrollTo(0, 0);

  if (!heartsStarted) {
    heartsStarted = true;
    startHearts();
  }
}

/* 💗 Hearts */
function startHearts() {
  const hearts = ['💗', '🤍', '💖', '💞'];

  setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 900);
}

/* 🌸 FULLSCREEN GALLERY */
const images = document.querySelectorAll('.gallery img');

const lightbox = document.createElement('div');
lightbox.className = 'lightbox hidden';
lightbox.innerHTML = `
  <div class="lightbox-frame">
    <img src="" alt="memory">
  </div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

/* tap anywhere to close */
lightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
});
