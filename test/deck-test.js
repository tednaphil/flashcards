const chai = require('chai');
const expect = chai.expect;
const data = require('./data-test');
const ques = data.testData;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('Deck', function () {
    let card1, card2, card3;
    beforeEach(() => {
        card1 = createCard(ques[0].id, ques[0].question, ques[0].answers, ques[0].correctAnswer);
        card2 = createCard(ques[1].id, ques[1].question, ques[1].answers, ques[1].correctAnswer);
        card3 = createCard(ques[2].id, ques[2].question, ques[2].answers, ques[2].correctAnswer);
    });

    describe('Create Deck', function() {
        it('should be a function', function() {
            expect(createDeck).to.be.a('function');
        });
    
        it('should return an array of card objects', function() {
            let deck = createDeck([card1, card2, card3]);
    
            expect(deck).to.deep.equal([card1, card2, card3]);
            expect(deck[0].id).to.equal(1);
            expect(deck[0].question).to.equal("Who wrote 'Charlie and the Chocolate Factory'?");
            expect(deck[0].answers).to.deep.equal(["Roald Dahl", "J.K. Rowling", "Dr. Seuss"]);
            expect(deck[0].correctAnswer).to.equal("Roald Dahl");
        });
    
        it('should not add duplicate cards', function() {
            let deck = createDeck([card1, card2, card3, card2]);
    
            expect(deck).to.deep.equal([card1, card2, card3]);
        })
    });
    
    describe('Count Cards', function() {
        it('should be a function', function() {
            expect(countCards).to.be.a('function');
        });
    
        it('should return the length of the deck array', function() {
            let deck = createDeck([card1, card2, card3]);
    
            expect(countCards(deck)).to.equal(3);
        });
    });
});