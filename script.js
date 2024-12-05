const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length === 1) {
        display.textContent = '0';
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
}

function appendCharacter(char) {
    if (display.textContent === '0') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}