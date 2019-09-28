//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";

// document.querySelector('#game').innerText = "Guessing Game";

// document.querySelector('header > h2').innerText = "Loops";

//pick a random number between 0 and 16

const correctNumber = Math.floor(Math.random() * 15)

console.log(`The correctNumber is ${correctNumber}`)

let guessed = false

let totalGuesses = 0

let gamerGuess = 0

function evalGuess {
    totalGuesses += 1 // totalGuesses = totalGuesses + 1
    gamerGuess = document.querySelector('#guess').nodeValue

    const feedback = document.querySelector('#feedback')
}