// const lastDisplay = document.querySelector(".day-since");
// const visitsDisplay = document.querySelector(".visits");

// // let numVisits = Number(window.localStorage.getItem("visits-ls"));


// // if (numVisits !== 0) {
// // 	visitsDisplay.innerHTML=numVisits;
// // } else {
// // 	visitsDisplay.innerHTML= "This is your first visit!";
// // }

// // numVisits++;

// // localStorage.setItem("visits-ls", numVisits);

// // todayDisplay.textContent = Date.now();

// let numVisits = Number(window.localStorage.getItem("visits-ls"));
// let lastVisit = Number(window.localStorage.getItem("visits-number"));
// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }
// if (lastVisit !== 0) {
// 	lastDisplay.textContent =Math.trunc((Date.now() - lastVisit)/36e5);
// } else {
// 	lastDisplay.textContent = `This is your first visit!`;
// }
// // increment the number of visits.
// numVisits++;
// lastVisit = Date.now();
// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);
// localStorage.setItem("visits-number", lastVisit)


const lastDisplay = document.querySelector(".hours-since");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("visits-number"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = "This is your first visit!";
}

if (lastVisit !== 0) {
	lastDisplay.textContent =Math.trunc((Date.now() - lastVisit)/36e5);
} else {
	lastDisplay.textContent = "This is your first visit!";
}
 
numVisits++;
lastVisit = Date.now();

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visits-number", lastVisit)