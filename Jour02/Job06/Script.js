
function detecterKonamiCode(callback) {
    var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    var index = 0;
    
    function keyHandler(event) {
        if (event.key === konamiCode[index]) {
            index++;
            if (index === konamiCode.length) {
                callback();
                index = 0;
            }
        } else {
            index = 0;
        }
    }
    
    document.addEventListener('keydown', keyHandler);
}


function styliserPage() {
    document.body.classList.add('plateforme-style');
}

detecterKonamiCode(styliserPage);
