import getWeather from './functions/apiFunctions'

const searchButton = <HTMLButtonElement> document.querySelector('.search-city')
const cityInput = <HTMLInputElement> document.querySelector('.city-input')

getWeather("New York")

if(searchButton)
searchButton.addEventListener('click', function(){
    const city = cityInput.value
    getWeather(city);
})
