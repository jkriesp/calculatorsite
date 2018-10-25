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

// Number a and b
let numA = 0;
let numB = 0;
// Counter to help assign numbers to numA or numB
let counter = 0;
// operator variable
let operator = "";

// Add click listeners to every number button
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log(number.id + "\n" + number.innerHTML);
        //numberDisplay.innerText = number.innerHTML;
        updateDisplay(number);
        storeNumber(number);
    });

});

// Add click listeners to operator buttons
const opButtons = document.querySelectorAll('.operands');
opButtons.forEach((opButton) => {
    opButton.addEventListener('click', (e) => {
        console.log(opButton.id);
        storeOperator(opButton);
    })
});

function storeOperator(op) {
    operator = op.id;
}

function storeNumber(number) {
    if (counter == 1) {
        numB = Number(number.innerHTML);
        counter = 0;
    } else {
        numA = Number(number.innerHTML);
    }
    counter++;
}

function updateDisplay(number) {
    numberDisplay.innerText = number.innerHTML;
}