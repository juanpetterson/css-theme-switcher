const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {
  const hasSolar = body.classList.toggle('solar');

  hasSolar
    ? (solarButton.style.cssText = `
      --bg-solar: var(--yellow)
    `)
    : (solarButton.style.cssText = `
      --bg-solar: white
    `);

  hasSolar
    ? (solarButton.innerText = 'normalize')
    : (solarButton.innerText = 'solarize');

  localStorage.setItem('isSolar', hasSolar);
};
