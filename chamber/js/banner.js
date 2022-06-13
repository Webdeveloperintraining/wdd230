let bdate= new Date().getDay();
const banner=document.querySelector('#banner');

if (bdate==1||bdate==2) {
    banner.style.display="block";
    //document.querySelector("#welcome-title").style.top="5%";
    //document.querySelector("#rio").style.maxHeight="89.9%";
}
else {
    banner.style.display="none";
};
