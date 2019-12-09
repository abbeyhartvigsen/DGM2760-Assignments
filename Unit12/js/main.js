



//CHARACTER GENDER, AGE, AND SPECIES//


const person = {
    gender: 'girl',
    age: 'teenage',
    species: 'human',
    height: 'short',
    power: 'flight',
    buildPerson: function () {
        console.log('buildPerson Method has been called')
        message = `Your character is a ${person.age} ${person.gender} and is ${person.height} 
        and has the power of ${person.power}`
        console.log(message)
        //crust with ${pizza.topping} and cheese just for you.
        document.querySelector('#feedback').textContent = message
    },
    // heightList: () => {
    //     let height = 1
    //     if (person.gender === 'boy') height *= 2
    //     if (person.age === 'youngAdult') height *= 2
    //     //do the same for large property
    //     message = `Your person is ${height} feet.`
    //     document.querySelector('#heightFeedback').textContent = message
    //     console.log('hello')
    // }
}



document.querySelector('#girl').addEventListener('click', () => person.gender = 'girl')
document.querySelector('#boy').addEventListener('click', () => person.gender = 'boy')

//same things as lines 21 and 22 for toppings and size

// document.querySelector('#human').addEventListener('click', () => person.species = 'human')
// document.querySelector('#alien').addEventListener('click', () => person.species = 'alien')

document.querySelector('#teenager').addEventListener('click', () => person.age = 'teenage')
document.querySelector('#youngAdult').addEventListener('click', () => person.age = 'young adult')

document.querySelector('#short').addEventListener('click', () => person.height = 'short')
document.querySelector('#tall').addEventListener('click', () => person.height = 'tall')

document.querySelector('#flight').addEventListener('click', () => person.power = 'flight')
document.querySelector('#strength').addEventListener('click', () => person.power = 'strength')
document.querySelector('#speed').addEventListener('click', () => person.power = 'speed')



document.querySelector('#build').addEventListener('click', person.buildPerson)

// document.querySelector('#build').addEventListener('click', pizza.buildPizza)
// //hookup the shoppingList method call here
// document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)
// console.log('hi')


//POWERS and ARRAY SECTION

// var powers = 
// ['fl', 'strength', 'speed']

// console.log(powers)
// console.log('buildPowers Method has been called')
// message = `Your character has the power of ${powers[0]}`
// console.log(message)
// document.querySelector('#powersParagraph').textContent = message;

// document.querySelector('#pickPower').addEventListener('click', person[0])

//if that button is active then display power array 0


//STORY SECTION

function tellStory() {
    //noun Array = querySelector('#noun') //lowercase String split()
    //repeat for adjectives and verbs

    var nounArray = document.querySelector('#personsName').value.trim().split(/\s+/)

    // console.log(noun)

    var adjectiveArray = document.querySelector('#adjectives').value.trim().split(/\s+/)

    console.log(adjectives)

    var verbArray = document.querySelector('#dislikes').value.trim().split(/\s+/)

    // console.log(verbs)




    //var adjective = document.querySelector('#adjective').split(/\s+/);

    // var verb = document.querySelector('#verb').split(/\s+/);

    const myStory = `There once lived a person named ${nounArray[0]}. This person was very ${adjectiveArray[0]}. One day ${nounArray[0]} was ${adjectiveArray[1]} because they got to do ${verbArray[0]}. After that was finished they were ${adjectiveArray[2]} because they then got to do ${verbArray[1]}.`;
    console.log(myStory)
    //get a reference to the querySelector('#story') = myStory
    let storyContainer = document.querySelector('#story')
    storyContainer.textContent = myStory
}


