function addNumbers() {
    const num1 = parseFloat(document.getElementById("add-num1").value);
    const num2 = parseFloat(document.getElementById("add-num2").value);
    const result = num1 + num2;
    document.getElementById("add-result").textContent = "Result: " + result;
}

function subtractNumbers() {
    const num1 = parseFloat(document.getElementById("sub-num1").value);
    const num2 = parseFloat(document.getElementById("sub-num2").value);
    const result = num1 - num2;
    document.getElementById("sub-result").textContent = "Result: " + result;
}

function divideNumbers() {
    const num1 = parseFloat(document.getElementById("div-num1").value);
    const num2 = parseFloat(document.getElementById("div-num2").value);
    const result = num1 / num2;
    document.getElementById("div-result").textContent = "Result: " + result;
}

function multiplyNumbers() {
    const num1 = parseFloat(document.getElementById("mul-num1").value);
    const num2 = parseFloat(document.getElementById("mul-num2").value);
    const result = num1 * num2;
    document.getElementById("mul-result").textContent = "Result: " + result;
}
function clearInputs(button) {
    const table = button.parentElement;
    const inputs = table.querySelectorAll("input");
    const result = table.querySelector("p");

    inputs.forEach(input => {
        input.value = "";
    });

    result.textContent = "";
}