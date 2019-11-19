async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json()//Return to the JSON object
    } catch (vacation) {
        // var vacation
        console.error(vacation)
    }
}
let hotelData = {}
getHotelData().then(data => hotelData = data)
console.log('hello')

// document.querySelectorAll("a")
//store in a variable document.querySelectorAll("a")
//use that variable to loop over each element and add event listener to each one. Use for each loop 
//----FIX BELOW IF NEEDED--//
document.querySelectorAll("a")
console.log('what is up?')
let anchorObject = document.querySelectorAll("a")
console.log(anchorObject)
for (let i = 0; i < anchorObject.length; i++) {
    console.log(anchorObject[i])
    anchorObject[i].addEventListener
    //do add event listener stuff

}
// // anchorObject.forEach(getHotelData => addEventListener(click, getHotelData))//--THIS IS THE PROBLEM--//
// console.log('are you working?')

// //CAN I TRY SOMETHING LIKE:
// getHotelData.forEach(callback())//--FIX THIS

// //--OR THIS?

// getHotelData.forEach(anchorObject => addEventListener (click, getHotelData))

//--MAYBE I SHOULD NOT DO FOR EACH AND ADD EVENT LISTENER TOGETHER??


console.log('are you working?')

//--FIX ABOVE IF NEEDED--//

document.querySelector("#marriott").addEventListener('click', hotelInfo)
console.log('Christmas')

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector("#hotelName").textConent = `${hotelChoice.name} Hotel`
    console.log('Thanksgiving')
}

//do the same with sharaton and hilton?
