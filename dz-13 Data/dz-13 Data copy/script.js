let date1 = document.querySelector('[name="time1"]');
let date2 = document.querySelector('[name="time2"]');
let date3 = document.querySelector('[name="number"]');
class Form {
	constructor(date1, date2, date3) {
		this.date1 = date1;
		this.date2 = date2;
		this.date3 = date3;
	}
	fu() {
		document.querySelector('#sur').addEventListener("click", this.retriveFormValue.bind(this))
	}
	retriveFormValue() {
		let timeOne = Number(this.date1.value.split('').filter(i => i !== ':').join(''));
		let timeTwo = Number(this.date2.value.split('').filter(i => i !== ':').join(''));
		let arrNumbers = [];
		if (timeTwo > timeOne) {
			document.querySelector('.text').innerHTML = ''

			for (let i = timeOne; i < timeTwo; i++) {
				let itemlength = i.toString().length
				if ((+i.toString()[2] < 6 && itemlength == 4)
					|| (+i.toString()[1] < 6 && itemlength == 3)
					|| (+i.toString()[0] < 6 && itemlength == 2)
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

			let coeff = +this.date3.value;
			for (let i = 0; i < arrNumbersTime.length; i = i + coeff) {
				document.querySelector('.text').innerHTML += arrNumbersTime[i] + '<br>'
			}
		} else {
			alert('ти що йолуп?')
		}
	}
}
let form = new Form(date1, date2, date3)
form.fu()
