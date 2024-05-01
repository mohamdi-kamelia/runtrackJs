$(document).ready(function() {
    $('#filtrer').click(function() {
        var filter = {
            id: $('#id').val(),
            nom: $('#nom').val(),
            type: $('#type').val()
        };

        $.getJSON('pokemon.json', function(data) {
            var filteredResults = data.filter(function(pokemon) {
                return (filter.id === '' || pokemon.id.toString() === filter.id) &&
                       (filter.nom === '' || pokemon.name.english.toLowerCase().includes(filter.nom.toLowerCase())) &&
                       (filter.type === '' || pokemon.type.includes(filter.type));
            });

            displayResults(filteredResults);
        });
    });
});

function displayResults(results) {
    var html = '<div class="pokemon-list">';
    if (results.length === 0) {
        html += '<p>Aucun résultat trouvé.</p>';
    } else {
        results.forEach(function(pokemon) {
            html += '<div class="pokemon">';
            html += '<h2>' + pokemon.name.english + ' (ID: ' + pokemon.id + ')</h2>';
            html += '<p>Type: ' + pokemon.type.join(', ') + '</p>';
            html += '<p>Stats:</p>';
            html += '<ul>';
            for (var stat in pokemon.base) {
                html += '<li>' + stat + ': ' + pokemon.base[stat] + '</li>';
            }
            html += '</ul>';
            html += '</div>';
        });
    }
    html += '</div>';
    $('#results').html(html);
}

