var format = function (str, obj) {
    let res = str;
    if (Array.isArray(obj)) {
        obj.forEach((element, index) => {
            res = res.replaceAll(`{${index}}`, element);
        });
    } else {
        for (key in obj) {
            res = res.replaceAll(`{${key}}`, obj[key]);
        }

    }
    return res;

};

var obj = { foo: 'Jack', bar: 'sandwich' };

console.log(format('Hello {foo} - make me a {bar}', obj)); // "Hello Jack - make me a sandwich"
console.log(format('Hello {foo} - {foobar} make me a {bar}', obj)); // "Hello Jack - {foobar} make me a sandwich"
console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj)); // "Hello Jack - {foobar} make me a sandwich... Jack!!?"
console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { bar: 'sandwich {foo}', foo: 'Jack' }));
//   "Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"