//Last modified Date as value
let dv= document.lastModified;
document.querySelector("#full-datev").value=dv;


//This function validates if the Business position was submitted properly
function validate(){
  const input = document.querySelector('#position-title');
  let validationRGEX = /^(\w*){8,16}$/;
  let result = validationRGEX.test(input);

  if(result == false || result==undefined)
  {
    alert('Please enter a valid phone number');
    document.querySelector('.validator').style.border="#FFD600 solid 2px";
    return false;
  }
  return true;
};