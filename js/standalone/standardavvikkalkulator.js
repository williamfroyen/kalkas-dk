import { prepDatasetInput, prepExpOutput } from '../core/calcfunctions.js';

const userInput = document.querySelector("#textareastat");
const stdPopulationChoice = document.querySelector("#stdavvikRadioElementPop");
const stdSampleChoice = document.querySelector("#stdavvikRadioElementStikk");
const outputTextElement = document.querySelector("#oneResultText");
const errorMessageContainer = document.querySelector("#errorMessageContainer");
const errorMessageText = document.querySelector("#errorMessageText");

const outputDecimals = 3;
const expDecimals = 4;

stdPopulationChoice .addEventListener("input", handleInput);
stdSampleChoice.addEventListener("input", handleInput);
userInput.addEventListener("input", handleInput);

function handleInput() {
    errorMessageContainer.classList.add("hidden");
    outputTextElement.textContent = "Standardavvik:";

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

    } else if (dataset && dataset.length > 1) {
        calculateResult(dataset);
    };
};

function calculateResult(dataset) {
    let sum = 0;
    let squareSum = 0;
    let standarddeviation = 0;
    
    dataset.forEach((element) => {
        sum += element;
    });

    const theAverage = sum / dataset.length;

    dataset.forEach((element) => {
        squareSum += (element - theAverage)**2;
    });

    if (stdPopulationChoice.checked) {
        standarddeviation = Math.sqrt(squareSum / dataset.length);

    } else if (stdSampleChoice.checked) {
        standarddeviation = Math.sqrt(squareSum / (dataset.length - 1));
    };

    const result = prepExpOutput(standarddeviation, outputDecimals, expDecimals);
    outputTextElement.textContent = `Standardavvik: ${result}`;
};

function displayError(errormsg) {
    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent = errormsg;
    outputTextElement.textContent = "Standardavvik:";
};
