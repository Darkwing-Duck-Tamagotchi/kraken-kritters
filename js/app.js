let gameIsActive = false;


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

const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalButton = document.getElementById('close-modal');

// Function to show the modal
function showModal(stat) {
    document.getElementById('modal-content').innerText = `It looks like your Kritter went to Davey Jones' Locker. Next time, make sure to keep an eye on its ${stat}!`
    modal.classList.add('show');
    modalOverlay.classList.add('show');
}

// Function to hide the modal
function hideModal() {
    modal.classList.remove('show');
    modalOverlay.classList.remove('show');
}

// Close the modal when the "Close" button is clicked
closeModalButton.addEventListener('click', hideModal);

// You can also hide the modal when clicking outside of it (optional)
modalOverlay.addEventListener('click', hideModal);
// console.log(availableCharacters)




function randomNumber() {
    let randomNum = Math.floor(Math.random() * availableCharacters.length)
    return randomNum;
}


function endGame(pet, intId, stat) {
    gameIsActive = false;
    delete pet.stats;
    clearInterval(intId);
    updateHealthbar();
    showModal(stat);
    toggleButtonVisibility()
    // removeListeners(pet);
}

function checkStats(pet, intId) {
    for (const stat in pet.stats) {
        if (pet.stats[stat] <= 0 && gameIsActive) {
            endGame(pet, intId, stat);
            break;  // Exit the loop once a stat reaches <= 0
        }
    }
}


// function checkStats(pet, intId) {
//     if ((pet.stats.hunger <= 0) || (pet.stats.cleanliness <=0) || (pet.stats.energy <= 0) || (pet.stats.happiness <=0) && gameIsActive) {
//         endGame(pet, intId);
//     }
// }

function decreaseStats(statType, pet) {
    // Check if pet.stats exists and if statType is valid
    if (pet && pet.stats && typeof pet.stats[statType] !== 'undefined') {
        // Proceed only if the stat is valid
        if (pet.stats[statType] > 0) {
            let decreaseNum = Math.ceil(Math.random() * 10);
            let numCheck = pet.stats[statType] - decreaseNum;
            numCheck < 0 ? pet.stats[statType] = 0 : pet.stats[statType] -= decreaseNum;
        }
        updateHealthbar(pet);  // Update the healthbar
    } else {
        console.error(`Error: statType '${statType}' is not valid or pet.stats is undefined.`);
    }
}


function decreaseStats(pet) {
    console.log("Decreasing Stats", pet.stats)
    let intId = setInterval(function() {
        if (gameIsActive && pet.stats) {
            pet.stats.hunger -= Math.ceil(Math.random() * 5);
            pet.stats.cleanliness -= Math.ceil(Math.random() * 5); 
            pet.stats.energy -= Math.ceil(Math.random() * 5);
            pet.stats.happiness -= Math.ceil(Math.random() * 5);
            // Update DOM 
            updateHealthbar(pet);
            checkStats(pet, intId);
        }
    }, 1000);
}


function startGame() {
        gameIsActive = true;
        toggleButtonVisibility();
        let index = randomNumber()
        console.log("index", index)
        let pet = Object.assign({}, availableCharacters[index]);
        pet.stats = {
            hunger: 100,
            happiness: 100,
            cleanliness: 100,
            energy: 100,
        }
        updateHealthbar(pet);
        console.log("Game start", pet)
        console.log(availableCharacters)
        setListeners(pet);
        decreaseStats(pet);
}

document.getElementById("start-game").addEventListener("click", function() {
    startGame()
});


function updateHealthbar(pet = null) {
    // Select all healthbar-item elements
    var healthbarItems = document.querySelectorAll('.healthbar-item');
    
    // Loop through each healthbar-item
    healthbarItems.forEach(function(healthbarItem) {
           // Get the stat type from the class or data attribute (assuming class corresponds to statType)
           let statType = healthbarItem.classList[1];  // Example: 'hunger', 'cleanliness', etc.
           console.log("class list", typeof(healthbarItem.classList[1]))
            
            if (gameIsActive && pet !== null) {
                console.log("Pet obj", pet)
                // Get the value of the stat from the pet object
                let value = pet.stats[statType];

                // Update the <p> element with the current stat value
                document.getElementById(statType + '-stat').textContent = value;
                healthbarItem.style.color = 'white';
                // Set background color based on stat value
                if (value >= 70) {
                    healthbarItem.style.backgroundColor = 'green';
                    healthbarItem.classList.remove('animate__animated', 'animate__pulse', 'animate__infinite');
                } else if (value >= 30 && value < 70) {
                    healthbarItem.style.backgroundColor = 'darkorange';
                    healthbarItem.classList.remove('animate__animated', 'animate__pulse', 'animate__infinite');
                } else {
                    healthbarItem.style.backgroundColor = 'red';
                    healthbarItem.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
                }
            } else {
                console.log("Game status", gameIsActive)
                healthbarItem.classList.remove('animate__animated', 'animate__pulse', 'animate__infinite');
                healthbarItem.style.backgroundColor = 'lightgrey';
                // Update the <p> element with the current stat value
                document.getElementById(statType + '-stat').textContent = "--";
            }
        });
    } 


