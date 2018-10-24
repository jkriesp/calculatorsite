function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(ope, a, b) {
    switch (ope) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            break;
    }
}

/**
 *  Calculator funcions
 */

const numberDisplay = document.getElementById('numberDisplay');

// Operators
const addBTN = document.getElementById('add');
const subtractBTN = document.getElementById('subtract');
const divideBTN = document.getElementById('divide');
const multiplyBTN = document.getElementById('multiply');
const equalsBTN = document.getElementById('equals');
const operateBTN = document.getElementById('operate');
const clearBTN = document.getElementById('clear');

// Number buttons
const one = document.getElementById('oneBTN');
const two = document.getElementById('twoBTN');
const three = document.getElementById('threeBTN');
const four = document.getElementById('fourBTN');
const five = document.getElementById('fiveBTN');
const six = document.getElementById('sixBTN');
const seven = document.getElementById('sevenBTN');
const eight = document.getElementById('eightBTN');
const nine = document.getElementById('nineBTN');
const zero = document.getElementById('zeroBTN');


const numbers = document.querySelectorAll('.number');

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log(number.id + "\n" + number.innerHTML);
    });

});