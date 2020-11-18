document.getElementById("CheckBox").addEventListener('click', hidden);

function start() {
    hidden();
    checkVar();
    disabledButton();
}

function checkVar() {
    var way = getUrlParameter("Type");
    var objSel = document.getElementById("price");
    document.getElementById("Type").value = way;
    if(way === "First") {
        document.getElementById("Other-text").textContent = "Страховка от укуса клеща";
        objSel.options[0] = new Option("100 000 ₽", "100 ₽");
        objSel.options[1] = new Option("150 000 ₽", "200 ₽");
        objSel.options[2] = new Option("200 000 ₽", "300 ₽");
        objSel.options[3] = new Option("250 000 ₽", "600 ₽");
        document.getElementById("prize").textContent="100 ₽";
        document.getElementById("prize").value="100 ₽";
    }
    else {
        document.getElementById("Other-text").textContent = "Страховка от несчатсного случая";
        objSel.options[0] = new Option("100 000 ₽", "300 ₽");
        objSel.options[1] = new Option("100 000 ₽", "250 ₽");
        objSel.options[2] = new Option("300 000 ₽", "650 ₽");
        document.getElementById("prize").textContent="300 ₽";
        document.getElementById("prize").value="300 ₽";
    }
}
function hidden() {
    var flag = document.getElementById("CheckBox").checked;
    checkVar();
    if(flag === true) {
        document.getElementById('Flag').textContent = "Да";
        $('#div-5').hide();	
        document.getElementById("other-surname").value= "";
        document.getElementById("other-name").value= "" ;
        document.getElementById("other-birthday").value= "";
    } else {
        document.getElementById('Flag').textContent = "Нет";
        $('#div-5').show();	
    }
}

function disabledButton() {
    if(
        document.getElementById("mail").value !== "" &&
        document.getElementById("first-date").value !== "" &&
        document.getElementById("main-surname").value !== "" &&
        document.getElementById("main-name").value !== "" &&
        document.getElementById("main-birthday").value !== "" &&
        document.getElementById("Region").value !== "" &&
        document.getElementById("City").value !== "" &&
        document.getElementById("House").value !== ""
    ) {
        console.log(document.getElementById("CheckBox").checked);
        if(document.getElementById("CheckBox").checked === true) {
            console.log("HELP");
            document.getElementById("main-button").disabled = false;
        }
        else 
            if(
                document.getElementById("other-surname").value !== "" &&
                document.getElementById("other-name").value !== "" &&
                document.getElementById("other-birthday").value !== ""
            ) 
                document.getElementById("main-button").disabled = false;
            else
                document.getElementById("main-button").disabled = true;
    }
    else
        document.getElementById("main-button").disabled = true;
}



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
document.getElementById("info-button").addEventListener('click', info);
function info() {
    document.getElementById("Type2").value=document.getElementById("Type").value;
    document.forms["info-button"].submit();
}