var temperature=parseInt(40);
var speed=parseFloat(3);

let t=document.querySelector("#temperature");
let s=document.querySelector("#wind");
let windChill=document.querySelector("#wind-chill");

const chillFormula=35.74+(0.6215*temperature)-(35.75*speed**0.16)+(0.4275*temperature*speed**0.16);

const toCelsius=(temperature*9/5)+32;
const toFarenheit=(temperature-32)*5/9;

const mph=speed/1.60934
const kmH=speed*1.60934

t.innerHTML=`<h2>${temperature} °F</h2>`;
s.innerHTML=`<p>${speed} mp/h</p>`;
windChill.innerHTML=`<p>${chillFormula.toFixed(2)} °F</p>`;