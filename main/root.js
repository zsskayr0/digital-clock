const calc_hour = document.getElementById('hour');
const calc_minute = document.getElementById('minute');
const calc_second = document.getElementById('second');

function updateTime() {
  const datetoday = new Date();
  let hr = datetoday.getHours();
  let mn = datetoday.getMinutes();
  let se = datetoday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (mn < 10) mn = '0' + mn;
  if (se < 10) se = '0' + se;

  calc_hour.textContent = hr;
  calc_minute.textContent = mn;
  calc_second.textContent = se;

  // Adicione as classes para cada hora
  for (let i = 0; i <= 23; i++) {
    const bodyElement = document.body;
    bodyElement.classList.remove(`hour-${i}`);
  }
  const currentBodyElement = document.body;
  currentBodyElement.classList.add(`hour-${hr}`);
}

// Start Clock
updateTime();
setInterval(updateTime, 1000);