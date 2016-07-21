var clicked = false;


$(document).ready(function () {
    $('#threebythree').click(function(){
        remove_board();
        create_board(3);
        $('#theModal').modal('hide');
    });
    $('#fourbyfour').click(function(){
        remove_board();
        create_board(4);
        $('#theModal').modal('hide');
    });
    $('#theModal').modal('show');
});

/*FUNCTIONS*/
function create_board(num) { //CREATE BOARD
    var boxname = 'tic_div' + [i];
    for (var i = 0; i < (num * num); i++) {
        if (num > 3) { // CONDITIONAL WILL CHECK TO CREATE 3X3 OR 4X4 BOARD

            var boardblock = $('<div>').attr('id', i).addClass('tic_div fourbyfourbox');
            $('#gameboard').append(boardblock);
        } else {
            var boardblock = $('<div>').attr('id', i).addClass('tic_div threebythreebox');

            $('#gameboard').append(boardblock);
        }
    }
}
    function remove_board() { //REMOVES THE BOARD
    $('#gameboard > div').remove();
}

