let bdate= new Date().getDay();
const banner=document.querySelector('#banner');
if (bdate===1||bdate===2) {
    banner.style.display="block";
}
else {
    banner.style.display="none";
};
