// Init weather

const weather = new Weather("Adelaide");

weather.getWeather()
  .then(results => {
    console.log(results)
  });