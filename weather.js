class Weather {

    constructor(cityName) {
        this.cityName = cityName;
    }
  
    // Fetch Weather Data
  
    async getWeather() {

        // Fetching the data from the API

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&APPID=8deb631cb822b2ab88218fbddc483394`);
        
        const responseData = await response.json();

        // Returning the fetch data
        return responseData.main;
    }
  
    // Method to change the city
    changeLocation(cityName) {
        this.cityName = cityName;
    }
    
  }