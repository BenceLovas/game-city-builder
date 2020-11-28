import { getShuffledCards } from './cards/cardController'
import {useState} from 'react';

const cards = getShuffledCards();

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [cardsOnTable, setCardsOnTable] = useState([])

  const createTable = () => {
    const rectagles = []
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        rectagles.push(<rect x={i * 100} y={j * 100} width="100" height="100" fill="transparent" stroke="black" stroke-width="1"/>);
      }
    }

    return rectagles;
  }

  const onClick = (evt) => {
    const x = Math.floor(evt.nativeEvent.layerX / 100) * 100
    const y = Math.floor(evt.nativeEvent.layerY / 100) * 100
    setCardsOnTable([
      ...cardsOnTable, 
      <svg x={x} y={y} width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ddd" /> 
        {cards[currentCardIndex].elements}
      </svg>
    ])

  }

  return (
    <div style={{ position: 'relative', marginLeft: 300}}>

      <div>
        <div>Current Card</div>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#ddd" /> 
          {cards[currentCardIndex].elements}
        </svg>
        <button onClick={() => setCurrentCardIndex(currentCardIndex + 1)} disabled={currentCardIndex >= cards.length - 1}>NEXT</button>
      </div>
      <div style={{ position: 'absolute'}} >
        <svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
          {createTable()}
        </svg>
        
      </div>
      <div style={{ position: 'absolute'}} >
        <svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
          {cardsOnTable}
        </svg>
        
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        

      </div>



    </div>
  );
}

/*
        {cards.map(card => {
          return (
            <div>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#ddd" /> 
                {card.elements}
              </svg>
            </div>
          )
        })}
*/

export default App;
