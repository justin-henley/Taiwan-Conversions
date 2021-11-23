export const sayHello = () => {
  console.log("hello");
};

/** Converts a measure between two compatible units
 * @param {string} fromUnit - A name representing the unit to be converted from
 * @param {number} measure - The measure to be converted
 * @param {string} toUnit - A name representing the unit to be converted to
 * @return {number} - The measure converted to the chosen unit, or undefined
 */
export const convertArea = (measure, fromUnit, toUnit) => {
  const areaToSqMeters = {
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
  };

  return measure * areaToSqMeters[fromUnit] * (1 / areaToSqMeters[toUnit]);
};

export function convertMass(measure, fromUnit, toUnit) {
  const massToKg = {
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
  };

  return measure * massToKg[fromUnit] * (1.0 / massToKg[toUnit]);
}
