let dieButtion = document.getElementById('generate-button');
dieButtion.addEventListener('click', insertDice);

let dieOptions = [1, 2, 3, 4, 5, 6]


class Die {
    constructor(x, y, z, val) {
        this.div = document.createElement('div')
        this.div.style.height = (x);
        this.div.style.width = (y);
        this.div.style.border = (z);
        this.div.innerText = (val)
        this.div.classList.add('die');
        document.body.appendChild(this.div);
        this.roll();

    }
    roll() {
        let value = Math.floor(Math.random() * 6 + 1);
        this.div.innerText = value;
    }
}

function insertDice() {
    let height = ('175px');
    let width = ('175px');
    let border = ('4px solid black')
    let dieNumber = (randomDie())
    let newDie = new Die(height, width, border, dieNumber);
}

function randomDie() {
    return Math.floor(Math.random() * 6 + 1);
}

let rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', rollDice);

function rollDice() {
    for (let i = 0; i < dieOptions.length; i++) {
        dieOptions[i].roll();
    }
}
