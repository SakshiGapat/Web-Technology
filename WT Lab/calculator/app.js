// Function to append values to the display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to calculate the result
function calculateResult() {
    let x=document.getElementById("display").value;
    let y=eval(x);
    document.getElementById('display').value=y;
}
