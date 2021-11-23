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
  const taiwaneseToSqMeters = {
    ping: 400 / 121,
    mu: 12000 / 121,
    fen: 117360 / 121,
    jia: 1173600 / 121,
    li: 5868000 / 121,
  };
  const sqMetersToForeign = {
    sqmeter: 1,
    sqfoot: 1 / 0.09290341,
    acre: 1 / 4046.873,
    hectare: 1 / 10000,
  };

  return measure * taiwaneseToSqMeters[fromUnit] * sqMetersToForeign[toUnit];
};

export function convertMass(measure, fromUnit, toUnit) {
  const taiwaneseToKg = {
    li: 3 / 80000,
    fen: 3 / 8000,
    qian: 3 / 800,
    liang: 3 / 80,
    jin: 3 / 5,
    dan: 60,
  };

  const kgToForeign = {
    ounce: 1 / 0.028349523125,
    pound: 1 / 0.45359237,
    ton: 1 / 907.18474,
    metricTon: 1 / 1000,
  };

  return measure * taiwaneseToKg[fromUnit] * kgToForeign[toUnit];
}
