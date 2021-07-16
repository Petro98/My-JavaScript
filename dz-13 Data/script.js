

function retriveFormValue() {
	let date1 = document.querySelector('[name="date1"]');
	let date2 = document.querySelector('[name="date2"]');

	const dateOne = new Date(date1.value).getDate();
	const dateTwo = new Date(date2.value).getDate();
	let resut = dateTwo - dateOne
	document.querySelector('.text').innerHTML += 'Day ' + resut + ' Time ' + resut * 24 + '</br>';
}