// let a = +prompt('Ведіть число',) + +prompt('Ведіть число',) + +prompt('Ведіть число',);

// alert(a + ' Тип результату ' + typeof a);
// alert(typeof a);


let b = +prompt('Ведіть число',) + +prompt('Ведіть число',);
let d = (b <= 0) ? NaN : b;
// alert(d);

switch (d) {
	case 1:
	case 2:
	case 3:
	case 4:
		alert(`${d} число більше 0 , але менше 5`)
	case 5:
		alert(`${d} число рівне 5`)
	case 6:
	case 7:
	case 8:
	case 9:
		alert(`${d} число більше 5 , але менше 10`)
	case 10:
		alert(`${d} число рівне 10`)
	case 11:
	case 12:
	case 13:
	case 14:
		alert(`${d} число більше 10 , але менше 15`)
	case 15:
		alert(`${d} число рівне 15`)
	default:
		alert(d)
}

// // периметр рівносторонього трикутника
// let p = +prompt('Периметр рівностороннього трикутника',);

// if (p > 5) {
// 	alert(p * 3);
// } else if (p <= 5) {
// 	alert(`Ти що здурів ? число не може бути ${p}`)
// } else {
// 	alert('Ти що дурак?Веди число!!!')
// }
