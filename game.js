let hpCity1 = 100;
let hpCity2 = 100;

function attackCity(cityNumber) {
  if (cityNumber === 1) {
    hpCity1 -= getRandomDamage();
    document.getElementById('hp-city1').textContent = hpCity1;
    checkGameOver();
  } else if (cityNumber === 2) {
    hpCity2 -= getRandomDamage();
    document.getElementById('hp-city2').textContent = hpCity2;
    checkGameOver();
  }
}

function getRandomDamage() {
  return Math.floor(Math.random() * 10) + 1;
}

function checkGameOver() {
  if (hpCity1 <= 0) {
    alert('Cidade 2 venceu!');
    resetGame();
  } else if (hpCity2 <= 0) {
    alert('Cidade 1 venceu!');
    resetGame();
  }
}

function resetGame() {
  hpCity1 = 100;
  hpCity2 = 100;
  document.getElementById('hp-city1').textContent = hpCity1;
  document.getElementById('hp-city2').textContent = hpCity2;
}
