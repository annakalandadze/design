// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let count = firstBatch;

// console.log(count)

// let name = "Anna"
// let greeting = "Hi"

// let m = greeting + ", " + name + "!"
// document.getElementById("welcome-el").innerText = m
// document.getElementById("welcome-el").innerText += m

let saveEL = document.getElementById("save-el")
let count = 0;

function increment() {
    count++;
    document.getElementById("count-el").innerText = count
}

function save() {
    //text content doesn't skip non readable symbols
    saveEL.textContent += count + " - "
    count = 0
    document.getElementById("count-el").innerText = count
}