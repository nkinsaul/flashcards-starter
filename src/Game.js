const data = require('./data');
const prototypeQuestions = data.prototypeData;

const util = require('./util');
const Turn = require('./Turn');
const Deck = require('./Deck');
const Card = require('./Card')
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound
  }

  start() {
    const newCards = data.map(card => {
      return new Card(card);
    });
    const deck = new Deck(newCards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;