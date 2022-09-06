import Thunder from './../imgs/storm.jpg'

export default function setBackground(weatherObj){
    const thunder = new Image()
    thunder.src = Thunder
    // const backgroundImg = document.createElement('img')
    // backgroundImg.src = Thunder
    // const background = 

    const conditions = weatherObj.conditions
    console.log("nos")
    console.log(typeof(conditions))
    if(conditions == "Drizzle"){
        console.log("test")
        document.body.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__340.jpg)'
    }
}