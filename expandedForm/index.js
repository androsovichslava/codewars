

function expandedForm(num) {
    // Convert the number to a string and split it into an array of digits
    var digits = num.toString().split('');

    // Create an empty array to hold the expanded form of the number
    var expanded = [];

    // Loop through the digits array, starting from the left
    for (var i = 0; i < digits.length; i++) {
        // If the current digit is not zero, add it to the expanded array with the appropriate number of zeros
        if (digits[i] !== '0') {
            expanded.push(digits[i] + '0'.repeat(digits.length - i - 1));
        }
    }

    // Join the expanded array with ' + ' to create the final string
    return expanded.join(' + ');
}

console.log(expandedForm(12066345));