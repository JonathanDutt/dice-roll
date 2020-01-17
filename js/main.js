let diceNumber = Math.ceil(Math.random()*6);

function getRandomDiceRollAsString() {
    return `<h3> You rolled: ${diceNumber}</h3> <div><img src="img/dice${diceNumber}.svg" alt="img${diceNumber}"></div> `; 
}
console.getRandomDiceRollAsString


let rollBtn = document.querySelector(`.randomize`)
