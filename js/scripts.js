


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
  return newDeck;
}

function makePlayer(){
  var player = [];
  return player;
}

function makeDealer(){
  var dealer = [];
  return dealer;
}

function giveCard(deck, player){
  player.push(deck[0]);
  deck.splice(0, 1);
}

function showPlayerCards(player){
  var playerVisibleCards = []
  for(var i = 0; i < player.length; i ++){
    var card = player [i];
    playerVisibleCards.push(card);
  }
  return playerVisibleCards;
}

function showDealerCards(dealer){
  var dealerVisibleCards = []
  for(var i = 1; i < dealer.length; i ++){
    var card = dealer [i];
    dealerVisibleCards.push(card);
  }
  return dealerVisibleCards;
} //this is the VISIBLE cards the dealer has. One is hidden, it's not in the dealerVisibleCards array

function getNumericValue(card){
  var numValue;
  if (card[0] === "two"){
    numValue = 2;
  }

  if (card[0] === "three"){
    numValue = 3;
  }

  if (card[0] === "four"){
    numValue = 4;
  }

  if (card[0] === "five"){
    numValue = 5;
  }

  if (card[0] === "six"){
    numValue = 6;
  }

  if (card[0] === "seven"){
    numValue = 7;
  }

  if (card[0] === "eight"){
    numValue = 8;
  }

  if (card[0] === "nine"){
    numValue = 9;
  }

  if (card[0] === "ten"){
    numValue = 10;
  }

  if (card[0] === "jack"){
    numValue = 10;
  }

  if (card[0] === "queen"){
    numValue = 10;
  }

  if (card[0] === "king"){
    numValue = 10;
  }

  if (card[0] === "ace"){
    numValue = 11;
  }

  return numValue;
}
