//return the total number of smiling faces in the array

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
function countSmileys(arr) {
    let count = 0;
    arr.forEach(element => {
        if (
            ((element.indexOf(':') > -1) || (element.indexOf(';') > -1))
            &&
            ((element.indexOf(')') > -1) || (element.indexOf('D') > -1))) {
            count++;
        }
    });

    return count;
}


console.log(countSmileys([':)', ';(', ';}', ':-D']));