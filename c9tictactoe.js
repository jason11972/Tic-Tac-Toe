/**
 * Created by Jason Wilson on 7/20/2016.
 */


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
var player1 = "images/player1.jpg";
var cpuplayer = "images/player2.jpg";
var turn = 0;
var cpuMove3x3;

cpuMove3x3 = function () {
    //cpu blocks here if possible win in top row, diag, or first column is possible
    if (t1 == "" && ((t2 == player1 && t3 == player1) || (m2 == player1 && b3 == player1) || (m1 == player1 && b1 == player1))) {
        t1 = cpuplayer;
        turn = 0;
    } else {
        //cpu blocks here if possible win in top row,
        if (t2 == "" && ((t1 == player1 && t3 == player1) || (m2 == player1 && b2 == player1))) {
            t2 = cpuplayer;
            turn = 0;
        }
        else {
            //cpu blocks possible win in top row, diagonal, or right column
            if (t3 == "" && ((t1 == player1 && t2 == player1) || (m2 == player1 && b1 == player1) || (m3 == player1 && b3 == player1))) {
                t3 = cpuplayer;
                turn = 0;
            }
            //ABOVE LINES ARE ALL WAYS THE CPU BLOCKS POSSIBLE WINS CONNECTED TO TOP ROW OF SQUARES(t1,t2,t3)
            else {
                //cpu blocks possible win in middle row or first column
                if (m1 == "" && ((t1 == player1 && b1 == player1) || (m2 == player1 && m3 == player1))) {
                    m1 = cpuplayer;
                    turn = 0;
                }
                else {
                    //cpu blocks possible win in middle row, middle column, and diag
                    if (m2 == "" && ((m1 == player1 && m3 == player1) || (t2 == player1 && b2 == player1) || (t1 == player1 && b3 == player1))) {
                        m2 = cpuplayer;
                        turn = 0;
                    }
                    else {
                        //cpu blocks possible win in middle row and right column
                        if (m3 == "" && ((t3 == player1 && b3 == player1) || (m1 == player1 && m2 == player1))) {
                            m3 = cpuplayer;
                            turn = 0;
                        }
                        //ALL CODE IN SECTION ABOVE IS FOR CPU TO BLOCK PLAYER WINS CONNECTED TO MIDDLE ROW
                        else {
                            //cpu blocks possible win in bottom row, first column, and diag
                            if (b1 == "" && ((b2 == player1 && b3 == player1) || (m1 == player1 && t1 == player1) || (m2 == player1 && t3 == player1))) {
                                b1 = cpuplayer;
                                turn = 0;
                            }
                            else {
                                //cpu blocks possible win in bottom row and middle column
                                if (b2 == "" && ((m2 == player1 && t2 == player1) || (b1 == player1 && b3 == player1))) {
                                    b2 = cpuplayer;
                                    turn = 0;
                                }
                                else {
                                    //cpu blocks win in right column, bottom row, and diag
                                    if (b3 == "" && ((m3 == player1 && t3 == player1) || (b2 == player1 && b1 == player1) || (m2 == player1 && t1 == player1))) {
                                        b3 = cpuplayer;
                                        turn = 0;
                                    }
                                    //IF NO POSSIBLE PLAYER ONE WINS NEED TO BE BLOCKED BY CPU THEN IT CHOOSES ITS OWN SQUARE
                                    else {
                                        // First square CPU will pick is center if not already taken
                                        if (m2 == "") {
                                            m2 = cpuplayer;
                                            turn = 0;

                                        }
                                        else {
                                            //If center is taken, then CPU takes t1 square
                                            if (t1 == "") {
                                                t1 = cpuplayer;
                                                turn = 0;

                                            }
                                            else {
                                                //If first two choices arent open it takes b3 square
                                                if (b3 == "") {
                                                    b3 = cpuplayer;
                                                    turn = 0;

                                                }
                                                else {
                                                    //If previous options arent open it takes b2 square
                                                    if (b2 == "") {
                                                        b2 = cpuplayer;
                                                        turn = 0;

                                                    }
                                                    else {
                                                        //If previous options arent open it takes m1 square
                                                        if (m1 == "") {
                                                            m1 = cpuplayer;
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
