document.getElementById("First").addEventListener('click', first);
document.getElementById("Second").addEventListener('click', second);

function first() {
    nextStep("First");
}
function second() {
    nextStep("Second");
}
function nextStep(way) {
    document.getElementById("Type").value=way;
    document.forms["Main-Form"].submit();
}

$(document).on('click', '.radio-ivent', function() {
    Carousel($(this).val());
});

function Carousel(value) {

    //console.log(value);
    if(value==="General") {
        $('#Service').show();	
        $('#Insurance').show();	
        $('#map').show();	
        $('#Text-1').hide();	
        $('#Text-2').hide();	
        $('#Text-3').hide();	
    } else 
        if(value==="Details") {
            $('#Service').hide();	
            $('#Insurance').hide();	
            $('#map').hide();
            $('#Text-1').show();	
            $('#Text-2').hide();	
            $('#Text-3').hide();	
    } else 
        if(value==="Settings") {
            $('#Service').hide();	
            $('#Insurance').hide();	
            $('#map').hide();
            $('#Text-1').hide();	
            $('#Text-2').show();	
            $('#Text-3').hide();	
    } else 
        if(value==="Admin") {
            $('#Service').hide();	
            $('#Insurance').hide();	
            $('#map').hide();
            $('#Text-1').hide();	
            $('#Text-2').hide();	
            $('#Text-3').show();	
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

