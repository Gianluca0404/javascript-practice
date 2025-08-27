// ESEMPIO SEMPLICE SU DATE

// DATA CORRENTE
const oggi = new Date();
console.log("OGGI:", oggi);

// DATA SPECIFICA
const compleanno = new Date(2000, 3, 4); // 4 APRILE 2000
console.log("COMPLEANNO:", compleanno);

const onomastico = new Date(2025, 9, 18); // 18 OTTOBRE 2025
console.log("ONOMASTICO:", onomastico);

const natale = new Date(2025, 11, 25); // 25 DICEMBRE 2025
console.log("NATALE:", natale);

// OTTENERE ANNO, MESE, GIORNO
console.log("ANNO DI OGGI:", oggi.getFullYear());
console.log("MESE DI OGGI:", oggi.getMonth() + 1);
console.log("GIORNO DI OGGI:", oggi.getDate());
