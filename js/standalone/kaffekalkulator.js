import { prepInput, round } from '../core/calcfunctions.js';

const inputElement = document.querySelector("#input1");
const outputElement1 = document.querySelector("#output1");
const outputElement2 = document.querySelector("#output2");
const errorDiv = document.querySelector("#errorMessageContainer");
const errorTxt = document.querySelector("#errorMessageText");
const outputDecimals = inputElement.dataset.decimals;

inputElement.addEventListener("input", (e) => {
    outputElement1.value = outputElement2.value = "";
    errorDiv.classList.add("hidden");
    errorTxt.textContent="";

    const inputArray = [e.target];
    const preppedArray = prepInput(inputArray);

    if (preppedArray === "invalidInput") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Kun tall, komma og punktum er tillatt.";

    } else if (preppedArray === "tooManyPeriods") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Kun ett komma eller punktum er tillatt.";

    } else if (preppedArray) {
        calculate(preppedArray[0]);
    };
});

function calculate(preppedNum) {
    const calculated = preppedNum * 6;
    const outputValue1 = round(calculated, outputDecimals);
    const outputValue2 = round(calculated / 10, outputDecimals);
    outputElement1.value = outputValue1;
    outputElement2.value = outputValue2;
};