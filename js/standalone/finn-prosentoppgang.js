import { prepInput, round } from '../core/calcfunctions.js';

const inputElement1 = document.querySelector("#input1");
const inputElement2 = document.querySelector("#input2");
const outputTextElement = document.querySelector("#oneResultText");
const errorDiv = document.querySelector("#errorMessageContainer");
const errorTxt = document.querySelector("#errorMessageText");
const outputDecimals = 3;

inputElement1.addEventListener("input", inputAction);
inputElement2.addEventListener("input", inputAction);

function inputAction() {
    outputTextElement.textContent = "Oppgang:";
    errorDiv.classList.add("hidden");
    errorTxt.textContent="";

    const inputArray = [inputElement1, inputElement2]
    const numberArray = prepInput(inputArray);

    if (numberArray === "invalidInput") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Kun tall, komma og punktum er tillatt.";

    } else if (numberArray === "tooManyPeriods") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Kun ett komma eller punktum er tillatt.";

    } else if (numberArray) {
        errorCheck(numberArray);
    };
};

function errorCheck(numberArray) {
    const [input1, input2] = numberArray;
    if (input1 > input2) {
        return;
    };
    if (input1 === 0 || input2 === 0) {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Ingen av verdiene kan være lik 0.";
        return;
    };
    calculate(input1, input2);
};

function calculate(input1, input2) {
    const calculated = ((input2 - input1) / input1) * 100;
    const finalString = `Oppgang: ${round(calculated, outputDecimals)} %`
    outputTextElement.textContent = finalString;
};