const calc_hour = document.getElementById('hour');
const gradientColors = [
  { hour: 0, color: '#2e004f' },    // Madrugada
  { hour: 5, color: '#FF8E00' },     // Nascer do sol
  { hour: 7, color: '#8AD4FF' },     // Manhã
  { hour: 13, color: '#008B9F' },    // Tarde
  { hour: 17, color: '#000428' },    // Noite
];

function updateTime() {
  const datetoday = new Date();
  let hr = datetoday.getHours();
  let mn = datetoday.getMinutes();
  let se = datetoday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (mn < 10) mn = '0' + mn;
  if (se < 10) se = '0' + se;

  calc_hour.textContent = hr;

  updateGradient(hr, mn);
}

function updateGradient(hour, minute) {
  const body = document.body;
  const colorIndex = findColorIndex(hour);

  const prevColor = gradientColors[colorIndex].color;
  const nextColor = gradientColors[colorIndex + 1].color;

  const percentage = calculatePercentage(hour, colorIndex);

  const gradient = `linear-gradient(120deg, ${prevColor} ${percentage}%, ${nextColor} ${percentage}%)`;
  body.style.background = gradient;
}

function findColorIndex(hour) {
  let index = 0;

  for (let i = 0; i < gradientColors.length - 1; i++) {
    if (hour >= gradientColors[i].hour && hour < gradientColors[i + 1].hour) {
      index = i;
      break;
    }
  }

  return index;
}

function calculatePercentage(hour, index) {
  const startHour = gradientColors[index].hour;
  const endHour = gradientColors[index + 1].hour;
  const range = endHour - startHour;
  const offset = hour - startHour;

  return (offset / range) * 100;
}

// Iniciar a atualização do gradiente
setInterval(updateTime, 1000);
