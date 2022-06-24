const requestURL = "https://webdeveloperintraining.github.io/wdd230/chamber/json/data.json";

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject)// temporary checking for valid response and data parsing
    const companies=jsonObject["companies"];
    company1(companies);
    company2(companies);
    company3(companies);
});

function company1(company){
    let section=document.createElement("section");
    let namespot=document.createElement("h3");
    let phone=document.createElement("p");
    let email=document.createElement("p");
    let website=document.createElement("p");
    let core=document.createElement("p");
    let logo=document.createElement("img");

    namespot.innerHTML=company[7].name;
    phone.innerHTML=`${company[7].phone}`;
    website.innerHTML=`<a href="${company[7].website}" target="_blank">${company[7].website}</a>`;
    core.innerHTML=`${company[7].coreBusiness}`;
    logo.setAttribute("src",company[7].icon);
    logo.setAttribute("alt",`${company[7].name}'s logo`);
    section.appendChild(namespot);
    section.appendChild(logo);
    section.appendChild(core)
    section.appendChild(phone);
    section.appendChild(email);
    section.appendChild(website);
    document.querySelector(".spotlight1").appendChild(section);
    //document.querySelector(".main-s").appendChild(section);
};

function company2(company){
    let section=document.createElement("section");
    let namespot=document.createElement("h3");
    let phone=document.createElement("p");
    let email=document.createElement("p");
    let website=document.createElement("p");
    let core=document.createElement("p");
    let logo=document.createElement("img");

    namespot.innerHTML=company[0].name;
    phone.innerHTML=`${company[0].phone}`;
    website.innerHTML=`<a href="${company[0].website}" target="_blank">${company[0].website}</a>`;
    core.innerHTML=`${company[0].coreBusiness}`;
    logo.setAttribute("src",company[0].icon);
    logo.setAttribute("alt",`${company[0].name}'s logo`);
    section.appendChild(namespot);
    section.appendChild(logo);
    section.appendChild(core)
    section.appendChild(phone);
    section.appendChild(email);
    section.appendChild(website);
    document.querySelector(".spotlight2").appendChild(section);
    //document.querySelector(".main-s").appendChild(section);
};

function company3(company){
    let section=document.createElement("section");
    let namespot=document.createElement("h3");
    let phone=document.createElement("p");
    let email=document.createElement("p");
    let website=document.createElement("p");
    let core=document.createElement("p");
    let logo=document.createElement("img");

    namespot.innerHTML=company[8].name;
    phone.innerHTML=`${company[8].phone}`;
    website.innerHTML=`<a href="${company[8].website}" target="_blank">${company[8].website}</a>`;
    core.innerHTML=`${company[8].coreBusiness}`;
    logo.setAttribute("src",company[8].icon);
    logo.setAttribute("alt",`${company[8].name}'s logo`);
    section.appendChild(namespot);
    section.appendChild(logo);
    section.appendChild(core)
    section.appendChild(phone);
    section.appendChild(email);
    section.appendChild(website);
    //document.querySelector(".main-s").appendChild(section);
    document.querySelector(".spotlight3").appendChild(section);
};
