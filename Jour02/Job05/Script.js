document.addEventListener("scroll", function() {
    var scrollTop = window.scrollY; 
    var scrollHeight = document.body.scrollHeight - window.innerHeight; 

    var scrollPercentage = (scrollTop / scrollHeight) * 100;

  
    var footer = document.querySelector("footer");
    footer.style.backgroundColor = "hsl(" + scrollPercentage + ", 100%, 50%)";
});