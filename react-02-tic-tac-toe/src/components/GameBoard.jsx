const deepCopy = (val) => {
  if (val === null) {
    return null;
  }
  if (!Array.isArray(val) && typeof val !== 'object') {
    return val;
  }
  if (Array.isArray(val)) {
    const arr = [];
    for (const item of val) {
      arr.push(deepCopy(item));
    }
    return arr;
  } else if (typeof val === 'object') {
    const obj = {};
    for (const key in val) {
      obj[key] = deepCopy(val[key]);
    }
    return obj;
  }
}

function GameBoard({ board, onSelectSquare }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

export default GameBoard