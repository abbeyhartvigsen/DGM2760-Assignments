document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "My name is Inspector Clouseau"

function reDisplay () {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} pixels from the left edge and ${window.screenY} pixels from the top of the display.`
let url = `The page URL is ${document.URL}`

document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${url}`
}
reDisplay();

let documentTitle = `Document title is ${document.title}`
let documentUpdate = `This document was last updated ${document.lastModified}`

document.querySelector('#myDocument').innerText = `${documentTitle} \n ${documentUpdate}`


