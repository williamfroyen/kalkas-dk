import { prepDatasetInput, prepExpOutput } from '../core/calcfunctions.js';

const userInput = document.querySelector("#textareastat");
const outputTextElement = document.querySelector("#oneResultText");
const errorMessageContainer = document.querySelector("#errorMessageContainer");
const errorMessageText = document.querySelector("#errorMessageText");

const outputDecimals = 3;
const expDecimals = 4;

userInput.addEventListener("input", handleInput);

function handleInput() {
    errorMessageContainer.classList.add("hidden");
    outputTextElement.textContent = "Gjennomsnitt:";

    const dataset = prepDatasetInput(userInput.value);

    if (dataset === "invalidInput") {
        displayError("Bare tall, komma og punktum er tillatt");
        return;

    } else if (dataset === "invalidFormat") {
        displayError("Ugyldig tallformat (sjekk bruk av punktum/komma)");
        return;

    } else if (dataset === "noNumbers") {
        displayError("Fyll feltet med tall");
        return;

    } else if (dataset) {
        calculateResult(dataset);
    };
};

function calculateResult(dataset) {
    let sum = 0;

    dataset.forEach((element) => {
        sum += element;
        
    });

    const theAverage = sum / dataset.length;

    const result = prepExpOutput(theAverage, outputDecimals, expDecimals);
    outputTextElement.textContent = `Gjennomsnitt: ${result}`;
};

function displayError(errormsg) {
    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent = errormsg;
    outputTextElement.textContent = "Gjennomsnitt:";
};
