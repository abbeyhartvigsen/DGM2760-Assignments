//let message


import { species } from '../data/species.js'

const person = {
    gender: 'girl',
    age: 'teenager',
    species: 'human',
    buildPerson: function () {
        console.log('buildPerson Method has been called')
        message = `Your character is a ${person.age} ${person.gender} who is a ${person.species}`
        console.log(message)
        //crust with ${pizza.topping} and cheese just for you.
        document.querySelector('#feedback').textContent = message
    },
    heightList: () => {
        let height= 1
        if (person.gender === 'boy') height *= 2
        if (person.age === 'youngAdult') height *= 2
        //do the same for large property
        message = `Your person is ${height} feet.`
        document.querySelector('#heightFeedback').textContent = message
        console.log('hello')
    }
}



document.querySelector('#girl').addEventListener('click', () => person.gender = 'girl')
document.querySelector('#boy').addEventListener('click', () => person.gender = 'boy')

//same things as lines 21 and 22 for toppings and size

document.querySelector('#human').addEventListener('click', () => person.species = 'human')
document.querySelector('#alien').addEventListener('click', () => person.species = 'alien')

document.querySelector('#teenager').addEventListener('click', () => person.age = 'teenager')
document.querySelector('#youngAdult').addEventListener('click', () => person.age = 'Young Adult')

document.querySelector('#build').addEventListener('click', person.buildPerson)

// document.querySelector('#build').addEventListener('click', pizza.buildPizza)
// //hookup the shoppingList method call here
// document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
// console.log('hi')


function tellStory() {
    //noun Array = querySelector('#noun') //lowercase String split()
    //repeat for adjectives and verbs

    var nounArray = document.querySelector('#hobbies').value.trim().split(/\s+/)

    // console.log(noun)

    var adjectiveArray = document.querySelector('#adjectives').value.trim().split(/\s+/)

    console.log(adjectives)

    var verbArray = document.querySelector('#dislikes').value.trim().split(/\s+/)

    // console.log(verbs)




    //var adjective = document.querySelector('#adjective').split(/\s+/);

    // var verb = document.querySelector('#verb').split(/\s+/);

    const myStory = `There once lived some ${nounArray[0]}s. They had ${adjectiveArray[0]} ${nounArray[1]}s. One day some ${adjectiveArray[1]} ${nounArray[2]}s ${verbArray[0]} and then ${verbArray[1]}. Then a ${nounArray[0]} said to them, "Hello, you are very ${adjectiveArray[2]} ${nounArray[2]}s. Yesterday I saw a ${nounArray[3]} and a ${nounArray[4]}." A ${nounArray[2]} said, "That's interesting! I also saw a ${nounArray[5]} and a ${nounArray[6]}." The ${nounArray[0]}s said, "That's interesting" and then they took the ${nounArray[2]}s to the ${nounArray[2]}'s favorite place.`;
    console.log(myStory)
    //get a reference to the querySelector('#story') = myStory
    let storyContainer = document.querySelector('#story')
    storyContainer.textContent = myStory
}