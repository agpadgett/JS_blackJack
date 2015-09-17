// function card(val, suit){
//   this.suit = suit;
//   this.val = val;
//
//   this.toString = function(){
//     this.val + " of " + this.suit;
//   }
// }

function makeDeck(){
var vals = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

var suits = ["hearts", "clubs", "spades", "diamonds"];

var deck = [];
for(var i = 0; i < vals.length; i ++){
  for(var j = 0; j < suits.length; j ++){
    var card = [vals[i], suits[j]];
    deck.push(card);
  }

}
console.log(deck);
return deck;
}
//
// function randomNumber(){
//   return Math.random() *(1-53) + 1;
// }
//
function shuffleDeck(deck) {

  var newDeck =[];
  for(var i = 0; i < deck.length; i++){
    var rand = Math.floor(Math.random()* (i+1));
    newDeck[i] = newDeck[rand];
    newDeck[rand] = deck[i];
  }
  console.log(newDeck);
  return newDeck;
}
