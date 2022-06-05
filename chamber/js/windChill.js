//Temperature and Wind Speed Values
var temperature=parseInt(50);
var wSpeed=parseFloat(3.0);

// Document location where I want my results displayed
let t=document.querySelector("#temperature");
let s=document.querySelector("#wind");
let windChill=document.querySelector("#wind-chill");

// Wind speed Formulas
const mph=wSpeed/1.60934
const kmH=wSpeed*1.60934

//Temperature Conversion Formulas
const toCelsius=(temperature*9/5)+32;
const toFarenheit=(temperature-32)*5/9;

//Windchill Formulas
const chillFormula=35.74+(0.6215*temperature)-(35.75*wSpeed**0.16)+(0.4275*temperature*wSpeed**0.16);


if (temperature>50 || wSpeed < 3.0){
    windChill.innerHTML="<p>N/A</p>";
    //windChill.innerHTML=`<p>${chillFormula.toFixed(2)} °F</p>`;
} else{
    //windChill.innerHTML="<p>N/A</p>";
    windChill.innerHTML=`<p>${chillFormula.toFixed(2)} °F</p>`;
};

t.innerHTML=`<h2>${temperature} °F</h2>`;
s.innerHTML=`<p>${wSpeed} mp/h</p>`;