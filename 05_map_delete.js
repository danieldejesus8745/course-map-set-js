const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');

let deleteWithSuccess = saturday.delete(8);
console.log('Item eight has been deleted?', deleteWithSuccess);

deleteWithSuccess = saturday.delete(10);
console.log('Item ten has been deleted?', deleteWithSuccess);