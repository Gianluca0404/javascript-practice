// VARIABILI
let nome = "Gianluca";
let cognome = "Marcone";
let nomeCompleto = nome + " " + cognome;
console.log("Nome completo:", nomeCompleto);

// STRINGHE
let frase = "JavaScript è divertente";
console.log("Lunghezza frase:", frase.length);
console.log("Frase maiuscola:", frase.toUpperCase());

// ARRAY
let frutti = ["Mela", "Banana", "Kiwi"];
console.log("Secondo frutto:", frutti[1]);
frutti.push("Arancia");
console.log("Array aggiornato:", frutti);

// CICLI FOR
console.log("Numeri da 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// FOR...OF
let animali = ["cane", "gatto", "leone"];
console.log("Lista animali:");
for (let animale of animali) {
  console.log(animale);
}

// FUNZIONI SEMPLICI
function saluta(nome) {
  return "Ciao, " + nome + "!";
}
console.log("Saluto:", saluta("Gianluca"));

// FUNZIONI CON PIÙ PARAMETRI E RETURN
function somma(a, b) {
  return a + b;
}
console.log("Somma:", somma(4, 6));

// OGGETTI SEMPLICI
let persona = {
  nome: "Gianluca",
  eta: 25,
  citta: "Napoli"
};
console.log("Città:", persona.citta);

// OGGETTI CON METODI
let utente = {
  nome: "Gianluca",
  cognome: "Marcone",
  presentati: function () {
    return "Ciao, sono " + this.nome + " " + this.cognome;
  }
};
console.log("Presentazione:", utente.presentati());

// ARRAY DI OGGETTI
let prodotti = [
  { nome: "Pasta", prezzo: 2 },
  { nome: "Pane", prezzo: 1 },
  { nome: "Acqua", prezzo: 0.5 }
];
console.log("Prezzo del secondo prodotto:", prodotti[1].prezzo);



