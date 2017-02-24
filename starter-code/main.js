console.log("JS file is connected to HTML! Woo!")

var numCards = 4;

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne===cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}
*/

var tGboard = document.getElementById('game-board');

var createCards = function () {
	for (i=0; i<numCards; i++) {
	  var aCard = document.createElement('div');
	  aCard.className = 'card';
	  tGboard.appendChild(aCard);
    }
}

createCards();



