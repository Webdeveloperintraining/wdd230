const hours = document.querySelector(".hours-since");
const visits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("visits-number"));

if (numVisits !== 0) {
	visits.textContent = numVisits;
} else {
	visits.textContent = "This is your first visit!";
}

if (lastVisit !== 0) {
	hours.textContent =Math.trunc((Date.now() - lastVisit)/36e5);
} else {
	hours.textContent = "This is your first visit!";
}
 
numVisits++;
lastVisit = Date.now();

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visits-number", lastVisit)