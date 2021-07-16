// // 2 функція вищого порядку---------------------------
// const arr = ['Denis' , 'Ivan' , 'Makss' ,'Olga']
// function mapArray(arr , fu){
// 	const res =[];
// 	for (let i = 0; i < arr.length; i++) {
// 		res.push(fu(arr[i]));
// 	}
// 	return res;
// }
// function nameLength(el) {
// 	return el.length
// }
// function nameToUpperCase(el) {
// 	return el.toUpperCase()
// }
// const rezaut = mapArray(arr , nameLength)
// const rezaut2 = mapArray(arr , nameToUpperCase)
// console.log(rezaut);
// console.log(rezaut2);

// // 3 чиста функція ---------------------------
// function a(b) {
// 	return b * 5
// }
// console.log(a(25));
// // не чиста функція
// let c = 9
// function d(b) {
// 	return b * c;
// }
// console.log(d(5));
// console.log(d(5));

// // 3 рекурсія -----------------------------
// let a = 0
// let sum = a;
// (function rec() {
//    a++
// 	if (a > 10) {
// 		return a
// 	}
// 	sum += a
// 	rec()
// })()
// console.log(sum);


// // не рекурсія
// let a = 0
// let sum = a;
// function rec() {
// 	for (let index = 0; index < 10; index++) {
// 		a++
// 		console.log(a);
// 		sum += a
// 	}
// }
// rec()
// console.log(sum);


// // 5---------------------
// const Counter = (() => {
// 	let counter = 0;
// 	return () => {
// 		return counter++;
// 	}
// })()
// console.log(Counter())
// console.log(Counter())
// console.log(Counter())

// // 6-------------------------------
// const Bust = ((b) => (a) => {
// 	for (a; a <= 5; a++) {
// 		if (a % 2) console.log(a + b);
// 	}
// })(5);
// Bust(0);
// // Side
// let a = 5
// function name(params) {
// 	a = 10
// 	console.log(a + params);
// }
// name(2)
// console.log(a);
