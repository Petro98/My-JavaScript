let date1 = document.querySelector('[name="time1"]');
let date2 = document.querySelector('[name="time2"]');
let date3 = document.querySelector('[name="number"]');
let date4 = document.querySelector('[name="number2"]');
class Form {
	constructor(date1, date2, date3, date4) {
		this.date1 = date1;
		this.date2 = date2;
		this.date3 = date3;
		this.date4 = date4;
	}
	fu() {
		document.querySelector('#sur').addEventListener("click", this.retriveFormValue.bind(this))
	}
	retriveFormValue() {
		let timeOne = Number(this.date1.value.split('').filter(i => i !== ':').join(''));
		let timeTwo = Number(this.date2.value.split('').filter(i => i !== ':').join(''));
		let arrNumbers = [];
		if (timeTwo > timeOne) {
			(() => {
				let obj = document.querySelector('.container');
				let objBox = document.querySelector('.text');
				let objBotton = document.querySelector('button');
				obj.setAttribute("style", "box-shadow: 0 0 10px green;")
				objBox.setAttribute("style", "border: thick double green;")
				objBotton.setAttribute("style", "color: green;")
				let objl = document.querySelector('body');
				objl.setAttribute("style", "background-color: rgb(58, 75, 73);")
			})()
			document.querySelector('.text').innerHTML = ''
			for (let i = timeOne; i < timeTwo; i++) {
				let itemlength = i.toString().length
				if ((+i.toString()[2] < 6 && itemlength == 4) || (+i.toString()[1] < 6 && itemlength == 3) || (+i.toString()[0] < 6 && itemlength == 2)
					|| itemlength == 1) arrNumbers.push(i)
			}
			let arrNumbersTime = []
			arrNumbers.map((i) => {
				let res = i.toString().split('')
				if (res.length == 3) {
					res.unshift('0')
				}
				if (res.length == 2) {
					res.unshift('00')
				}
				res.splice(-2, 0, ':')
				if (res.length == 2) {
					res.splice(0, 0, '00')
					if (res.length == 3) {
						res.splice(2, 0, '0')
					}
				}
				arrNumbersTime.push(res.join(''))
			})
			let i = 0;
			let coeff = +this.date3.value;
			let speed = +this.date4.value;
			let mySet = setInterval(function () {
				document.querySelector('.text').innerHTML += arrNumbersTime[i] + '<br>'
				console.log(arrNumbersTime[i]);
				i = i + coeff
				if (arrNumbersTime.length <= i) {
					stail()
					alert('Finish')
					clearInterval(mySet)
				}
			}, 6000 / speed)
		} else {
			document.querySelector('.text').innerHTML = 'Ти що йолуп?!!'
			setTimeout(() => {
				(() => {
					let obj = document.querySelector('body');
					obj.setAttribute("style", "background-color: red;")
					let objBox = document.querySelector('.text');
					objBox.setAttribute("style", "border: thick double red;")
					let objBotton = document.querySelector('button');
					objBotton.setAttribute("style", "color: red;")
				})()
				document.querySelector('.text').innerHTML = 'Перше число повинно бути бліьше другого!!!'
				setTimeout(() => {
					stail()
				}, 6000);
			}, 2500);
		}
		function stail() {
			let obj = document.querySelector('.container');
			let objBox = document.querySelector('.text');
			let objBotton = document.querySelector('button');
			let objBody = document.querySelector('body');
			objBody.setAttribute("style", "background-color: rgba(0, 0, 0, 0.664);")
			obj.setAttribute("style", "color: rgb(255, 241, 185);")
			objBox.setAttribute("style", "border: thick double #dde480;")
			objBotton.setAttribute("style", "color: rgb(255, 241, 185);")
		}
	}
}
let form = new Form(date1, date2, date3, date4)
form.fu()
