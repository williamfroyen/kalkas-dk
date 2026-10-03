import { prepInput, round } from '../core/calcfunctions.js';
import { formulaTable } from '../core/formulas.js';

const inputElement1 = document.querySelector("#input1");
const inputElement2 = document.querySelector("#input2");
const inputElement3 = document.querySelector("#input3");
const outputTextElement = document.querySelector("#oneResultText");
const errorDiv = document.querySelector("#errorMessageContainer");
const errorTxt = document.querySelector("#errorMessageText");
const calcType = outputTextElement.dataset.calctype;
const config = formulaTable[calcType];

inputElement1.addEventListener("input", errorCheck);
inputElement2.addEventListener("input", errorCheck);
inputElement3.addEventListener("input", errorCheck);

function errorCheck() {
    outputTextElement.textContent = config.prefix;
    errorDiv.classList.add("hidden");
    errorTxt.textContent="";

    const inputArray = [inputElement1, inputElement2, inputElement3]
    const numberArray = prepInput(inputArray);
    
    if (numberArray === "invalidInput") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Kun tal, komma og punktum er tilladt";

    } else if (numberArray === "tooManyPeriods") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Kun ét komma eller punktum er tilladt";

    } else if (numberArray) {
        const [input1, input2, input3] = numberArray;

        if (config.noZero === true && (input1 === 0 || input2 === 0 || input3 === 0)) {
            errorDiv.classList.remove("hidden");
            errorTxt.textContent="Ingen af værdierne må være lig med 0";
            
        } else {
            calculate(numberArray);
        };
    };
};

function calculate(numberArray) {
    const [input1, input2, input3] = numberArray;
    const calculated = config.formula(input1, input2, input3);
    const finalString = `${config.prefix} ${round(calculated, config.decimals)} ${config.unit}`
    outputTextElement.textContent = finalString;
};