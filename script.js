const weather = new Weather("Adelaide");

weather.changeLocation("Sydney");

// Get Weather on load

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather.getWeather()
    .then(response => {
      console.log(response)
    });
}