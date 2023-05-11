import React, { useState } from 'react';

function GameList() {
  const [selectedGames, setSelectedGames] = useState([]);
  const games = ['Hi Stricker', 'Puch Challange', 'Bow & Arrow', 'Catch Fish'];

  function handleGameSelection(event) {
    const game = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedGames([...selectedGames, game]);
    } else {
      setSelectedGames(selectedGames.filter(selectedGame => selectedGame !== game));
    }
  }

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" value={game} checked={selectedGames.includes(game)} onChange={handleGameSelection} />
              {game}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;