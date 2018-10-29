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
    a = Number(a);
    b = Number(b);
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

let displayNumber = "";
let numA = "";
let numB = "";
// Counter to help assign numbers to numA or numB
let counter = 0;
// operator variable
let operator = "";
let product = 0;

let numberArray = [];

// Add click listeners to every number button
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        console.log("Just clicked: " + displayNumber);
        //updateDisplay(number);
        //storeNumber(number);

        //         if (operator.length < 1) {
        //             numA += "" + number.innerHTML;
        //             numberArray.push(numA);
        //             updateDisplay(numA);
        //         } else if (operator.length > 1) {
        //             numB += "" + number.innerHTML;
        //             updateDisplay(numB);
        //             numberArray.push(numB);
        //         }

        if (numberArray.length == 0) {
            numA += "" + number.innerHTML;
            console.log("First number: " + numA);

        }
        if (numberArray.length == 1) {
            numB += "" + number.innerHTML;
            console.log("Second number: " + numB);

        }

    });

});

// Add click listeners to operator buttons
const opButtons = document.querySelectorAll('.operands');
opButtons.forEach((opButton) => {
    opButton.addEventListener('click', (e) => {
        console.log(opButton.id);
        addToArray(numA, numB);
        console.log(numberArray);
        if (opButton.id == "equals") {
            console.log("equals clicked");
            product = operate(operator, numberArray[0], numberArray[1]);
            console.log(numberArray[0] + operator + + numberArray[1] + " = " + product);
            updateDisplay(product);
            // Reset the numberArray and push the product so that 
            // you can do continous operations
            numberArray = [];
            numberArray.push(product);

        } if (opButton.id == "clear") {
            clearNumbers();
        } else {
            if (numberArray.length > 1) {
                product = operate(operator, numberArray[0], numberArray[1]);
                console.log(product);
                updateDisplay(product);
                // Reset the numberArray and push the product so that 
                // you can do continous operations
                numberArray = [];
                numberArray.push(product);
                numB = "";
            }

            storeOperator(opButton);
            console.log("Array length: " + numberArray.length);
        }
    })
});

function addToArray(numA, numB) {

    if (numberArray.length == 0) {
        numberArray.push(numA);
        console.log("numA addToArray: " + numA);
        numA = "";
    } else {
        numberArray.push(numB);
        console.log("numB addToArray: " + numB);
        numB = "";
    }
    console.log("addToArray after \n" + "NumbA: " + numA + "\nNumB: " + numB);
}

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

function clearNumbers() {
    numA = "";
    numB = "";
    counter = 0;
    product = "";
    operator = "";
    numberDisplay.innerText = 0;
    numberArray = [];
}

function updateDisplay(number) {
    let rounded = Number(number.innerHTML)
    rounded = Math.round(number * 10) / 10;
    if (number.innerHTML) {
        numberDisplay.innerText = rounded;
    } else numberDisplay.innerText = rounded;
}