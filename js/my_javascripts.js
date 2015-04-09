/*
 * create a function to shuffle an Array
*/
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


var deck = [];

function shuffleNewDeck() {
    deck = [];

    for (var m = 0; m < 6; m++) {
        for (var i = 0; i < 4; i++) {
            deck.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "A");
        };
    };
    shuffle(deck);
    console.log("* ----- A new deck of cards has been shuffled. ----- *");

    dealInitialCards();
};


var dealersHand = [];
var playersHand = [];

function dealInitialCards() {
    playersHand = [];
    dealersHand = [];

    playersHand.push(deck.pop());
    dealersHand.push(deck.pop());
    playersHand.push(deck.pop());

    console.log(playersHand);
    console.log(dealersHand);
    console.log("Initial cards are dealt.");

    calculateValueOfPlayersHand();
    calculateValueOfDealersHand();
};


var valueOfDealersHand = 0;
var valueOfPlayersHand = 0;

function calculateValueOfPlayersHand() {

    valueOfPlayersHand = 0;

    for (var i = 0; i < playersHand.length; i++) {
        if (playersHand[i] == "A") {
            valueOfPlayersHand += 1;
        } else {
            valueOfPlayersHand += playersHand[i];
        };
    };

    // calculate the Ace correctly
    if ((valueOfPlayersHand < 12) && (playersHand.indexOf("A") != -1)) {
        valueOfPlayersHand += 10;
    };

    // announce Blackjack
    if (valueOfPlayersHand == 21 && playersHand.length < 3) {
        console.log("----- Player has won! Player shows BLACKJACK.");
        startNewGame();
    };

    if (valueOfPlayersHand == 21 && playersHand.length >= 3) {
        console.log("Player shows: " + valueOfPlayersHand);
    };

    if (valueOfPlayersHand < 21) {
        console.log("Player shows: " + valueOfPlayersHand);
    };

    if (valueOfPlayersHand > 21) {
        console.log("----- Player has lost! Player shows: " + valueOfPlayersHand);
        startNewGame();
    };
}


function calculateValueOfDealersHand() {

    valueOfDealersHand = 0;

    for (var i = 0; i < dealersHand.length; i++) {
        if (dealersHand[i] == "A"){
            valueOfDealersHand += 1;
        } else {
            valueOfDealersHand += dealersHand[i];
        };
    };

    // calculate the Ace correctly
    if ((valueOfDealersHand < 12) && (dealersHand.indexOf("A") != -1)) {
        valueOfDealersHand += 10;
    };

    console.log("Dealer has now: " + valueOfDealersHand);
}


function deal_player_another_card() {

    if (valueOfPlayersHand > 20) {
        console.log("Player has already enough. ;-)");
        return
    } else {
        var the_new_card = deck.pop();

        playersHand.push(the_new_card);

        console.log("Player was dealt a " + the_new_card);

        calculateValueOfPlayersHand()
    };

}


function beginDealersTurn() {
    console.log("Dealer's turn starts ... ");
    console.log("Dealer currently stands at " + valueOfDealersHand);

    do {
        var the_new_card = deck.pop();

        dealersHand.push(the_new_card);

        console.log("Dealer was dealt a " + the_new_card);

        calculateValueOfDealersHand();
    }
    while (valueOfDealersHand < 17);

    compareBothHands();
}


function compareBothHands() {
    if (valueOfDealersHand < valueOfPlayersHand) {
        console.log("----- Congratulations, Player has won!");
        startNewGame();
    };
    if (valueOfPlayersHand < valueOfDealersHand && valueOfDealersHand <= 21) {
        console.log("----- You have LOST!");
        startNewGame();
    };
    if (valueOfPlayersHand == valueOfDealersHand) {
        console.log("----- It's a draw. Player has " + valueOfPlayersHand + " and Dealer has " + valueOfDealersHand + " as well.")
        startNewGame();
    };
    if (valueOfDealersHand > 21) {
        console.log("----- Dealer busted. Player wins!")
        startNewGame();
    }
}


function startNewGame() {
    console.log("Number of cards in the current deck: " + deck.length);

    if (deck.length > 20) {
        dealInitialCards();

    } else {
        shuffleNewDeck()
    };
}


function startBlackjackGame() {
    shuffleNewDeck();
};


$("#btn_start_function").click(function () {
    startBlackjackGame();
});

$("#btn_hit_function").click(function () {
    deal_player_another_card();
});

$("#btn_stand_function").click(function () {
    beginDealersTurn();
});