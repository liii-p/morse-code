import { morseCode, toEnglish } from "./translation.js";
import { getInput, convertToMorse, convertToEng } from "./dom.js";

const morseInput = document.getElementById("morseBox");
const engInput = document.querySelector("#englishBox");
const translateBtn = document.getElementById("translate");
const clearBtn = document.getElementById("clear");

// to output english converted to morse...
// can use .map to iterate through all of the characters (including spaces)

// console.log(engInput);

translateBtn.addEventListener("click", () => {
    if (engInput.innerText === true) {
        morseInput.innerText = convertToMorse(getInput(engInput), morseCode);
        console.log(morseCode);
    } else {
        engInput.innerText = convertToEng(getInput(morseInput), toEnglish);
        console.log(toEnglish);
    }
});

clearBtn.addEventListener("click", () => {
    engInput.value = "";
    morseInput.value = "";
});

console.log(clearBtn);

console.log(translateBtn);
