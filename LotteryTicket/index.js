function bingo(ticket, win) {
    let totalCount = 0;
    let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        let arr = ticket[i][0].split('');
        let charCode = ticket[i][1];
        count = 0;
        console.log(charCode + '   -----');
        arr.forEach(element => {
            if (element.charCodeAt(0) == charCode) {
                count = 1;
            }
        });
        totalCount = totalCount + count;

    }

    return totalCount >= win ? 'Winner' : 'Loser';

}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))