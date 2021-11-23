import * as Conversions from "./conversions.js";

Conversions.sayHello();

const pingToSqMeter = (ping) => {
  let sqmeter = (ping * 400.0) / 121.0;
  return sqmeter;
};

// Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const conversionTypeSelect = document.getElementById("conversionType");
  conversionTypeSelect.addEventListener("change", (event) => {
    console.log(event.target.value);
  });

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
