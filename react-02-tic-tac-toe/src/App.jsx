import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function getActivePlayer(gameTurns) {
  let currentPlayerSymbol = gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X';
  return currentPlayerSymbol;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArr => [...innerArr])];

  for (const turn of gameTurns) {
    const { row, col, player } = turn
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSymbol && firstSymbol === secondSymbol && secondSymbol === thirdSymbol) {
      winner = players[firstSymbol];
      break;
    }
  }
  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  let winner = deriveWinner(gameBoard, players);

  let isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => [{
      row: rowIndex,
      col: colIndex,
      player: activePlayer
    }, ...prevTurns])
  }

  function handleRestart() {
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: newName }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player name={Player.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
        </ol>

        {(winner || isDraw) && <GameOver winner={winner} restart={handleRestart} />}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} winner={winner} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
