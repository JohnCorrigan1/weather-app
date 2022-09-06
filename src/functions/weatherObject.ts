export default class weatherObj {
    currentTemp: number;
    feelsLike: number;
    highTemp: number;
    lowTemp: number;
    cityName: string;
    conditions: string;

    constructor(currentTemp: number, feelsLike: number, highTemp: number, lowTemp: number, cityName: string, conditions: string){
        this.currentTemp = currentTemp;
        this.feelsLike = feelsLike;
        this.highTemp = highTemp;
        this.lowTemp = lowTemp;
        this.cityName = cityName;
        this.conditions = conditions;
    }
}