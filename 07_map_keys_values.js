const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

const saturdayKeys = saturday.keys();
const firstKey = saturdayKeys.next().value;
console.log('The first key in our saturday map is:', firstKey);

const saturdayValues = saturday.values();
saturdayValues.next();
const secondValue = saturdayValues.next().value;
console.log('The 2nd value in our saturday map is:', secondValue);