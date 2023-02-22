function friend(friends) {
    //your code here
    let arr = [];
    friends.map(elem => {
        if (elem.length == 4) {
            arr.push(elem);
        }
    });

    return arr;
};

let fr = ['ss', 'saha', 'sveta', 'ddddddddd'];

console.log(friend(fr));