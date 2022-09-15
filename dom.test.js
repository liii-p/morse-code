import { convertToEng, convertToMorse } from "./dom";
import { describe, it, expect } from "babel-jest";

// English to Morse
describe("Test translation from Eng to Morse", () => {
  it("should return correctly translated morse from English input", () => {
    expect(convertToEng("hello world")).toBe(
      ".... . .-.. .-.. --- | .-- --- .-. .-.. -.."
    );
  });
});

describe("Test translation from Morse to eng", () => {
  it("should return correctly translated English from Morse input", () => {
    expect(convertToMorse(".... . .-.. .-.. --- | .-- --- .-. .-.. -..")).toBe(
      "hello world"
    );
  });
});
