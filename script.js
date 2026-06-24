let display = document.getElementById("display");
let expression = "";

// Add value to screen
function append(value) {
    expression += value;
    display.value = expression;
}

// Clear screen
function clearDisplay() {
    expression = "";
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        expression = eval(expression);
        display.value = expression;
    }
    catch {
        display.value = "Error";
        expression = "";
    }
}

// Delete last character
function deleteLast() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

// BONUS: Keyboard support
document.addEventListener("keydown", function(event) {

    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        append(event.key);
    }

    if (event.key === "Enter") {
        calculate();
    }

    if (event.key === "Backspace") {
        deleteLast();
    }

    if (event.key.toLowerCase() === "c") {
        clearDisplay();
    }
});