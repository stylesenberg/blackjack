/*
 * create a function to shuffle an Array
*/
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var deck = [];

function shuffle_the_deck () {
	deck = [];

	for (var m = 0; m < 6; m++) {
		for (var i = 0; i < 4; i++) {
			deck.push(2,3,4,5,6,7,8,9,10,10,10,10,11);
		};
	};
	shuffle(deck);
	console.log("* ----- A new deck of cards has been shuffled. ----- *");
};

var dealer_hand = [];
var player_hand = [];

function deal_cards () {
	player_hand = [];
	dealer_hand = [];

	player_hand.push(deck.pop());
	dealer_hand.push(deck.pop());
	player_hand.push(deck.pop());

	console.log(player_hand);
	console.log(dealer_hand);
};

var valueOfDealersHand = 0;
var valueOfPlayersHand = 0;

function calculate_value_of_players_hands () {

	valueOfPlayersHand = 0;

	for(var i = 0; i < player_hand.length; i++){
		valueOfPlayersHand += player_hand[i];
	};

	if (valueOfPlayersHand == 21) {
		console.log("--- Player has won! Player has BLACKJACK.")
	};

	if (valueOfPlayersHand < 21) {
		console.log("Player has now: " + valueOfPlayersHand);
	};

	if (valueOfPlayersHand > 21) {
		console.log("--- Player has lost the game! Player has " + valueOfPlayersHand);
	};

}

function calculate_value_of_dealers_hands () {

	valueOfDealersHand = 0;

	for (var i = 0; i < dealer_hand.length; i++){
		valueOfDealersHand += dealer_hand[i];
	};

	console.log("Dealer has now: " + valueOfDealersHand);
}

function deal_player_another_card () {
	var the_new_card = deck.pop();
	
	player_hand.push(the_new_card);
	
	console.log("Player was dealt a " + the_new_card);

	calculate_value_of_players_hands()
}

function compare_palyer_and_dealer () {
	if (valueOfDealersHand < valueOfPlayersHand) {
		console.log("--- Congratulations, Player has won!")
	};
	if (valueOfPlayersHand < valueOfDealersHand && valueOfDealersHand <= 21) {
		console.log("--- You have LOST!")
	};
	if (valueOfPlayersHand == valueOfDealersHand) {
		console.log("--- It's a draw. Player has " + valueOfPlayersHand + " and Dealer has " + valueOfDealersHand + " as well.")
	};
	if (valueOfDealersHand > 21){
		console.log("--- Dealer busted. Player wins!")
	}
}

function dealers_turn () {
	console.log("Dealer's turn starts ... ");
	console.log("Dealer currently stands at " + valueOfDealersHand);

	do {
		var the_new_card = deck.pop();

		dealer_hand.push(the_new_card);

		console.log("Dealer was dealt a " + the_new_card);

		calculate_value_of_dealers_hands();
	}
	while(valueOfDealersHand < 17);

	compare_palyer_and_dealer();
}


function start_the_blackjack_game () {
	shuffle_the_deck();
	deal_cards();
	calculate_value_of_players_hands();
	calculate_value_of_dealers_hands();
};

$("#btn_start_function").click(function(){
	start_the_blackjack_game();
});

$("#btn_hit_function").click(function(){
	deal_player_another_card();
});

$("#btn_stand_function").click(function(){
	dealers_turn();
});