$(document).ready(function() {
  const tiles = $('.tile');
  const emptyTile = $('#empty');
  const restartButton = $('#restart');
  const message = $('#message');

  // Assigner les images aux carreaux
  tiles.each(function(index) {
    const imageUrl = `url('images/image${index + 1}.png')`;
    $(this).css({
      'background-image': imageUrl,
      'width': '100px',
      'height': '100px',
      'border': '1px solid black',
      'display': 'inline-block'
    });
  });

  // Mélanger les carreaux
  shuffleTiles();

  // Ajouter les écouteurs d'événements sur chaque carreau
  tiles.on('click', moveTile);

  // Écouteur d'événement pour le bouton "Recommencer"
  restartButton.on('click', function() {
    shuffleTiles();
    message.text('');
  });

  // Fonction pour mélanger les carreaux
  function shuffleTiles() {
    const tileArray = $.merge(tiles, emptyTile); // Fusionner les carreaux et la case vide
    tileArray.sort(() => Math.random() - 0.5); // Mélanger les carreaux
    tileArray.each(function(index) {
      $(this).css('order', index + 1);
    });
  }

  // Fonction pour déplacer les carreaux
  function moveTile() {
    const selectedTile = $(this);
    const selectedTileOrder = parseInt(selectedTile.css('order'));
    const emptyTileOrder = parseInt(emptyTile.css('order'));

    if (isAdjacent(selectedTileOrder, emptyTileOrder)) {
      // Échanger les ordres des carreaux
      const tempOrder = selectedTile.css('order');
      selectedTile.css('order', emptyTile.css('order'));
      emptyTile.css('order', tempOrder);

      // Vérifier si le jeu est terminé
      if (isGameFinished()) {
        message.text("Vous avez gagné !");
        message.css("color", "green");
      }
    }
  }

  // Fonction pour vérifier si deux carreaux sont adjacents
  function isAdjacent(tileOrder, emptyOrder) {
    const rowDiff = Math.abs(tileOrder - emptyOrder) / 3;
    const colDiff = Math.abs(tileOrder - emptyOrder) % 3;
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  }

  // Fonction pour vérifier si le jeu est terminé
  function isGameFinished() {
    let finished = true;
    tiles.each(function(index) {
      if (parseInt($(this).css('order')) !== index + 1) {
        finished = false;
        return false; // Sortir de la boucle each
      }
    });
    return finished;
  }
});

  