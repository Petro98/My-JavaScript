let date1 = document.querySelector('[name="date1"]');
let date2 = document.querySelector('[name="date2"]');
// function retriveFormValue() {
// 	const dateOne = new Date(date1.value).getDate();
// 	const dateTwo = new Date(date2.value).getDate();
// 	let resut = dateTwo - dateOne
// 	document.querySelector('.text').innerHTML += 'Day ' + resut + ' Time ' + resut * 24 + '</br>';
// }


class Form {
	constructor(date1, date2) {
		this.date1 = date1
		this.date2 = date2
	}
	fu() {
		document.querySelector('#sur').addEventListener("click", this.retriveFormValue.bind(this))
	}
	retriveFormValue() {
		const dateOne = new Date(this.date1.value).getDate();
		const dateTwo = new Date(this.date2.value).getDate();
		const resut = dateTwo - dateOne
		return document.querySelector('.text').innerHTML += 'Day ' + resut + ' Time ' + resut * 24 + '</br>';
	}
}
let form = new Form(date1, date2)
form.fu()


