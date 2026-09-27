import { round, prepInput } from '../core/calcfunctions.js';

const verticalHeight = document.querySelector("#loddretttakhoyde");
const horizontalLength = document.querySelector("#vannretttaklengde");
const slopedLength = document.querySelector("#skrataklengde");

const errorMessageContainer = document.querySelector("#errorMessageContainer");
const errorMessageText = document.querySelector("#errorMessageText");

const resultsList = document.querySelector("#resultsList");
const outputDecimals = 3;

verticalHeight.addEventListener("input", inputEvent);
horizontalLength.addEventListener("input", inputEvent);
slopedLength.addEventListener("input", inputEvent);

function inputEvent() {
    errorMessageContainer.classList.add("hidden");
    resultsList.innerHTML = "";

    if (verticalHeight.value === "0" || horizontalLength.value === "0" || slopedLength.value === "0") {
        displayError("Ingen av verdiene kan være 0");
        return;
    };

    if (verticalHeight.value !== "" && horizontalLength.value !== "" && slopedLength.value !== "") {
        displayError("Fyll maksimalt to felt");
        return;
    };

    if (verticalHeight.value === "" && horizontalLength.value !== "" && slopedLength.value !== "") {
        const numberArray = prepInput([horizontalLength, slopedLength]);
        if (errorCheck(numberArray)) calcVerticalHeight(numberArray);

    } else if (verticalHeight.value !== "" && horizontalLength.value === "" && slopedLength.value !== "") {
        const numberArray = prepInput([verticalHeight, slopedLength]);
        if (errorCheck(numberArray)) calcHorizontalLength(numberArray);

    } else if (verticalHeight.value !== "" && horizontalLength.value !== "" && slopedLength.value === "") {
        const numberArray = prepInput([verticalHeight, horizontalLength]);
        if (errorCheck(numberArray)) calcSlopedLength(numberArray);
    };
};

function errorCheck(numberArray) {
    if (numberArray === "invalidInput") {
        displayError("Bare tall, komma og punktum er tillatt");
        return false;

    } else if (numberArray === "tooManyPeriods") {
        displayError("Kun ett komma eller punktum er tillatt");
        return false;
    };

    return true;
};

function calcVerticalHeight(numberArray) {
    const [horizontalNum, slopedNum] = numberArray;

    if (slopedNum <= horizontalNum) {
        displayError("Skrå taklengde må være lengre enn vannrett lengde");
        return;
    };

    const verticalNum = Math.sqrt(slopedNum**2 - horizontalNum**2);
    calcSlopeAngle(verticalNum, horizontalNum, slopedNum);

};

function calcHorizontalLength(numberArray) {
    const [verticalNum, slopedNum] = numberArray;

    if (slopedNum <= verticalNum) {
        displayError("Skrå taklengde må være lengre enn høyden");
        return;
    };
    
    const horizontalNum = Math.sqrt(slopedNum**2 - verticalNum**2);
    calcSlopeAngle(verticalNum, horizontalNum, slopedNum);
};

function calcSlopedLength(numberArray) {
    const [verticalNum, horizontalNum] = numberArray;
    const slopedNum = Math.sqrt(verticalNum**2 + horizontalNum**2);

    calcSlopeAngle(verticalNum, horizontalNum, slopedNum);
};

function calcSlopeAngle(verticalNum, horizontalNum, slopedNum) {
    const slopeAngleRad = Math.atan(verticalNum/horizontalNum);
    const slopeAngleDeg = (slopeAngleRad * (180 / Math.PI));
    const mmpermeter = Math.tan(slopeAngleRad)*1000;
    const slopePercent = (verticalNum/horizontalNum)*100;
    const resultArray = [verticalNum, horizontalNum, slopedNum, slopeAngleDeg, mmpermeter, slopePercent];

    prepareOutput(resultArray);
};

function prepareOutput(resultArray) {
    const roundedArray = resultArray.map(result => round(result, outputDecimals));
    const [verticalString, horizontalString, slopedString, slopeAngleDeg, mmpermeter, slopePercent] = roundedArray;

    let outputItems = [];
    outputItems.push(`Skrå taklengde: ${slopedString} m`);
    outputItems.push(`Loddrett takhøyde: ${verticalString} m`);
    outputItems.push(`Vannrett avstand til midten: ${horizontalString} m`);
    outputItems.push(`Takvinkel (grader): ${slopeAngleDeg}°`);
    outputItems.push(`Takhelling (mm per meter): ${mmpermeter} mm/m`);
    outputItems.push(`Takhelling (%): ${slopePercent}%`);
    renderOutput(outputItems);
};

function renderOutput(outputItems) {
    resultsList.innerHTML = "";
    outputItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = String(item).replace(".", ",");
        resultsList.appendChild(li);
    });
};

function displayError(message) {
    errorMessageContainer.classList.remove("hidden");
    errorMessageText.textContent = message;
};