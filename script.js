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

function operate() {
    switch(operator) {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
    }
}

const numberButtons = document.querySelector("#number-buttons");
const display = document.querySelector("#display");

numberButtons.addEventListener("click", e => {
    if (e.target.tagName == 'BUTTON') {
    display.textContent += e.target.textContent
    };
})
