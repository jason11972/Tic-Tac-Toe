/**
 * Created by njporter10 on 7/20/16.
 */
var player_1 = 0;
var input_array = [];


$(document).ready(function () { // when the document loads this will execute
    $('.tic_div').one('click', function () { //then a click handler for all board divs will be declared
        var clicked_div = $(this); // the handler will assign whichever div was clicked to the clicked_div variable
        var array_position = $(this).attr('class').split(' ')[2];
        console.log(array_position);

        if (player_1 === 0) { // here the conditional will trigger if the global value of the player is equal to 0
            $(this).addClass('X'); // if player1 clicks then it adds a class 'x' to the div of
            input_array[array_position] = 'X';
            player_1 = 1;
            console.log(input_array);
        }
        else {
            $(this).addClass('O');
            input_array[array_position] = 'O';
            player_1 = 0;
            console.log( input_array);
        }

        //--------this is the win condition------------
        if(input_array.length >= 5){
            if(input_array[0] === ["X","X","X"] || input_array[0] === ["O","O","O"]){
                console.log('You win!');
            }
        }

    });


});