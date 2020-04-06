class Ui {
    constructor() {
        this.cityName = document.getElementById("city");
        this.temp = document.getElementById("temp");
        this.windSpeed = document.getElementById("windSpeed");
    }

    populateElements(weather) {
        this.cityName.textContent = weather.name;
        this.temp.textContent = main.temp;
        this.windSpeed.textContent = wind.windSpeed;
    }
}

/*

CityName = response.name;
temp = response.main.temp
windSpeed = response.wind.speed
*/