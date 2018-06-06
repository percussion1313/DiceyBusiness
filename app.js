let dieButtion = document.getElementById('generate-button');
dieButtion.addEventListener('click', insertDice);

const dieOptions = [1, 2, 3, 4, 5, 6]


class Dice {
    constructor(x,y,z, value) {
        this.div = document.createElement('div')
        this.div.style.height = (x);
        this.div.style.width = (y);
        this.div.style.border = (z);
        this.div.textContent = (value)
        this.div.classList.add('dice');
        document.body.appendChild(this.div);
    }
}

function insertDice() {
    let xVal = ('175px');
    let yVal = ('175px');
    let border = ('4px solid black')
    let dieNumber = (randomDie())
    let newDie = new Dice(xVal, yVal, border, dieNumber);
}

function randomDie() {
    return Math.floor(Math.random() * dieOptions.length); 
}
