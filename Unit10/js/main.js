function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    //create the new list items for the bottom of the page
    // let newList = document.createElement('ul')
    //do I need newList?

    let smallNavContainer = document.getElementById('smallNavArea')
    console.log(smallNavContainer)

    let originalNav = document.getElementById('primaryNavigation')
    let cloneNav = originalNav.cloneNode(true)
    cloneNav.id = ""
    // console.log(originalNav)
    console.log(cloneNav)

    smallNavContainer.appendChild(cloneNav)

    // topList.forEach(menuItem => {
    //     let newLI = document.createElement('li')
    //     let newLink = document.createElement('a')
    //     newLink.setAttribute('href', menuItem.getAttribute('href'))
    //     // 'copy' the textContent from upper menu to lower menu 
    
    //     topList.textContent = topList.querySelectorAll('ul#primaryNavigation li')
    //     newList.textContent = topList.textContent
    //     // append children to make them appear in the DOM 
    //     getElementById('smallNavArea').appendChild(newList)
    



    // })


}

   

duplicateMenu()