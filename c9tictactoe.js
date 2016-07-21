/**
 * Created by Jason Wilson on 7/20/2016.
 */




var turn = 0;


var cpuMove3x3 = function () {
    //the squares for 3x3 game
    var t1=$('#0').text();
    var t2=$('#1').text();
    var t3=$('#2').text();
    var m1=$('#3').text();
    var m2=$('#4').text();
    var m3=$('#5').text();
    var b1=$('#6').text();
    var b2=$('#7').text();
    var b3=$('#8').text();

    //cpu blocks here if possible win in top row, diag, or first column is possible
    if (t1 == "" && ((t2 == "x" && t3 == "x") || (m2 == "x" && b3 == "x") || (m1 == "x" && b1 == "x"))) {
        $('#0').text("o");
        turn = 0;
    } else {
        //cpu blocks here if possible win in top row,
        if (t2 == "" && ((t1 == "x" && t3 == "x") || (m2 == "x" && b2 == "x"))) {
            $('#1').text("o");
            turn = 0;
        }
        else {
            //cpu blocks possible win in top row, diagonal, or right column
            if (t3 == "" && ((t1 == "x" && t2 == "x") || (m2 == "x" && b1 == "x") || (m3 == "x" && b3 == "x"))) {
                $('#2').text("o");
                turn = 0;
            }
            //ABOVE LINES ARE ALL WAYS THE CPU BLOCKS POSSIBLE WINS CONNECTED TO TOP ROW OF SQUARES(t1,t2,t3)
            else {
                //cpu blocks possible win in middle row or first column
                if (m1 == "" && ((t1 == "x" && b1 == "x") || (m2 == "x" && m3 == "x"))) {
                    $('#3').text("o");
                    turn = 0;
                }
                else {
                    //cpu blocks possible win in middle row, middle column, and diag
                    if (m2 == "" && ((m1 == "x" && m3 == "x") || (t2 == "x" && b2 == "x") || (t1 == "x" && b3 == "x"))) {
                        $('#4').text("o");
                        turn = 0;
                    }
                    else {
                        //cpu blocks possible win in middle row and right column
                        if (m3 == "" && ((t3 == "x" && b3 == "x") || (m1 == "x" && m2 == "x"))) {
                            $('#5').text("o");
                            turn = 0;
                        }
                        //ALL CODE IN SECTION ABOVE IS FOR CPU TO BLOCK PLAYER WINS CONNECTED TO MIDDLE ROW
                        else {
                            //cpu blocks possible win in bottom row, first column, and diag
                            if (b1 == "" && ((b2 == "x" && b3 == "x") || (m1 == "x" && t1 == "x") || (m2 == "x" && t3 == "x"))) {
                                $('#6').text("o");
                                turn = 0;
                            }
                            else {
                                //cpu blocks possible win in bottom row and middle column
                                if (b2 == "" && ((m2 == "x" && t2 == "x") || (b1 == "x" && b3 == "x"))) {
                                    $('#7').text("o");
                                    turn = 0;
                                }
                                else {
                                    //cpu blocks win in right column, bottom row, and diag
                                    if (b3 == "" && ((m3 == "x" && t3 == "x") || (b2 == "x" && b1 == "x") || (m2 == "x" && t1 == "x"))) {
                                        $('#8').text("o");
                                        turn = 0;
                                    }
                                    //IF NO POSSIBLE PLAYER ONE WINS NEED TO BE BLOCKED BY CPU THEN IT CHOOSES ITS OWN SQUARE
                                    else {
                                        // First square CPU will pick is center if not already taken
                                        if (m2 == "") {
                                            $('#4').text("o");
                                            turn = 0;

                                        }
                                        else {
                                            //If center is taken, then CPU takes t1 square
                                            if (t1 == "") {
                                                $('#0').text("o");
                                                turn = 0;

                                            }
                                            else {
                                                //If first two choices arent open it takes b3 square
                                                if (b3 == "") {
                                                    $('#8').text("o");
                                                    turn = 0;

                                                }
                                                else {
                                                    //If previous options arent open it takes b2 square
                                                    if (b2 == "") {
                                                        $('#7').text("o");
                                                        turn = 0;

                                                    }
                                                    else {
                                                        //If previous options arent open it takes m1 square
                                                        if (m1 == "") {
                                                            $('#3').text("o");
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

var cpuMove4x4 = function () {

    var t1 = $('#0').text();
    var t2 = $('#1').text();
    var t3 = $('#2').text();
    var t4 = $('#3').text();
    var m1 = $('#4').text();
    var m2 = $('#5').text();
    var m3 = $('#6').text();
    var m4 = $('#7').text();
    var m5 = $('#8').text();
    var m6 = $('#9').text();
    var m7 = $('#10').text();
    var m8 = $('#11').text();
    var b1 = $('#12').text();
    var b2 = $('#13').text();
    var b3 = $('#14').text();
    var b4 = $('#15').text();


    //cpu blocks here if possible win in top row, diag, or first column is possible
    if (t1 == "" && ((t2 == "x" && t3 == "x" && t4 == "x") || (m2 == "x" && m7 == "x" && b4 == "x") || (m1 == "x" && m5 == "x" && b1 == "x"))) {
        $('#0').text("o");
        turn = 0;
    }
    else
        {
            //cpu blocks here if possible win in top row or second column
            if (t2 == "" && ((t1 == "x" && t3 == "x" && t4 == "x") || (m2 == "x" && m6 == "x" && b2 == "x"))) {
                $('#1').text("o");
                turn = 0;
            }
            else {
                //cpu blocks possible win in top row and third column
                if (t3 == "" && ((t1 == "x" && t2 == "x" && t4 == "x") || (m3 == "x" && m7 == "x" && b3 == "x"))) {
                    $('#2').text("o");
                    turn = 0;
                }
                else {
                    //cpu blocks possible win for top row, right column, or right diag down
                    if (t4 == "" && ((t1 == "x" && t2 == "x" && t3 == "x") || (b1 == "x" && m6 == "x" && m3 == "x") || (m4 == "x" && m8 == "x" && b4 == "x"))) {
                        $('#3').text("o");
                        turn = 0;
                    }
                    //ABOVE LINES ARE ALL WAYS THE CPU BLOCKS POSSIBLE WINS CONNECTED TO TOP ROW OF SQUARES(t1,t2,t3,t4)
                    else {
                        //cpu blocks possible win in middle row or first column
                        if (m1 == "" && ((t1 == "x" && m5 == "x" && b1 == "x") || (m2 == "x" && m3 == "x" && m4 == "x"))) {
                            $('#4').text("o");
                            turn = 0;
                        }
                        else {
                            //cpu blocks possible win in second row, second column, and diag
                            if (m2 == "" && ((m1 == "x" && m3 == "x" && m4 == "x") || (t2 == "x" && m6 == "x" && b2 == "x") || (t1 == "x" && m7 == "x" && b4 == "x"))) {
                                $('#5').text("o");
                                turn = 0;
                            }
                            else {
                                //cpu blocks possible win in middle row and right column
                                if (m3 == "" && ((t3 == "x" && m7 == "x" && b3 == "x") || (m1 == "x" && m2 == "x" && m4 == "x"))) {
                                    $('#6').text("o");
                                    turn = 0;
                                }
                                else {
                                    if (m4 == "" && ((t4 == "x" && m8 == "x" && b4 == "x") || (m3 == "x" && m2 == "x" && m1 == "x"))) {
                                        $('#7').text("o");
                                        turn = 0;
                                    }
                                    //ALL CODE IN SECTION ABOVE IS FOR CPU TO BLOCK PLAYER WINS CONNECTED TO SECOND ROW(m1,m2,m3,m4)
                                    else {
                                        //cpu blocks win in first column and third row
                                        if (m5 == "" && ((m6 == "x" && m7 == "x" && m8 == "x") || (t1 == "x" && m1 == "x" && b1 == "x"))) {
                                            $('#8').text("o");
                                            turn = 0;
                                        }
                                        else {
                                            if (m6 == "" && ((m2 == "x" && t2 == "x" && b2 == "x") || (m5 == "x" && m7 == "x" && m8 == "x") || (b1 == "x" && m3 == "x" && t4 == "x"))) {
                                                $('#9').text("o");
                                                turn = 0;
                                            }
                                            else {
                                                if (m7 == "" && ((m5 = "x" && m6 == "x" && m8 == "x") || (b3 == "x" && m3 == "x" && t3 == "x") || (b4 == "x" && m2 == "x" && t1 == "x"))) {
                                                    $('#10').text("o");
                                                    turn = 0;
                                                }
                                                else {
                                                    if (m8 == "" && ((m7 == "x" && m6 == "x" && m5 == "x") || (b4 == "x" && m4 == "x" && t4 == "x"))) {
                                                        $('#11').text("o");
                                                        turn = 0
                                                    }
                                                    else {
                                                        //cpu blocks possible win bottom row, first column, or bottom left diag
                                                        if (b1 == "" && ((b2 == "x" && b3 == "x" && b4 == "x") || (m5 == "x" && m1 == "x" && t1 == "x") || (m6 == "x" && m3 == "x" && t4 == "x"))) {
                                                            $('#12').text("o");
                                                            turn = 0;
                                                        }
                                                        else {
                                                            //cpu blocks possible win in bottom row and second column
                                                            if (b2 == "" && ((b1 == "x" && b3 == "x" && b4 == "x") || (m6 == "x" && m2 == "x" && t2 == "x"))) {
                                                                $('#13').text("o");
                                                                turn = 0;
                                                            }
                                                            else {
                                                                //cpu blocks win in right column, bottom row, and diag
                                                                if (b3 == "" && ((b1 == "x" && b2 == "x" && b4 == "x") || (m7 == "x" && m3 == "x" && t3 == "x"))) {
                                                                    $('#14').text("o");
                                                                    turn = 0;
                                                                }
                                                                else {
                                                                    if (b4 == "" && ((b3 == "x" && b2 == "x" && b1 == "x") || (m8 == "x" && m4 == "x" && t4 == "x") || (m7 == "x" && m2 == "x" && t1 == "x"))) {
                                                                        $('#15').text("o");
                                                                        turn = 0;
                                                                    }
                                                                    //IF NO POSSIBLE PLAYER ONE WINS NEED TO BE BLOCKED BY CPU THEN IT CHOOSES ITS OWN SQUARE
                                                                    else {
                                                                        // First square CPU will pick is m2 if not already taken
                                                                        if (m2 == "") {
                                                                            $('#5').text("o");
                                                                            turn = 0;

                                                                        }
                                                                        else {
                                                                            //If center is taken, then CPU takes t1 square
                                                                            if (t1 == "") {
                                                                                $('#0').text("o");
                                                                                turn = 0;

                                                                            }
                                                                            else {
                                                                                //If first two choices arent open it takes b3 square
                                                                                if (b3 == "") {
                                                                                    $('#14').text("o");
                                                                                    turn = 0;

                                                                                }
                                                                                else {
                                                                                    //If previous options arent open it takes b2 square
                                                                                    if (b2 == "") {
                                                                                        $('#13').text("o");
                                                                                        turn = 0;

                                                                                    }
                                                                                    else {
                                                                                        //If previous options arent open it takes m1 square
                                                                                        if (m1 == "") {
                                                                                            $('#4').text("o");
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
                                }
                            }
                        }
                    }
                }
            }
        }
    };