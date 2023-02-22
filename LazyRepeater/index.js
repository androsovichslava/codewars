// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call


let abc = function makeLooper() {
    let str = 'abc';
    let counter = 0;
    function second() {
        if (counter > 2) {
            counter = 0;
        } else {
            counter++;
        }

        return counter;
    }
    return second();
}
console.log(abc());
console.log(abc());
console.log(abc());
