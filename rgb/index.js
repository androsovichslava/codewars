function rgb(r, g, b) {
    // complete this function 
    let color = c => (c <= 0 ? '00' : c > 255 ? 'FF' : c <= 15 ? '0' + c.toString(16) : c.toString(16)).toUpperCase();
    return color(r) + color(g) + color(b);
}

console.log(rgb(-277, 104, 12))