export { morseCode, translation };

// First need to establish morse code variables... i.e. a = *-
const morseCode = {
    A: "*-",
    B: "-***",
    C: "-*-*",
    D: "-**",
    E: "*",
    F: "**-*",
    G: "--*",
    H: "****",
    I: "**",
    J: "*---",
    K: "-*-",
    L: "*-**",
    M: "--",
    N: "-*",
    O: "---",
    P: "*--*",
    Q: "--*-",
    R: "*-*",
    S: "***",
    T: "-",
    U: "**-",
    V: "***-",
    W: "*--",
    X: "-**-",
    Y: "-*--",
    Z: "--**",
    " ": "/",
    "?": "..--..",
    "'": ".----.",
    "&": ".-...",
    ",": "--..--",
    ".": ".-.-.-",
};

const translation = (string) => {
    // Place Object keys into an array
    const keys = Object.getOwnPropertyNames(morseCode);
    // Place Object values into an array
    const values = Object.values(morseCode);

    // Error catching:
    // If the string is empty or contains a number
    if (string === null || string === undefined || string === "") {
        return "";
    }

    // Split the string, based on whether the string is in English or in Morse
    if (/^[\.\-]/.test(string)) {
        const morseArr = string.split(" ");

        // Create a new array with the translated character
        const translatedToEnglish = morseArr.map((char) => {
            return keys[values.indexOf(char)].toLowerCase();
        });

        // Join translated characters
        return translatedToEnglish.join("");
    } else if (/^[a-z\d\W]/gi.test(string)) {
        const englishArr = string.split("");

        // Create a new array with the translated character
        const translatedToMorse = englishArr.map((char) => {
            return values[keys.indexOf(char.toUpperCase())];
        });

        // Join translated characters
        return translatedToMorse.join(" ");
    }
};
