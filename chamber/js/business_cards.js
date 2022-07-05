const requestURL = "https://webdeveloperintraining.github.io/wdd230/chamber/json/data.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    const companies=jsonObject["companies"];
    companies.forEach(companyInfo)
});

function companyInfo(company){
    let section=document.createElement("section");
    let name=document.createElement("h2");
    let phone=document.createElement("p");
    let address=document.createElement("p");
    let website=document.createElement("p");
    let core=document.createElement("p");
    let membership=document.createElement("p");
    let logo=document.createElement("img");

    name.innerHTML=company.name;
    phone.innerHTML=`<b>Phone:</b><br> ${company.phone}`;
    address.innerHTML=`<b>Address:</b><br> ${company.address}`;
    core.innerHTML=`<b>Core Business:</b><br> ${company.coreBusiness}`;
    website.innerHTML=`<b>Website:</b><br><a href="${company.website}" target="_blank">${company.website}</a>`;
    membership.innerHTML=`<b>Membership level:</b><br> ${company.membershipLevel}`;
    logo.setAttribute("src",company.icon);
    logo.setAttribute("alt",`${company.name}'s logo`);

    section.appendChild(name);
    section.appendChild(logo);
    section.appendChild(core)
    section.appendChild(address);
    section.appendChild(phone);
    section.appendChild(website);
    section.appendChild(membership);

    document.querySelector(".contacts").appendChild(section);
};