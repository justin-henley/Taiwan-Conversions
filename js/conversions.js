// Enum for conversion options
export const conversionTypes = {
  AREA: "area",
  LENGTH: "length",
  MASS: "mass",
};

// Note to self: For history to work, you can't use live update, or every keystroke is a "new" conversion
// Stores conversion history as object array
// export let conversionHistory = [];

// All conversion values
// TODO find a way to manage the floating point imprecision
export const conversionValues = {
  // Conversions for area to square meters
  area: {
    // Taiwanese
    ping: 400 / 121,
    mu: 12000 / 121,
    fen: 117360 / 121,
    jia: 1173600 / 121,
    li: 5868000 / 121,
    // Foreign
    sqmeter: 1,
    sqfoot: 0.09290341,
    acre: 4046.873,
    hectare: 10000,
  },
  // Conversions for length to meters
  length: {
    // Taiwanese
    fen: 1 / 330,
    cun: 1 / 33,
    chi: 10 / 33,
    zhang: 100 / 33,
    // Foreign
    meter: 1,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344,
    km: 1000,
  },
  // Conversions for mass to kilograms
  mass: {
    // Taiwanese
    li: 3 / 80000,
    fen: 3 / 8000,
    qian: 3 / 800,
    liang: 3 / 80,
    jin: 3 / 5,
    dan: 60,
    // Foreign
    kg: 1,
    gram: 1 / 1000,
    ounce: 0.028349523125,
    pound: 0.45359237,
    ton: 907.18474,
    metricTon: 1000,
  },
};

export const getTypeUnits = (type) => {
  let unitNames = [];
  switch (type) {
    case conversionTypes.AREA:
      unitNames = Object.keys(conversionValues.area);
  }

  return unitNames;
};

/* // ADT interface for unit conversions
/**
 *
 * @param {number} measure - The measure value in fromUnits
 * @param {string} fromUnit - The unit of the given measure
 * @param {string} toUnit - The unit to convert the measure to
 * @param {string} unitType - The type, which must be a member of the enum
 * @returns {number} The measure after conversion to the toUnit
 */
export function convertMeasure(measure, fromUnit, toUnit, unitType) {
  // Check all arguments provided
  if (!measure || !fromUnit || !toUnit || !unitType) return undefined;

  // Check unit type is a valid type
  if (!conversionValues.hasOwnProperty(unitType)) return undefined;

  // Check units are both from the unitType
  if (
    !conversionValues[unitType].hasOwnProperty(fromUnit) ||
    !conversionValues[unitType].hasOwnProperty(toUnit)
  )
    return undefined;

  // If all is valid, perform the conversion
  const convertedMeasure =
    measure *
    conversionValues[unitType][fromUnit] *
    (1 / conversionValues[unitType][toUnit]);

  /* // Update conversion history
  conversionHistory.unshift({
    measure,
    fromUnit,
    convertedMeasure,
    toUnit,
  });
  console.log(conversionHistory); */
  return convertedMeasure;
}

// prob only taiwanese to decimal notation, one-way
// export function convertNumbers(value, unit) {}
// TODO should be separate module
