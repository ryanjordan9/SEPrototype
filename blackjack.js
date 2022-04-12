
const deck = ["2 Spade", "3 Spade", "4 Spade", "5 Spade", "6 Spade", "7 Spade", "8 Spade", "9 Spade", "10 Spade",
"J Spade", "Q Spade", "K Spade", "A Spade",
"2 Clubs", "3 Clubs", "4 Clubs", "5 Clubs", "6 Clubs", "7 Clubs", "8 Clubs", "9 Clubs", "10 Clubs", "J Clubs",
"Q Clubs", "K Clubs", "A Clubs",
"2 Hearts", "3 Hearts", "4 Hearts", "5 Hearts", "6 Hearts", "7 Hearts", "8 Hearts", "9 Hearts", "10 Hearts",
"J Hearts", "Q Hearts", "K Hearts", "A Hearts",
"2 Diamonds", "3 Diamonds", "4 Diamonds", "5 Diamonds", "6 Diamonds", "7 Diamonds", "8 Diamonds", "9 Diamonds",
"10 Diamonds", "J Diamonds", "Q Diamonds", "K Diamonds", "A Diamonds",]
var dealersCardIndexes = [7];
var usersCardIndexes = [7];
var dealersCards = document.getElementById('r32');
var usersCards = document.getElementById('r52');
var nextDealer = 0;
var nextUser = 0;
var wins = 0;
var losses = 0;
var winsConnected = document.getElementById('r21');
var lossesConnected = document.getElementById('r22');
var userBusted = false; 
var dealerBusted = false; 
var userBlackjack = false; 
var dealerValue; 
var playerValue; 

function deal() {
    userBusted = false; 
    dealerBusted = false; 
    userBlackjack = false;
    dealersCardIndexes = [7];
    usersCardIndexes = [7];
    var random1 = Math.floor(Math.random() * 52);   
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
    dealersCardIndexes[0] = random1;
    dealersCardIndexes[1] = random2;
    nextDealer = 2;
    usersCardIndexes[0] = random3;
    usersCardIndexes[1] = random4;
    nextUser = 2;
    dealersCards.innerHTML = deck[dealersCardIndexes[0]] + " " + deck[dealersCardIndexes[1]];
    usersCards.innerHTML = deck[usersCardIndexes[0]] + " " + deck[usersCardIndexes[1]];
    getValueOfPlayerHand();
    getValueOfDealerHand();
}

function hitUser() {
    var random = Math.floor(Math.random()*52);
    while(usersCardIndexes.includes(random)) {
        random = Math.floor(Math.random()*52);
    }
    usersCardIndexes[nextUser] = random;
    nextUser++;
    var print = "";
    for(i = 0; i < nextUser; i++) {
        print = print.concat(deck[usersCardIndexes[i]]).concat(" ");
    }
    usersCards.innerHTML = print;
    getValueOfPlayerHand(); 
}

function hitDealer() {
    var random = Math.floor(Math.random()*52);
    while(dealersCardIndexes.includes(random)) {
        random = Math.floor(Math.random()*52);
    }
    dealersCardIndexes[nextDealer] = random;
    nextDealer++;
    var print = "";
    for(i = 0; i < nextDealer; i++) {
        print = print.concat(deck[dealersCardIndexes[i]]).concat(" ");
    }
    dealersCards.innerHTML = print;
    getValueOfDealerHand(); 
}

function getValueOfPlayerHand () {
    var total = 0; 
    var numAces = 0;  
    console.log(total);
    console.log('before loop');
    for (let i=0; i<usersCardIndexes.length; i++) {
        var value; 
        console.log(typeof usersCardIndexes[i]);
        if (deck[usersCardIndexes[i]].substring(0,1) == 'J' || deck[usersCardIndexes[i]].substring(0,1) == 'Q' || deck[usersCardIndexes[i]].substring(0,1) == 'K') {
            value = 10; 
        } else if (deck[usersCardIndexes[i]].substring(0,1) == 'A') {
            value = 11; 
            numAces++; 
        } else if (deck[usersCardIndexes[i]].substring(0,1) == '1') {
            value = 10;
        } else {
            value = parseInt(deck[usersCardIndexes[i]].substring(0,1)); 
        }
        total += value; 
    }
        while (numAces > 0 && total > 21) {
            total-=10; 
            numAces--; 
        }
        console.log(total);
    var userDisplayTotal = document.getElementById('r62');
    playerValue = total; 
    if(total > 21) {
        userBusted = true; 
        userDisplayTotal.innerHTML = "BUST";
        console.log("about to call eal win");
        evalWin();
    } else if (total == 21) {
        userBlackjack = true; 
        userDisplayTotal.innerHTML = total;
        evalWin(); 
    }
    else {
        userDisplayTotal.innerHTML = total;
    }
    
    return total;  
}

function getValueOfDealerHand () {
    var total = 0;
    var numAces = 0;  
    console.log(total);
    console.log('before loop');
    for (let i=0; i<dealersCardIndexes.length; i++) {
        var value; 
        if (deck[dealersCardIndexes[i]].substring(0,1) == 'J' || deck[dealersCardIndexes[i]].substring(0,1) == 'Q' || deck[dealersCardIndexes[i]].substring(0,1) == 'K') {
            value = 10; 
        } else if (deck[dealersCardIndexes[i]].substring(0,1) == 'A') {
            value = 11; 
            numAces++; 
        } else if (deck[dealersCardIndexes[i]].substring(0,1) == '1') {
            value = 10;
        } else { 
            value = parseInt(deck[dealersCardIndexes[i]].substring(0,1)); 
        }
        total += value; 
    }
    while (numAces > 0 && total > 22) {
        total-=10; 
        numAces--; 
    }
    console.log(total);
    dealerValue = total; 
    var dealerDisplayTotal = document.getElementById('r42');
    if(total > 21) {
        dealerBusted = true; 
        dealerDisplayTotal.innerHTML = "BUST";
        return;
    }else{
        dealerDisplayTotal.innerHTML = total;
    }
    
    return total; 
}

function stay() {
    while(getValueOfDealerHand() < 17){
        hitDealer();
    }
    evalWin();
}

function evalWin() {
    console.log (dealerValue +" ******************* " + playerValue); 
    console.log("in evalwin"); 
    if(dealerBusted) {
        console.log("dealer busted");
        wins++;
        winsConnected.innerHTML = wins;
        return;
     }else if(userBusted){
         console.log("about to increment losses"); 
        losses++;
        lossesConnected.innerHTML = losses;
    } else if (userBlackjack) {
        console.log("user blakcjack");
        wins++;
        winsConnected.innerHTML = wins;
    } else if(dealerValue > playerValue) {
        console.log("about to increment losses *****************"); 
        losses++;
        lossesConnected.innerHTML = losses;
    }  else { 
        wins++;
        winsConnected.innerHTML = wins;
    }
}


var sol =
[['Wins', 'Losses'],
[0, 0],
['Dealers Cards','Cards'],
['Total', ''],
['Your Cards','Cards'],
['Total', '']];
//this function prints the board
var printBoard = function () {
//print board
for(var i=1; i<=6 ; i++) {
    for(var j=1; j<=2; j++) {
        var rAll = document.getElementById('r'+i+j);
        rAll.innerHTML =sol[i-1][j-1];
    }
}};
printBoard(); 
