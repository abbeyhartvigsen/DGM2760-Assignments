function tellStory() {
    //noun Array = querySelector('#noun') //lowercase String split()
    //repeat for adjectives and verbs

    var nounArray = document.querySelector('#noun').value.trim().split(/\s+/)
    
    console.log(noun)

    var adjectiveArray = document.querySelector('#adjectives').value.trim().split(/\s+/)
    
    console.log(adjectives)

    var verbArray = document.querySelector('#verbs').value.trim().split(/\s+/)
    
    console.log(verbs)




    //var adjective = document.querySelector('#adjective').split(/\s+/);

   // var verb = document.querySelector('#verb').split(/\s+/);

    const myStory = `There once lived some ${nounArray[0]}s. They had ${adjectiveArray[0]} ${nounArray[1]}s. One day some ${adjectiveArray[1]} ${nounArray[2]}s ${verbArray[0]} and then ${verbArray[1]}. Then a ${nounArray[0]} said to them, "Hello, you are very ${adjectiveArray[2]} ${nounArray[2]}s. Yesterday I saw a ${nounArray[3]} and a ${nounArray[4]}." A ${nounArray[2]} said, "That's interesting! I also saw a ${nounArray[5]} and a ${nounArray[6]}." The ${nounArray[0]}s said, "That's interesting" and then they took the ${nounArray[2]}s to the ${nounArray[2]}'s favorite place.`;
    console.log(myStory)
    //get a reference to the querySelector('#story') = myStory
    let storyContainer = document.querySelector('#story')
    storyContainer.textContent = myStory
}