// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
function list(people) {
    const names = people.map(person => person.name);

    if (names.length === 0) {
        return '';
    }
    if (names.length === 1) {
        return names[0];
    }


    // ["A", "B", "C", "D"]

    // let str = '';
    // for (let i = 0; i < names.length - 2; i++) {
    //     str += names[i] + ', ';
    // };
    // str += names[names.length - 2];
    // // str === "A, B, C"
    const withoutLast = names.slice(0, -1).join(', ');
    const lastElem = names.at(-1); //[names.length - 1];

    // return withoutLast + ' & ' + lastElem;
    return `${withoutLast} & ${lastElem}`;


    // str += ' & ' + names[names.length - 1];

    // return str;
}
let arr = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }];

console.log(list(arr));