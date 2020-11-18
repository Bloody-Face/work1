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