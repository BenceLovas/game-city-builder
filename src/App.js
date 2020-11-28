import { cards, Sides } from './config/cards'



function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      {cards.map(card => {
        return (
          <div>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="grey" /> 
              {card.elements}
            </svg>
          </div>
        )
      })}

      <div>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        </svg>

      </div>
    </div>
  );
}

export default App;
