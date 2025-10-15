/** // Snack 1 - Filtra e Modifica 

// Crea un array (longBooks) con i libri che hanno più di 300 pagine;

const longBooks = books.filter((books) => {
  return books.pages > 300;
});

console.log(longBooks);

// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.

const longBooksTitles = longBooks.map((longBooks) => {
  return longBooks.title;
});
// Stampa in console ogni titolo nella console.

console.log(longBooksTitles);
*/

/** 
// Snack 2 - Il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.

const availableBooks = books.filter((books) => {
  return books.available === true;
});

//console.log(availableBooks);

// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)

const discountedBooks = availableBooks.map((availableBooks) => {
  const number = Number(availableBooks.price.replace("€", "")) * 0.8;
  return { ...availableBooks, price: number.toFixed(2) + "€" };
});

// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const fullPricedBook = discountedBooks.find((b) => {
  const number = Number(b.price.replace("€", ""));
  return Number.isInteger(number);
});

console.log(fullPricedBook);*/

const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// Snack 3 - Ordinare gli Autori
// Creare un array (authors) che contiene gli autori dei libri.

const authors = books.map((books) => books.author);
console.log(authors);

// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.

const areAuthorsAdults = authors.every((a) => a.age > 18);

//false
console.log(areAuthorsAdults);

// Ordina l’array authors in base all’età, senza creare un nuovo array. (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

authors.sort((a, b) => b.age - a.age);

console.log(authors);
