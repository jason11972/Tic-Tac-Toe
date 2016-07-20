var clicked = false;
$(document).ready(function () {
    $('.tbt').click(function(){
        remove_board();
        create_board(3);
    });
    $('.fbf').click(function(){
        remove_board();
        create_board(4);
    });
});

/*FUNCTIONS*/
function create_board(num) { //CREATE BOARD
    for (var i = 0; i < (num * num); i++) {
        if (num > 3) { // CONDITIONAL WILL CHECK TO CREATE 3X3 OR 4X4 BOARD
            var boardblock = $('<div>').addClass('fourbyfourbox').text('O');
            $('#gameboard').append(boardblock);
        } else {
            var boardblock = $('<div>').addClass('threebythreebox').text('X');
            $('#gameboard').append(boardblock);
        }
    }
}
    function remove_board() { //REMOVES THE BOARD
    $('#gameboard > div').remove();
}

