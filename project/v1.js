
const form = document.getElementById('form')
			const name = form.querySelector('[name="name"]'),
				surname = form.querySelector('[name="surname"]'),
				age = form.querySelector('[name="age"]'),
				card = form.querySelector('[name="card"]'),
				select = form.querySelector('[id="select"]');

				var conclusion = (a) => (document.querySelector('.container_text').innerHTML = a),
				conclusionSum = (a) => (document.querySelector('.container_text').innerHTML += a)
// масив відвідувачів===============================================
let arrya = [];
// список учасників==================================================
document.querySelector("#elemm").onclick = function(){
	conclusion('')
	console.log(arrya);
	for (key of arrya) {
		let index = arrya.indexOf(key) + 1
		conclusionSum(("visitor " + ' ' +"№" + index))
		for (i in key) {
			conclusionSum((' ' + key[i] + ''))
		}
		conclusionSum('</br>')
	}
}
// delete()
function deletee() {conclusion('')}
// редагування учасників =====================================
document.querySelector("#elemmm").onclick = function () {
	let indexx = form.querySelector('[name="index"]').value
	redaction(indexx)
	function redaction(indexlnArray) {
		if (indexlnArray > -1 && indexlnArray < arrya.length) {
			const nevPlayerData = {
				name: name.value,
				surname: surname.value,
				age: age.value,
				card: card.value,
				select: select.value,
			};
			name.value = ''
			surname.value = ''
			age.value = ''
			card.value = ''
			let sum = (arrya[indexlnArray] = nevPlayerData);
			console.log(sum)
			conclusion('')
			for (i in sum) {
				conclusionSum((' ' + sum[i] + ''))
			}
		}
	}
	index.value = ''
}
// збереження даних в масив =======================================
function callFunction() {
	let namee = form.querySelector('[name="name"]').value
		if (typeof(namee) == 'string' && namee.trim() && namee != '') {
			retrieveFormValue()
	}else{conclusion(('<h1>Ведіть ім`я</h1>'))}
	function retrieveFormValue() {
	const values = {
		name: name.value,
		surname: surname.value,
		age: age.value,
		card: card.value,
		select: select.value,
	};
	arrya.push(values)
	console.log("visitor" + arrya.length, values);
	// name.value = ''
	// surname.value = ''
	// age.value = ''
	// card.value = ''
}
}


// функція видалення елемента з масива
function deleteItem() {
	let index = form.querySelector('[name="index_three"]'),
		indexx = index.value
	function want(indexxx) {
		if (indexxx > -1 && indexxx < arrya.length) {
			let summ = arrya.splice(indexxx, 1),
			summm = summ[0]
			conclusion('')
			conclusionSum('Member removed ' + ' №' + indexxx)
			for (i in summm) {
				conclusionSum((' ' + summm[i] + ''))
			}
			console.log(summm)
		} else { }
	}
	want(indexx)
	index.value = ''
}
//функція виводу відвідувачів
function playerFindByNumber() {
	let index = form.querySelector('[name="index_four"]'),
		indexx = index.value
	function want(indexxx) {
		if (indexxx > -1 && indexxx < arrya.length) {
			let arr = arrya[indexx]
			console.log(arr)
			conclusion('')
			for (i in arr) {
				conclusionSum((' ' + arr[i] + ''))
			}
		} else { }
	}
	want(indexx)
	index.value = ''
}

//функція пошуку
function SearchByName() {
	let indexx = form.querySelector('[name="index_search"]').value
	function SearchBy(index) {
		for (let i = 0; i < arrya.length; i++) {
			let serch = arrya[i]
				serchh = serch.surname
			if (serchh == index) {
				console.log(serch);
				conclusion('')
			for (i in serch) {
				conclusionSum((' ' + serch[i] + ''))
			}
			}
		}
	}
	SearchBy(indexx)
	index.value = ''
}

