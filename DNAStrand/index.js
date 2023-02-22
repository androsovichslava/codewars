// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function DNAStrand(dna) {
    //your code here
    return dna.split('').map(elem => {
        switch (elem) {
            case "A": return "T";
            case "T": return "A";
            case "C": return "G";
            case "G": return "C";
        }
    }).join('');
}

console.log(DNAStrand("ACGGGA"));