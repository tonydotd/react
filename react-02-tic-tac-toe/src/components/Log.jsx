function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.row}${turn.col}`}>
          {turn.player} selected {turn.row}, {turn.col}
        </li>
      ))}
    </ol>
  )
}

export default Log