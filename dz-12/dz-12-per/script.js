let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 ,5]

// function name(arr, fuu) {
// 	for (i of arr) {
// 		if (fuu()) {
// 			return true
// 		}
// 	}
// 	return false
// }

// function fu() {
// 	const even = () => i = 0;
// 	return even
// }

function name(arr, fuu) {
	let arrr = []
	for (i of arr) {
		if (fuu(i)) {
			arrr.push(i)
		}
	}
	console.log(arr,arrr);
	return (arrr.length == arr.length) ?  true : false ? true : (arrr.length == arr.length) ? true : false ? true : (arrr.length == arr.length) ? true : false
}
function fu(a) {
	return even = i => i == a
}


console.log(name(arr , fu(5)));