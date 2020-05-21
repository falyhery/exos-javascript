const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Entrepreneurs nés dans les années 1970
console.log("On filtre les entrepreneurs nés dans les années 70");

let bornSeventies = []; 
for (let count = 0; count <= entrepreneurs.length -1; count++) {
  if (entrepreneurs[count].year >= 1970 && entrepreneurs[count].year < 1980) {
    bornSeventies.push(entrepreneurs[count]);
  }
}
console.log(bornSeventies);
console.log("\n");

// Uniquement le prénom et le nom des entrepreneurs 
console.log("On sort une array qui contient le prénom et le nom des entrepreneurs");

let firstAndLastNames = [];
for (let count = 0; count <= entrepreneurs.length -1; count++) {
  firstAndLastNames.push(entrepreneurs[count].first);
  firstAndLastNames.push(entrepreneurs[count].last);
}
console.log(firstAndLastNames);
console.log("\n");

// Âge de chaque entrepreneur 
console.log("Quel âge aurait chaque entrepreneur aujourd'hui ?"); 

let currentYear = 2020; 
for (let count = 0; count <= entrepreneurs.length -1; count++) {
  console.log(entrepreneurs[count].first + " " + entrepreneurs[count].last + " aurait " + (currentYear - entrepreneurs[count].year) + " ans");
}
console.log("\n");

// Tri alphabétique 
console.log("On trie les entrepreneurs par ordre alphabétique du nom de famille.")
console.log(entrepreneurs.sort((a, b) => (a.last > b.last) ? 1 : -1));
