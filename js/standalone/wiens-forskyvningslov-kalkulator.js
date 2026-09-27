import { validateExponential, prepExpOutput } from '../core/calcfunctions.js';

const tempinput = document.querySelector("#tempinput");
const intensinput = document.querySelector("#intensinput");
const tempoutput = document.querySelector("#tempoutput");
const intensoutput = document.querySelector("#intensoutput");

const errorDiv = document.querySelector("#errorMessageContainer");
const errorTxt = document.querySelector("#errorMessageText");

const WIEN = 2.898e-3;
const outputDecimals = 5;
const expDecimals = 6;
const noZero = true;

tempinput.addEventListener("input", (e) => handleInput(e, "tempinput"));
intensinput.addEventListener("input", (e) => handleInput(e, "intensinput"));

function handleInput(e, inputType) {
    errorDiv.classList.add("hidden");
    errorTxt.textContent="";

    const inputString = e.target.value;
    const preppedResult = validateExponential(inputString, noZero);

    if (inputType === "tempinput") {
        intensoutput.value = "";
        
    } else if (inputType === "intensinput") {
        tempoutput.value = "";
    };

    if (preppedResult === false) return;
    
    if (preppedResult === "invalidFormat") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Bare tall eller vitenskapelig e-notasjon er tillatt";
        
        return;
    };

    if (preppedResult === "isZero") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Verdien 0 er ikke tillatt";
        
        return;
    };

    calculate(preppedResult, inputType);
};

function calculate(preppedNum, inputType) {
    const calculated = WIEN / preppedNum;
    output(calculated, inputType);
};

function output(calculated, inputType) {
    const finalresult = prepExpOutput(calculated, outputDecimals, expDecimals);

    if (inputType === "tempinput") {
        intensoutput.value = finalresult;
        
    } else if (inputType === "intensinput") {
        tempoutput.value = finalresult;
    };
};