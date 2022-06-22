// Document location where I want my results displayed
let temp=document.querySelector("#temperature");
let wind=document.querySelector("#wind");
let windChill=document.querySelector("#wind-chill");
const weatherImg=document.querySelector("#weather-img");
const description=document.querySelector("#w_description");
var temperature
var wSpeed


//Using Weather API to display weather
const url= "https://api.openweathermap.org/data/2.5/weather?q=Tijuana&appid=625b3e54582f7765110b7e680ff34db6&units=imperial";

async function getJson(){
    let response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayTemp(data)
}
};
getJson()

function displayTemp(Tijuana){
    temp.innerHTML= `<p>${Tijuana.main.temp.toFixed(0)} &deg;F</p>`;
    wind.innerHTML=`${Tijuana.wind.speed} mPH`;
    weatherImg.setAttribute("src",`https://openweathermap.org/img/wn/${Tijuana.weather[0].icon}.png`);
    weatherImg.setAttribute("alt",`${Tijuana.weather[0]}.description`);
    description.innerHTML=`<h3>${Tijuana.weather[0].description}</h3>`;
    temperature=parseInt(Tijuana.main.temp);
    wSpeed=parseFloat(Tijuana.wind.speed);
    Chill()
};

//Windchill Formula
function Chill(){
    const chillFormula=35.74+(0.6215*temperature)-(35.75*wSpeed**0.16)+(0.4275*temperature*wSpeed**0.16);
    if (temperature > 50 || wSpeed < 3.0){
        windChill.innerHTML="N/A";
        //windChill.innerHTML=`<p>${chillFormula.toFixed(2)} °F</p>`;
    } else{
        //windChill.innerHTML="<p>N/A</p>";
        windChill.innerHTML=`${chillFormula.toFixed(2)} °F`;
    };
};




//Temperature and Wind Speed Values before API
// var temperature=parseInt(50);
// var wSpeed=parseFloat(3.0);


// Wind speed Formulas
// const mph=wSpeed/1.60934
// const kmH=wSpeed*1.60934

//Temperature Conversion Formulas
// const toCelsius=(temperature*9/5)+32;
// const toFarenheit=(temperature-32)*5/9;