function increaseStats(statType, pet) {

    // Check if pet.stats exists and if statType is valid
    if (pet && pet.stats && typeof pet.stats[statType] !== 'undefined') {
        // Proceed only if the stat is valid
        if (pet.stats[statType] < 100) {
            let increaseNum = Math.ceil(Math.random() * 10);
            let numCheck = pet.stats[statType] + increaseNum;
            numCheck > 100 ? pet.stats[statType] = 100 : pet.stats[statType] += increaseNum;
        }
        updateHealthbar(pet);  // Update the healthbar
        console.log(`Ending Value: ${pet.stats[statType]}`);
    } else {
        console.error(`Error: statType '${statType}' is not valid or pet.stats is undefined.`);
    }
}
    



// function increaseStats(statType, pet) {
//     console.log("Stat Type:", statType);
//     console.log(`Starting Value: ${pet.stats[statType]}`);

//     let increaseNum;

//     switch (statType) {
//         case 'hunger':
//             if (pet.stats.hunger < 100) {
//                 increaseNum = Math.ceil(Math.random() * 10);
//                 let numCheck = pet.stats.hunger + increaseNum;
//                 pet.stats.hunger = numCheck > 100 ? 100 : numCheck;
//             }
//             break;

//         case 'happiness':
//             if (pet.stats.happiness < 100) {
//                 increaseNum = Math.ceil(Math.random() * 10);
//                 let numCheck = pet.stats.happiness + increaseNum;
//                 pet.stats.happiness = numCheck > 100 ? 100 : numCheck;
//             }
//             break;

//         case 'cleanliness':
//             if (pet.stats.cleanliness < 100) {
//                 increaseNum = Math.ceil(Math.random() * 10);
//                 let numCheck = pet.stats.cleanliness + increaseNum;
//                 pet.stats.cleanliness = numCheck > 100 ? 100 : numCheck;
//             }
//             break;

//         case 'energy':
//             if (pet.stats.energy < 100) {
//                 increaseNum = Math.ceil(Math.random() * 5);
//                 let numCheck = pet.stats.energy + increaseNum;
//                 pet.stats.energy = numCheck > 100 ? 100 : numCheck;
//             }
//             break;

//         default:
//             console.log("Invalid stat type");
//             return;
//     }

//     console.log(`Ending Value: ${pet.stats[statType]}`);
// }



function setListeners(pet) {
    // Select all buttons with the class 'stat-button'
    var buttons = document.querySelectorAll('.stat-button');

    // Add event listeners to each 'stat-button' using the array forEach method JavaScript gives us
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var statType = this.getAttribute('data-stat');  // Get the value of 'data-stat'
            increaseStats(statType, pet);  // Pass the statType and pet to increaseStats
        });
    });
}

function removeListeners(pet) {
    // Select all buttons with the class 'stat-button'
    var buttons = document.querySelectorAll('.stat-button');

    // Add event listeners to each 'stat-button' using the array forEach method JavaScript gives us
    buttons.forEach(function(button) {
        button.removeEventListener('click', function() {
            var statType = this.getAttribute('data-stat');  // Get the value of 'data-stat'
            increaseStats(statType, pet);  // Pass the statType and pet to increaseStats
        });
    });
}

function toggleButtonVisibility() {
    const startGameButton = document.getElementById('start-game');
    const actionButtons = document.querySelectorAll('.stat-button');

    if (gameIsActive) {
        // Hide the "Start Game" button and show the action buttons
        startGameButton.style.display = 'none';
        actionButtons.forEach(button => {
            button.style.display = 'flex';
        });
    } else {
        // Show the "Start Game" button and hide the action buttons
        startGameButton.style.display = 'inline-block';
        actionButtons.forEach(button => {
            button.style.display = 'none';
        });
    }
}



// function setListeners(pet) {

//     document.getElementById('feed-button').addEventListener('click', function() {
//         increaseStats('hunger', pet)}
//     );
//     ;
//     document.getElementById('pet-button').addEventListener('click', function() {
//         increaseStats('happiness', pet)}
//     );
//     ;
//     document.getElementById('clean-button').addEventListener('click', function() {
//         increaseStats('cleanliness', pet)}
//     );
//     ;
//     document.getElementById('play-button').addEventListener('click', function() {
//         increaseStats('energy', pet)}
//     );
// }


// function removeListeners(pet) {
//     document.getElementById('feed-button').removeEventListener('click', function() {
//         increaseStats('hunger', pet)}
//     );
//     ;
//     document.getElementById('pet-button').removeEventListener('click', function() {
//         increaseStats('happiness', pet)}
//     );
//     ;
//     document.getElementById('clean-button').removeEventListener('click', function() {
//         increaseStats('cleanliness', pet)}
//     );
//     ;
//     document.getElementById('play-button').removeEventListener('click', function() {
//         increaseStats('energy', pet)}
//     );
// }

updateHealthbar();


