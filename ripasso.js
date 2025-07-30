// VARIABILI
let nome = "Gianluca";
let cognome = "Marcone";
let nomeCompleto = nome + " " + cognome;
console.log("1. Nome completo:", nomeCompleto);

// STRINGHE
let frase = "JavaScript è divertente";
console.log("2. Lunghezza frase:", frase.length);
console.log("3. Frase maiuscola:", frase.toUpperCase());

// ARRAY
let frutti = ["Mela", "Banana", "Kiwi"];
console.log("4. Secondo frutto:", frutti[1]);
frutti.push("Arancia");
console.log("5. Array aggiornato:", frutti);

// CICLI FOR
console.log("6. Numeri da 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// FOR...OF
let animali = ["cane", "gatto", "leone"];
console.log("7. Lista animali:");
for (let animale of animali) {
  console.log(animale);
}

// FUNZIONI SEMPLICI
function saluta(nome) {
  return "Ciao, " + nome + "!";
}
console.log("8. Saluto:", saluta("Gianluca"));

// FUNZIONI CON PIÙ PARAMETRI E RETURN
function somma(a, b) {
  return a + b;
}
console.log("9. Somma:", somma(4, 6));

// OGGETTI SEMPLICI
let persona = {
  nome: "Luca",
  eta: 25,
  citta: "Napoli"
};
console.log("10. Città:", persona.citta);

// OGGETTI CON METODI
let utente = {
  nome: "Mario",
  cognome: "Rossi",
  presentati: function () {
    return "Ciao, sono " + this.nome + " " + this.cognome;
  }
};
console.log("11. Presentazione:", utente.presentati());

// ARRAY DI OGGETTI
let prodotti = [
  { nome: "Pasta", prezzo: 2 },
  { nome: "Pane", prezzo: 1 },
  { nome: "Acqua", prezzo: 0.5 }
];
console.log("12. Prezzo del secondo prodotto:", prodotti[1].prezzo);

Add JavaScript practice file
