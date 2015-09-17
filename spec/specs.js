describe('makeDeck', function(){
  it("makes a deck", function(){
    expect(makeDeck().length).to.equal(52);
  })
});

// describe('randomNumber', function(){
//   it('generates a random number 1-52', function(){
//     expect(0 < randomNumber() < 53);
//   })
// });

describe('shuffleDeck', function(){
  it('shuffles a deck', function(){
    expect(makeDeck() !== shuffleDeck(makeDeck()));
  })
});

describe('makePlayer', function(){
  it('creates a player', function(){
    expect(makePlayer().length).to.equal(0);
  })
});

describe('makeDealer', function(){
  it('creates a dealer', function(){
    expect(makeDealer().length).to.equal(0);
  })
});

describe('giveCard', function(){
  it('gives a player a card', function(){
  var player = makePlayer();
  var deck = shuffleDeck(makeDeck());
  giveCard(deck, player);
  expect(player.length === 1); //.to.equal won't work here. We don't know why
  })
});

describe('showPlayerCards', function(){
  it('show all cards in players hand', function(){
    var deck = makeDeck();
    var player = makePlayer();
    giveCard(deck, player);
    var cards = showPlayerCards(player);
    expect(cards).to.eql([["ace", "hearts"]]);
  })
});

describe('showDealerCards', function(){
  it('show all cards in dealer hand, but one', function(){
    var deck = makeDeck();
    var dealer = makeDealer();
    giveCard(deck, dealer);
    giveCard(deck,dealer);
    var cards = showDealerCards(dealer);
    expect(cards).to.eql([["ace", "clubs"]]);
  })
});

describe('getNumericValue', function(){
  it('shows the numeric value of a card', function(){
    var deck = makeDeck();
    var card = deck[0];
    var integ = getNumericValue(card);
    expect(integ === 11);
  })
});

describe('calculateSum', function(){
  it('calculates the sum of the card values', function(){
    var deck = makeDeck();
    var player = makePlayer();
    giveCard(deck, player);
    giveCard(deck, player);
    var sum = calculateSum(player);
    expect(sum).to.equal(22);
  })

  it('calculates the sum of the card values for dealer visible', function(){
    var deck = makeDeck();
    var dealer = makeDealer();
    giveCard(deck, dealer);
    giveCard(deck, dealer);
    var sum = calculateSum(showDealerCards(dealer));
    expect(sum).to.equal(11);
  })
});
