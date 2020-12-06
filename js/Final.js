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
function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }

function start() {
    var mail = getUrlParameter("mail");
    var startDate = getUrlParameter("first-date");
    startDate = replaceAll(startDate, "+", " ");
    var mainSurname = getUrlParameter("main-surname");
    var mainName = getUrlParameter("main-name");
    var mainPatron = getUrlParameter("main-patron");
    var mainBirthDay = getUrlParameter("main-birthday");
    mainBirthDay = replaceAll(mainBirthDay, "+", " ");

    var region = getUrlParameter("Region");
    var district = getUrlParameter("District");
    var city = getUrlParameter("City");
    var house = getUrlParameter("House");

    var otherSurname = getUrlParameter("other-surname");
    var otherName = getUrlParameter("other-name");
    var otherPatron = getUrlParameter("other-patron");
    var otherBirthDay = getUrlParameter("other-birthday");
    otherBirthDay = replaceAll(otherBirthDay, "+", " ");

    var flag = getUrlParameter("CheckBox");
    var prize = getUrlParameter("price");

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
    
    price = prize.split('+');
    document.getElementById("prise").textContent = price[0]+".00";
    document.getElementById("Discount").textContent = "0.00";
    document.getElementById("Total").textContent = price[0]+".00";
    checkVar();
    $('#Other-scoreFlag').hide();
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

$('.img-button').on('click', function() {
    var MainId = this.id;
    var id = $(this).parent().attr("id")+"Flag";
    //console.log(id+"    "+$('#'+id).css('display'));
    if($('#'+id).css('display') === 'block'){
        $('#'+MainId).attr('src', 'image/Mask-2.png')
        $('#'+id).hide();
    } else {
        $('#'+MainId).attr('src', 'image/Mask-1.png')
        $('#'+id).show();
    }
  });