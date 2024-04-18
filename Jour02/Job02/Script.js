
function showhide() {
    
    var container = document.getElementById("container");
    
    if (container.innerHTML.trim() === '') {
        
        container.innerHTML = '<article id="article">L\'important n\'est pas la chute, mais l\'atterrissage.</article>';
    } else {
      
        container.innerHTML = '';
    }
}
