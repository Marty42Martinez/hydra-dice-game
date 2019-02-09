import startHydra from './start-hydra.js';
function createHydraSpace(playerName, oppName) {
  const gameSpace = document.getElementById('game-space');
  const rollSpace = document.createElement('div');
  const playerSpace = document.createElement('div');
  const oppSpace = document.createElement('div');
  const rollButton = document.createElement('button');
  const displayPName = document.createElement('p');
  const displayOName = document.createElement('p');
  const displayPRoll = document.createElement('p');
  const displayORoll = document.createElement('p');
  const displayPDice = document.createElement('p');
  const displayODice = document.createElement('p');


  const playerObj = createPlayer(playerName);
  const opponentObj = createPlayer(oppName);

  rollButton.textContent = 'Start Game!';
  rollSpace.id = 'roll-space';

  displayPName.id = 'player-name';
  displayOName.id = 'opponent-name';
  displayPName.textContent = playerName;
  displayOName.textContent = oppName;
  displayPName.style.fontSize = '20px';
  displayOName.style.fontSize = '20px';

  displayPRoll.id = 'player-roll';
  displayORoll.id = 'opponent-roll';
  displayPRoll.style.fontSize = '40px';
  displayORoll.style.fontSize = '40px';

  displayPDice.id = 'player-dice';
  displayODice.id = 'opponent-dice';


  rollSpace.appendChild(rollButton);
  gameSpace.appendChild(rollSpace);
  
  playerSpace.appendChild(displayPName);
  playerSpace.appendChild(displayPRoll);
  playerSpace.appendChild(displayPDice);
  oppSpace.appendChild(displayOName);
  oppSpace.appendChild(displayORoll);
  oppSpace.appendChild(displayODice);

  gameSpace.appendChild(playerSpace);
  gameSpace.appendChild(oppSpace);
  

  playerSpace.classList.add('play-space');
  oppSpace.classList.add('play-space');

  rollButton.addEventListener('click', function() {
    rollButton.remove();
    startHydra(playerObj, opponentObj);
  });

}

function createPlayer(playerName) {
  const gameObject = {
    name: playerName,
    diceFace: 4,
    maxRoll: 0,
    lastRoll: 0
  };
  return gameObject;
}
export default createHydraSpace;