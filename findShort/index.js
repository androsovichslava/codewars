function findShort(s) {
    const lengths = s
        .split(' ')
        .map(elem => elem.length);

    return Math.min(...lengths);
    // Math.min

    // let minLen = Infinity;
    // for (let elem of arr) {
    //     if (elem < minLen) {
    //         minLen = elem;
    //     }
    // }
    // return minLen;
}

let arr = 'sss ssssss frrrrrrr';

console.log(findShort(arr))

// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
