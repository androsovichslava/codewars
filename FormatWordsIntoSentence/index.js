function formatWords(words) {
    let filteredWord;
    if (Array.isArray(words) && words.length > 0) {
        filteredWord = words.filter(elem => elem !== '' && elem !== null);
    } else {
        return '';
    }
    let len = filteredWord.length;
    let res = '';
    if (len === 0) {
        return res;
    }
    res = filteredWord[0];
    console.log(len);
    if (len > 2) {
        for (let i = 1; i < len - 1; i++) {
            res += ', ' + filteredWord[i];
        }
        res += ' and ' + filteredWord[len - 1];
    } else if (len == 2) {
        res += ' and ' + filteredWord[1];
    } else if (len == 1) {

    }
    return res;
}

console.log(formatWords(null));