function checkCookies() {
    var text = "";

    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("cookies").innerHTML = text;
}