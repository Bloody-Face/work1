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

function hidden() {
    var way = getUrlParameter("Type");
    if(way === "Second") {

        $('#div-1').hide();	
        $('#div-2').hide();	
        $('#div-3').hide();	
        $('#Title-div-1').hide();	
        $('#Title-div-2').hide();

    } else {
        $('#div-4').hide();	
        $('#div-5').hide();	
        $('#div-6').hide();	
        $('#div-7').hide();	
        $('#Title-div-4').hide();	
        $('#Title-div-5').hide();
    }
}