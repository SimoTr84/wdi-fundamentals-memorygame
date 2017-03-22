var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again!");
	}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId])
	if (cardsInPlay.length === 2) {					// unit 8
	checkForMatch(0, 2);
	}	

}
	//cardsInPlay.push(cardId);
flipCard(0);
flipCard(2);

// eliminated code
/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("user flipped " + cardThree);

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

*/
