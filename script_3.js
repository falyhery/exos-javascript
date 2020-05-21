let totalNbOfFloors = "";
totalNbOfFloors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for (let nbOfFloors = 1; nbOfFloors <= totalNbOfFloors; nbOfFloors++) {
  let nbOfSpaces = totalNbOfFloors - nbOfFloors;
  console.log(" ".repeat(nbOfSpaces) + "#".repeat(nbOfFloors));
}