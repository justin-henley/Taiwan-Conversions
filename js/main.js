import * as Conversions from "./conversions.js";
import * as EntryFields from "./entryFields.js";

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
    radio.addEventListener("change", typeHandler);
  });

  // TODO Add listeners to text fields for auto conversion
  const textA = document.querySelector("#textA");
  textA.addEventListener("input", textInputHandler);

  const textB = document.querySelector("#textB");
  textB.addEventListener("input", textInputHandler);

  // TODO Add listeners to select elements to auto update conversions

  // TODO Find a way to make sure the page loads with a default type selected
  //areaRadio.checked = true;
};

// Handles changes when a type is selected
const typeHandler = (event) => {
  const eventValue = event.target.value;

  // style labels
  // TODO prob factor out
  const allTypeLabels = document.querySelectorAll(".typeSelection label");
  allTypeLabels.forEach((label) => {
    label.classList.remove("checked");
  });
  const typeLabel = document.getElementById(`${eventValue}Label`);
  typeLabel.classList.add("checked");

  // Change form to new type
  EntryFields.resetFields(eventValue);
};

// Event listener for text fields
const textInputHandler = (event) => {
  // Bind all text and select elements
  const inputTextElem = event.target;
  const outputTextElem = document.getElementById(
    inputTextElem.id === "textA" ? "textB" : "textA"
  );
  const inputSelectElem = document.getElementById(
    inputTextElem.id === "textA" ? "selectA" : "selectB"
  );
  const outputSelectELem = document.getElementById(
    inputTextElem.id === "textA" ? "selectB" : "selectA"
  );

  // Get the value of the text field
  const measure = parseFloat(inputTextElem.value);
  console.log(event.target.id, measure);

  // Get this unit
  const fromUnit = inputSelectElem.value;
  console.log(fromUnit);

  // Get the unit to convert to
  const toUnit = outputSelectELem.value;

  // Get the unit type
  const unitType = document.querySelector(
    'input[name="unitType"]:checked'
  ).value;
  console.log(unitType);

  // Send conversion
  const result = Conversions.convertMeasure(
    measure,
    fromUnit,
    toUnit,
    unitType
  );

  // Update other text field
  outputTextElem.value = result;
};

// Tests
const testConvert = (measure, from, to, type) => {
  console.log(Conversions.convertMeasure(measure, from, to, type));
};

testConvert(10, "ping", "sqfoot", "area");
testConvert(13.227735731092654, "pound", "jin", "mass");

console.log(Conversions.getTypeUnits("area"));
