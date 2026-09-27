import { prepExpOutput } from '../core/calcfunctions.js';

const input1 = document.querySelector("#input1");
const errorMessageContainer = document.querySelector("#errorMessageContainer");
const errorMessageText = document.querySelector("#errorMessageText");
const outputElement = document.querySelector("#output1");

const outputDecimals = 5;
const expDecimals = 6;

input1.addEventListener("input", charCheck);

function charCheck () {
    outputElement.value = "";
    let inputValueString = String(input1.value);
    inputValueString = inputValueString.replace(/\s+/g, "");
    inputValueString = inputValueString.replace(/,/g, ".");
    const allowedChars = /^[0-9./]+$/;

    const isCharsAllowed = allowedChars.test(inputValueString);

    if (isCharsAllowed === false && inputValueString.length > 0) {
        errorMessageContainer.classList.remove("hidden");
        errorMessageText.textContent = "Bare tall, punktum, komma og / er tillatt";
    } else if (isCharsAllowed === true && inputValueString.length > 0) {
        errorMessageContainer.classList.add("hidden");
        calculateResult(inputValueString);
    } else {
        errorMessageContainer.classList.add("hidden");
    }; 
};

function calculateResult(inputValueString) {
    const inputValueArray = inputValueString.split("/");
    const arrayRemovedEmptyStrings = inputValueArray.filter(Boolean);
    const arrayNumbers = arrayRemovedEmptyStrings.map(Number);

    if (arrayNumbers.length > 2) {
        errorMessageContainer.classList.remove("hidden");
        errorMessageText.textContent = "Bruk formatet: teller/nevner";
        return;
    };

    if (arrayNumbers.some(n => Number.isNaN(n))) {
        errorMessageContainer.classList.remove("hidden");
        errorMessageText.textContent = "Ugyldig tallformat (sjekk bruk av punktum/komma)";
        return;
    };

    if (arrayNumbers[1] === 0) {
        errorMessageContainer.classList.remove("hidden");
        errorMessageText.textContent = "Nevner kan ikke være 0";
        return;
    };

    if (arrayNumbers.length === 2) {
        let result = arrayNumbers[0] / arrayNumbers[1];
        result = prepExpOutput(result, outputDecimals, expDecimals);
        outputElement.value = result;
    };
};