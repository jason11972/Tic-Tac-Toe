/**
 * Created by Jason Wilson on 7/20/2016.
 */




var turn;


function cpuMove3x3 () {
    //the squares for 3x3 game
    var t1=document.getElementById("0").src;
    var t2=document.getElementById("1").src;
    var t3=document.getElementById("2").src;
    var m1=document.getElementById("3").src;
    var m2=document.getElementById("4").src;
    var m3=document.getElementById("5").src;
    var b1=document.getElementById("6").src;
    var b2=document.getElementById("7").src;
    var b3=document.getElementById("8").src;
    

    //cpu blocks here if possible win in top row, diag, or first column is possible
    if (t1 == "" && ((t2 == 'player1pic' && t3 == 'player1pic') || (m2 == 'player1pic' && b3 == 'player1pic') || (m1 == 'player1pic' && b1 == 'player1pic'))) {
        t1 = document.getElementById("0").src = "player2.jpg";
        turn = 0;
    } else {
        //cpu blocks here if possible win in top row,
        if (t2 == "" && ((t1 == 'player1pic' && t3 == 'player1pic') || (m2 == 'player1pic' && b2 == 'player1pic'))) {
            t2 = document.getElementById("1").src = "player2.jpg";
            turn = 0;
        }
        else {
            //cpu blocks possible win in top row, diagonal, or right column
            if (t3 == "" && ((t1 == 'player1pic' && t2 == 'player1pic') || (m2 == 'player1pic' && b1 == 'player1pic') || (m3 == 'player1pic' && b3 == 'player1pic'))) {
                t3 = document.getElementById("2").src = "player2.jpg";
                turn = 0;
            }
            //ABOVE LINES ARE ALL WAYS THE CPU BLOCKS POSSIBLE WINS CONNECTED TO TOP ROW OF SQUARES(t1,t2,t3)
            else {
                //cpu blocks possible win in middle row or first column
                if (m1 == "" && ((t1 == 'player1pic' && b1 == 'player1pic') || (m2 == 'player1pic' && m3 == 'player1pic'))) {
                    m1 = document.getElementById("3").src = "player2.jpg";
                    turn = 0;
                }
                else {
                    //cpu blocks possible win in middle row, middle column, and diag
                    if (m2 == "" && ((m1 == 'player1pic' && m3 == 'player1pic') || (t2 == 'player1pic' && b2 == 'player1pic') || (t1 == 'player1pic' && b3 == 'player1pic'))) {
                        m2 = document.getElementById("4").src = "player2.jpg";
                        turn = 0;
                    }
                    else {
                        //cpu blocks possible win in middle row and right column
                        if (m3 == "" && ((t3 == 'player1pic' && b3 == 'player1pic') || (m1 == 'player1pic' && m2 == 'player1pic'))) {
                            m3 = document.getElementById("5").src = "player2.jpg";
                            turn = 0;
                        }
                        //ALL CODE IN SECTION ABOVE IS FOR CPU TO BLOCK PLAYER WINS CONNECTED TO MIDDLE ROW
                        else {
                            //cpu blocks possible win in bottom row, first column, and diag
                            if (b1 == "" && ((b2 == 'player1pic' && b3 == 'player1pic') || (m1 == 'player1pic' && t1 == 'player1pic') || (m2 == 'player1pic' && t3 == 'player1pic'))) {
                                b1 = document.getElementById("6").src = "player2.jpg";
                                turn = 0;
                            }
                            else {
                                //cpu blocks possible win in bottom row and middle column
                                if (b2 == "" && ((m2 == 'player1pic' && t2 == 'player1pic') || (b1 == 'player1pic' && b3 == 'player1pic'))) {
                                    b2 = document.getElementById("7").src = "player2.jpg";
                                    turn = 0;
                                }
                                else {
                                    //cpu blocks win in right column, bottom row, and diag
                                    if (b3 == "" && ((m3 == 'player1pic' && t3 == 'player1pic') || (b2 == 'player1pic' && b1 == 'player1pic') || (m2 == 'player1pic' && t1 == 'player1pic'))) {
                                        b3 = document.getElementById("8").src = "player2.jpg";
                                        turn = 0;
                                    }
                                    //IF NO POSSIBLE PLAYER ONE WINS NEED TO BE BLOCKED BY CPU THEN IT CHOOSES ITS OWN SQUARE
                                    else {
                                        // First square CPU will pick is center if not already taken
                                        if (m2 == "") {
                                            m2 = document.getElementById("4").src = "player2.jpg";
                                            turn = 0;

                                        }
                                        else {
                                            //If center is taken, then CPU takes t1 square
                                            if (t1 == "") {
                                                t1 = document.getElementById("0").src = "player2.jpg";
                                                turn = 0;

                                            }
                                            else {
                                                //If first two choices arent open it takes b3 square
                                                if (b3 == "") {
                                                    b3 = document.getElementById("8").src = "player2.jpg";
                                                    turn = 0;

                                                }
                                                else {
                                                    //If previous options arent open it takes b2 square
                                                    if (b2 == "") {
                                                        b2 = document.getElementById("7").src = "player2.jpg";
                                                        turn = 0;

                                                    }
                                                    else {
                                                        //If previous options arent open it takes m1 square
                                                        if (m1 == "") {
                                                            m1 = document.getElementById("3").src = "player2.jpg";
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

function cpuMove4x4 () {

    var t1 = document.getElementById("0").src;
    var t2 = document.getElementById("1").src;
    var t3 = document.getElementById("2").src;
    var t4 = document.getElementById("3").src;
    var m1 = document.getElementById("4").src;
    var m2 = document.getElementById("5").src;
    var m3 = document.getElementById("6").src;
    var m4 = document.getElementById("7").src;
    var m5 = document.getElementById("8").src;
    var m6 = document.getElementById("9").src;
    var m7 = document.getElementById("10").src;
    var m8 = document.getElementById("11").src;
    var b1 = document.getElementById("12").src;
    var b2 = document.getElementById("13").src;
    var b3 = document.getElementById("14").src;
    var b4 = document.getElementById("15").src;


    //cpu blocks here if possible win in top row, diag, or first column is possible
    if (t1 == "" && ((t2 == 'player1pic' && t3 == 'player1pic' && t4 == 'player1pic') || (m2 == 'player1pic' && m7 == 'player1pic' && b4 == 'player1pic') || (m1 == 'player1pic' && m5 == 'player1pic' && b1 == 'player1pic'))) {
        t1 = document.getElementById("0").src = "player2.jpg";
        turn = 0;
    }
    else
        {
            //cpu blocks here if possible win in top row or second column
            if (t2 == "" && ((t1 == 'player1pic' && t3 == 'player1pic' && t4 == 'player1pic') || (m2 == 'player1pic' && m6 == 'player1pic' && b2 == 'player1pic'))) {
                t2 = document.getElementById("1").src = "player2.jpg";
                turn = 0;
            }
            else {
                //cpu blocks possible win in top row and third column
                if (t3 == "" && ((t1 == 'player1pic' && t2 == 'player1pic' && t4 == 'player1pic') || (m3 == 'player1pic' && m7 == 'player1pic' && b3 == 'player1pic'))) {
                    t3 = document.getElementById("2").src = "player2.jpg";
                    turn = 0;
                }
                else {
                    //cpu blocks possible win for top row, right column, or right diag down
                    if (t4 == "" && ((t1 == 'player1pic' && t2 == 'player1pic' && t3 == 'player1pic') || (b1 == 'player1pic' && m6 == 'player1pic' && m3 == 'player1pic') || (m4 == 'player1pic' && m8 == 'player1pic' && b4 == 'player1pic'))) {
                        t4 = document.getElementById("3").src = "player2.jpg";
                        turn = 0;
                    }
                    //ABOVE LINES ARE ALL WAYS THE CPU BLOCKS POSSIBLE WINS CONNECTED TO TOP ROW OF SQUARES(t1,t2,t3,t4)
                    else {
                        //cpu blocks possible win in middle row or first column
                        if (m1 == "" && ((t1 == 'player1pic' && m5 == 'player1pic' && b1 == 'player1pic') || (m2 == 'player1pic' && m3 == 'player1pic' && m4 == 'player1pic'))) {
                            m1 = document.getElementById("4").src = "player2.jpg";
                            turn = 0;
                        }
                        else {
                            //cpu blocks possible win in second row, second column, and diag
                            if (m2 == "" && ((m1 == 'player1pic' && m3 == 'player1pic' && m4 == 'player1pic') || (t2 == 'player1pic' && m6 == 'player1pic' && b2 == 'player1pic') || (t1 == 'player1pic' && m7 == 'player1pic' && b4 == 'player1pic'))) {
                                m2 = document.getElementById("5").src = "player2.jpg";
                                turn = 0;
                            }
                            else {
                                //cpu blocks possible win in middle row and right column
                                if (m3 == "" && ((t3 == 'player1pic' && m7 == 'player1pic' && b3 == 'player1pic') || (m1 == 'player1pic' && m2 == 'player1pic' && m4 == 'player1pic'))) {
                                    m3 = document.getElementById("6").src = "player2.jpg";
                                    turn = 0;
                                }
                                else {
                                    if (m4 == "" && ((t4 == 'player1pic' && m8 == 'player1pic' && b4 == 'player1pic') || (m3 == 'player1pic' && m2 == 'player1pic' && m1 == 'player1pic'))) {
                                        m4 = document.getElementById("7").src = "player2.jpg";
                                        turn = 0;
                                    }
                                    //ALL CODE IN SECTION ABOVE IS FOR CPU TO BLOCK PLAYER WINS CONNECTED TO SECOND ROW(m1,m2,m3,m4)
                                    else {
                                        //cpu blocks win in first column and third row
                                        if (m5 == "" && ((m6 == 'player1pic' && m7 == 'player1pic' && m8 == 'player1pic') || (t1 == 'player1pic' && m1 == 'player1pic' && b1 == 'player1pic'))) {
                                            m5 = document.getElementById("8").src = "player2.jpg";
                                            turn = 0;
                                        }
                                        else {
                                            if (m6 == "" && ((m2 == 'player1pic' && t2 == 'player1pic' && b2 == 'player1pic') || (m5 == 'player1pic' && m7 == 'player1pic' && m8 == 'player1pic') || (b1 == 'player1pic' && m3 == 'player1pic' && t4 == 'player1pic'))) {
                                                m6 = document.getElementById("9").src = "player2.jpg";
                                                turn = 0;
                                            }
                                            else {
                                                if (m7 == "" && ((m5 = 'player1pic' && m6 == 'player1pic' && m8 == 'player1pic') || (b3 == 'player1pic' && m3 == 'player1pic' && t3 == 'player1pic') || (b4 == 'player1pic' && m2 == 'player1pic' && t1 == 'player1pic'))) {
                                                    m7 = document.getElementById("10").src = "player2.jpg";
                                                    turn = 0;
                                                }
                                                else {
                                                    if (m8 == "" && ((m7 == 'player1pic' && m6 == 'player1pic' && m5 == 'player1pic') || (b4 == 'player1pic' && m4 == 'player1pic' && t4 == 'player1pic'))) {
                                                        m8 = document.getElementById("11").src = "player2.jpg";
                                                        turn = 0
                                                    }
                                                    else {
                                                        //cpu blocks possible win bottom row, first column, or bottom left diag
                                                        if (b1 == "" && ((b2 == 'player1pic' && b3 == 'player1pic' && b4 == 'player1pic') || (m5 == 'player1pic' && m1 == 'player1pic' && t1 == 'player1pic') || (m6 == 'player1pic' && m3 == 'player1pic' && t4 == 'player1pic'))) {
                                                            b1 = document.getElementById("12").src = "player2.jpg";
                                                            turn = 0;
                                                        }
                                                        else {
                                                            //cpu blocks possible win in bottom row and second column
                                                            if (b2 == "" && ((b1 == 'player1pic' && b3 == 'player1pic' && b4 == 'player1pic') || (m6 == 'player1pic' && m2 == 'player1pic' && t2 == 'player1pic'))) {
                                                                b2 = document.getElementById("13").src = "player2.jpg";
                                                                turn = 0;
                                                            }
                                                            else {
                                                                //cpu blocks win in right column, bottom row, and diag
                                                                if (b3 == "" && ((b1 == 'player1pic' && b2 == 'player1pic' && b4 == 'player1pic') || (m7 == 'player1pic' && m3 == 'player1pic' && t3 == 'player1pic'))) {
                                                                    b3 = document.getElementById("14").src = "player2.jpg";
                                                                    turn = 0;
                                                                }
                                                                else {
                                                                    if (b4 == "" && ((b3 == 'player1pic' && b2 == 'player1pic' && b1 == 'player1pic') || (m8 == 'player1pic' && m4 == 'player1pic' && t4 == 'player1pic') || (m7 == 'player1pic' && m2 == 'player1pic' && t1 == 'player1pic'))) {
                                                                        b4 = document.getElementById("15").src = "player2.jpg";
                                                                        turn = 0;
                                                                    }
                                                                    //IF NO POSSIBLE PLAYER ONE WINS NEED TO BE BLOCKED BY CPU THEN IT CHOOSES ITS OWN SQUARE
                                                                    else {
                                                                        // First square CPU will pick is m2 if not already taken
                                                                        if (m2 == "") {
                                                                            m2 = document.getElementById("5").src = "player2.jpg";
                                                                            turn = 0;

                                                                        }
                                                                        else {
                                                                            //If center is taken, then CPU takes t1 square
                                                                            if (t1 == "") {
                                                                                t1 = document.getElementById("0").src = "player2.jpg";
                                                                                turn = 0;

                                                                            }
                                                                            else {
                                                                                //If first two choices arent open it takes b3 square
                                                                                if (b3 == "") {
                                                                                    b3 = document.getElementById("14").src = "player2.jpg";
                                                                                    turn = 0;

                                                                                }
                                                                                else {
                                                                                    //If previous options arent open it takes b2 square
                                                                                    if (b2 == "") {
                                                                                        b2 = document.getElementById("13").src = "player2.jpg";
                                                                                        turn = 0;

                                                                                    }
                                                                                    else {
                                                                                        //If previous options arent open it takes m1 square
                                                                                        if (m1 == "") {
                                                                                            m1 = document.getElementById("4").src = "player2.jpg";
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
    }