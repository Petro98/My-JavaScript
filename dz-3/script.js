let arrr = ['Маша', 'Яблуко', 'Груша', 'Персик',];
for (let i = 0; i < arrr.length; i++) {
	console.log(arrr[i]);
}



let arr = ['Яблуко', 'Молоко', 'Йогурт'];
arr.length = 2;
console.log(arr)


let i = -1;
while (i < 10) {
	i++;
	if (i == 5) continue;
	console.log(i);
}

let n = 11
while (n > 0) {
	n--;
	if (i == 5) continue;
	console.log(n);
}

let a = -1;
do {
	a++;
	if (a == 5) break;
	console.log(a);
} while (a < 10);


let d = 11;
do {
	d--;
	if (d == 5) break;
	console.log(d);
} while (d > 0);