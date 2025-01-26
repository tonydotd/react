import { useState } from "react"

function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false)
  const [player, setPlayer] = useState({ name, symbol })

  function handleEditClick() {
    setIsEditing(editing => !editing)

    if (isEditing) {
      onChangeName(symbol, player.name)
    }
  }

  function handleNameChange(e) {
    const { name, value } = e.target;
    setPlayer(prevPlayer => ({ ...prevPlayer, [name]: value }));
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ?
          <input required name="name" value={player.name} onChange={handleNameChange} /> :
          <span className='player-name'>{player.name}</span>
        }
        <span className="player-symbol">{player.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player