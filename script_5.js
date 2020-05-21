const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let allBooksHaveBeenRented = true; 
for (let count = 0; count <= books.length -1; count++) {
	if (books[count].rented == 0) {
		allBooksHaveBeenRented = false;  
		break;
	}  
}

if (allBooksHaveBeenRented) {
	console.log("Oui");
} else {
	console.log("Non");
}
console.log("\n");

// Quel est livre le plus emprunté ?
console.log("Quel est le livre le plus emprunté ?");
let rentedBooks = [];

for (let count = 0; count <= books.length -1; count++) {
  rentedBooks.push(books[count].rented);
  if (books[count].rented === Math.max(...rentedBooks)) {
    maxRented = count;
  } else if (books[count].rented === Math.min(...rentedBooks)) {
    minRented = count;
  }
}
console.log(books[maxRented].title);
console.log("\n");

// Quel est le livre le moins emprunté ?
console.log("Quel est le livre le moins emprunté ?")
console.log(books[minRented].title);
console.log("\n");

// Quel est le livre avec l'ID: 873495 ? 
console.log("Quel est le livre avec l'ID: 873495 ?")
let bookIds = [];

for (let count = 0; count <= books.length -1; count++) {
  bookIds.push(books[count].id);
  if (books[count].id === 873495) {
    searchedId = count; 
  } else if (books[count].id === 133712) {
    idBookToDelete = count;
  }
}
console.log(books[searchedId].title);
console.log("\n");

// Supprime le livre avec l'ID: 133712
console.log("On supprime le livre avec l'ID: 133712");
books.splice(idBookToDelete,1);
console.log(books);
console.log("\n");

// Tri alphabétique
console.log("On trie les livres par ordre alphabétique");
console.log(books.sort((a, b) => (a.title > b.title) ? 1 : -1));
