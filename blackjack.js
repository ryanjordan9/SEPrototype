
const deck = ["Spade 1", "Spade 2", "Spade 3", "Spade 4", "Spade 5", "Spade 6", "Spade 7", "Spade 8", "Spade 9", "Spade 10",
    "Spade J", "Spade Q", "Spade K", "Spade A",
    "Clubs 1", "Clubs 2", "Clubs 3", "Clubs 4", "Clubs 5", "Clubs 6", "Clubs 7", "Clubs 8", "Clubs 9", "Clubs 10", "Clubs J",
    "Clubs Q", "Clubs K", "Clubs A",
    "Hearts 1", "Hearts 2", "Hearts 3", "Hearts 4", "Hearts 5", "Hearts 6", "Hearts 7", "Hearts 8", "Hearts 9", "Hearts 10",
    "Hearts J", "Hearts Q", "Hearts K", "Hearts A",
    "Diamonds 1", "Diamonds 2", "Diamonds 3", "Diamonds 4", "Diamonds 5", "Diamonds 6", "Diamonds 7", "Diamonds 8", "Diamonds 9",
    "Diamonds 10", "Diamonds J", "Diamonds Q", "Diamonds K", "Diamonds A",
]

function deal() {
    var random1 = Math.random() * 52;
    var random2 = random1;
    while(random2 == random1) {
        random2 = Math.floor(Math.random() * 52);
    } 
    var random3 = random2;
    while(random3 == random1 | random3 == random2) {
        random3 = Math.floor(Math.random() * 52);
    }
    var random4 = random3;
    while(random4 == random3 | random4 == random2 | random4 == random1){
        random4 = Math.floor(Math.random() * 52);
    }
    var idk = document.getElementById('r32');
    idk.innerHTML = random1;

}

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