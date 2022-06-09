//Formatted Date
const date=new Date()
const formattedDate=new Intl.DateTimeFormat("en-UK",{dateStyle:'full'}).format(date);
document.querySelector('.formatted-date').innerHTML=formattedDate;

//Only Year
var year=date.getFullYear()
document.querySelector(".year").innerHTML=year;

//Last modified Date
let d= document.lastModified;
document.querySelector(".full-date").innerHTML=d;
