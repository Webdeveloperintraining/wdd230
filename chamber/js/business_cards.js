const requestJSON="https://webdeveloperintraining.github.io/wdd230/chamber/json/data.json";
const cards=document.querySelector(".contacts");

async function getData (){
    let result= await fetch(requestJSON);
    if (result.ok){
        let companyData=await result.json();
        companyInfo(companyData);
    }
};

function companyInfo(data){
    data.companies.forEach(company =>{
    let section=document.createElement("section");
    let name=document.createElement("h2");
    let phone=document.createElement("p");
    let address=document.createElement("p");
    let website=document.createElement("p");
    let membership=document.createElement("p");
    let logo=document.createElement("img");


    name.innerHTML=company.name;
    phone.innerHTML=company.phone;
    address.innerHTML=company.address;
    website.innerHTML=company.website;
    membership.innerHTML=company.membershipLevel;
    logo.setAttribute("src",company.icon);
    logo.setAttribute("alt",`${company.name}'s logo`)

    section.appendChild(name);
    section.appendChild(phone);
    section.appendChild(website);
    section.appendChild(membership);
    section.appendChild(logo);
    cards.appendChild(section);
});
}
