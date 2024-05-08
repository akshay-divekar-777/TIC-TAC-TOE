import { useState } from "react"

import GameBoard from "./Components/GameBoard.jsx"
import Player from "./Components/Player.jsx"

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer ((curActivePlayer) => curActivePlayer=== 'X' ? 'O' : 'X')
  }
  

  return (

    <main>
          <h1>Tic-Tac-Toe</h1>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName = "Player 1" symbol="X" isActive={ activePlayer === 'X'}/>
          <Player initialName = "Player 2" symbol="O" isActive={ activePlayer === 'O'}/>

        </ol>

       <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
