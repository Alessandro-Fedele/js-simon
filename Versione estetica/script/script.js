"use strict";
// Genero 5 numeri UNICI e RANDOM - da 1 a 100
// Li metto in un array
let randomNumbers = [];
while (randomNumbers.length < 5) {
    let num = Math.floor(Math.random() * 100) + 1;
    if (randomNumbers.indexOf(num) === -1) randomNumbers.push(num);
}

// Button 
const btnGenerateRandomNumbs = document.getElementById("btn-generate-numbers");
// Container
const numContainer = document.querySelector(".container");

// L'utente genera i numeri al click
btnGenerateRandomNumbs.addEventListener("click", function ()
{
    printRandomNumb();
    // Parte il Timer
    let counter = setInterval(timer, 1000);
    let count = 30;
    function timer()
    {
        count = count - 1;
        if (count <= -1) {
            clearInterval(counter);
            stampForm();
            return;
        }
        document.getElementById("timer").innerHTML = count;
    }
});

function printRandomNumb()
{
    numContainer.innerHTML = "";
    for (let i = 0; i < randomNumbers.length; i++) {

        const number = randomNumbers[i];
        numContainer.innerHTML += `<div>
                                        <h3 class="px-5">${number}</h3>
                                    </div>`;
    }
}

// Numeri inseriti dall'utente - in un array
let userNumbers = [];
console.log(userNumbers.length);

function stampForm()
{
    numContainer.innerHTML = `<form class="text-center">
                                    <div class="mb-3 fs-4 fw-bold">
                                        <label class="form-label">Quali numeri ricordi?</label>
                                        <div class="input-group gap-5">
                                            <input type="number" class="form-control inputs-numbers">
                                            <input type="number" class="form-control inputs-numbers">
                                            <input type="number" class="form-control inputs-numbers">
                                            <input type="number" class="form-control inputs-numbers">
                                            <input type="number" class="form-control inputs-numbers">
                                        </div>
                                        <div class="form-text text-danger">Inserisci un numero per ogni casella!</div>
                                    </div>
                                    <button type="button" id="input-btn" class="btn btn-primary">Submit</button>
                                </form>`;
    const btnSubmit = document.getElementById("input-btn");
    btnSubmit.addEventListener("click", function ()
    {
        let inputNumber = document.getElementsByClassName("inputs-numbers");
        for (var i = 0; i < inputNumber.length; ++i) {
            if (typeof inputNumber[i].value !== "undefined") {
                userNumbers.push(parseInt(inputNumber[i].value));
            }
        }
        console.log(userNumbers);

        //Confronto l'array con i numeri inseriti dall'utente e l'array con i numeri random
        let numeriRicordati = randomNumbers.filter(x => userNumbers.includes(x));
        let numeriNonRicordati = randomNumbers.filter(x => !userNumbers.includes(x));
        console.log(numeriRicordati);
        console.log(numeriNonRicordati);
        if (numeriRicordati.length > 0) {
            numContainer.innerHTML = `<h3>Hai ricordato questi numeri: ${numeriRicordati}, ma non hai ricordato questi: ${numeriNonRicordati}</h3>`;
        } else {
            numContainer.innerHTML = `<h3>Non ne hai ricordato neanche uno!!!</h3>`;
        }
    });
}