//data value
const form = document.getElementById('form');
const person = {
	name: form.querySelector('[name="name"]'),
	surname: form.querySelector('[name="surname"]'),
	age: form.querySelector('[name="age"]'),
	card: form.querySelector('[name="card"]'),
	select: form.querySelector('[id="select"]')
};
let textOutputFunction = (a) => (document.querySelector('.container_text').innerHTML = a);
let conclusionSum = (a) => (document.querySelector('.container_text').innerHTML += a);
// array persons=============================================================
let arrya = [];
// list person===============================================================
document.querySelector("#list").onclick = function () {
	textOutputFunction('');
	for (key of arrya) {
		let indexKey = arrya.indexOf(key) + 1;
		conclusionSum(("visitor " + ' ' + "№" + indexKey));
		for (i in key) {
			conclusionSum((' ' + key[i] + ''));
		}
		conclusionSum('</br>');
	}
// children's filter
const result = arrya.filter(word => word.age < 16);
console.log(result);
};
// delete()
function Delete() { textOutputFunction('') };
// editing participants ======================================================
document.querySelector("#editing").onclick = function () {
	let valueIndex = form.querySelector('[name="index"]').value - 1;
	if (valueIndex > -1 && valueIndex < arrya.length) {
		const nevPlayerData = {
			name: person.name.value,
			surname: person.surname.value,
			age: person.age.value,
			card: person.card.value,
			select: person.select.value,
		};
		let sum = (arrya[valueIndex] = nevPlayerData);
		textOutputFunction('');
		for (i in sum) {
			conclusionSum((' ' + sum[i] + ''));
		}
	} else {
		textOutputFunction(('<h1>Incorrect input</h1>'));
	};
};
// saving data to an array ===================================================
function savingDataToAnArray() {
	let personName = form.querySelector('[name="name"]').value,
	personAge = form.querySelector('[name="age"]').value
	if (personName != '' && personAge < 100 && personAge > 6) {
		const values = {
			name: person.name.value,
			surname: person.surname.value,
			age: person.age.value,
			card: person.card.value,
			select: person.select.value,
		};
		arrya.push(values);
		console.log("visitor" + arrya.length, values);
	} else { textOutputFunction(('<h1>Enter the name</h1> <h1>(your age should meet the limits)</h1>')) };
	let personSurname = form.querySelector('[name="surname"]').value;
	let personCard = form.querySelector('[name="card"]').value;
	for (let i = 0; i < arrya.length - 1; i++) {
		let objectKey = arrya[i],
		valuesSurnameName = objectKey.name + objectKey.surname,
		valuesCard = objectKey.card,
		personSurnameName = personName + personSurname;
		if (valuesSurnameName.toUpperCase().replace(/\s+/g, '').trim() == personSurnameName.toUpperCase().replace(/\s+/g, '').trim() || valuesCard == personCard) {
			arrya.splice(arrya.length - 1, 1)
			textOutputFunction(('<h1>This person exists</h1>'));
		} else {
			textOutputFunction(('<h1>Person added</h1>'));
		};
	};
};
// function to remove an element from the array ===============================
function deleteItem() {
	let namberImet = form.querySelector('[name="index_three"]').value - 1;
	if (namberImet > -1 && namberImet < arrya.length) {
		let deleteItem = arrya.splice(namberImet, 1)[0];
		textOutputFunction('');
		conclusionSum('Member removed ' + ' №' + `${namberImet - 1}`);
		for (i in deleteItem) {
			conclusionSum((' ' + deleteItem[i] + ''));
		}
	} else { textOutputFunction(('<h1>Incorrect input</h1>')) };
};
//number search function=======================================================
function playerFindByNumber() {
	let index = form.querySelector('[name="index_four"]').value - 1;
	if (index > -1 && index < arrya.length) {
		let arr = arrya[index]
		textOutputFunction('');
		for (i in arr) {
			conclusionSum((' ' + arr[i] + ''));
		}
	} else { textOutputFunction(('<h1>Incorrect input</h1>')) };
};
//search function==============================================================
function searchByName() {
	let index = form.querySelector('[name="index_search"]').value;
	for (let i = 0; i < arrya.length; i++) {
		let objectKey = arrya[i],
			initialsNameSurname = objectKey.name + objectKey.surname,
			initialsSurnameName = objectKey.surname + objectKey.name,
			initialsSurname = objectKey.surname,
			initialsCard = objectKey.card;
		if (initialsNameSurname.toUpperCase().replace(/\s+/g, '').trim() == index.toUpperCase().replace(/\s+/g, '').trim() || initialsSurname.toUpperCase().replace(/\s+/g, '').trim() == index.toUpperCase().replace(/\s+/g, '').trim() || initialsSurnameName.toUpperCase().replace(/\s+/g, '').trim() == index.toUpperCase().replace(/\s+/g, '').trim() || initialsCard == index) {
			textOutputFunction('');
			for (i in objectKey) {
				conclusionSum((' ' + objectKey[i] + ''));
			};
		} else { textOutputFunction(('<h1>Incorrect input</h1>')) };
	};
};

