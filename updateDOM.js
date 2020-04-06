class Ui {

    constructor() {
        this.cityName = document.getElementById("city");
        this.temp = document.getElementById("temp");
        this.windSpeed = document.getElementById("windSpeed");
        this.fTemp = document.getElementById("f-temp");
        this.fHumdity = document.getElementById("f-humidity");
        this.degree = "\u00B0";
        this.date = moment().format("MM/DD/YYYY");
        this.jsDate = new Date();
    }

    populateElements(weather) {
        this.cityName.textContent = `${weather.name} ${this.date}`;
        this.temp.textContent = `Temperature: ${Math.round(weather.main.temp - 273.15)}${this.degree}C`;
        this.windSpeed.textContent = `Wind speed: ${weather.wind.speed}`;
    }

    populateForecast(forecast) {
        document.getElementById("fiveDays").style.display = "block";

        const forecastarr = forecast.list;
        let currentDate = parseInt(moment().format("DD"));
        console.log(forecastarr)
        console.log(this.jsDate.getUTCDate())
        this.fTemp.textContent = "";
    }

}