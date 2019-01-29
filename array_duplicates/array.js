//Array duplicates removal methods
//https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
const array = [1, 1, 1, 2, 2, 3];
console.log([...new Set(array)]);
console.log(array.filter((item, index) => array.indexOf(item) === index));
console.log(array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []));