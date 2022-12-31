let board;
let score = 0;
const rows = 4;
const columns = 4;

document.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowLeft') {
        slideLeft();
        generate2();
    } else if (e.code === 'ArrowRight') {
        slideRight();
        generate2();
    } else if (e.code === 'ArrowUp') {
        slideUp();
        generate2();
    } else if (e.code === 'ArrowDown') {
        slideDown();
        generate2();
    }
    $('#score').text(score);
});


$(function () {
    startGame();
});

function startGame() {
    board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<div id='0-0'>
            let tile = $('<div>', {id: r.toString() + '-' + c.toString()})
            let num = board[r][c];
            updateTile(tile, num);
            $('#board').append(tile);
        }
    }
    generate2();
    generate2();
}

function generate2() {
    if (!hasEmptyTile) {
        alert('')
        return;
    }
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if (board[r][c] === 0) {
            board[r][c] = 2;
            let tile = $('#' + r.toString() + '-' + c.toString());
            tile.addClass('n2');
            tile.text(2);
            found = true;
        }
    }
}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] === 0) {
                return true;
            }
        }
    }
    return false;
}

function updateTile(tile, num) {
    tile.text('');
    tile.removeAttr('class');
    tile.addClass('tile');
    if (num > 0) {
        tile.text(num);
        if (num <= 2048) {
            tile.addClass('n' + num.toString());
        } else tile.addClass('n2048');
    }
}

function slide(row) {
    //1. remove zeros
    row = row.filter(function (num) {
        return num !== 0;
    });

    //2. slide
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] === row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }

    //3. remove zeros again
    row = row.filter(function (num) {
        return num !== 0;
    });

    while (row.length < columns) {
        row.push(0);
    }
    return row;
}

//-------------------------- Moving -----------------------//
function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = $('#' + r.toString() + '-' + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

//same as left but reverse the row
function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = $('#' + r.toString() + '-' + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);

        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = $('#' + r.toString() + '-' + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r];
            let tile = $('#' + r.toString() + '-' + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}