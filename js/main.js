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
  const areaRadio = document.getElementById("area");
  areaRadio.addEventListener("change", (event) => {
    typeHandler(event);
  });

  const lengthRadio = document.getElementById("length");
  lengthRadio.addEventListener("change", (event) => {
    typeHandler(event);
  });

  const massRadio = document.getElementById("mass");
  massRadio.addEventListener("change", (event) => {
    typeHandler(event);
  });

  // TODO Add listeners to text fields for auto conversion
  const textA = document.querySelector("#textA");

  const textB = document.querySelector("#textB");

  // TODO Add listeners to select elements to auto update conversions

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
  EntryFields.resetFields(eventValue);
};

// Tests
const testConvert = (measure, from, to, type) => {
  console.log(Conversions.convertMeasure(measure, from, to, type));
};

testConvert(10, "ping", "sqfoot", "area");
testConvert(13.227735731092654, "pound", "jin", "mass");

console.log(Conversions.getTypeUnits("area"));
