$(document).ready(function() {
    const images = ['Images/logo1.PNG', 'Images/logo2.PNG', 'Images/logo3.PNG', 'Images/logo4.PNG', 'Images/logo5.PNG', 'Images/logo6.PNG', 'Images/logo7.PNG', 'Images/logo8.PNG'];
    initializeGame(images);

    $('#GameStart').click(function() {
        initializeGame(images);
    });
});

function initializeGame(images) {
    const taquin = $('#taquin');
    taquin.empty();
    let tiles = [];

    for (let i = 0; i < images.length; i++) {
        const tile = $('<div class="tile"></div>');
        const img = $('<img>').attr('src',images[i]).attr('alt', 'Image ' + (i + 1));
        tile.append(img);
        tiles.push(tile);
    }

    tiles.push($('<div class="tile empty"></div>'));
    tiles.sort(() => Math.random() - 0.5);

    tiles.forEach(tile => {
        taquin.append(tile);
    });

    $('.tile:not(.empty)').click(function() {
        MoveIMG(this);
    });
}

function MoveIMG(tile) {
    const emptyTile = $('.empty');
    const tileIndex = $(tile).index();
    const emptyIndex = $(emptyTile).index();
    const rowCount = 3;

    const isAdjacent = 
        (Math.abs(tileIndex - emptyIndex) === 1 && Math.floor(tileIndex / rowCount) === Math.floor(emptyIndex / rowCount)) ||
        (Math.abs(tileIndex - emptyIndex) === rowCount && Math.floor(tileIndex / rowCount) !== Math.floor(emptyIndex / rowCount)) ||
        ((tileIndex === 4 && emptyIndex === 3) || (tileIndex === 3 && emptyIndex === 4));

    if (isAdjacent) {
        const tileImg = $(tile).children('img').detach();
        $(emptyTile).append(tileImg);
        $(emptyTile).removeClass('empty');
        $(tile).addClass('empty');

        $('.tile').off('click').click(function() {
            MoveIMG(this);
        });

        checkVictory();
    }
}

function checkVictory() {
    const tilesOrder = $('#taquin .tile:not(.empty) img').toArray().map(img => $(img).attr('src').match(/logo(\d)\.PNG$/)[1]);
    if (tilesOrder.join('') === '12345678') {
        $('#MessageOfVictory').text('Félicitation Vo.').css('color', 'green').show();
    }
}
