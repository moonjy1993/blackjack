var readlineSync=require('readline-sync');

var cardUtils= require('./cardUtils');
/*
var winner= cardUtils.determineWinner(20,15);
console.log(winner);
*/
var deck;

if(process.argv[2]) {
  // set the deck equal to the deck passed in
  cards = JSON.parse(process.argv[2]);
} else {
  // otherwise generate a deck and shuffle it
  deck = cardUtils.shuffle(cardUtils.generateCards());
}

while(deck.length>=26){
		var playerHand = [];
		var computerHand= [];

		playerHand.push(deck[0]);
		playerHand.push(deck[1]);
		deck.splice(0,2);

		computerHand.push(deck[0]);
		computerHand.push(deck[1]); 
		deck.splice(0,2);


		var str="";
		for(i=0; i< playerHand.length; i++){
			str= str+ " " + playerHand[i].rank+ playerHand[i].suit;
		}

		console.log("");
		console.log("Your hand is: ", str, " for a total of", cardUtils.calculateHand(playerHand));
		console.log("");

		while(cardUtils.calculateHand(playerHand)<=21){
			var letter = readlineSync.question('type h to (h)it or s to (s)tay: ');
			console.log("");

			if(letter=='h'){
				playerHand.push(deck[0]);
				deck.splice(0,1);

				var str="";
				for(i=0; i< playerHand.length; i++){
				str= str+ " " + playerHand[i].rank+ playerHand[i].suit;
				}

				console.log("Your hand is: ", str, "(", cardUtils.calculateHand(playerHand), ")");
				console.log("");

			}
			else if(letter=='s'){
				break;
			}

			else console.log("type the wrong choice. Try again");

		}
		while(cardUtils.calculateHand(computerHand)<17){
					computerHand.push(deck[0]);
					deck.splice(0,1);
		}

		var yourstr="";
		var comstr="";
		for(i=0; i< playerHand.length; i++){
			yourstr= yourstr+ " " + playerHand[i].rank+ playerHand[i].suit;
		}
		for(i=0; i< computerHand.length; i++){
			comstr= comstr+ " " + computerHand[i].rank+ computerHand[i].suit;
		}

		console.log("Your hand:", yourstr,"(", cardUtils.calculateHand(playerHand),
					 "), Computer hand: ", comstr, "(", cardUtils.calculateHand(computerHand), ")");
		console.log("");

		console.log(cardUtils.determineWinner(cardUtils.calculateHand(playerHand),cardUtils.calculateHand(computerHand)));
		console.log("");

		console.log("There are", deck.length, "cards left in the deck");
		console.log("-----------------------");
		console.log("");
		

}

console.log("Less than 26 cards left. Game over!");
