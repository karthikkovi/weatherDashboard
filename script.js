const weather = new Weather("Adelaide");

// weather.changeLocation("Sydney");

const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newCityName = document.getElementById("cityName").value;

  console.log(newCityName)
  weather.changeLocation(newCityName);
  getWeather()
})


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

      getForecast();
    });

    function getForecast() {

    }

}