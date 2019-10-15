//create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

//Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

//add pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
}