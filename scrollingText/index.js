function scrollingText(text) {
    let arr = [];
    let temp = text.toUpperCase();
    arr.push(temp);
    for (let i = 0; i < text.length - 1; i++) {
        temp = temp.slice(1) + temp.charAt(0);
        arr.push(temp);
    }
    return arr;
}
console.log(scrollingText('Slava'));

