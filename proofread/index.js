function proofread(str) {

    //Insert code here. 
    let lower = str.toLowerCase().replaceAll('ie', 'ei');
    let arr = lower.split('. ').map((elem, i) => i > 0 ? ' ' + elem.trim().slice(0, 1).toUpperCase() + elem.trim().slice(1) :
        elem.trim().slice(0, 1).toUpperCase() + elem.trim().slice(1));
    let full = arr.join('.');
    return full;

}


console.log(proofread("The neighbour\'s ceiling fell on his head. the Weight of it crushed him to the ground."));