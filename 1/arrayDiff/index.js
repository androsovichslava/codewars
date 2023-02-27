function arrayDiff(a, b) {
    b.forEach(elementB => {
        let i;
        do {
            i = a.indexOf(elementB);
            if (i > -1) {
                a.splice(i, 1);
            }
        } while (i > -1)

    });
    return a;
}

let a = [1, 22, 3, 4, 5, 6, 7, 7, 7, 8];
let b = [3, 7];

console.log(arrayDiff(a, b))