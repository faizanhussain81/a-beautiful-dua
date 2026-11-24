const entrance = document.getElementById('entranceScene');
const blossom = document.getElementById('blossomScene');
const letter = document.getElementById('letterSection');
const heartLaunch = document.getElementById('heartLaunch');
const letterLaunch = document.getElementById('letterLaunch');

const petalGlyphs = ['🌸', '🌺', '🌷', '✿', '❀', '♡', '🌼'];

function scatterPetals(layer, count = 34) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement('span');
    petal.className = 'drifting-petal';
    petal.textContent = petalGlyphs[Math.floor(Math.random() * petalGlyphs.length)];
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty('--size', `${13 + Math.random() * 24}px`);
    petal.style.setProperty('--drift', `${Math.round(Math.random() * 260 - 130)}px`);
    petal.style.setProperty('--spin', `${Math.round(Math.random() * 540 - 270)}deg`);
    petal.style.setProperty('--duration', `${5 + Math.random() * 6}s`);
    petal.style.setProperty('--delay', `${Math.random() * 1.8}s`);
    layer.appendChild(petal);
    petal.addEventListener('animationend', () => petal.remove());
  }
}

heartLaunch.addEventListener('click', () => {
  if (heartLaunch.disabled) return;
  heartLaunch.disabled = true;
  entrance.classList.add('leaving');
  scatterPetals(document.getElementById('entrancePetals'), 65);
  window.setTimeout(() => {
    entrance.classList.add('hidden');
    blossom.classList.remove('hidden');
    requestAnimationFrame(() => blossom.classList.add('arriving'));
    scatterPetals(document.getElementById('blossomPetals'), 75);
    window.setTimeout(() => scatterPetals(document.getElementById('blossomPetals'), 35), 1800);
    window.setTimeout(() => scatterPetals(document.getElementById('blossomPetals'), 35), 3800);
  }, 1050);
});

letterLaunch.addEventListener('click', () => {
  if (letterLaunch.disabled) return;
  letterLaunch.disabled = true;
  blossom.classList.add('leaving');
  window.setTimeout(() => {
    letter.classList.remove('hidden');
    letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 650);
});
