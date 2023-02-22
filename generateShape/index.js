function generateShape(integer) {
    let str = '';
    for (let i = 0; i < integer; i++) {
        for (let j = 0; j < integer; j++) {
            str += '+';
        }
        str += '\n';
    }

    return str;
}

console.log(generateShape(15));