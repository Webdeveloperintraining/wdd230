let bdate= new Date().getDay();
const banner=document.querySelector('#banner');

if (bdate==1||bdate==2) {
    banner.style.display="block";
    // banner.style.marginTop="15px";
    //document.querySelector("#welcome-title").style.top="5%";
    //document.querySelector("#rio").style.maxHeight="89.9%";
}
else {
    banner.style.display="none";
    // banner.style.marginTop="-20px";
    //document.querySelector('.main-s').style.gridRow="2/3"
    //document.querySelector('.hero').style.gridRow="2/3"
};
