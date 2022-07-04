function toggleMenu() {
    document.querySelector(".primary-nav").classList.toggle("open");
    document.querySelector('.hamburguerBtn').classList.toggle("open");
    
}

const clickX= document.querySelector(".hamburguerBtn");
clickX.onclick=toggleMenu;