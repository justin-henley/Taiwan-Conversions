import * as Conversions from "./conversions.js";
// Handles clearing the text fields and changing the select options
export const resetFields = (type) => {
  // Clear text fields
  clearTextFields();

  // Set select options
  const selectOptions = generateOptionsFrag(type);

  // Append select options to both select inputs
  resetSelectOptions(selectOptions);
};

/**
 *
 * @param {string} type - The type of units to generate options for
 * @returns a fragment containing all the options to be appended to the select elements
 */
const generateOptionsFrag = (type) => {
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

  // Return the fragment
  return selectOptions;
};

const clearTextFields = () => {
  const textFields = document.querySelectorAll(".textEntry");
  textFields.forEach((field) => {
    field.value = "";
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

const resetSelectOptions = (optionsFrag) => {
  const selectElems = document.querySelectorAll(".unitSelect");
  selectElems.forEach((selectElem) => {
    // Remove all options
    removeOptions(selectElem);

    // Append new options
    // Appending destorys fragments, so a clone is needed
    selectElem.append(optionsFrag.cloneNode(true));
  });
};
