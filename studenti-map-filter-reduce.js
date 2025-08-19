// LISTA STUDENTI
let studenti = [
  { nome: "Luca", voto: 7 },
  { nome: "Fabio", voto: 5 },
  { nome: "Bruno", voto: 8 },
  { nome: "Gianni", voto: 6 },
  { nome: "Anna", voto: 4 }
];

// LISTA SOLO DEI NOMI DEGLI STUDENTI
let nomiStudenti = studenti.map(function(studente) {
  return studente.nome;
});
console.log("Nomi studenti:", nomiStudenti);

// FILTRA SOLO GLI STUDENTI PROMOSSI (VOTO >= 6)
let promossi = studenti.filter(function(studente) {
  return studente.voto >= 6;
});
console.log("Studenti promossi:", promossi);

// CALCOLA LA SOMMA DEI VOTI DI TUTTI GLI STUDENTI
let sommaVoti = studenti.reduce(function(acc, studente) {
  return acc + studente.voto;
}, 0);
console.log("Somma voti:", sommaVoti);

// CALCOLA LA MEDIA DEI VOTI
let mediaVoti = sommaVoti / studenti.length;
console.log("Media voti:", mediaVoti);
