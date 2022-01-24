let cards = []
let sum= 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Aarshita",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    console.log(randomNumber)
    if (randomNumber === 1){
        return 11
    }
    else if (randomNumber > 10){
        return 10
    }
    else {
    return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum= firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent= "Sum: " + sum
    cardsEl.textContent= "Cards: " 
    for (i=0; i< cards.length; i++){
        cardsEl.textContent +=cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    }
    else if (sum === 21) {
        message = "Wohoo! You've got a Blackjack!"
        hasBlackJack = true 
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
messageEl.textContent=message
console.log(message) 
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
    }
}
