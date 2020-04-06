class forecast {

    constructor(cityName) {
        this.cityName = cityName;
    }
  
    // Fetch Weather Data
  
    async getForecast() {

        // Fetching the data from the API

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&APPID=8deb631cb822b2ab88218fbddc483394`);
        
        const responseData = await response.json();

        // Returning the fetch data
        return responseData;
    }

  }