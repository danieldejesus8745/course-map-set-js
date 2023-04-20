const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

const noon = saturday.get(12);
console.log('What am I doing at 12pm on Saturday:', noon);

const nine = saturday.get(9);
console.log('What am I doing at 9am on Saturday:', nine);