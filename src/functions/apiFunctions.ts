import loadWeather from "../ui/loadWeather";
import weatherObj from "./weatherObject";

export default async function getWeather(city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c5fe265671b668dfb0c7585215149ba1&units=imperial`
  );
  const weatherData = await response.json();
  const currentTemp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const highTemp = Math.round(weatherData.main.temp_max);
  const lowTemp = Math.round(weatherData.main.temp_min);
  const cityName = weatherData.name;
  const conditions = weatherData.weather[0].main;

  const myCity = new weatherObj(
    currentTemp,
    feelsLike,
    highTemp,
    lowTemp,
    cityName,
    conditions
  );

  loadWeather(myCity)

  console.log(weatherData)
  console.log(myCity)
//   loadWeather(myCity);
}
