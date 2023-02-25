function calculate(expression) {
    let symArr = expression.split(' ');
    let stack = [];
    if (symArr[0] === '') {
        return 0;
    }
    for (let i = symArr.length - 1; i >= 0; i--) {
        if (isFinite(symArr[i])) {
            stack.push(Number(symArr[i]));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            if (symArr[i] === '+') {
                stack.push(Number(a) + Number(b));
            } else if (symArr[i] === '-') {
                stack.push(Number(b) - Number(a));
            } else if (symArr[i] === '/') {
                stack.push(Number(a) / Number(b));
            } else if (symArr[i] === '*') {
                stack.push(Number(a) * Number(b));
            }
        }
    }
    return stack[0];
}


console.log(calculate(''));
console.log(calculate('+ 3 5'));
console.log(calculate('* + 2 2 3'));
console.log(calculate('/ + 3 5 * 2 2'));
console.log(calculate('12.456'));
