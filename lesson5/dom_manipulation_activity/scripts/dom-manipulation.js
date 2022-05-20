const input=document.querySelector("#favchap");
const button=document.getElementById("btn");
const list=document.querySelector(".list");

function addingChapter(){
    if (input !== null || input !== "") {
        const scripture=input.value;
        input.value='';
        const newLi=document.createElement('li');
        const listText = document.createElement('p');
        const deleteBtn=document.createElement("button");
        newLi.appendChild(listText);
        listText.textContent=scripture;
        newLi.appendChild(deleteBtn);
        deleteBtn.textContent='❌';

        list.appendChild(newLi)

        deleteBtn.addEventListener('click', () => {
            list.removeChild(newLi);
        });
    };
    input.focus();
};

button.addEventListener("click",addingChapter);
