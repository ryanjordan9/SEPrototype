var sol =
    [['Wins', 'Losses'],
    [0, 0],
    ['Dealers Cards',''],
    ['10 of Hearts', '5 of Clubs'],
    ['Your Cards',''],
    ['Jack of Clubs', '4 of Diamonds']];
//this function prints the board
var printBoard = function () {
    //print board
    for(var i=1; i<=6 ; i++) {
        for(var j=1; j<=2; j++) {
            var rAll = document.getElementById('r'+i+j);
            rAll.innerHTML =sol[i-1][j-1];
        }
    }
};


printBoard();