let date1 = document.querySelector('[name="time1"]');
let date2 = document.querySelector('[name="time2"]');
let date3 = document.querySelector('[name="number"]');

class Form {
	constructor(date1, date2, date3) {
		this.date1 = date1
		this.date2 = date2
		this.date3 = date3

	}
	fu() {
		document.querySelector('#sur').addEventListener("click", this.retriveFormValue.bind(this))
	}
	retriveFormValue() {
		let dateO = 0
		let dateT = 0
		const dateOne = this.date1.value.split('');
		for (let i = 0; i < dateOne.length; i++) {
			if (dateOne[i] != ':') {
				dateO += dateOne[i]
			}
		}
		const dateTwo = this.date2.value;
		for (let i = 0; i < dateTwo.length; i++) {
			if (dateTwo[i] != ':') {
				dateT += dateTwo[i]
			}
		}
		dateO = +dateO
		dateT = +dateT
		let resaut = []
		let coeff = +this.date3.value
		console.log(coeff);
		for (let i = dateO; i < dateT; i = i + coeff) {
			let a = i.toString()[2]
			let b = +a
			if (b < 6) {
				resaut.push(i)
			}
		}
		for (let i = 0; i < resaut.length; i++) {
			let res = resaut[i]
			res = res.toString().split('')
			res.splice(2, 0, ':')
			document.querySelector('.text').innerHTML += res.join('') + '<br>'
		}
	}
}
let form = new Form(date1, date2, date3)

