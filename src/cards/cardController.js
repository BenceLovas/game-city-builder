import { cards, cardFirst } from "./cards";
import { v4 as uuidv4 } from "uuid";

export const getShuffledCards = () => {
  const deck = createDeck();
  const shuffledDeck = shuffleDeck(deck);
  return [
    // starting card is always fixed in the game
    {
      id: uuidv4(),
      ...cardFirst,
    },
    ...shuffledDeck,
  ];
};

// creates x amout of cards from the same type
const createDeck = () => {
  const deck = [];
  for (let i = 0; i < cards.length; i++) {
    const currentCard = cards[i];
    for (let j = 0; j < currentCard.count; j++) {
      deck.push({
        id: uuidv4(),
        ...currentCard,
      });
    }
  }

  return deck;
};

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleDeck = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

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
};
