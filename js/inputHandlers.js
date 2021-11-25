import * as EntryFields from "./entryFields.js";

// Handles changes when a type is selected
export const typeHandler = (event) => {
  const eventValue = event.target.value;

  // style labels
  // TODO prob factor out
  const allTypeLabels = document.querySelectorAll(".typeSelection label");
  allTypeLabels.forEach((label) => {
    label.classList.remove("checked");
  });
  const typeLabel = document.getElementById(`${eventValue}Label`);
  typeLabel.classList.remove("unchecked"); // TODO this has no effect??
  typeLabel.classList.add("checked");

  // Change form to new type
  EntryFields.resetFields(eventValue);
};

// Event listener for text fields
export const textInputHandler = (event) => {
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
  outputTextElem.value = result === undefined ? 0 : result;
};

// Event handler for select elements
export const selectInputHandler = (event) => {
  // Bind all text and select elements
  const inputSelectElem = document.getElementById("selectA"); //event.target;
  const outputSelectElem = document.getElementById(
    "selectB" //inputSelectElem === "selectA" ? "selectB" : "selectA"
  );
  const inputTextElem = document.getElementById(
    "textA" //inputSelectElem === "selectA" ? "textA" : "textB"
  );
  const outputTextElem = document.getElementById(
    "textB" //outputSelectElem === "selectA" ? "textB" : "textA"
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
  outputTextElem.value = result === undefined ? 0 : result;
};
