function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.querySelector('#hamburguerBtn').classList.toggle("open");
    
}

const clickX= document.getElementById("hamburguerBtn");
clickX.onclick=toggleMenu;