import { validateExponential, prepExpOutput } from '../core/calcfunctions.js';

const tempinput = document.querySelector("#tempinput");
const utstrinput = document.querySelector("#utstrinput");
const tempoutput = document.querySelector("#tempoutput");
const utstroutput = document.querySelector("#utstroutput");

const errorDiv = document.querySelector("#errorMessageContainer");
const errorTxt = document.querySelector("#errorMessageText");

const STEFAN = 5.670374419e-8;
const outputDecimals = 5;
const expDecimals = 6;
const noZero = false;

tempinput.addEventListener("input", (e) => handleInput(e, "tempinput"));
utstrinput.addEventListener("input", (e) => handleInput(e, "utstrinput"));

function handleInput(e, inputType) {
    errorDiv.classList.add("hidden");
    errorTxt.textContent="";

    const inputString = e.target.value;
    const preppedResult = validateExponential(inputString, noZero);

    if (inputType === "tempinput") {
        utstroutput.value = "";
        
    } else if (inputType === "utstrinput") {
        tempoutput.value = "";
    };

    if (preppedResult === false) return;
    
    if (preppedResult === "invalidFormat") {
        errorDiv.classList.remove("hidden");
        errorTxt.textContent="Bare tall eller vitenskapelig e-notasjon er tillatt";
        return;
    };

    calculate(preppedResult, inputType);
};

function calculate(preppedNum, inputType) {
    let calculated;

    if (inputType === "tempinput") {
        calculated = preppedNum**4 * STEFAN;
    } else if (inputType === "utstrinput") {
        calculated = (preppedNum / STEFAN)**0.25;  
    };
    output(calculated, inputType);

};

function output(calculated, inputType) {
    const finalresult = prepExpOutput(calculated, outputDecimals, expDecimals);

    if (inputType === "tempinput") {
        utstroutput.value = finalresult;
        
    } else if (inputType === "utstrinput") {
        tempoutput.value = finalresult;
    };
};