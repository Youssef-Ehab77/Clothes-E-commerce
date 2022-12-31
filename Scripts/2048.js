var board;
var score = 0;
var rows = 4;
var columns = 4;
var checking = false;
$(function () {
    startGame();
});

setTimeout(function () {
    $("#header").load('../HTML/Components/Navbar.html');
    // $('#footer').load('../HTML/Components/Footer.html');
}, 200);

function startGame() {
    board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

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

function updateTile(tile, num) {
    tile.text('');
    tile.removeAttr('class');
    tile.addClass('tile');
    if (num > 0) {
        tile.text(num.toString());
        if (num <= 2048) {
            tile.addClass('n' + num.toString());
        } else tile.addClass('n2048');
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

function checkEnd() {
    checking = true;
    var boardCopy = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    let equal = true;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            boardCopy[r][c] = board[r][c];
        }
    }
    slideLeft(boardCopy);
    slideRight(boardCopy);
    slideDown(boardCopy);
    slideUp(boardCopy);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns && equal; c++) {
            if (boardCopy[r][c] !== board[r][c]) {
                equal = false;
            }
        }
    }
    checking = false;
    if (equal) {
        return true;
    } else {
        return false;
    }

}

function generate2() {
    if (!hasEmptyTile()) {
        if (checkEnd()) {
            makeDiscount();
        }
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

function filterZero(row) {
    return row.filter(num => num !== 0); //create new array of all nums != 0
}

function slide(row) {
    //1. remove zeros
    row = filterZero(row);
    //2. slide
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] === row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            if (!checking)
                score += row[i];
        }
    }
    //3. remove zeros again
    row = filterZero(row);
    while (row.length < columns) {
        row.push(0);
    }
    return row;
}

//-------------------------- Moving -----------------------//
function slideLeft(boardCopy) {
    for (let r = 0; r < rows; r++) {
        let row = boardCopy[r];
        row = slide(row);
        boardCopy[r] = row;

        if (!checking) {
            for (let c = 0; c < columns; c++) {
                let tile = $('#' + r.toString() + '-' + c.toString());
                let num = boardCopy[r][c];
                updateTile(tile, num);
            }
        }

    }
}

//same as left but reverse the row
function slideRight(boardCopy) {
    for (let r = 0; r < rows; r++) {
        let row = boardCopy[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        boardCopy[r] = row;

        if (!checking) {
            for (let c = 0; c < columns; c++) {
                let tile = $('#' + r.toString() + '-' + c.toString());
                let num = boardCopy[r][c];
                updateTile(tile, num);
            }
        }
    }
}

function slideUp(boardCopy) {
    for (let c = 0; c < columns; c++) {
        let row = [boardCopy[0][c], boardCopy[1][c], boardCopy[2][c], boardCopy[3][c]];
        row = slide(row);
        boardCopy[0][c] = row[0];
        boardCopy[1][c] = row[1];
        boardCopy[2][c] = row[2];
        boardCopy[3][c] = row[3];

        if (!checking) {
            for (let r = 0; r < rows; r++) {
                let tile = $('#' + r.toString() + '-' + c.toString());
                let num = boardCopy[r][c];
                updateTile(tile, num);
            }
        }
    }
}

function slideDown(boardCopy) {
    for (let c = 0; c < columns; c++) {
        let row = [boardCopy[0][c], boardCopy[1][c], boardCopy[2][c], boardCopy[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        boardCopy[0][c] = row[0];
        boardCopy[1][c] = row[1];
        boardCopy[2][c] = row[2];
        boardCopy[3][c] = row[3];
        if (!checking) {
            for (let r = 0; r < rows; r++) {
                let tile = $('#' + r.toString() + '-' + c.toString());
                let num = boardCopy[r][c];
                updateTile(tile, num);
            }
        }
    }
}

document.addEventListener('keyup', function (e) {
    if (e.code === 'ArrowLeft') {
        slideLeft(board);
        generate2();
    } else if (e.code === 'ArrowRight') {
        slideRight(board);
        generate2();
    } else if (e.code === 'ArrowUp') {
        slideUp(board);
        generate2();
    } else if (e.code === 'ArrowDown') {
        slideDown(board);
        generate2();
    }
    $('#score').text(score);
});

function makeDiscount() {

    if (!getCookie('game2048')) {
        let date = new Date();
        date.setMonth(date.getMonth() + 1);
        setCookie('game2048', 1, date);
        if (!getCookie('discount')) {
            setCookie('discount', 0, date);
        }
        calcDiscount();
    }
    swal("The Board Is Filled!\nGame Over\nYou Have total "+getCookie('discount')+"% discount");
}

function calcDiscount() {
    var currentDiscount = parseInt(getCookie('discount'));
    if (currentDiscount < 10) {
        if (score > 2048) {
            setCookie('discount', (currentDiscount + 8));
        } else if (score > 1024) {
            setCookie('discount', (currentDiscount + 5));
        } else if (score > 512) {
            setCookie('discount', (currentDiscount + 3));
        } else {
            setCookie('discount', (currentDiscount + 1));
        }
    }

}