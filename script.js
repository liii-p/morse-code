import { translation, morseCode } from "./translation.js";

const morse = document.getElementById("morseBox");
const engInput = document.querySelector("#englishBox");
const translateBtn = document.getElementById("translate");

// to output english converted to morse...
// can use .map to iterate through all of the characters (including spaces)

// console.log(engInput);

function getInput() {
    if (engInput.value === null || engInput.value === undefined) {
        return "";
    } else {
        return engInput;
    }
}

const convertToMorse = (str) => {
    return str
        .toUpperCase()
        .split("")
        .map((word) => {
            return morseCode[word] ? morseCode[word] : word;
        })
        .join("");
};

const morseToEng = (str) => {
    return str.split("/").map((word) => {
        return;
    });
};
console.log(convertToMorse("Hello"));

// translateBtn.addEventListener("click", () => {
//     if (getInput === null || getInput === undefined) {
//         return morse.textContent("");
//     } else {
//         const translatedString = translation(getInput.value);
//         morse.textContent === translatedString;
//     }
//     console.log(translation);
// });

engInput.addEventListener("input", () => {
    const input = getInput();
    morse.innerText === convertToMorse(input).toString();
});

morse.addEventListener("input", () => {
    const input = getInput;
});

console.log(translateBtn);
