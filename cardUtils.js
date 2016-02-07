

function determineWinner (player, computer){
	if((player>21&&computer>21) || player==computer)
		return "Tie";
	else if(player>21)
		return "Computer Wins";
	else if(computer>21)
		return "Player Wins";
	else 
		return player>computer?"Player Wins":"Computer Wins";
}


function generateCards(){
	var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "J", "Q", "K");
    var suits = new Array("♠", "♥", "♦", "♣");

    var deck = new Array(52);

    for(i=0; i< suits.length; i++){
    	for(j=0; j< ranks.length; j++){
    		var card=null;
    		deck[i*ranks.length+j]= card={ suit: suits[i], rank: ranks[j]};
    	}
    }

    return deck;
}

function shuffle(deck){

	 var newDeck = [];
    	for (var i = 0; i < deck.length; i++) {    
        var rand = Math.floor(Math.random() * (i + 1));  
        newDeck[i] = newDeck[rand];
        newDeck[rand] = deck[i];
    }
    return newDeck;


}

function calculateHand(deck){
	var total=0;
	var counta=0;
	for(i=0; i< deck.length; i++){
		var rank = deck[i].rank;
		if(rank=="J" || rank=="Q" ||rank=="K")
			total+=10;
		else if(rank=="A"){
			total+=11;
			counta++;
		}
		else
			total+=Number(rank);
	}
	if( total> 21 && counta >0){
		while(total> 21 && counta >0){
			total-=10;
			counta--;
		}
	}
	return total;
}


exports.determineWinner= determineWinner;
exports.generateCards = generateCards;
exports.shuffle = shuffle;
exports.calculateHand = calculateHand;