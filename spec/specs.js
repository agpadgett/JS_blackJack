describe('makeDeck', function(){
  it("makes a deck", function(){
    expect(makeDeck().length).to.equal(52);
  })
});

describe('randomNumber', function(){
  it('generates a random number 1-52', function(){
    expect(0 < randomNumber() < 53);
  })
});
