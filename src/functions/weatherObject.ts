export default class weatherObj {
    currentTemp: number;
    feelsLike: number;
    highTemp: number;
    lowTemp: number;
    cityName: string;
    conditions: string;
    country: string;

    constructor(currentTemp: number, feelsLike: number, highTemp: number, lowTemp: number, cityName: string, conditions: string, country: string){
        this.currentTemp = currentTemp;
        this.feelsLike = feelsLike;
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
        this.cityName = cityName;
        this.conditions = conditions;
        this.country = country;
    }
}