// ESEMPIO DI SWITCH SUL CLIMA
let clima = "pioggia"; // Cambia il valore per testare altre condizioni

switch (clima.toLowerCase()) {
    case "sole":
        console.log("Oggi c'è il sole. Bel tempo!");
        break;
    case "pioggia":
        console.log("Oggi piove. Porta l'ombrello.");
        break;
    case "neve":
        console.log("Oggi nevica. Fa freddo!");
        break;
    case "vento":
        console.log("Oggi c'è vento. Stai attento!");
        break;
    case "nuvoloso":
        console.log("Oggi è nuvoloso. Potrebbe piovere.");
        break;
    default:
        console.log("Condizione climatica non valida.");
}
