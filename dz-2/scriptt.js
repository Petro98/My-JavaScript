// 1. програму яка додає 3 числа
let a = +prompt('Ведіть число',) + +prompt('Ведіть число',) + +prompt('Ведіть число',);
alert(a + ' Тип ' + typeof a);



// 2. просто програма 
let a = prompt('Ведіть число',);
let d = prompt('Ведіть число',);
let b = a + d;
if (b.trim() == "") {
	alert('Сума повинна бути више 0')
} else if (b <= 0) {
	alert('ведіть щось')
} else if (isNaN(parseInt(b))) {
	alert('ведіть')
} else {
	let bb = +a + +d;
	switch (bb) {
		case 1:
		case 2:
		case 3:
		case 4:
			alert(`${bb} більше 0 , але менше 5`);
			break;
		case 5:
			alert(`${bb} число рівне 5`);
			break;
		case 6:
		case 7:
		case 8:
		case 9:
			alert(`${bb} більше 5 , але менше 10`);
			break;
		case 10:
			alert(`${bb} рівне 10`);
			break;
		case 11:
		case 12:
		case 13:
		case 14:
			alert(`${bb} більше 10 , але менше 15`);
			break;
		case 15:
			alert(`${bb} рівне 15`);
			break;
		default:
			alert(bb);
	}
}


// 3. периметр рівносторонього трикутника
let p = +prompt('Периметр рівностороннього трикутника',);

if (p > 5) {
	alert(p * 3);
} else if (p <= 5) {
	alert(`Ти що здурів ? число не може бути ${p}`);
} else {
	alert('Ти що дурак?Веди число!!!');
}

