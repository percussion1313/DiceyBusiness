let dieButtion = document.getElementById('generate-button');
dieButtion.addEventListener('click', insertDice);

const dieOptions = [];

class Die {
    constructor() {
        this.div = document.createElement('div')
        this.div.classList.add('die');
        this.roll();
        document.body.appendChild(this.div)
        dieOptions.push(this);
    }

    roll() {
        let value = Math.floor(Math.random() * 6 + 1);
        this.div.innerText = value;
    }
}

function insertDice() {
    let newDie = new Die();
}

let rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', rollDice);

function rollDice() {
    for (let i = 0; i < dieOptions.length; i++) {
        dieOptions[i].roll();
    }
}
