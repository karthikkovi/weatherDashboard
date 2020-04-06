const weather = new Weather("Adelaide");

// weather.changeLocation("Sydney");

// Get Weather on load

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather.getWeather()
    .then(response => {

      console.log(response.name)
      // Ui.populateElements(response);
      cityName = document.getElementById("city");
      temp = document.getElementById("temp");
      windSpeed = document.getElementById("windSpeed");

      cityName.textContent = response.name;
      temp.textContent = response.main.temp;
      windSpeed.textContent = response.wind.speed;
    });
}