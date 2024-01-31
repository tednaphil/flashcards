const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const {createCard} = require('./card');

let cards = prototypeQuestions.map((object) => {
  return createCard(object.id, object.question, object.answers, object.correctAnswer);
});

// console.log(cards)

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion };
