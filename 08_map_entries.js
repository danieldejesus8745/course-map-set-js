const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

const saturdayEntries = saturday.entries();
saturdayEntries.next();
saturdayEntries.next();
const thirdEntry = saturdayEntries.next().value;

console.log(thirdEntry);