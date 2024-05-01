$(document).ready(function(){
    const arcEnCiel = $("#arc-en-ciel");
    const melangerBtn = $("#melanger");
    const message = $("#message");
  
    melangerBtn.click(function() {
        melangerImages();
    });

    function melangerImages() {
        const images = arcEnCiel.children(".container");
        for (let i = images.length; i >= 0; i--) {
            arcEnCiel.append(images.eq(Math.random() * i | 0));
        }
        message.text("");
    }

    arcEnCiel.css("display", "flex"); 
    arcEnCiel.click(function() {
        verifierOrdre();
    });

    function verifierOrdre() {
        const images = arcEnCiel.find("img");
        let ordonne = true;
        images.each(function(index){
            if (parseInt($(this).attr("alt").slice(-1)) !== index + 1) {
                ordonne = false;
                return false;
            }
        });
        if (ordonne) {
            message.text("Vous avez gagné !").css("color", "green");
        } else {
            message.text("Vous avez perdu !").css("color", "red");
        }
    }


    let draggedImg = null;

    arcEnCiel.on("dragstart", "img", function(event) {
        draggedImg = $(this);
    });

    arcEnCiel.on("dragover", function(event) {
        event.preventDefault();
    });

    arcEnCiel.on("drop", "img", function(event) {
        event.preventDefault();
        const temp = $("<div></div>");
        $(this).before(temp);
        draggedImg.before($(this));
        temp.before(draggedImg);
        temp.remove();
        
        verifierOrdre();
    });
});
