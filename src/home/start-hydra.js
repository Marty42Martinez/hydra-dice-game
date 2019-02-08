
function startHydra(playerObj, opponentObj) {
  const rollSpace = document.getElementById('roll-space');
  const messageSpace = document.getElementById('message-space');
  const messageDisplay = document.createElement('p');
  const diceOptions = [4,6,8,10,12,20];

  messageSpace.appendChild(messageDisplay);

  const rollButton = document.createElement('button');

  rollButton.textContent = 'Roll!';
  rollSpace.appendChild(rollButton);

  playerObj.maxRoll = rollDice(playerObj.maxRoll);
  // opponentObj.maxRoll = rollDice(opponentObj.maxRoll);
  opponentObj.maxRoll = 2;
  
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

function rollDice(arg) {
  return arg + 1;
}
export default startHydra;