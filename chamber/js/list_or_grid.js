const grid= document.querySelector("#grid");
const list=document.querySelector("#list");
const display = document.querySelector(".contacts");

grid.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

list.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
