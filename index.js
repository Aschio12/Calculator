
const display = document.getElementById("data");

// Function to append values to the display
function appendToDisplay(input) {
    display.value += input; // Append the clicked value to the current input
}

// Function to clear the display
function clearDisplay() {
    display.value = ""; // Reset the input to an empty string
}

// Function to format large or small numbers in scientific notation
function formatResult(result) {
    const maxDisplayLength = 12; // Max length for regular display
    if (result.toString().length > maxDisplayLength || Math.abs(result) > 1e12 || Math.abs(result) < 1e-6) {
        return result.toExponential(6); // Format in scientific notation with 6 decimal places
    }
    return result;
}

// Function to calculate the result
function calculate() {
    try {
        const result = eval(display.value); // Evaluate the expression
        display.value = formatResult(result); // Format and display the result
    } catch (error) {
        display.value = "Error"; // Display error for invalid expressions
    }
}
