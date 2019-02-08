
function startHydra(playerObj, opponentObj) {
  const rollSpace = document.getElementById('roll-space');
  const messageSpace = document.getElementById('message-space');
  const pRollDisplay = document.getElementById('player-roll');
  const oRollDisplay = document.getElementById('opponent-roll');
  const messageDisplay = document.createElement('p');
  const diceOptions = [4,6,8,10,12,20];

  messageSpace.appendChild(messageDisplay);

  const rollButton = document.createElement('button');

  rollButton.textContent = 'Roll!';
  rollSpace.appendChild(rollButton);

  playerObj.maxRoll = rollDice(playerObj.diceFace, pRollDisplay);
  opponentObj.maxRoll = rollDice(opponentObj.diceFace, oRollDisplay);
  
  if(playerObj.maxRoll === opponentObj.maxRoll) {
    messageDisplay.textContent = 'Tie! Roll Again!';
  } else if(playerObj.maxRoll < opponentObj.maxRoll) {
    playerObj.diceFace = diceOptions[(diceOptions.indexOf(playerObj.diceFace) + 1)];
    messageDisplay.textContent = playerObj.name + ' wins the round';
  } else {
    opponentObj.diceFace = diceOptions[(diceOptions.indexOf(opponentObj.diceFace) + 1)];
    messageDisplay.textContent = opponentObj.name + ' wins the round';
  }
  

  // while(playerObj.rollMax < 13 || opponentObj.rollMax < 13) {

  // }
}

function rollDice(diceFace, node) {
  const rollValue = Math.floor(Math.random() * (diceFace - 1)) + 1;
  node.textContent = rollValue;
  return rollValue;
}
export default startHydra;