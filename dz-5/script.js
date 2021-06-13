// 1.================================================
// метод concat + reduce
const arr = [4, [25, 52], 44, [66, [6, [6]], 99]];
const reducerr = (acc, curr) => (acc.concat(curr));

let arrTwo = arr.reduce(reducerr, []);
let arrThree = arrTwo.reduce(reducerr, []);
console.log(arrThree.reduce(reducerr, []));

console.log(arr.flat(Infinity));

// 2.================================================
// метод sort
const array = [2, 5, 55, 88, 4, 77, 99,];
console.log(array.sort((a, b) => a - b).join(''));
console.log(array.sort((a, b) => b - a).toString());
console.log(Math.max.apply(0 , array))


// 3.================================================
// метод reduce + map
const arrayOne = [1, 2, 3, 4,];
let value = arrayOne.reduce((previous, item) => (previous + item + 5), 0);
let arraySum = arrayOne.map((item) => (item + 10)).reduce((acc , curr) => (acc + curr) , 0);
console.log(value ,arraySum);


// 4 
// найбільш застосовуємі методи
// psuh , filter , sort , reduce , map
// найменш застосувуємі мктоди
// delete , toString , some ,indexOf , lastindexOf.