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
  console.log(engInput.value);
  if (engInput.value !== "") {
    morseInput.value = convertToMorse(engInput.value, morseCode);
  } else {
    console.log(morseInput.value);
    engInput.value = convertToEng(morseInput.value, toEnglish);
  }
});

clearBtn.addEventListener("click", () => {
  engInput.value = "";
  morseInput.value = "";
});
