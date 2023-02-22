// return masked string
function maskify(cc) {
    let card = '';
    let sym = ''
    let str = cc.trim();
    if (str.length > 4) {
        card = str.substr(str.length - 4);
        for (i = 0; i < str.length - 4; i++) {
            sym += '#';
        }
        card = sym + card;
    } else {
        card = str;
    }

    return card;
}

console.log(maskify('123   '));