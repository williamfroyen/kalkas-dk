import { prepOut, prepInput } from '../core/calcfunctions.js';

const startAmountInput = document.querySelector("#input1");
const monthlyInvestmentInput = document.querySelector("#input2");
const yearsInput = document.querySelector("#input3");
const annualReturnInput = document.querySelector("#input4");

const outputTextElement = document.querySelector("#oneResultText");
const resultExpTextElement = document.querySelector("#resultsExpText");
const errorMessageContainer = document.querySelector("#errorMessageContainer");
const errorMessageText = document.querySelector("#errorMessageText");

startAmountInput.addEventListener("input", inputEvent);
monthlyInvestmentInput.addEventListener("input", inputEvent);
yearsInput.addEventListener("input", inputEvent);
annualReturnInput.addEventListener("input", inputEvent);

function inputEvent() {
    outputTextElement.textContent=`Verdi:`;
    resultExpTextElement.textContent=``;
    errorMessageContainer.classList.add("hidden");

    const inputArray = [startAmountInput, monthlyInvestmentInput, yearsInput, annualReturnInput];

    const numberArray = prepInput(inputArray);

    if (numberArray === "invalidInput") {
        errorMessageContainer.classList.remove("hidden");
        errorMessageText.textContent="Bare tall, komma og punktum er tillatt.";

    } else if (numberArray === "tooManyPeriods") {
        errorMessageContainer.classList.remove("hidden");
        errorMessageText.textContent="Kun ett komma eller punktum er tillatt.";

    } else if (numberArray) {
        calculate(numberArray);
    };
};

function calculate(numberArray) {
    const [startAmount, monthlyInvestment, years, annualReturn] = numberArray;

    let noReturns = startAmount + monthlyInvestment * 12 * years;

    if (annualReturn === 0) {
        if (!rightSize(noReturns)) {
            return;
        };
        outputText(noReturns, 0, startAmount, monthlyInvestment, years, annualReturn);
        
    } else {
        const r = annualReturn / 100 / 12;
        const n = 12 * years;
        const growth = (1 + r) ** n;

        let finalValue = startAmount * growth + monthlyInvestment * ((growth - 1) / r);
        let returns = finalValue - noReturns;

        if (!rightSize(finalValue)) {
            return;
        };
        outputText(finalValue, returns, startAmount, monthlyInvestment, years, annualReturn);
    };
};


function rightSize(value) {
    if (value < 1_000_000_000_000_000) {
        return true;
    };

    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent="Feilmelding: Velg lavere verdier for startbeløp, månedlig investering, år eller avkastning.";
    return false;
};

function outputText(value, returns, startAmount, monthlyInvestment, years, annualReturn) {
    outputTextElement.textContent=`Verdi: ${prepOut(value)} kr`;
    resultExpTextElement.textContent=`Avkastning: ${prepOut(returns)} kr. Etter å ha spart ${prepOut(monthlyInvestment)} kr per måned i ${prepOut(years)} år, med en årlig rente på ${prepOut(annualReturn)}% og et startbeløp på 
    ${prepOut(startAmount)} kr, vil du sitte med ${prepOut(value)} kr etter ${prepOut(years)} år.`
};