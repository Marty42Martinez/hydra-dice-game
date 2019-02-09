
function startHydra(playerObj, opponentObj) {
  const rollSpace = document.getElementById('roll-space');
  const messageSpace = document.getElementById('message-space');
  const pRollDisplay = document.getElementById('player-roll');
  const oRollDisplay = document.getElementById('opponent-roll');
  const pDiceDisplay = document.getElementById('player-dice');
  const oDiceDisplay = document.getElementById('opponent-dice');
  const messageDisplay = document.createElement('p');

  messageSpace.appendChild(messageDisplay);

  const rollButton = document.createElement('button');

  rollButton.textContent = 'Roll!';
  rollSpace.appendChild(rollButton);

  playerObj.lastRoll = rollDice(playerObj.diceFace, pRollDisplay);
  opponentObj.lastRoll = rollDice(opponentObj.diceFace, oRollDisplay);
  let gameState = compareRolls(playerObj, opponentObj, messageDisplay);
  pDiceDisplay.textContent = 'd' + playerObj.diceFace;
  oDiceDisplay.textContent = 'd' + opponentObj.diceFace;
  
  
  rollButton.addEventListener('click', function() {
    playerObj.lastRoll = rollDice(playerObj.diceFace, pRollDisplay);
    opponentObj.lastRoll = rollDice(opponentObj.diceFace, oRollDisplay);
    gameState = compareRolls(playerObj, opponentObj, messageDisplay);
    pDiceDisplay.textContent = 'd' + playerObj.diceFace;
    oDiceDisplay.textContent = 'd' + opponentObj.diceFace;
    if(gameState === 'Game Over') {
      rollButton.remove();
    }
  });
  
}

function rollDice(diceFace, node) {
  const rollValue = Math.floor(Math.random() * (diceFace - 1)) + 1;
  node.textContent = rollValue;
  return rollValue;
}

function compareRolls(player, opponent, messageNode) {
  const diceOptions = [4, 6, 8, 10, 12, 20];
  if(player.lastRoll === opponent.lastRoll) {
    messageNode.textContent = 'Tie! Roll Again!';
  } else if(player.lastRoll > 13) {
    messageNode.textContent = player.name + ' wins Hydra!';
    return 'Game Over';
  } else if(opponent.lastRoll > 13) {
    messageNode.textContent = opponent.name + ' wins Hydra!';
    return 'Game Over';
  } else if(player.lastRoll < opponent.lastRoll) {
    if(player.diceFace < 20) {
      player.diceFace = diceOptions[(diceOptions.indexOf(player.diceFace) + 1)];
    }
    messageNode.textContent = player.name + ' wins the round';
  } else {
    if(opponent.diceFace < 20) {
      opponent.diceFace = diceOptions[(diceOptions.indexOf(opponent.diceFace) + 1)];
    }
    messageNode.textContent = opponent.name + ' wins the round';
  }

}
export default startHydra;