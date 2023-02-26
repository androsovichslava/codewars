function calculate(expression) {
    const token = expression.split(' ');
    const stack = [];

    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }

    for (let i = token.length - 1; i >= 0; i--) {
        if (!operators.hasOwnProperty(token[i])) {
            stack.push(Number(token[i]));
        } else {
            const a = stack.pop();
            const b = stack.pop();
            const operator = operators[token[i]];

            stack.push(operator(a, b));
        }
    }
    return stack[0];
}

// if (token[i] === '+') {
//     stack.push(a + b);
// } else if (token[i] === '-') {
//     stack.push(a - b);
// } else if (token[i] === '/') {
//     stack.push(a / b);
// } else if (token[i] === '*') {
//     stack.push(a * b);
// }

// console.log(calculate('* + 2 2 3'));


console.log(calculate('- 100 2')); // 98
console.log(calculate('/ 100 2')); // 50
console.log(calculate('/ + 30 70 2')); // 50
