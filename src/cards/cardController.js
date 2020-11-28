import { cards, Sides } from './cards'
import { v4 as uuidv4 } from 'uuid';

export const getShuffledCards = () => {
    const deck = createDeck();
    return shuffleDeck(deck);
}

const createDeck = () => {
    const deck = []
    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];
        for (let j = 0; j < currentCard.count; j++) {
            deck.push({
                id: uuidv4(),
                ...currentCard
            });
        }
    }

    return deck;
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleDeck(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }