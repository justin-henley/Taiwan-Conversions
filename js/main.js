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

  // Add listeners to text fields for auto conversion
  const textElems = document.querySelectorAll(".textEntry");
  textElems.forEach((elem) => {
    elem.addEventListener("input", textInputHandler);
  });

  // TODO Add listeners to select elements to auto update conversions
  const selectElems = document.querySelectorAll(".unitSelect");
  selectElems.forEach((elem) => {
    elem.addEventListener("input", selectInputHandler);
  });

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

// Event handler for select elements
const selectInputHandler = (event) => {
  // Bind all text and select elements
  const inputSelectElem = event.target;
  const outputSelectElem = document.getElementById(
    inputSelectElem === "selectA" ? "selectB" : "selectA"
  );
  const inputTextElem = document.getElementById(
    inputSelectElem === "selectA" ? "textA" : "textB"
  );
  const outputTextElem = document.getElementById(
    inputSelectElem === "selectA" ? "textB" : "textA"
  );

  // Get the value of the text field
  const measure = parseFloat(inputTextElem.value);
  console.log(event.target.id, measure);

  // Get this unit
  const fromUnit = inputSelectElem.value;
  console.log(fromUnit);

  // Get the unit to convert to
  const toUnit = outputSelectElem.value;

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
