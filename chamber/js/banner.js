let bdate= new Date().getDay();
const banner=document.querySelector('#banner');

if (bdate==1||bdate==2) {
    banner.style.display="block";
    document.querySelector("#welcome-title").style.top="35%"
}
else {
    banner.style.display="none";
};
