const weather = new Weather("Adelaide");
const forecast = new Forecast("Adelaide");
const ui = new Ui;
const setLocalStorage = new LocalStorage;

// weather.changeLocation("Sydney");

setLocalStorage.setLocationData();

const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();

  const newCityName = document.getElementById("cityName").value;

  weather.changeLocation(newCityName);
  getWeather()
})


function getWeather() {
  weather.getWeather()
    .then(response => {

      ui.populateElements(response);
      getForecast();
    });

    function getForecast() {
      forecast.getForecast()
        .then(response => {
          ui.populateForecast(response);
        })
    }

}