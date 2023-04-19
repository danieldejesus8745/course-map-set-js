const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

const hasFour = saturday.has(4);
console.log('Does our map have four?', hasFour);

const hasEight = saturday.has(8);
console.log('Does our map have eight?', hasEight);