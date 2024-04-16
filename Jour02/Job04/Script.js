
var keylogger = document.getElementById("keylogger");

document.addEventListener("keypress", function(event) {
    
    var lettre = String.fromCharCode(event.charCode).toLowerCase();
    if (/^[a-z]$/.test(lettre)) {
    
        if (document.activeElement === keylogger) {
            keylogger.value += lettre + lettre;
        } else {
            
            keylogger.value += lettre;
        }
    }
});
