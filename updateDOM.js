class Ui {
    constructor() {
        this.cityName = document.getElementById("cityName");
        this.temp = document.getElementById("temp");
        this.windSpeed = document.getElementById("windSpeed");
    }

    updateDOM(weather) {
        this.cityName.textContent = weather.name;
        this.temp.textContent = this.main.temp;
        this.windSpeed.textContent = this.wind.windSpeed;
    }
}

/*

CityName = response.name;
temp = response.main.temp
windSpeed = response.wind.speed
*/