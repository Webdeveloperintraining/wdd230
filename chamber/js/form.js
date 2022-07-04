//Last modified Date as value
let dv= document.lastModified;
document.querySelector(".full-datev").value=dv;

//This function validates if the Business position was submitted properly
function validate(){
  const input = document.querySelector('.validator').value;
  let validation = /^[A-Za-z'-\s]{7,}$/;
  let result = validation.test(input);
  if(result == false && input!=="")
  {
    alert('Please enter a valid Job position');
    document.querySelector('.validator').style.border="#FFD600 solid 2px";
    return false;
  }
  return true;
};