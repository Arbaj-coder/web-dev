const readline = require('readline');

// Faulty Calculator
function cal(a, b, o) {
    let value = Math.random();
    let flag = value < 0.1;  // 10% chance

    if (o === '+') {
        return flag ? a - b : a + b;
    } else if (o === '-') {
        return flag ? a / b : a - b;
    } else if (o === '*') {
        return flag ? a + b : a * b;
    } else if (o === '/') {
        return flag ? a ** b : a / b;
    } else {
        return "Invalid operator!";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter expression (e.g., 4+5): ", function(expression) {
    let match = expression.match(/(\d+)([+\-*/])(\d+)/);
    if (match) {
        let a = parseFloat(match[1]);
        let operator = match[2];
        let b = parseFloat(match[3]);
        let result = cal(a, b, operator);
        console.log("Result:", result);
    } else {
        console.log("Invalid input format.");
    }
    rl.close();
});
