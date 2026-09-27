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
    outputTextElement.textContent = "Median:";

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
    let medianValue;

    const datasetSorted = dataset.sort((a, b) => a - b);

    if (dataset.length % 2 === 0) {
        const middleArrayLongLength = Math.floor(dataset.length / 2);
        const middleArrayShortLength = middleArrayLongLength - 1;
        const lowMidNum = datasetSorted[middleArrayShortLength];
        const highMidNum = datasetSorted[middleArrayLongLength];
        medianValue = (lowMidNum + highMidNum) / 2;

    } else {
        const middleOfArray = Math.floor(dataset.length / 2);
        medianValue = datasetSorted[middleOfArray];
    };

    const result = prepExpOutput(medianValue, outputDecimals, expDecimals);
    outputTextElement.textContent = `Median: ${result}`;
};

function displayError(errormsg) {
    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent = errormsg;
    outputTextElement.textContent = "Median:";
};
