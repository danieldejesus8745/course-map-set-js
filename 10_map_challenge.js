const oscarWinningMovies = new Map();

oscarWinningMovies.set(2013, 'Argo');
oscarWinningMovies.set(2014, '12 Years a Slave');
oscarWinningMovies.set(2015, 'Birdman');
oscarWinningMovies.set(2016, 'Spotlight');
oscarWinningMovies.set(2017, 'Moonlight');
oscarWinningMovies.set(2018, 'The Shape of Water');
oscarWinningMovies.set(2019, 'Green Book');
oscarWinningMovies.set(2020, 'Parasite');

// Getting the Oscar-Winning of 2015
const oscarWinning2015 = oscarWinningMovies.get(2015);
console.log('Oscar-winning 2015:', oscarWinning2015);

// Check if movies Map include Oscar-Winnings of 2010 and 2018
const oscarWinning2010 = oscarWinningMovies.has(2010);
const oscarWinning2018 = oscarWinningMovies.has(2018);
console.log('Does this list contains oscar-winning 2010?', oscarWinning2010);
console.log('Does this list contains oscar-winning 2018?', oscarWinning2018);

// Getting the size of my movies Map
const listSize = oscarWinningMovies.size;
console.log('How many films are included in this list?', listSize);

// Getting the second key of my movies Map
const oscarWinningMoviesKeys = oscarWinningMovies.keys();
oscarWinningMoviesKeys.next();
const secondKey = oscarWinningMoviesKeys.next().value;
console.log('What is the second key in this movies Map?', secondKey);

// Getting the third value of my movies Map
const moviesValues = oscarWinningMovies.values();
moviesValues.next();
moviesValues.next();
const thirdValue = moviesValues.next().value;
console.log('What is the third value in this movies Map?', thirdValue);

// Getting the first entry of my movies Map
const firstEntry = oscarWinningMovies.entries().next();
console.log("Whats is the first set of entries in this movies Map?", firstEntry);

// Getting Best Pictures before 2017
console.log('List of Oscar-Winnings before 2017');
oscarWinningMovies.forEach((value, key) => {
  if (key < 2017) {
    console.log(`${key}: ${value}`);
  }
});

// Deleting the Best Picture of 2013 from my movies Map
oscarWinningMovies.delete(2013);
console.log('My map after delete:', oscarWinningMovies);

// Cleaning my movies Map
oscarWinningMovies.clear();
mapIsClear = oscarWinningMovies.size === 0 ? 'Yes' : 'No';
console.log('Did my Map clear?', mapIsClear);