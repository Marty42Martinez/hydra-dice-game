const inputSpace = document.getElementById('user-input');

const playerForm = document.createElement('form');
const playerNameLabel = document.createElement('label');
playerNameLabel.for = 'playerName';
playerNameLabel.textContent = 'Enter your name: ';

const playerNameInput = document.createElement('input');
playerNameInput.type = 'text';
playerNameInput.name = 'playerName';

const opponentNameLabel = document.createElement('label');
opponentNameLabel.for = 'opponentName';
opponentNameLabel.textContent = 'Select an Opponent:';

const opponentNameSelect = document.createElement('select');
const opponentList = ['Darmak Oakhammer', 'Stor', 'Peren SlyShadow', 'Silvio Kana', 'Ipa Genjakin'];
for(let i = 0; i < opponentList.length; i++) {
  const opponentOption = document.createElement('option');
  opponentOption.value = opponentList[i];
  opponentOption.textContent = opponentList[i];
  opponentNameSelect.appendChild(opponentOption);
}

const startButton = document.createElement('button');
startButton.type = 'submit';
startButton.textContent = 'Play Hydra!';

playerForm.appendChild(playerNameLabel);
playerForm.appendChild(playerNameInput);
playerForm.appendChild(opponentNameLabel);
playerForm.appendChild(opponentNameSelect);
playerForm.appendChild(startButton);
inputSpace.appendChild(playerForm);



playerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('you got clicked!');
});
