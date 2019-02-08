function createHydraSpace(playerName,oppName) {
  const gameSpace = document.getElementById('game-space');
  const rollSpace = document.createElement('div');
  const playerSpace = document.createElement('div');
  const oppSpace = document.createElement('div');
  const rollButton = document.createElement('button');
  const displayPName = document.createElement('p');
  const displayOName = document.createElement('p');
  const displayPRoll = document.createElement('p');
  const displayORoll = document.createElement('p');

  rollButton.textContent = 'Roll!';
  rollSpace.id = 'roll-space';

  displayPName.id = 'player-name';
  displayOName.id = 'opponent-name';
  displayPName.textContent = playerName;
  displayOName.textContent = oppName;

  displayPRoll.id = 'player-roll';
  displayORoll.id = 'opponent-roll';

  rollSpace.appendChild(rollButton);
  gameSpace.appendChild(rollSpace);
  
  playerSpace.appendChild(displayPName);
  playerSpace.appendChild(displayPRoll);
  oppSpace.appendChild(displayOName);
  oppSpace.appendChild(displayORoll);

  gameSpace.appendChild(playerSpace);
  gameSpace.appendChild(oppSpace);
  

  playerSpace.classList.add('play-space');
  oppSpace.classList.add('play-space');

  rollButton.addEventListener('click', function() {
    console.log('clickin is a passion')
    //rollDice(playerObj,opponentObj);
  });

}

// function createPlayer(playerName) {

// }
export default createHydraSpace;