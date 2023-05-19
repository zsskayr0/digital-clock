const calc_hour = document.getElementById('hour');
const calc_minute = document.getElementById('minute');
const calc_second = document.getElementById('second');

const colors = [
  ['#000033', '#2e004f', '#5d0080', '#9300b3', '#c600e6'],  // 0h - 5h
  ['#FF6F00', '#FF8E00', '#FFAB00', '#FFC800', '#FFDE00'],  // 5h - 7h
  ['#8AD4FF', '#3EB2FF', '#00C9FF', '#79FFA5', '#00FF88'],  // 7h - 13h
  ['#2488c2', '#1b5a85', '#33c18a', '#79FFA5', '#dee82c'],  // 13h - 17h
  ['#FDB813', '#E66304', '#995C00', '#5E4600'],  // 17h - 19h
  ['#000428', '#003249', '#005B7E', '#008B9F', '#00A8CC'],  // 19h - 24h
];

function updateTime() {
  let datetoday = new Date();
  let hr = datetoday.getHours();
  let mn = datetoday.getMinutes();
  let se = datetoday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (mn < 10) mn = '0' + mn;
  if (se < 10) se = '0' + se;

  calc_hour.textContent = hr;
  calc_minute.textContent = mn;
  calc_second.textContent = se;

  updateGradient(hr, mn);
}

function updateGradient(hour, minute) {
  const body = document.body;

  let gradientColors = [];
  let percentage = 0;

  if (hour >= 0 && hour < 5) {
    gradientColors = colors[0];
    percentage = calculatePercentage(hour, 0, 5);
  } else if (hour >= 5 && hour < 7) {
    gradientColors = colors[1];
    percentage = calculatePercentage(hour, 5, 7);
  } else if (hour >= 7 && hour < 13) {
    gradientColors = colors[2];
    percentage = calculatePercentage(hour, 7, 13);
  } else if (hour >= 13 && hour < 17) {
    gradientColors = colors[3];
    percentage = calculatePercentage(hour, 13, 17);
  } else if (hour >= 17 && hour < 19) {
    gradientColors = colors[4];
    percentage = calculatePercentage(hour, 17, 19);
  } else {
    gradientColors = colors[5];
    percentage = calculatePercentage(hour, 19, 24);
  }

  const gradient = `linear-gradient(120deg, ${gradientColors[0]} ${percentage}%, ${gradientColors[1]} ${percentage}%, ${gradientColors[2]} ${percentage}%, ${gradientColors[3]} ${percentage}%, ${gradientColors[4]} ${percentage}%)`;
  body.style.backgroundImage = gradient;
}

function calculatePercentage(hour, startHour, endHour) {
  const totalMinutes = (hour - startHour) * 60;
  const currentMinutes = totalMinutes + minute;
  const percentage = (currentMinutes / ((endHour - startHour) * 60)) * 100;
  return percentage;
}

// Iniciar a atualização do gradiente
setInterval(updateTime, 1000);
