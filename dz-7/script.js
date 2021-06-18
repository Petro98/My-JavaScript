// function grret([str, num, boo, nul, und, symb , obje ,big]) {
// 	let arrr = []
// 	arrr.push(num)
// 	let obj = {
// 		string: [],
// 		number: arrr,
// 		boolean: [],
// 		null: [],
// 		undefined: [],
// 		symbol: [],
// 		object: [],
// 		bigInt:[],
// 	}
// 	if (isNaN(str)) {
// 		obj.string = [str]
// 	}
// 	if (!isNaN(num)) {
// 		obj.number = arrr
// 	}
// 	if (typeof(boo) == typeof(true)) {
// 		obj.boolean = [boo]
// 	}
// 	if (null == nul) {
// 		obj.null = [nul]
// 	}
// 	if (typeof(und) == 'undefined') {
// 		obj.undefined = [und]
// 	}
// 	if (typeof(symb) == 'symbol') {
// 		obj.symbol = [symb]
// 	}
// 	if (typeof(obje) == 'object'){
// 		obj.object = [obje]
// 	}
// 	if ((typeof(big)) == 'bigint'){
// 		obj.bigInt = big
// 	}
// console.log(obj)
// }
// let sym = Symbol('foo')
// let undef;
// let array = ['dwf', 5 , true , null ,undef , sym ,{name: 'Vova'},515616115511n]
// grret(array)


function sortTheInputArray(){
	let obj = {
		string: [],
		number: [],
		boolean: [],
		null: [],
		undefined: [],
		symbol: [],
		object: [],
		bigInt:[],
	}
for(key of array){
	if (typeof(key) == 'string') {
				obj.string.push(key)
			}
			if (typeof(key) == 'number') {
				obj.number.push(key)
			}
			if (typeof(key) == typeof(true)) {
				obj.boolean.push(key)
			}
			if (key === null) {
				obj.null.push(key)
			}
			if (typeof(key) == 'undefined') {
				obj.undefined.push(key)
			}
			if (typeof(key) == 'symbol') {
				obj.symbol.push(key)
			}
			if (key instanceof Object){
				obj.object.push(key)
			}
	if ((typeof(key)) == 'bigint'){
				obj.bigInt.push(key)
			}
			console.log(typeof(key))
}
console.log(obj)
}
let sym = Symbol('foo')
let undef;
var array = ['vova','dog','yellow', 5 ,5 ,10 , true ,false, null ,undef , sym ,{name: 'Vova'},{name:'dog'},515616115511n]
sortTheInputArray()


// 2====================================================
// tasc return
let a = 'Hello'
let b = ''

// for ( let i = a.length-1 ; i > -1 ; i--){
// 	b += a[i]
// }
// console.log(b)


for (key of a){
b = key + b
}
console.log(b)