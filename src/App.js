import { useEffect, useState } from 'react';
import { getShuffledCards } from './cards/cardController';
import Card from './cards/component/Card';


const cards = getShuffledCards();
const tableBase = [
  [{x: 0, y: 0}, {x: 100, y: 0}, {x: 200, y: 0}],
  [{x: 0, y: 100}, {x: 100, y: 100, card: cards[0]}, {x: 200, y: 100}],
  [{x: 0, y: 200}, {x: 100, y: 200}, {x: 200, y: 200}],
]
function App() {
  const [table, setTable] = useState(tableBase)
  const [currentCardIndex, setCurrentCardIndex] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [cardsOnTable, setCardsOnTable] = useState([
    <Card key={cards[0].id} x={100} y={100} rotation={rotation} elements={cards[0].elements}/>
  ])
  const createGrid = () => {
    const rectagles = []
    console.log(table)
    for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table[i].length; j++) {
        rectagles.push(<rect x={table[i][j].x} y={table[i][j].y} width="100" height="100" fill="transparent" stroke="black" stroke-width="1"/>);
      }
    }

    return rectagles;
  }
  const [grid, setGrid] = useState(createGrid())
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);


  useEffect(() => {
    setCardsOnTable(() => {
      const cards = []
      for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
          if (table[i][j].card) {
            const el = table[i][j]
            cards.push(<Card key={el.card.id} x={el.x} y={el.y} rotation={el.rotation} elements={el.card.elements}/>)
          }
        }
      }
      return cards;
    })
    setGrid(createGrid())
    setHeight(table.length * 100);
    setWidth(table[0].length * 100);
  }, [table])

  const rotateCard = () => {
    setRotation((prev) => (prev + 90) % 360)
  }

  const onClick = (evt) => {
    const x = Math.floor(evt.nativeEvent.layerX / 100) * 100
    const y = Math.floor(evt.nativeEvent.layerY / 100) * 100

    // validate move
      // validate place - is it next to a tile
      // validate sides



    const addNewCardData = (newTable) => {
        for (let i = 0; i < newTable.length; i++) {
          for (let j = 0; j < newTable[i].length; j++) {
            const newCardData = {
              ...newTable[i][j],
            }
            // add new card data
            if (Math.floor(evt.nativeEvent.layerX / 100) === j && Math.floor(evt.nativeEvent.layerY / 100) === i) {
              newCardData.card = cards[currentCardIndex]
              newCardData.rotation = rotation;
            }
            newTable[i][j] = newCardData;
          }
        }
    }

    const updateCoordinates = (newTable) => {
      for (let i = 0; i < newTable.length; i++) {
        for (let j = 0; j < newTable[i].length; j++) {
          const newCardData = {
            ...newTable[i][j],
            x: j * 100,
            y: i * 100,
          }
          newTable[i][j] = newCardData
        }
      }
    }

    setTable(prevTable => {
      const newTable = prevTable.map(row => [...row]);
      addNewCardData(newTable);
      if (x === 0) {
        // add left column
        for (let i = 0; i < newTable.length; i++) {
          newTable[i] = [null, ...newTable[i]]
        }
      }
      if (y === 0) {
        // add top row
        const newRow = []
        for (let i = 0; i < newTable[0].length; i++) {
          newRow.push(null)
        }
        newTable.unshift(newRow)
      }
      if (x === (prevTable[0].length - 1) * 100) {
        // add right column
        for (let i = 0; i < newTable.length; i++) {
          newTable[i] = [...newTable[i], null]
        }
      }
      if (y === (prevTable.length - 1) * 100) {
        // add bottom row
        const newRow = []
        for (let i = 0; i < newTable[0].length; i++) {
          newRow.push(null)
        }
        newTable.push(newRow)
      }
      updateCoordinates(newTable);
      return newTable;
    })
    setCurrentCardIndex(currentCardIndex + 1)
  }

  const keyDownHandler = (event) => {
    // 82 = r
    if(event.keyCode === 82) {
      rotateCard();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);

    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    };
  }, []);

  return (
    <div style={{ position: 'relative'}}>

      <div>
        <div>Current Card</div>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="rgba(132, 197, 186, 0.52)" /> 
          <g transform={'rotate(' + rotation + ')'} transform-origin="center">
            {cards[currentCardIndex].elements}

          </g>
        </svg>
        <button onClick={() => rotateCard()}>ROTATE (R)</button>
      </div>
      <div style={{ position: 'absolute'}} >
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
          {grid}
        </svg>
        
      </div>
      <div style={{ position: 'absolute'}} >
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
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
