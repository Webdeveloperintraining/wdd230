//Selects the images to be loaded
let imagesToLoad = document.querySelectorAll("img[data-src]");

//This constant has two arrow functions, the first function sets the image to be loaded 
const loadImages = (image)=>{
    image.setAttribute("src",image.getAttribute("data-src"));
//The second function uses .onload property to remove the images on data-src when they are loaded.
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
