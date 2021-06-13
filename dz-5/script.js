// 1.================================================
// метод concat + reduce
const arr = [4, [25, 52], 44, [66, [6, [6]], 99]];
const reducerr = (acc, curr) => (acc.concat(curr));

let arrTwo = arr.reduce(reducerr, []);
let arrThree = arrTwo.reduce(reducerr, []);
console.log(arrThree.reduce(reducerr, []));

// 2.================================================
// метод sort
const array = [2, 5, 55, 88, 4, 77, 99,]
console.log(array.sort((a, b) => a - b));
console.log(array.sort((a, b) => b - a));


// 3.================================================
// метод reduce + map
const arrayOne = [1, 2, 3, 4,]
let value = arrayOne.reduce((previousValue, item) => (previousValue + item + 5), 0);
const arrayO = arrayOne.map((item) => (item + 10)).reduce((acc , curr) => (acc + curr) , 0);
console.log(value ,arrayO);