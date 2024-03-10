let value = '';

function clickNumber(number) {
  value += number;
  document.getElementById('calculation').textContent = value;
}

function clickOperator(operator) {
    value += operator;
    document.getElementById('calculation').textContent = value;
}

function deleteNumber() {
    value = value.slice(0,-1);
    document.getElementById('calculation').textContent = value;
}

function deleteResult() {
    value = '';
    document.getElementById('calculation').textContent = value;
    document.getElementById('result').textContent = value;
}
function calculate() {
    try {
        value = eval(value);
        document.getElementById('result').textContent = value;
    }   catch(error) {
        value = eval(value);
        document.getElementById('result').textContent = 'error'; 
    }
}