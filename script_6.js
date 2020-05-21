let arnSequence = ""; 
arnSequence = prompt("Saisis une séquence ARN")
let codons = arnSequence.match(/.{1,3}/g);
console.log(codons);

for (let count = 0; count <= codons.length; count++) {
	if (codons[count] === "UCU" || codons[count] === "UCC" || codons[count] === "UCA" || codons[count] === "UCG" || codons[count] === "AGU" || codons[count] === "AGC") {
	codons[count] = "Sérine";
	} else if (codons[count] === "CCU" || codons[count] === "CCC" || codons[count] === "CCA" || codons[count] === "CCG") {
		codons[count] = "Proline";
	} else if (codons[count] === "UUA" || codons[count] === "UUG") {
		codons[count] = "Leuncine";
	} else if (codons[count] === "UUU" || codons[count] === "UUC") {
		codons[count] = "Phénylalanine";
	} else if (codons[count] === "CGU" || codons[count] === "CGC" || codons[count] === "CGA" || codons[count] === "CGG" || codons[count] === "AGA" || codons[count] === "AGG") {
		codons[count] = "Arginine";
	} else if (codons[count] === "UAU" || codons[count] === "UAC") {
		codons[count] = "Tyrosine";
	}
}

console.log(codons.join('-'));