//console.log("JS file is connected to HTML! Woo!")

var cards = ["king","king","queen","queen"];

var cardsInPlay = [];

var tGboard = document.getElementById('game-board');

var delayReset;

var createBoard = function () {
	for (i=0; i<cards.length; i++) {
	  var aCard = document.createElement('div');
	  aCard.className = 'card';
	  aCard.setAttribute('carddata',cards[i]);
	  console.log(aCard.getAttribute('carddata'));
	  aCard.addEventListener('click', cardChosen);
	  tGboard.appendChild(aCard);
    }
};

var isMatch = function (twoCards) {
       if (twoCards[0]===twoCards[1]) {  //are the twocards king or queen values equal
         alert("you found a match!");
       } else {
       	 alert("not a match.");
       }
       delayReset = setTimeout(resetCards,2000);
};

var cardChosen = function () {

	if (this.getAttribute('carddata')=="queen") {
		this.innerHTML = "<img src='images/queen.jpg' alt='queen' />";
	} else {
		this.innerHTML = "<img src='images/king.jpg' alt='king' />";
	}

	cardsInPlay.push(this.getAttribute('carddata'));

	if (cardsInPlay.length==2) {
		isMatch(cardsInPlay);
	}
	
};

var resetCards = function () {
	for (i=0; i<cards.length; i++) {
		var rC = document.getElementsByClassName('card')[i];
		rC.innerHTML = "";
	}
	cardsInPlay = [];
	clearTimeout(delayReset);
};



createBoard();


