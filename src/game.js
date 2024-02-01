const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const {createCard} = require('./card');
const {createDeck, countCards} = require('./deck');
const {createRound} = require('./round');


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
  return (`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.`);
};

function printQuestion(round) {
  util.main(round);
};

function start() {
  let cards = prototypeQuestions.map((object) => {
    return createCard(object.id, object.question, object.answers, object.correctAnswer);
  });
  let deck = createDeck(cards);
  let round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
};

module.exports = {
  printMessage,
  printQuestion,
  start
};
