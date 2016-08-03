/**
 * Created by njporter10 on 7/20/16.
 */

var player_1 = 0;
var input_array = [];
var ruleset3_activated = false;
var ruleset4_activated = false;


$(document).ready(function () { // when the document loads this will execute
    $('#gameboard').on('click', '.tic_div', function () { //then a click handler for all board divs will be declared
        $('#smack')[0].play();
        $(this).removeClass('tic_div');
        var clicked_div = $(this); // the handler will assign whichever div was clicked to the clicked_div variable
        var array_position = $(this).attr('id');

        if (player_1 === 0) { // here the conditional will trigger if the global value of the player is equal to 0
            $(this).html($('<img src ="images/player1.jpg" alt="player 1">'));
            $(this).addClass('X'); // if player1 clicks then it adds a class 'x' to the div of
            input_array[array_position] = 'X';
            player_1 = 1; //player value will be set to one so that it will be next player turn
            if(ruleset3_activated === true){
                third_win();
            }
            if(ruleset4_activated === true){
                forth_win();
            }

        }
        else {
            $(this).html($('<img src ="images/player2.jpg" alt="player 2">'));
            $(this).addClass('O');
            input_array[array_position] = 'O';
            player_1 = 0;
            if(ruleset3_activated === true){
                third_win();
            }
            if(ruleset4_activated === true){
                forth_win();
            }
        }
    });
});


//-------this is the third win condition-----------
//--------this is the vertical win condition------------
function third_win() {
    if (input_array.length >= 5) {
        if (input_array[0] === "X" && input_array[3] === "X" && input_array[6] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[0] === "O" && input_array[3] === "O" && input_array[6] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[1] === "X" && input_array[4] === "X" && input_array[7] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[1] === "O" && input_array[4] === "O" && input_array[7] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[2] === "X" && input_array[5] === "X" && input_array[8] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[2] === "O" && input_array[5] === "O" && input_array[8] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }



        //-------diagonal win conditions----
        else if (input_array[0] === "X" && input_array[4] === "X" && input_array[8] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[0] === "O" && input_array[4] === "O" && input_array[8] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        //---------other diagonal-------
        else if (input_array[2] === "X" && input_array[4] === "X" && input_array[6] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[2] === "O" && input_array[4] === "O" && input_array[6] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }




        //-----horizontal win conditions----
        else if (input_array[0] === "X" && input_array[1] === "X" && input_array[2] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[0] === "O" && input_array[1] === "O" && input_array[2] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[3] === "X" && input_array[4] === "X" && input_array[5] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[3] === "O" && input_array[4] === "O" && input_array[5] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[6] === "X" && input_array[7] === "X" && input_array[8] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[6] === "O" && input_array[7] === "O" && input_array[8] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
    }

}


//-------this is win condition for 4x4 grid -----------
//--------this is the vertical win condition------------
function forth_win() {
    if (input_array.length >= 7) {
        if (input_array[0] === "X" && input_array[4] === "X" && input_array[8] === "X" && input_array[12] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[0] === "O" && input_array[4] === "O" && input_array[8] === "O" && input_array[12] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[1] === "X" && input_array[5] === "X" && input_array[9] === "X" && input_array[13] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[1] === "O" && input_array[5] === "O" && input_array[9] === "O" && input_array[13] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[2] === "X" && input_array[6] === "X" && input_array[10] === "X" && input_array[14] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[2] === "O" && input_array[6] === "O" && input_array[10] === "O" && input_array[14] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[3] === "X" && input_array[7] === "X" && input_array[11] === "X" && input_array[15] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[3] === "O" && input_array[7] === "O" && input_array[11] === "O" && input_array[15] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }



        //-------diagonal win conditions----
        else if (input_array[0] === "X" && input_array[5] === "X" && input_array[10] === "X" && input_array[15] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[0] === "O" && input_array[5] === "O" && input_array[10] === "O" && input_array[15] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        //---------other diagonal-------
        else if (input_array[3] === "X" && input_array[6] === "X" && input_array[9] === "X" && input_array[12] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[3] === "O" && input_array[6] === "O" && input_array[9] === "O" && input_array[12] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }




        //-----horizontal win conditions----
        else if (input_array[0] === "X" && input_array[1] === "X" && input_array[2] === "X" && input_array[3] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[0] === "O" && input_array[1] === "O" && input_array[2] === "O" && input_array[3] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[4] === "X" && input_array[5] === "X" && input_array[6] === "X" && input_array[7] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[4] === "O" && input_array[5] === "O" && input_array[6] === "O" && input_array[7] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[8] === "X" && input_array[9] === "X" && input_array[10] === "X" && input_array[11] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[8] === "O" && input_array[9] === "O" && input_array[10] === "O" && input_array[11] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
        else if (input_array[12] === "X" && input_array[13] === "X" && input_array[14] === "X" && input_array[15] === "X") {
            console.log('X wins!');
            show_winner1();
            show_reset();
        }
        else if (input_array[12] === "O" && input_array[13] === "O" && input_array[14] === "O" && input_array[15] === "O") {
            console.log('O wins!');
            show_winner();
            show_reset();
        }
    }
}
function show_winner1(){
    $('body').append('<div>')
        .addClass('win_message')
        .css({'height': '500px', 'width': '500px', 'text-align':'center', 'font-size': '40px','margin': '30vh 0 0 35vw'})
        .text('player 1 wins!')
        .append('<img src="images/player1.jpg" alt="Smiley face" height="300" width="297">')
}
function show_winner(){
    $('body').append('<div>')
        .addClass('win_message2')
        .css({'height': '500px', 'width': '500px', 'text-align':'center', 'font-size': '40px','margin': '30vh 0 0 35vw'})
        .text('player 2 wins!')
        .append('<img src="images/player2.jpg">')

}




function show_reset(){
    $('body').append($('<button>').addClass('reset').text('reset'));
    $('.reset').on('click',function(){
        reset_button();
        console.log('reset clicked');
    })
}





function reset_button(){
    location.reload();
    // var player_1 = 0;
    // var input_array = [];
    // var ruleset3_activated = false;
    // var ruleset4_activated = false;
    // $('.tic_div').html(' ');
    // $('#theModal').modal('show');
    // $('.reset').hide();
    // $('.win_message').remove();
    // $('.win_message2').remove();
}
