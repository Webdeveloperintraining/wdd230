//Last modified Date as value
let dv= document.lastModified;
document.querySelector("#full-datev").value=dv;

const form = document.querySelector('#form');
const input = document.querySelector('#position-title');
const verify=document.querySelector(".verified");

const re = RegExp('ab+c');

function testInfo(positionInput) {
  const ok = re.exec(positionInput.value);

  if (!ok) {
    alert('Business position format not valid');
  } else {
    verify.style.border="green solid 2px";
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  testInfo(input);
});

}