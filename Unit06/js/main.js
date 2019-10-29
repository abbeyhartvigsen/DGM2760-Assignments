function tellStory() {
    //noun Array = querySelector('#noun') //lowercase String split()
    //repeat for adjectives and verbs

    var noun = document.querySelector('#noun').textContent.trim().split(/\s+/)
    
    console.log(noun)

    //var adjective = document.querySelector('#adjective').split(/\s+/);

   // var verb = document.querySelector('#verb').split(/\s+/);

    const myStory = `There once lived some ${nounArray[0]}s. They had ${adjectiveArray[0]} ${nounArray[1]}`
    //get a reference to the querySelector('#story') = myStory
    document.querySelector('#myStory') = myStory;
}