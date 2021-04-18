function checkBiscuits() {
    var text = "";

    if (navigator.cookieEnabled == true) {
        text = "Biscuits are enabled.";
    } else {
        text = "Biscuits are not enabled.";
    }
    document.getElementById("biscuits").innerHTML = text;
}