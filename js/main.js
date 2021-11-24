import * as Conversions from "./conversions.js";

// Enum for conversion options
const conversionTypes = {
  AREA: "area",
  LENGTH: "length",
  MASS: "mass",
};

// Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Add listeners to type buttons
  const areaButton = document.getElementById("buttonArea");

  /* const conversionTypeSelect = document.getElementById("conversionType");
  conversionTypeSelect.addEventListener("change", (event) => {
    console.log(event.target.value);
  }); */

  /* // Add listener to convert button
    const convertButton = document.getElementById('convert');
    convertButton.addEventListener("submit", event => {
        event.preventDefault();
        processSubmission();
    }) */
};

const testConvert = (measure, from, to) => {
  console.log(Conversions.convertArea(measure, from, to));
};

testConvert(10, "ping", "sqfoot");
console.log(Conversions.convertMass(13.227735731092654, "pound", "jin"));
