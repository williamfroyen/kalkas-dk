import { prepInput, prepExpOutput } from '../core/calcfunctions.js';

const frequency = document.querySelector("#frekvensInputElement");
const period = document.querySelector("#periodeInputElement");
const wavelength = document.querySelector("#bolgelengdeInputElement");
const wavespeed = document.querySelector("#bolgefartInputElement");
const emOption = document.querySelector("#bolgetypeRadioElement1");
const mechOption = document.querySelector("#bolgetypeRadioElement2");
const resultsList = document.querySelector("#resultsList");

const plancksconstant = 6.62607e-34;
const outputDecimals = 5;
const expDecimals = 6;

frequency.addEventListener("input", handleInput);
period.addEventListener("input", handleInput);
wavelength.addEventListener("input", handleInput);
wavespeed.addEventListener("input", handleInput);
emOption.addEventListener("input", handleInput);
mechOption.addEventListener("input", handleInput);

function handleInput() {
    errorMessageContainer.classList.add("hidden");
    resultsList.innerHTML = "";

    const elementArray = [frequency, period, wavelength, wavespeed];
    const filteredArray = elementArray.filter(element => isFilled(element));
    const numberArray = prepInput(filteredArray);

    errorCheck(numberArray);
};

function errorCheck(numberArray) {
    const f = isFilled(frequency);
    const p = isFilled(period);
    const ws = isFilled(wavespeed);
    const wl = isFilled(wavelength);
    
    if (numberArray === "invalidInput") {
        displayError("Bare tall, komma og punktum er tillatt");
        return false;

    } else if (numberArray === "tooManyPeriods") {
        displayError("Kun ett komma eller punktum er tillatt");
        return false;
    };
    
    if (frequency.value === "0" || period.value === "0" || wavelength.value === "0" || wavespeed.value === "0") {
        displayError("Verdiene kan ikke være lik 0");
        return;
    };

    if (f && p) {
        displayError("Fyll enten frekvens, eller periode");
        return;
    };

    if (wl && ws && (f || p)) {
        displayError("Fyll maksimalt to felt");
        return;
    };

    if (!f && !p && !(ws && wl)) {
        return;
    };

    const calcType = findCalcType(f, p, ws, wl);
    calculate(calcType, numberArray);
};

function findCalcType(f, p, ws, wl) {
    if (f && !ws && !wl) { return "p-from-f" };
    if (p && !wl && !ws) { return "f-from-p" };

    if (f && ws && !wl) { return "wl-from-f-and-ws" };
    if (f && wl && !ws) { return "ws-from-f-and-wl" };

    if (p && ws && !wl) { return "wl-from-p-and-ws" };
    if (p && wl && !ws) { return "ws-from-p-and-wl" };

    if (ws && wl) { return "f-and-p-from-wl-and-ws" };

};

function isFilled(element) {
    return element.value !== "";
};

function calculate(calcType, numberArray) {
    let f, p, wl, ws = undefined;

    switch (calcType) {
        case "p-from-f":
            [f] = numberArray;
            p = 1 / f;
            break;
        case "f-from-p":
            [p] = numberArray;
            f = 1 / p;
            break;
        case "wl-from-f-and-ws":
            [f, ws] = numberArray;
            p = 1 / f;
            wl = ws / f;
            break;
        case "ws-from-f-and-wl":
            [f, wl] = numberArray;
            p = 1 / f;
            ws = f * wl;
            break;
        case "wl-from-p-and-ws":
            [p, ws] = numberArray;
            f = 1 / p;
            wl = ws / f;
            break;
        case "ws-from-p-and-wl":
            [p, wl] = numberArray;
            f = 1 / p;
            ws = f * wl;
            break;
        case "f-and-p-from-wl-and-ws":
            [wl, ws] = numberArray;
            f = ws / wl;
            p = 1 / f;
            break;
    };
    
    prepareOutput(f, p, wl, ws);
};

function prepareOutput(f, p, wl, ws) {
    let outputItems = [];

    outputItems.push(`Frekvens: ${prepExpOutput(f, outputDecimals, expDecimals)} Hz`);
    outputItems.push(`Periode: ${prepExpOutput(p, outputDecimals, expDecimals)} s`);

    if (wl !== undefined && ws !== undefined) {
        outputItems.push(`Bølgelengde: ${prepExpOutput(wl, outputDecimals, expDecimals)} m`);
        outputItems.push(`Bølgefart: ${prepExpOutput(ws, outputDecimals, expDecimals)} m/s`);
    };

    if (emOption.checked) {
        let radiationtype;
        const photonenergy = plancksconstant * f;

        if (f >= 3e19) {
            radiationtype = "Gammastråling";
        } else if (f >= 3e16) {
            radiationtype = "Røntgenstråling";
        } else if (f >= 7.5e14) {
            radiationtype = "Ultrafiolett stråling";
        } else if (f >= 4e14) {
            radiationtype = "Synlig lys";
        } else if (f >= 3e11) {
            radiationtype = "Infrarød stråling";
        } else if (f >= 3e8) {
            radiationtype = "Mikrobølger";
        } else {
            radiationtype = "Radiobølger";
        };

        outputItems.push(`Fotonenergi: ${prepExpOutput(photonenergy, outputDecimals, expDecimals)} J`);
        outputItems.push(`Strålingstype: ${radiationtype}`);
    };

    renderOutput(outputItems);
};


function renderOutput(outputItems) {
    resultsList.innerHTML = "";
    outputItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        resultsList.appendChild(li);
    });
};

function displayError(message) {
    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent = message;
};