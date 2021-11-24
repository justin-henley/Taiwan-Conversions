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
  const areaRadio = document.getElementById("area");
  areaRadio.addEventListener("change", (event) => {
    console.log(event.target.value);
  });

  const lengthRadio = document.getElementById("length");
  lengthRadio.addEventListener("change", (event) => {
    console.log(event.target["value"]);
  });

  const massRadio = document.getElementById("mass");
  massRadio.addEventListener("change", (event) => {
    console.log(event.target["value"]);
  });

  // Find a way to make sure the page loads with a default type selected
  areaRadio.checked = true;
};

const testConvert = (measure, from, to) => {
  console.log(Conversions.convertArea(measure, from, to));
};

testConvert(10, "ping", "sqfoot");
console.log(Conversions.convertMass(13.227735731092654, "pound", "jin"));
