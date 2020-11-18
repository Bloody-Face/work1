function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function start() {
    var mail = getUrlParameter("mail");
    var startDate = getUrlParameter("first-date");
    var mainSurname = getUrlParameter("main-surname");
    var mainName = getUrlParameter("main-name");
    var mainPatron = getUrlParameter("main-patron");
    var mainBirthDay = getUrlParameter("main-birthday");

    var region = getUrlParameter("Region");
    var district = getUrlParameter("District");
    var city = getUrlParameter("City");
    var house = getUrlParameter("House");

    var otherSurname = getUrlParameter("other-surname");
    var otherName = getUrlParameter("other-name");
    var otherPatron = getUrlParameter("other-patron");
    var otherBirthDay = getUrlParameter("other-birthday");
    var flag = getUrlParameter("CheckBox");
    var prize = getUrlParameter("prize");

    document.getElementById("mail").textContent = mail;
    document.getElementById("first-date").textContent = startDate;
    document.getElementById("main-name").textContent = mainSurname+" "+mainName+" "+mainPatron;
    document.getElementById("main-birthday").textContent = mainBirthDay;

    document.getElementById("Region").textContent = region;

    document.getElementById("City").textContent = city;
    document.getElementById("House").textContent = house;
    if(flag=== "on") {
        $('#div-5').hide();	
    }
    else {
        $('#div-5').show();	
        document.getElementById("other-name").textContent = otherSurname+" "+otherName+" "+otherPatron;
        document.getElementById("other-birthday").textContent = otherBirthDay;
    }
    price = prize.split('+')
    document.getElementById("prise").textContent = price[0]+".00";
    document.getElementById("Discount").textContent = "0.00";
    document.getElementById("Total").textContent = price[0]+".00";
    checkVar();
}
function checkVar() {
    var way = getUrlParameter("Type");
    if(way === "First") {
        document.getElementById("Other-text").textContent = "Страховка от укуса клеща";
    }
    else {
        document.getElementById("Other-text").textContent = "Страховка от несчатсного случая";
    }
}