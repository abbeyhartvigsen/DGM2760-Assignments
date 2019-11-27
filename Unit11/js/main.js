import { hotel } from "../hotel.js"
console.log(hotel)
let hotelData = {}
async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json()//Return to the JSON object
    } catch (vacation) {
        // var vacation
        console.error(vacation)
        // hotelInfo = vacation
    }
}
getHotelData().then(data => {
    // console.log("then test")
    // console.log(data)
    return hotelData = data
})
// let hotelData = getHotelData()
//let hotelData = hoteljson
console.log("test data")
console.log(hotelData)

// document.querySelectorAll("a")
//store in a variable document.querySelectorAll("a")
//use that variable to loop over each element and add event listener to each one. Use for each loop 

//document.querySelectorAll("a")
// let math = function(input1,input2){
//     let result = input1 + input2
//     return result

// }
// console.log(math(3,4))

let anchorObject = document.querySelectorAll("a")

console.log(anchorObject)
for (let i = 0; i < anchorObject.length; i++) {
    // console.log(anchorObject[i])
    anchorObject[i].addEventListener("click",hotelInfo)
     /*    console.log(anchorObject[i])

        console.log(hotelData[0].hotels[i])
        hotelInfo(anchorObject[i])
        console.log("click")
    } ) */
    //do add event listener stuff


}


// document.querySelector("#marriott").addEventListener('click', hotelInfo())

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        let answer = "false"
        if(event.target.id === hotel.name){
            answer = "true"
        }
        console.log(answer)
        return event.target.id === hotel.name
    })
    console.log(hotelChoice)

    document.querySelector("#hotelInfo").textContent = `${hotelChoice.name} Hotel`
    //console.log('Thanksgiving')
}

// function hotelInfo(event) {
//     let hotelChoice = hotelData[0].hotels.find(hotel => {
//         let answer = "false"
//         if(event.target.id === hotel.name.toLowerCase()){
//             answer = "true"
//         }
//         console.log(answer)
//         return event.target.id === hotel.name.toLowerCase()
//     })
//     console.log(hotelChoice)

//     document.querySelector("#hotelInfo").textContent = `${hotelChoice.name} Hotel`
//     console.log('Thanksgiving')
// }


//do the same with sharaton and hilton?
