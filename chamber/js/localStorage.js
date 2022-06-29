const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));


if (numVisits !== 0) {
	visitsDisplay.innerHTML=numVisits;
} else {
	visitsDisplay.innerHTML= "This is your first visit!";
}

numVisits++;

localStorage.setItem("visits-ls", numVisits);

todayDisplay.textContent = Date.now();