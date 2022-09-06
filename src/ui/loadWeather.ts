import weatherObj from "../functions/weatherObject";

export default function loadWeather(weatherObj: weatherObj) {
  const cityName = document.querySelector(".city")!;
  const temp = document.querySelector(".temp")!;
  const conditions = document.querySelector(".conditions")!;
  const feels = document.querySelector(".feels-like")!;
  const high = document.querySelector(".high")!;
  const low = document.querySelector(".low")!;

  cityName.textContent = weatherObj.cityName + ', ' + weatherObj.country;
  temp.textContent = weatherObj.currentTemp.toString() + '\u00B0';
  conditions.textContent = "Conditions: " + weatherObj.conditions;
  feels.textContent = "Feels Like: " + weatherObj.feelsLike + '\u00B0';
  high.textContent = "High: " + weatherObj.highTemp.toString() + '\u00B0';
  low.textContent = "Low: " + weatherObj.lowTemp.toString() + '\u00B0';

  setBackground(weatherObj);
}

function setBackground(weatherObj: weatherObj) {
  const conditions = weatherObj.conditions;

  if (conditions == "Thunderstorm") {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/g11d4b90a7890b95e8125661cffdf0af70e1439195bb00bf6d45e5048f2dd9fe022e1d6d56243a9278504165cce209e9797328a19342d0952e5dc828d6b24ed9c_1920.jpg)";
  } else if (
    conditions == "Drizzle" ||
    conditions == "Rain" ||
    conditions == "Mist"
  ) {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/g6790cf8bd2c41d04eb39eb4c70429c3df402057197672366c2a1f08266170a601397a2ba7172f747e29eb4b8392c8ad94b2ed47492d286fa410a74e7c90cb129_1920.jpg)";
  } else if (conditions == "Clear") {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/gc4f2a59bbc75271e22ef26d9fd0861cfc2a0c08607190f6d0746153025593eba667984f2bc94b5ed4ee9d61f42c266295e3e97adf6acbf6bd6b7d3577f7b013d_1920.jpg)";
  } else if (conditions == "Snow") {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/g103e9d3ce6e3bb4a70b87f9fb769ee785151951d806bbbcbd9530cc322a6ea24fba429162259ec4f1270e9829cce03d751b2c8d3aeef1dbdd0b85a0b90784b2f_1920.jpg)";
  } else if (conditions == "Clouds") {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/gc7b0a51e31af506063691bafd86eac174eb716de524fffeb756fa3855365dad3a5a68403497f592e71c9138ad4b225f54de3466a47b12a4cb3f07efd461363da_1920.jpg)";
  } else if (conditions == "Haze" || conditions == "Fog") {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/gb62376725bdd22d380ffae98879060559b5b7909081265b3c8c8ff4046606f48a5085b01b49e7c886e2685a3cfed487c5983049030dad7a2c741bbd7cbe7caab_1920.jpg)";
  } else {
    document.body.style.backgroundImage =
      "url(https://pixabay.com/get/gc4f2a59bbc75271e22ef26d9fd0861cfc2a0c08607190f6d0746153025593eba667984f2bc94b5ed4ee9d61f42c266295e3e97adf6acbf6bd6b7d3577f7b013d_1920.jpg)";
  }
}