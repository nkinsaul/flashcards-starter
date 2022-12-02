const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');
const prototypeData = require('../src/data.js');

describe('Game', function() {
    let testcounter = 0;
    beforeEach(function () {
        testcounter ++;
        console.log(`Test #${testcounter}`);
    });

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    });

    it('should be a new instance of Game', function() {
        const newGame = new Game();

        expect(newGame).to.be.an.instanceOf(Game);
    });

    it('should add new cards to a deck', function() {
        const newGame = new Game()
    })
})