document.getElementById('lastModified').textContent = new Date().toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(',', '');


function windChill(Ta, V) {

    if (Ta >= 10 || V <= 4.8) {

    return Ta;
  }
  const Twc = 13.12 + 0.6215 * Ta - 11.37 * Math.pow(V, 0.16) + 0.3965 * Ta * Math.pow(V, 0.16);
  return Twc;
}

const temperature = parseFloat(document.getElementById('temperature').textContent); // °C
const wind = parseFloat(document.getElementById('wind').textContent);     // km/h
const result =  document.getElementById('windChill');
result.textContent = windChill(temperature, wind).toFixed(2) + ' °C';

