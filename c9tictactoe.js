/**
 * Created by Jason Wilson on 7/20/2016.
 */

//
// $(document).ready(function () {
//     $("#settingsModal").modal('show');
//     $("#radio").click(function() {
//         $("settingsModal").modal("hide");
//
//     });


//the squares for 3x3 game
var t1;
var t2;
var t3;
var m1;
var m2;
var m3;
var b1;
var b2;
var b3;
var player1 = "x";
var cpuplayer = "o";
var turn = 0;
var cpuMove3x3;

var cpuMove3x3 = function () {
    //cpu blocks here if possible win in top row, diag, or first column is possible
    if (t1 == "" && ((t2 == "x" && t3 == "x") || (m2 == "x" && b3 == "x") || (m1 == "x" && b1 == "x"))) {
        $('#t1').text("o");
        turn = 0;
    } else {
        //cpu blocks here if possible win in top row,
        if (t2 == "" && ((t1 == "x" && t3 == "x") || (m2 == "x" && b2 == "x"))) {
            $('#t2').text("o");
            turn = 0;
        }
        else {
            //cpu blocks possible win in top row, diagonal, or right column
            if (t3 == "" && ((t1 == "x" && t2 == "x") || (m2 == "x" && b1 == "x") || (m3 == "x" && b3 == "x"))) {
                $('#t3').text("o");
                turn = 0;
            }
            //ABOVE LINES ARE ALL WAYS THE CPU BLOCKS POSSIBLE WINS CONNECTED TO TOP ROW OF SQUARES(t1,t2,t3)
            else {
                //cpu blocks possible win in middle row or first column
                if (m1 == "" && ((t1 == "x" && b1 == "x") || (m2 == "x" && m3 == "x"))) {
                    $('#m1').text("o");
                    turn = 0;
                }
                else {
                    //cpu blocks possible win in middle row, middle column, and diag
                    if (m2 == "" && ((m1 == "x" && m3 == "x") || (t2 == "x" && b2 == "x") || (t1 == "x" && b3 == "x"))) {
                        $('#b1').text("o");
                        turn = 0;
                    }
                    else {
                        //cpu blocks possible win in middle row and right column
                        if (m3 == "" && ((t3 == "x" && b3 == "x") || (m1 == "x" && m2 == "x"))) {
                            $('#b2').text("o");
                            turn = 0;
                        }
                        //ALL CODE IN SECTION ABOVE IS FOR CPU TO BLOCK PLAYER WINS CONNECTED TO MIDDLE ROW
                        else {
                            //cpu blocks possible win in bottom row, first column, and diag
                            if (b1 == "" && ((b2 == "x" && b3 == "x") || (m1 == "x" && t1 == "x") || (m2 == "x" && t3 == "x"))) {
                                $('#b1').text("o");
                                turn = 0;
                            }
                            else {
                                //cpu blocks possible win in bottom row and middle column
                                if (b2 == "" && ((m2 == "x" && t2 == "x") || (b1 == "x" && b3 == "x"))) {
                                    $('#b2').text("o");
                                    turn = 0;
                                }
                                else {
                                    //cpu blocks win in right column, bottom row, and diag
                                    if (b3 == "" && ((m3 == "x" && t3 == "x") || (b2 == "x" && b1 == "x") || (m2 == "x" && t1 == "x"))) {
                                        $('#b3').text("o");
                                        turn = 0;
                                    }
                                    //IF NO POSSIBLE PLAYER ONE WINS NEED TO BE BLOCKED BY CPU THEN IT CHOOSES ITS OWN SQUARE
                                    else {
                                        // First square CPU will pick is center if not already taken
                                        if (m2 == "") {
                                            $('#m2').text("o");
                                            turn = 0;

                                        }
                                        else {
                                            //If center is taken, then CPU takes t1 square
                                            if (t1 == "") {
                                                $('#t1').text("o");
                                                turn = 0;

                                            }
                                            else {
                                                //If first two choices arent open it takes b3 square
                                                if (b3 == "") {
                                                    $('#b3').text("o");
                                                    turn = 0;

                                                }
                                                else {
                                                    //If previous options arent open it takes b2 square
                                                    if (b2 == "") {
                                                        $('#b2').text("o");
                                                        turn = 0;

                                                    }
                                                    else {
                                                        //If previous options arent open it takes m1 square
                                                        if (m1 == "") {
                                                            $('#m1').text("o");
                                                            turn = 0;

                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
