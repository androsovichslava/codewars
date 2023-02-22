
a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

function longest(s1, s2) {

    return Array.from(new Set([...new Set(s1.split('')), ...new Set(s2.split(''))])).sort().join('');
}

console.log(longest(a, b));
