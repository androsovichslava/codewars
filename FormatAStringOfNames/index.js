// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
function list(names) {
    //your code here
    let temp = names.map(elem => elem.name);
    console.log(temp)
    let str = '';
    if (temp.length > 2) {
        for (let i = 0; i < temp.length - 2; i++) {
            str += temp[i] + ', ';
        };

        str += temp[temp.length - 2];
        str += ' & ' + temp[temp.length - 1];
    } else if (temp.length > 1) {
        str = temp[0] + ' & ' + temp[1];
    } else if (temp.length > 0) {
        str = temp[0];
    } else {
        str = '';
    }

    return str;

}
let arr = [{ name: 'Bart' }, { name: 'Bart' }, { name: 'Bart' }, { name: 'Bart' }];

console.log(list(arr));