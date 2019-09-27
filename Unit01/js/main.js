//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast";

document.querySelector('#company').innerText = "Joe's Bed and Breakfast";

document.querySelector('header > h2').innerText = "Best Bed and Breakfast in Utah County";

let userName = prompt("What is your name?")

// let message = "Hello " + userName + ", welcome to the best bed and breakfast in Utah County!"

let message = `Hello ${userName}, welcome to the best bed and breakfast in Utah County!`

document.querySelector('#greeting').innerText = message