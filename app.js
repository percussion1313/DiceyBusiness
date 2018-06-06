let dieButtion = document.getElementById('die-button');
dieButtion.addEventListener('click', insertDice);


class Dice {
    constructor(x,y,z) {
        this.div = document.createElement('div')
        this.div.style.height = (x);
        this.div.style.width = (y);
        this.div.style.border = (z);
        this.div.classList.add('dice');
        document.body.appendChild(this.div);
    }
}

function insertDice() {
    let xVal = ('175px');
    let yVal = ('175px');
    let border = ('3px solid black')
    let newDice = new Dice(xVal, yVal, border);
}
