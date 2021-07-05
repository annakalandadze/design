let sum = 0

let hasBlackJack = false
let isAlive = true

let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Anna",
    chips: 145

}

playerEl.textContent = player.name + " $" + player.chips

function getRandomCard() {
    let random = Math.floor(Math.random()*13 + 1)
    if (random === 1) return 11;
    else if (random === 11 || random ===12 || random === 13) return 10;
    return random
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw new card?"
    } else if (sum === 21) {
        message = "You win!"
        hasBlackJack = true
    } else {
        message = "You lost"
        isAlive = false
    }
    messageEl.innerText = message
    sumEl.textContent = "Sum: " + sum
    let finalString = ""
    for (let i = 0; i < cards.length; i++) {
        finalString += cards[i] + " "
    }
    cardEl.textContent = "Cards: " + finalString
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
