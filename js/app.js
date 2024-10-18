// Main JS Application File

function endGame() {
    gameIsActive = false;
}

let pet = {
    species: 'string',
    imageUrl: image.jpg,
    stats: {
             hunger: 100,
             happiness: 100,
             cleanliness: 100,
             energy: 100,
       } 
}

function checkStats() {
    if (pet.stats.hunger <= 0 && gameIsActive) {
        endGame();
    }
}
function decreaseHunger () {
   while (gameIsActive) {
    pet.stats.hunger -= Math.floor(Math.random() * 5) + 1;
    checkStats();
   }
}

setInterval(decreaseHunger, 10000);


let gameIsActive = false;
function startGame() {
    gameisActive = true;
}

document.getElementById().addEventListener(click, startGame())


