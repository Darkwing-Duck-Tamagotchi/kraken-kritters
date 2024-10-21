// Main JS Application File


let availableCharacters = [{
    species: 'a',
    // imageUrl: image1.jpg,
},
{
    species: 'b',
    // imageUrl: image2.jpg,
},
{
    species: 'c',
    // imageUrl: image3.jpg,
},
{
    species: 'd',
    // imageUrl: image4.jpg,
},
{
    species: 'e',
    // imageUrl: image5.jpg,
}
]
// console.log(availableCharacters)
function randomCharacter() {
    let randomNum = Math.floor(Math.random() * availableCharacters.length)
    console.log("Result of Random Number", randomNum)
    return availableCharacters[randomNum];
}


function endGame(pet) {
    gameIsActive = false;
    delete pet.stats;
    console.log("Game over", pet)
}

function checkStats(pet) {
    if ((pet.stats.hunger <= 0) || (pet.stats.cleanliness <=0) || (pet.stats.energy <= 0) || (pet.stats.happiness <=0) && gameIsActive) {
        endGame(pet);
    }
}
function decreaseStats(pet) {
    console.log("Decreasing Stats", pet)
    setInterval(function() {
        if (gameIsActive) {
            pet.stats.hunger -= Math.floor(Math.random() * 5) + 1;
            pet.stats.cleanliness -= Math.floor(Math.random() * 5) + 1; 
            pet.stats.energy -= Math.floor(Math.random() * 5) + 1;
            pet.stats.happiness -= Math.floor(Math.random() * 5) + 1;
            console.log("Stats Decreased", pet)
            checkStats(pet);
        }
    }, 500);
}

let gameIsActive = false;
function startGame() {
    gameIsActive = true;
    let pet = randomCharacter();
    pet.stats = {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
    console.log("Game start", pet)
    decreaseStats(pet);
}

document.getElementById("start-game").addEventListener("click", startGame)



// function increaseStats(statType, pet) {
//     switch(statType) {
//         case 'hunger':
//             if (pet.stats.hunger < 100) {
//                 pet.stats.hunger += Math.floor(Math.random() * 5) + 1;
//             }
//             break;
//         case 'happiness':
//             if (pet.stats.happiness < 100) {
//                 pet.stats.happiness += Math.floor(Math.random() * 5) + 1;
//             }
//             break;
//         case 'cleanliness':
//             if (pet.stats.cleanliness < 100) {
//                 pet.stats.cleanliness += Math.floor(Math.random() * 5) + 1;
//             }
//             break;
//         case 'energy':
//             if (pet.stats.energy < 100) {
//                 pet.stats.energy += Math.floor(Math.random() * 5) + 1;
//             }
//             break;
//         default:
//             console.log("Nothing to increase");
//             return;
//     }
// }

// document.getElementById('feed-button').addEventListener('click', increaseStats('hunger'));
// ;
// document.getElementById('pet-button').addEventListener('click', increaseStats('happiness'));
// ;
// document.getElementById('clean-button').addEventListener('click', increaseStats('cleanliness'));
// ;
// document.getElementById('play-button').addEventListener('click', increaseStats('energy'));