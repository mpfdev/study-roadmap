let scorePlayerOne = 0;
let scorePlayerTwo = 0;

let btnPlayerOne = document.getElementById('updateP1');
let btnPlayerTwo = document.getElementById('updateP2');
let btnReset = document.getElementById('resetScore');

//Logic when player One scores!
btnPlayerOne.addEventListener('click', () => {
  scorePlayerOne++;

  document.querySelector('#p1Score').textContent = scorePlayerOne;

  if (scorePlayerOne === 3) {
    document.querySelector('#p1Score').style.color = 'olive';
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
  }
});

//Logic when player two scores!
btnPlayerTwo.addEventListener('click', () => {
  scorePlayerTwo++;

  document.querySelector('#p2Score').textContent = scorePlayerTwo;

  if (scorePlayerTwo === 3) {
    document.querySelector('#p2Score').style.color = 'red';
    btnPlayerOne.disabled = true;
    btnPlayerTwo.disabled = true;
  }
});

//Logic to reset the game!
btnReset.addEventListener('click', () => {
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  document.querySelector('#p1Score').textContent = scorePlayerOne;
  document.querySelector('#p2Score').textContent = scorePlayerTwo;
  document.querySelector('#p1Score').style.color = 'black';
  document.querySelector('#p2Score').style.color = 'black';
  btnPlayerOne.disabled = false;
  btnPlayerTwo.disabled = false;
});
