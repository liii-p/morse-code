export { getInput, convertToMorse, convertToEng };

function getInput(element) {
    // undefined, null, "", NaN
    if (!element.value) return "";
    return element.value;
}

const convertToMorse = (str, object) => {
    console.log(`Eng input: ${str}`);
    return str
        .toUpperCase()
        .split("")
        .map((char) => {
            // obj{key: value} - key-value pair or property
            return object[char] ? object[char] : char;
        })
        .join(" ");
};

const convertToEng = (str, obj) => {
    console.log(`Morse input: ${str}`);
    return str.split(" ").map((char) => {
        return obj[char] ? obj[char] : char;
    });
};
