//creo una lista di 5 numeri RANDOM E UNICI compresi fra 1 e 100
const listaNumeri = [];
let numeroRandom;

while (listaNumeri.length < 5) {
    numeroRandom = getRandom(100);
    if (listaNumeri.indexOf(numeroRandom) === -1) {
        listaNumeri.push(numeroRandom);
    }
}

// metto i numeri in ordine
listaNumeri.sort(compareNumbers);
// alert con la lista dei numeri
alert('Ricordati questi 5 numeri!: ' + listaNumeri);

setTimeout(function ()
{
    let tentativo;
    let listaNumeriRicordati = [];
    let arrayTentativi = [];

    // La condizione iniziale è che i tentativi sono 5
    while (arrayTentativi.length < 5) {
        tentativo = parseInt(prompt('Inserisci un numero da 1 a 100'));

        //se l' utente inserisce due volte lo stesso numero gli si chiede di metterne un altro
        if (arrayTentativi.includes(tentativo)) {
            alert('Hai inserito due volte lo stesso numero! Riprova con un numero diverso!');

            // se l' utente mette un numero NON compreso tra 1 e 100 gli si chiede di metterne un altro
        } else if ((tentativo < 1) || (tentativo > 100)) {
            alert('Numero non valido! Riprova con un altro tra 1 e 100');

            // se utente usa caratteri non numerici gli chiedo di riprovare
        } else if (isNaN(tentativo)) {
            alert('Usa solo caratteri numerici!');

        } else {
            // se il tentativo dell'utente corrisponde a uno dei numeri iniziali, va nella lista dei numeri ricordati e nella lista dei tentativi totali
            if (listaNumeri.includes(tentativo)) {
                arrayTentativi.push(tentativo);
                listaNumeriRicordati.push(tentativo);
            } else {
                // se il numero inserito non è uno di quei 5 che dovevo ricordare, va nell'arrayTentativi
                arrayTentativi.push(tentativo);
            }
            //quanti numeri l'utente ha ricordato
            var punti = listaNumeriRicordati.length;
        }
    }

    alert('Ti sei ricordato ' + punti + ' numeri su 5');
    alert('I numeri da ricordare erano: ' + listaNumeri);

    if (listaNumeriRicordati.length > 0) {
        alert('I numeri che ti sei ricodato sono: ' + listaNumeriRicordati);
    } else {
        alert('Non ne hai ricordato nemmeno uno!!!');
    }

}, 3000); // metto 3.000ms invece di 30.000ms

//numeri random
function getRandom(max)
{
    return Math.floor(Math.random() * max) + 1;
}
//numeri in ordine
function compareNumbers(a, b)
{
    return a - b;
}