import * as Conversions from "./conversions.js";

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
  const areaRadio = document.getElementById("area");
  areaRadio.addEventListener("change", (event) => {
    console.log(event.target.value);
    typeHandler(event);
  });

  const lengthRadio = document.getElementById("length");
  lengthRadio.addEventListener("change", (event) => {
    console.log(event.target.value);
    typeHandler(event);
  });

  const massRadio = document.getElementById("mass");
  massRadio.addEventListener("change", (event) => {
    console.log(event.target.value);
    typeHandler(event);
  });

  // TODO Find a way to make sure the page loads with a default type selected
  areaRadio.checked = true;
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
  resetFields(eventValue);
};

// Handles clearing the text fields and changing the select options
const resetFields = (type) => {
  // Clear text fields
  const textFields = document.querySelectorAll(".textEntry");
  textFields.forEach((field) => {
    field.value = "";
  });

  // Set select options
  const selectOptions = document.createDocumentFragment();
  const units = Object.keys(Conversions.conversionValues[type]);
  units.forEach((unit) => {
    // Create and fill in new option element
    const newOption = document.createElement("option");
    newOption.value = unit;
    newOption.textContent = unit;

    // Append new option to selectOptions
    selectOptions.append(newOption);
  });

  // Append select options to both select inputs
  const selectElems = document.querySelectorAll(".unitSelect");
  selectElems.forEach((selectElem) => {
    // Remove all options
    removeOptions(selectElem);

    // Append new options
    selectElem.append(selectOptions);
  });
};

// Deletes old options from a select menu
const removeOptions = (selectElem) => {
  let child = selectElem.lastElementChild;

  while (child) {
    selectElem.removeChild(child);
    child = selectElem.lastElementChild;
  }
};

// Tests
const testConvert = (measure, from, to, type) => {
  console.log(Conversions.convertMeasure(measure, from, to, type));
};

testConvert(10, "ping", "sqfoot", "area");
testConvert(13.227735731092654, "pound", "jin", "mass");

console.log(Conversions.getTypeUnits("area"));
