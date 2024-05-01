document.getElementById('button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('expression').textContent = xhr.responseText;
            } else {
                console.error('Erreur lors de la récupération du fichier:', xhr.status);
            }
        }
    };
    xhr.open('GET', 'expression.txt', true);
    xhr.send();
});
