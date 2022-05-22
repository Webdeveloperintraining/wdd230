const bdate= new Date();
const currentDay=bdate.getDay();
var banner=document.querySelector('#banner');
if (currentDay==1||currentDay==2) {
    banner.styles.display="block";
};