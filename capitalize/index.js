//capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

function capitalize(sample) {
    let result = [];
    let wordsArray = sample.split('')
        .map((letter, index) => index == 0 ? letter
            .toUpperCase() : index % 2 ? letter.toLowerCase() : letter
                .toUpperCase());
    result.push(arr.join(''));

    wordsArray = sample.split('')
        .map((letter, index) => index == 0 ? letter
            .toLowerCase() : !(index % 2) ? letter.toLowerCase() : letter
                .toUpperCase());
    result.push(wordsArray.join(''));

    return result;
};

console.log(capitalize('InDeXiNgLeSsOnS'));