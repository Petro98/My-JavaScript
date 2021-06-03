console.log(typeof 10);

console.log(typeof "Привіт світ");

let booll = true;
console.log(typeof booll);

let undefinedd;
console.log(typeof undefinedd);

// let nulll = null;
// console.log(typeof nulll);

let biglntt = 1234234n;
console.log(typeof biglntt);

let id = Symbol("t");
console.log(typeof id);

let userInfo = {
	name: "Пес",
	age: 101
}
console.log(userInfo);
console.log(typeof userInfo);

let funcMy = function name(lesson) {

}
console.log(typeof funcMy);

let block = document.querySelector('Info');
console.log(block);

let r = 10;
console.log(typeof String(r));

let re = "10";
console.log(typeof Number(re));

let ree = "10";
console.log(typeof Boolean(ree));

let a = prompt('Ведіть число',);
let b = prompt('Ведіть число',);
alert(+a + +b);

let d = prompt('Ведіть число',);
let f = 5;
alert(d / f);

let conf = confirm("Нажми");
console.log(conf);