const chai = require('chai');
const expect = chai.expect;
const data = require('./data-test');
const ques = data.testData;

const {createCard} = require('../src/card');
const {createDeck} = require('../src/deck');
const {printMessage} = require('../src/game');

describe('Print Message', function() {

    it('should print the beginning game message', function() {
    let card1 = createCard(ques[0].id, ques[0].question, ques[0].answers, ques[0].correctAnswer);
    let card2 = createCard(ques[1].id, ques[1].question, ques[1].answers, ques[1].correctAnswer);
    let card3 = createCard(ques[2].id, ques[2].question, ques[2].answers, ques[2].correctAnswer);
    let card4 = createCard(ques[3].id, ques[3].question, ques[3].answers, ques[3].correctAnswer);
    let deck = createDeck([card1, card2, card3, card4]);

        expect(printMessage(deck)).to.equal(`Welcome to FlashCards! You are playing with 4 cards.`)
    });
});