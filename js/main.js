import * as Conversions from "./conversions.js";
//import * as EntryFields from "./entryFields.js";
import * as InputHandlers from "./inputHandlers.js";

// The current type and conversion function
let currentType = Conversions.conversionTypes.AREA;

// Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Add listeners to type buttons
  const typeRadios = document.querySelectorAll(".unitRadio");
  typeRadios.forEach((radio) => {
    radio.addEventListener("change", InputHandlers.typeHandler);
  });

  // Add listeners to text fields for auto conversion
  const textElems = document.querySelectorAll(".textEntry");
  textElems.forEach((elem) => {
    elem.addEventListener("input", InputHandlers.textInputHandler);
  });

  // Add listeners to select elements to auto update conversions
  const selectElems = document.querySelectorAll(".unitSelect");
  selectElems.forEach((elem) => {
    elem.addEventListener("input", InputHandlers.selectInputHandler);
  });

  // Load page with a default type selected

  // Create a new change event for type label
  const initTypeEvent = new Event("change");
  document.getElementById("area").dispatchEvent(initTypeEvent);
};

// Tests
const testConvert = (measure, from, to, type) => {
  console.log(Conversions.convertMeasure(measure, from, to, type));
};

testConvert(10, "ping", "sqfoot", "area");
testConvert(13.227735731092654, "pound", "jin", "mass");

console.log(Conversions.getTypeUnits("area"));
