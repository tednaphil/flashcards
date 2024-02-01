const chai = require('chai');
const expect = chai.expect;
const data = require('./data-test')
const ques = data.testData

const { createCard } = require('../src/card');

describe('Create Card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(ques[0].id, ques[0].question, ques[0].answers, ques[0].correctAnswer);
    expect(card.id).to.equal(1);
    expect(card.question).to.equal("Who wrote 'Charlie and the Chocolate Factory'?");
    expect(card.answers).to.deep.equal(["Roald Dahl", "J.K. Rowling", "Dr. Seuss"]);
    expect(card.correctAnswer).to.equal("Roald Dahl");
  }); 
  
  it('should create a different card with different properties', function() {
    const card = createCard(ques[1].id, ques[1].question, ques[1].answers, ques[1].correctAnswer);

    expect(card.id).to.equal(2);
    expect(card.question).to.equal("What is the name of Harry Potter's pet owl?");
    expect(card.answers).to.deep.equal(["Hedwig", "Errol", "Crookshanks"]);
    expect(card.correctAnswer).to.equal("Hedwig")
  });
});
