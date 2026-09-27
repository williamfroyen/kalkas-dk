import { prepOut, prepInput } from '../core/calcfunctions.js';

let borrowedInput = document.querySelector("#input1");
let interestInput = document.querySelector("#input2");
let yearsInput = document.querySelector("#input3");

const outputTextElement = document.querySelector("#oneResultText");
const resultExpTextElement = document.querySelector("#resultsExpText");
const errorMessageContainer = document.querySelector("#errorMessageContainer");
const errorMessageText = document.querySelector("#errorMessageText");

borrowedInput.addEventListener("input", inputEvent);
interestInput.addEventListener("input", inputEvent);
yearsInput.addEventListener("input", inputEvent);

function inputEvent() {
    outputTextElement.textContent=`Lånekostnad:`;
    resultExpTextElement.textContent=``;
    errorMessageContainer.classList.add("hidden");

    const inputArray = [borrowedInput, interestInput, yearsInput];

    const numberArray = prepInput(inputArray);
    
    if (numberArray === "invalidInput") {
        displayError("Bare tall, komma og punktum er tillatt.");

    } else if (numberArray === "tooManyPeriods") {
        displayError("Kun ett komma eller punktum er tillatt.");

    } else if (numberArray) {
        calculate(numberArray);
    };
};

function calculate(numberArray) {
    const [borrowed, interest, years] = numberArray;
    
    if (!rightSize(borrowed, interest, years)) {
        return;
    };

    const r = interest / 100 / 12;
    const mon = years * 12;

    let monthPrincipal;
    let totMortgage;

    if (interest === 0) {
        monthPrincipal = borrowed / mon;
        totMortgage = borrowed;
    } else {
        monthPrincipal = borrowed * (r * (1 + r) ** mon) / ((1 + r) ** mon - 1);
        totMortgage = monthPrincipal * mon;
    };

    const totInterest = totMortgage - borrowed;

    outputText(monthPrincipal, totMortgage, totInterest, borrowed);
};


function rightSize(borrowed, interest, years) {
    if (borrowed < 1_000_000_000 && interest <= 100 && years <= 100 && years > 0) {
        return true;
    };

    displayError("Tillatte verdier: 0-1 milliard i lånebeløp, 0-100% rente, 1-100 år nedbetalingstid.");
    return false;
};

function outputText(monthPrincipal, totMortgage, totInterest, borrowed) {
    outputTextElement.textContent=`Lånekostnad: ${prepOut(monthPrincipal)} kr pr. md.`;
    resultExpTextElement.textContent=`Total kostnad på lånet: ${prepOut(totMortgage)} kr. Totalt betalt i avdrag: ${prepOut(borrowed)} kr. Totalt betalt i renter: ${prepOut(totInterest)} kr. `
};

function displayError(message) {
    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent = message;
};
