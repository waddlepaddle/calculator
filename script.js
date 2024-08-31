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

let firstNumber, secondNumber, operator;

function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
            break;
    }
}

const numberButtons = document.querySelector("#number-buttons");
const display = document.querySelector("#display");

numberButtons.addEventListener("click", e => {
    if (e.target.tagName == 'BUTTON') {
        display.textContent += e.target.textContent;
    };

    if (operator == null) {
        firstNumber = +display.textContent;
    } else {
        secondNumber = +display.textContent;
    }
});

const operatorButtons = document.querySelector("#operator-buttons");

operatorButtons.addEventListener("click", e => {
    if (e.target.tagName == 'BUTTON') {
        operator = e.target.textContent;
        display.textContent = '';
    };
});

const equal = document.querySelector("#equal")

equal.addEventListener("click", (e) => {
    display.textContent = (operate(operator,firstNumber,secondNumber));
    firstNumber = +display.textContent;
    operator = null;
});
