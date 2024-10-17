// Main JS Application File

let availableCharacters = [{
    species: 'string',
    imageUrl: image1.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    imageUrl: image2.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    imageUrl: image3.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    imageUrl: image4.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
},
{
    species: 'string',
    imageUrl: image5.jpg,
    stats: {
        hunger: 100,
        happiness: 100,
        cleanliness: 100,
        energy: 100,
    }
}
]
function randomCharacter() {
    let randomCharacters = Math.floor(Math.random() * availableCharacters.length - 1)
    pet = availableCharacters[randomCharacters];
}

