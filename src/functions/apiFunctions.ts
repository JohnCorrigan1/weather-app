export default async function getWeather(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c5fe265671b668dfb0c7585215149ba1&units=imperial`
  );
  const weatherData = await response.json();
  const currentTemp = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const highTemp = weatherData.main.temp_max;
  const cityName = weatherData.name;
  const conditions = weatherData.weather[0].main;
  console.log(currentTemp, highTemp, cityName, conditions);

  console.log(weatherData);
}

