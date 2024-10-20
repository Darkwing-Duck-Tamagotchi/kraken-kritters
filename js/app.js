// Main JS Application File


let availableCharacters = [{
    species: 'string',
    // imageUrl: image1.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    // imageUrl: image2.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    // imageUrl: image3.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    // imageUrl: image4.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    // imageUrl: image5.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
}
]
console.log(availableCharacters)
function randomCharacter() {
    let randomNum = Math.floor(Math.random() * availableCharacters.length - 1)
    pet = availableCharacters[randomNum];
}


function endGame() {
    gameIsActive = false;
}

let pet = {
    species: 'string',
    // imageUrl: image.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
}

function checkStats() {
    if ((pet.stats.hunger <= 0) || (pet.stats.cleanliness <=0) || (pet.stats.energy <= 0) || (pet.stats.happiness <=0) && gameIsActive) {
        endGame();
    }
}
function decreaseStats () {
   while (gameIsActive) {
    pet.stats.hunger -= Math.floor(Math.random() * 5) + 1;
    pet.stats.cleanliness -= Math.floor(Math.random() * 5) + 1; 
    pet.stats.energy -= Math.floor(Math.random() * 5) + 1;
    pet.stats.happiness -= Math.floor(Math.random() * 5) + 1;
    checkStats();
   }
}

setInterval(decreaseStats, 10000);


let gameIsActive = false;
function startGame() {
    gameIsActive = true;
    console.log(pet);
}

document.getElementById("start-game").addEventListener("click", startGame)



function increaseStats(statType) {
    switch(statType) {
        case 'hunger':
            if (pet.stats.hunger < 100) {
                pet.stats.hunger += Math.floor(Math.random() * 5) + 1;
            }
            break;
        case 'happiness':
            if (pet.stats.happiness < 100) {
                pet.stats.happiness += Math.floor(Math.random() * 5) + 1;
            }
            break;
        case 'cleanliness':
            if (pet.stats.cleanliness < 100) {
                pet.stats.cleanliness += Math.floor(Math.random() * 5) + 1;
            }
            break;
        case 'energy':
            if (pet.stats.energy < 100) {
                pet.stats.energy += Math.floor(Math.random() * 5) + 1;
            }
            break;
        default:
            console.log("Nothing to increase");
            return;
    }
}

document.getElementById('feed-button').addEventListener('click', increaseStats('hunger'));
;
document.getElementById('pet-button').addEventListener('click', increaseStats('happiness'));
;
document.getElementById('clean-button').addEventListener('click', increaseStats('cleanliness'));
;
document.getElementById('play-button').addEventListener('click', increaseStats('energy'));