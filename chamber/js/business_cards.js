const requestURL = "https://webdeveloperintraining.github.io/wdd230/chamber/json/data.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject)// temporary checking for valid response and data parsing
    const companies=jsonObject["companies"];
    companies.forEach(companyInfo)
});

function companyInfo(company){
    let section=document.createElement("section");
    let name=document.createElement("h2");
    let phone=document.createElement("p");
    let address=document.createElement("p");
    let website=document.createElement("a");
    let membership=document.createElement("p");
    let logo=document.createElement("img");

    name.innerHTML=company.name;
    phone.innerHTML=company.phone;
    address.innerHTML=company.address;
    website.innerHTML=`<a href=${company.website} target= "_blank"></a>`;
    membership.innerHTML=company.membershipLevel;
    logo.setAttribute("src",company.icon);
    logo.setAttribute("alt",`${company.name}'s logo`);

    section.appendChild(name);
    section.appendChild(logo);
    section.appendChild(phone);
    section.appendChild(website);
    section.appendChild(membership);

    document.querySelector(".contacts").appendChild(section);
};