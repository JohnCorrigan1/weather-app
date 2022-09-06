import getWeatherF, { getWeatherC } from "./functions/apiFunctions";
import "./styles.css"



const searchButton = <HTMLButtonElement>document.querySelector(".search-city");
const cityInput = <HTMLInputElement>document.querySelector(".city-input");
const unitToggle = <HTMLInputElement>document.querySelector(".toggle");

getWeatherF("New York");

if (searchButton)
  searchButton.addEventListener("click", function () {
    const city = cityInput.value;
    if (unitToggle.value === "F") {
      getWeatherF(city);
    } else {
      getWeatherC(city);
    }
  });

unitToggle.addEventListener("click", function () {
  const city = document.querySelector(".city");
  let currentCity: string = city?.textContent!;
  let comma = currentCity.indexOf(",");
  currentCity = currentCity.slice(0, comma);
  if (unitToggle.value === "F") {
    unitToggle.value = "C";
    getWeatherC(currentCity);
  } else if (unitToggle.value === "C") {
    unitToggle.value = "F";
    getWeatherF(currentCity);
  }
});
