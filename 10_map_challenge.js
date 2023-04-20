const oscarWinningMovies = new Map();

oscarWinningMovies.set(2013, 'Argo');
oscarWinningMovies.set(2014, '12 Years a Slave');
oscarWinningMovies.set(2015, 'Birdman');
oscarWinningMovies.set(2016, 'Spotlight');
oscarWinningMovies.set(2017, 'Moonlight');
oscarWinningMovies.set(2018, 'The Shape of Water');
oscarWinningMovies.set(2019, 'Green Book');
oscarWinningMovies.set(2020, 'Parasite');

const oscarWinning2015 = oscarWinningMovies.get(2015);
console.log('Oscar-winning 2015:', oscarWinning2015);

const oscarWinning2010 = oscarWinningMovies.has(2010);
const oscarWinning2018 = oscarWinningMovies.has(2018);
console.log('Does this list contains oscar-winning 2010?', oscarWinning2010);
console.log('Does this list contains oscar-winning 2018?', oscarWinning2018);

const listSize = oscarWinningMovies.size;
console.log('How many films are included in this list?', listSize);