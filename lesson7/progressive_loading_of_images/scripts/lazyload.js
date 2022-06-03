//Selects the images to be loaded
let imagesToLoad = document.querySelectorAll("img[data-src]");

//This code creates an anonymous function with a parameter that 
const loadImages = (image)=>{
    image.setAttribute("src",image.getAttribute("data-src"));
image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
//This function replaces the placeholder images with the actual images we want to display, the ones selected above