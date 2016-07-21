/**
 * Created by njporter10 on 7/20/16.
 */

var player_1 = 0;
var input_array = [];



$(document).ready(function () {   // when the document loads this will execute
    console.log('has loaded');
    $('body').on('click', '.tic_div', function () { //then a click handler for all board divs will be declared
        console.log('has loaded');
        var clicked_div = $(this); // the handler will assign whichever div was clicked to the clicked_div variable
        var array_position = $(this).attr('id');
        console.log(array_position);

        if (player_1 === 0) { // here the conditional will trigger if the global value of the player is equal to 0
            $(this).text('X');
            $(this).addClass('X'); // if player1 clicks then it adds a class 'x' to the div of
            input_array[array_position] = 'X';
            player_1 = 1;
            console.log(input_array);

        }
        else {
            $(this).text('O');
            $(this).addClass('O');
            input_array[array_position] = 'O';
            player_1 = 0;
            console.log(input_array[0]);
            console.log(input_array[1]);
            console.log(input_array[2]);
            console.log(input_array.length);
        }

        //--------this is the vertical win condition------------
        if (input_array.length >= 3) {


            if (input_array[0] === "X" && input_array[3] === "X" && input_array[6] === "X") {
                console.log('X wins!');
            }
            else if (input_array[0]=== "O" && input_array[3] === "O" && input_array[6] === "O") {
                console.log('O wins!');
            }
            else if (input_array[1] === "X" && input_array[4] === "X" && input_array[7] === "X") {
                console.log('X wins!');
            }
            else if (input_array[1] === "O" && input_array[4] === "O" && input_array[7] === "O") {
                console.log('O wins!');
            }
            else if (input_array[6] === "X" && input_array[7] === "X" && input_array[8] === "X") {
                console.log('X wins!');
            }
            else if (input_array[6] === "O" && input_array[7] === "O" && input_array[8] === "O") {
                console.log('O wins!');
            }



            //-------diagonal win conditions----
            else if (input_array[0] === "X" && input_array[4] === "X" && input_array[8] === "X") {
                console.log('X wins!');
            }
            else if (input_array[0] === "O" && input_array[4] === "O" && input_array[8] === "O") {
                console.log('O wins!');
            }
            //---------other diagonal-------
            else if (input_array[2] === "X" && input_array[4] === "X" && input_array[6] === "X") {
                console.log('X wins!');
            }
            else if (input_array[2] === "O" && input_array[4] === "O" && input_array[6] === "O") {
                console.log('O wins!');
            }




            //-----horizontal win conditions----
            else if (input_array[0] === "X" && input_array[1] === "X" && input_array[2] === "X") {
                console.log('X wins!');
            }
            else if (input_array[0] === "O" && input_array[1] === "O" && input_array[2] === "O") {
                console.log('O wins!');
            }
            else if (input_array[3] === "X" && input_array[4] === "X" && input_array[5] === "X") {
                console.log('X wins!');
            }
            else if (input_array[3] === "O" && input_array[4] === "O" && input_array[5] === "O") {
                console.log('O wins!');
            }
            else if (input_array[6] === "X" && input_array[7] === "X" && input_array[8] === "X") {
                console.log('X wins!');
            }
            else if (input_array[6] === "O" && input_array[7] === "O" && input_array[8] === "O") {
                console.log('O wins!');
            }
        }
    });
});