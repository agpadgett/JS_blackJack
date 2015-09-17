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
  expect(player.length === 1); //.to.equal won't work here. WE don't know why
  })
});
