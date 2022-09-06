import weatherObj from "../functions/weatherObject";
import setBackground from "./background";
// import Thunder from "../imgs/thunderstorm-1920.jpg"
// import Thunder from "../imgs/storm.jpg"
export default function loadWeather(weatherObj: weatherObj) {
    const cityName = document.querySelector('.city')!
    const temp = document.querySelector('.temp')!
    const conditions = document.querySelector('.conditions')!
    const feels = document.querySelector('.feels-like')!
    const high = document.querySelector('.high')!
    const low = document.querySelector('.low')!

    cityName.textContent = weatherObj.cityName;
    temp.textContent = weatherObj.currentTemp.toString();
    conditions.textContent = "Conditions: " + weatherObj.conditions
    feels.textContent = "Feels Like: " + weatherObj.feelsLike
    high.textContent = "High: " + weatherObj.highTemp.toString()
    low.textContent = "Low: " + weatherObj.lowTemp.toString()

    setBackground(weatherObj)


}

// function setBackground(weatherObj: weatherObj){
//     const thunder: MediaImage = new Image()
//     thunder.src = Thunder
//     const backgroundImg = document.createElement('img')
//     backgroundImg.src = Thunder
//     const background = document.body.style.backgroundImage

//     const conditions = weatherObj.conditions

//     if(conditions === "Clouds"){
//         //  = background
//     }
// }

// const thunder = new Image();
// thunder.src = Thunder

// function background(weatherObj: weatherObj){
//     switch(weatherObj.conditions){
//         case 'Clear':
//             document.body.style.backgroundImage = 'url()'
//             break;
//         case 'Clouds':
//             document.body.style.backgroundImage.url()
//             break;
//         case 'Rain':
//         case 'Drizzle':
//         case 'Mist':
//             document.body.style.backgroundImage = 'url()'
//             break;
//         case 'Thunderstorm':
//             document.body.style.backgroundImage= 'url(./../imgs/thunderstorm-1920.jpg)'
//             break;
//         case 'Snow':
//             document.body.style.backgroundImage = 'url()'
//             break;
//             default: 
//                 document.body.style.backgroundImage = 'url(thunder)'
//             break;
//         }

// }

// export { background }
