async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json()//Return to the JSON object
    } catch (vacation) {
        console.error(vacation)
    }
}
let hotelData = {}
getHotelData().then(data => hotelData = data)

// document.querySelectorAll("a")
//store in a variable document.querySelectorAll("a")
//use that variable to loop over each element and add event listener to each one. Use for each loop 
document.querySelector("#marriott").addEventListener('click', hotelInfo)

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel =>{
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector("#hotelName").textConent = `${hotelChoice.name} Hotel`
}

//do the same with sharaton and hilton?
