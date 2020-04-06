$(document).ready(function () {

  

  class GetWeatherData {

    constructor(cityName) {
      this.cityName = cityName;
      const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=8deb631cb822b2ab88218fbddc483394";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
      });
    }
  }
  
})