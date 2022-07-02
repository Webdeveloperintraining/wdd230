const requestURL = "https://webdeveloperintraining.github.io/wdd230/chamber/json/data.json";
fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    const companies=jsonObject["companies"];
    const VIPMembers=[];
    companies.forEach((company)=>{if (company.membershipLevel==="Silver"||company.membershipLevel==="Gold"){VIPMembers.push(companies.indexOf(company))}});
    function randomIndex (list){ return list[Math.floor(Math.random()*list.length)]};
    displayContent(companies[randomIndex(VIPMembers)],".spotlight1")
    displayContent(companies[randomIndex(VIPMembers)],".spotlight2")
    displayContent(companies[randomIndex(VIPMembers)],".spotlight3")
});

function displayContent(company,spotlight){
    let section=document.createElement("section");
    let namespot=document.createElement("h3");
    let phone=document.createElement("p");
    let email=document.createElement("p");
    let website=document.createElement("p");
    let core=document.createElement("p");
    let founded=document.createElement("p");
    let logo=document.createElement("img");

    namespot.innerHTML=company.name;
    phone.innerHTML=`${company.phone}`;
    founded.innerHTML=`Founded in: ${company.founded}`
    website.innerHTML=`<a href="${company.website}" target="_blank">${company.website}</a>`;
    core.innerHTML=`${company.coreBusiness}`;
    logo.setAttribute("src",company.icon);
    logo.setAttribute("alt",`${company.name}'s logo`);
    logo.setAttribute('loading', 'lazy');
    section.appendChild(namespot);
    section.appendChild(logo);
    section.appendChild(core);
    section.appendChild(founded);
    section.appendChild(phone);
    section.appendChild(email);
    section.appendChild(website);
    document.querySelector(spotlight).appendChild(section);
};
