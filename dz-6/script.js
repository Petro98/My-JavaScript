// 1==============================================
// turns the word hello
let rever = 'Hello'
console.log(rever.split('').reverse().join(''))
let emptyArr = []
function want() {
	for (item of rever.split('')) {
		emptyArr.unshift(item)
	}
	console.log(emptyArr.join(''))
}
want()



var arrayA = ["h","e","l","l","o"];
var arrayB = [];
function copyArray(oldArray, newArray) {         
   oldArray.forEach((item,index) => {                         
   newArray.push(oldArray[oldArray.length-1-index]); 
   });
}

copyArray(arrayA, arrayB);
console.log(arrayB.join(''))


// 2==============================================
// work with an array
let obj = {
	'car brand': 'audi',
	motor: 2.0,
	color: 'yellow',
	VIN: 'hkhk23434345k3',
}
// push in object
odj.salon = 'skin'
odj.VIN = 'fsofo41116651v'
odj.transmission = {
	wheels: 'R17',
	type: 'titanium',
	occasion: {
		type: 'full'
	}
};

for (key in obj) {
	console.log(obj[key])
}

console.log(obj.transmission.occasion['type'])
console.log(obj)