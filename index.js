var $ = require('jquery');
var tictactoe = require('./tictactoe');

var turn;
var gamearray = [];

$(function() {
    initialize();

    $('td').click(function() {
        var row = $(this).parent().attr('data-row');
        var col = $(this).attr('data-col');

        if ($(this).text() === '') {
            $(this).text(turn);
            if(!buildArray(row, col))
            {
                checkturn();
            }

        }

        console.log('clicked cell ' + col + ' in row ' + row);
    });
});

function initialize() {
    turn = 'X';
    gamearray = [];
    buildArray(3, 3);
    $('td').text('');


}

function checkturn() {
    if (turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}

function buildArray(row, col) {
    if (typeof gamearray !== 'undefined' && gamearray.length > 0) {
        gamearray[row][col] = turn;


        if (tictactoe.check(gamearray) === 'X') {
            alert("X win");
            initialize();
            return true;
        } else if (tictactoe.check(gamearray) === 'O') {
            alert("O win");
            initialize();
            return true;
        }
    } else {
        for (var i = 0; i < row; i++) {
            var rowarray = [];
            for (var j = 0; j < col; j++) {
                rowarray[j] = '';
            }
            gamearray[i] = rowarray;
        }

    }
    return false;
}
