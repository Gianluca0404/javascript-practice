// 1. TROVA IL MASSIMO E IL MINIMO TRA PIÙ NUMERI
console.log("massimo:", Math.max(12, 7, 25, 3, 18));
console.log("minimo:", Math.min(-5, 0, 8, -12, 4));

// 2. NUMERO CASUALE DECIMALE TRA 0 E 1
console.log("numero casuale 0-1:", Math.random());

// 3. NUMERO CASUALE INTERO TRA 0 E 10
console.log("casuale intero 0-10:", Math.floor(Math.random() * 11));

// 4. ARROTONDAMENTI
console.log("arrotonda per difetto:", Math.floor(4.7));
console.log("arrotonda per eccesso:", Math.ceil(4.3));
console.log("arrotonda al più vicino:", Math.round(4.5));

// 5. POTENZE E RADICI
console.log("5 alla seconda potenza:", Math.pow(5, 2));
console.log("radice quadrata di 144:", Math.sqrt(144));

// 6. VALORE ASSOLUTO
console.log("valore assoluto di -42:", Math.abs(-42));

// 7. MASSIMO E MINIMO IN UN ARRAY
let numeri = [3, 8, 1, 15, -4];
console.log("massimo array:", Math.max(...numeri));
console.log("minimo array:", Math.min(...numeri));

// 8. NUMERO CASUALE TRA -10 E 10
console.log("casuale intero -10 a 10:", Math.floor(Math.random() * 21) - 10);

// 9. ARROTONDA TUTTI I NUMERI IN UN ARRAY
let numeriDecimali = [3.2, 7.7, 4.5, 9.9];
let arrotondati = numeriDecimali.map(n => Math.round(n));
console.log("numeri arrotondati:", arrotondati);

// 10. MOLTIPLICARE NUMERO CASUALE PER UNA SCALA
let casuale = Math.random(); // 0-1
let scala = casuale * 50; // 0-50
console.log("numero casuale scalato 0-50:", Math.floor(scala));
