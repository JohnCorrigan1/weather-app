(()=>{"use strict";class e{constructor(e,t,c,a,n,d,o){this.currentTemp=e,this.feelsLike=t,this.highTemp=c,this.lowTemp=a,this.cityName=n,this.conditions=d,this.country=o}}function t(t){return c=this,a=void 0,d=function*(){const c=yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=c5fe265671b668dfb0c7585215149ba1&units=imperial`),a=yield c.json(),n=Math.round(a.main.temp),d=Math.round(a.main.feels_like),o=Math.round(a.main.temp_max),b=Math.round(a.main.temp_min),i=a.name,f=a.weather[0].main,r=a.sys.country;(function(e){const t=document.querySelector(".city"),c=document.querySelector(".temp"),a=document.querySelector(".conditions"),n=document.querySelector(".feels-like"),d=document.querySelector(".high"),o=document.querySelector(".low");t.textContent=e.cityName+", "+e.country,c.textContent=e.currentTemp.toString(),a.textContent="Conditions: "+e.conditions,n.textContent="Feels Like: "+e.feelsLike,d.textContent="High: "+e.highTemp.toString(),o.textContent="Low: "+e.lowTemp.toString(),function(e){const t=e.conditions;document.body.style.backgroundImage="Thunderstorm"==t?"url(https://pixabay.com/get/g11d4b90a7890b95e8125661cffdf0af70e1439195bb00bf6d45e5048f2dd9fe022e1d6d56243a9278504165cce209e9797328a19342d0952e5dc828d6b24ed9c_1920.jpg)":"Drizzle"==t||"Rain"==t||"Mist"==t?"url(https://pixabay.com/get/g6790cf8bd2c41d04eb39eb4c70429c3df402057197672366c2a1f08266170a601397a2ba7172f747e29eb4b8392c8ad94b2ed47492d286fa410a74e7c90cb129_1920.jpg)":"Clear"==t?"url(https://pixabay.com/get/gc4f2a59bbc75271e22ef26d9fd0861cfc2a0c08607190f6d0746153025593eba667984f2bc94b5ed4ee9d61f42c266295e3e97adf6acbf6bd6b7d3577f7b013d_1920.jpg)":"Snow"==t?"url(https://pixabay.com/get/g103e9d3ce6e3bb4a70b87f9fb769ee785151951d806bbbcbd9530cc322a6ea24fba429162259ec4f1270e9829cce03d751b2c8d3aeef1dbdd0b85a0b90784b2f_1920.jpg)":"Clouds"==t?"url(https://pixabay.com/get/gc7b0a51e31af506063691bafd86eac174eb716de524fffeb756fa3855365dad3a5a68403497f592e71c9138ad4b225f54de3466a47b12a4cb3f07efd461363da_1920.jpg)":"Haze"==t||"Fog"==t?"url(https://pixabay.com/get/gb62376725bdd22d380ffae98879060559b5b7909081265b3c8c8ff4046606f48a5085b01b49e7c886e2685a3cfed487c5983049030dad7a2c741bbd7cbe7caab_1920.jpg)":"url(https://pixabay.com/get/gc4f2a59bbc75271e22ef26d9fd0861cfc2a0c08607190f6d0746153025593eba667984f2bc94b5ed4ee9d61f42c266295e3e97adf6acbf6bd6b7d3577f7b013d_1920.jpg)"}(e)})(new e(n,d,o,b,i,f,r)),console.log(a)},new((n=void 0)||(n=Promise))((function(e,t){function o(e){try{i(d.next(e))}catch(e){t(e)}}function b(e){try{i(d.throw(e))}catch(e){t(e)}}function i(t){var c;t.done?e(t.value):(c=t.value,c instanceof n?c:new n((function(e){e(c)}))).then(o,b)}i((d=d.apply(c,a||[])).next())}));var c,a,n,d}const c=document.querySelector(".search-city"),a=document.querySelector(".city-input");t("New York"),c&&c.addEventListener("click",(function(){t(a.value)}))})();