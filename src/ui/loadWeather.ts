import weatherObj from "../functions/weatherObject";

export default function loadWeather(weatherObj: weatherObj) {
  const cityName = document.querySelector(".city")!;
  const temp = document.querySelector(".temp")!;
  const conditions = document.querySelector(".conditions")!;
  const feels = document.querySelector(".feels-like")!;
  const high = document.querySelector(".high")!;
  const low = document.querySelector(".low")!;

  cityName.textContent = weatherObj.cityName + ", " + weatherObj.country;
  temp.textContent = weatherObj.currentTemp.toString() + "\u00B0";
  conditions.textContent = "Conditions: " + weatherObj.conditions;
  feels.textContent = "Feels Like: " + weatherObj.feelsLike + "\u00B0";
  high.textContent = "High: " + weatherObj.highTemp.toString() + "\u00B0";
  low.textContent = "Low: " + weatherObj.lowTemp.toString() + "\u00B0";
}