
//Arrays in JS
// let first = getramdom()
// let second = getramdom()
// cards = [first, second]
// sum = first + second
let cards = []
let sum = 0
let hasBlackjack = false
let Alive = false
let message = ""
//object
let player = {
    name:"Yogesh",
    Chips:200
}

let messageEl = document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el") //another method to acess by selector
//we can pass also call by .
let cardEl = document.getElementById("card-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.Chips

function startgame() {
    Alive = true
    let first = getramdom()
    let second = getramdom()
    cards = [first, second]
    sum = first + second
    rendergame()
}

function rendergame() {
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    // cardEl.textContent="Cards:"+ " " +first+" "+second
    // cardEl.textContent="Cards:"+ " " + cards[0] + " " + cards[1] //using array
    if (sum < 21) {
        message = "Do you want to draw new card?"
    }
    else if (sum == 21) {
        message = "Wohoo!! you got Blackjack"
        hasBlackjack = true
    }
    else {
        message = "You losse!!"
        Alive = false
    }
    messageEl.textContent = message
}

//Add the card value in sum.
function newCard() {
    // console.log("Drawing the new card from the desk!!")  
    if (hasBlackjack == false && Alive == true) {
        let card = getramdom()
        sum += card
        cards.push(card)
        rendergame()
    }
    
}

function getramdom() {
    // ACE as 11 and king,queen,jack as 10
    let num = Math.floor(Math.random() * 13) + 1
    if (num == 1) {
        return 11;
    }
    else if (num > 10) {
        return 10
    }
    else {
        return num
    }
    //Math.random ranges from 0.000... to 0.9999...
    //floor removes the decimials . 12.33333 to 12
}