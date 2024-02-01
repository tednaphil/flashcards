const chai = require('chai');
const expect = chai.expect;
const data = require('./data-test');
const ques = data.testData;

const {createCard} = require('../src/card');
const {createDeck} = require('../src/deck');
const {evaluateGuess, createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('Round', function() {
  let card1, card2, card3, card4, deck, round;
  beforeEach(() => {
    card1 = createCard(ques[0].id, ques[0].question, ques[0].answers, ques[0].correctAnswer);
    card2 = createCard(ques[1].id, ques[1].question, ques[1].answers, ques[1].correctAnswer);
    card3 = createCard(ques[2].id, ques[2].question, ques[2].answers, ques[2].correctAnswer);
    card4 = createCard(ques[3].id, ques[3].question, ques[3].answers, ques[3].correctAnswer);
    deck = createDeck([card1, card2, card3, card4]);
    round = createRound(deck);
    });

    describe('Evaluate Guess', function(){

        it('should be a function', function() {
            expect(evaluateGuess).to.be.a('function');
        });
    
        it('should give feedback if guess is correct', function() {
            let guess = 'Maurice Sendak';
            
            expect(evaluateGuess(guess, card4)).to.equal('Correct!');
        });
    
        it('should give feedback if guess is incorrect', function() {
            let guess = 'Shel Silverstein';
    
            expect(evaluateGuess(guess, card4)).to.equal('Incorrect!');
        });
    
        it('should notify user if invalid answer is guessed', function() {
            let guess = null;
    
            expect(evaluateGuess(guess, card4)).to.equal('Please choose a valid option!');
        });
    });
    
    describe('Create Round', function() {
        it('should create a round and its properties', function() {

            expect(round.deck).to.deep.equal([card1, card2, card3, card4]);
            expect(round.currentCard).to.deep.equal({
                     id: 1,
                     question: "Who wrote 'Charlie and the Chocolate Factory'?",
                     answers: ["Roald Dahl", "J.K. Rowling", "Dr. Seuss"],
                     correctAnswer: "Roald Dahl"
                   });
            expect(round.turns).to.equal(0);
            expect(round.incorrectGuesses).to.deep.equal([]);
        });
    });
    
    describe('Take Turn', function() {
        it('should return feedback if the guess for the round is correct', function() {
            let turn = takeTurn('Roald Dahl', round);

            expect(turn).to.equal('Correct!');
        });
        
        it('should return feedback if the guess for the round is incorrect', function() {
            let turn = takeTurn('Dr. Seuss', round);

            expect(turn).to.equal('Incorrect!');
        });

        it('should record incorrect guesses', function() {
            let turn = takeTurn('J.K. Rowling', round);

            expect(turn).to.equal('Incorrect!')
            expect(round.incorrectGuesses).to.deep.equal([1]);
        });

        it('should return feedback if the guess is invalid', function() {
            let invalidTurn = takeTurn(null, round);

            expect(invalidTurn).to.equal('Please choose a valid option!');
        });

        it('should count turns', function() {
            takeTurn('Roald Dahl', round);

            expect(round.turns).to.equal(1);
        });

        it('should only count the turn if a valid answer choice is guessed', function() {
            takeTurn('Roald Dahl', round);
            takeTurn(null, round);

            expect(round.turns).to.equal(1);
            expect(round.incorrectGuesses).to.deep.equal([])
        });

        it('should set the next card in the deck as the current card after a turn', function() {
            let turn1 = takeTurn('Roald Dahl', round);
            let turn2 = takeTurn('Errol', round);
            let invalidTurn = takeTurn(null, round);
            let turn3 = takeTurn('Middle-earth', round);

            expect(round.currentCard).to.deep.equal(card4)
            expect(turn3).to.equal('Incorrect!');
            expect(round.turns).to.equal(3);
            expect(round.incorrectGuesses).to.deep.equal([2, 3])
        });
    });

    describe('Calculate Percent Correct', function() {

        it('should return the percentage of correct guesses', function() {
            takeTurn('Roald Dahl', round);
            takeTurn('Errol', round);
            takeTurn(null, round);
            takeTurn('Middle-earth', round);
            takeTurn('Maurice Sendak', round);
            
            expect((calculatePercentCorrect(round))).to.equal(50);
        });
    });
    
    describe('End Round', function() {
        
        it('should print the percentage of correct answers to the console', function() {
            takeTurn('Roald Dahl', round);
            takeTurn('Errol', round);
            takeTurn(null, round);
            takeTurn('Middle-earth', round);
            takeTurn('Maurice Sendak', round);

            expect((endRound(round))).to.equal('**Round over!** You answered 50% of the questions correctly!');
        });
    
    });
});

