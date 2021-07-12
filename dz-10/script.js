const person = {
	name: 'Petro',
	sureName: 'Tsimbala',
}
function getPerson() {
	let rand = ''
	for (obj in this) {
		let sum = `${this[obj]}`
		for (let i = 1; i < sum.length - 1; i++) {
			rand = sum[i] + rand
		}
		this[obj] = rand
		rand = ''
		console.log(`${obj.toUpperCase()}: ${this[obj]}`);
	}
}
getPerson.call(person)
// getPerson.bind(person)()

// // ------------------------------------------------------------

// function bindb (context, fu ){
// 	return function(){
// 		fu.call(context)
// 	}
// }

// function logPerson(){
// 	let rand = ''
// 	for (obj in this) {
// 		let sum = `${this[obj]}`
// 		for (let i = 1; i < sum.length - 1; i++) {
// 			rand = sum[i] + rand
// 		}
// 		this[obj] = rand
// 		rand = ''
// 		console.log(`${obj[0].toUpperCase()}: ${this[obj]}`);
// 	}
// }
// 	bindb (person,logPerson)()



// // 2sp=====================================================
// const person = {
// 	name: "Petro",
// 	sureName: 'Tsimbala',
// 	out(taet) {
// 		console.log(`Name: ${taet.name} , Sure Name: ${taet.sureName}`);
// }
// }
// function getPerson(out) {
// 	let rand = ''
// 	for (obj in this) {
// 		let sum = `${this[obj]}`
// 		for (let i = 1; i < sum.length - 1; i++) {
// 			rand = sum[i] + rand
// 		}
// 		this[obj] = rand
// 		rand = ''
// }
// out(this)
// }



// getPerson.bind(person , person.out)()



// 3sp==========================

// function getPerson(callBack) {
// 	let taet = this
// 	console.log(`Name: ${this.name} , Sure Name: ${this.sureName}`);
// 	callBack(taet)
// 	console.log(`Name: ${this.name} , Sure Name: ${this.sureName}`);
// }

// function out(taet) {
// 	let name1 = ''
// 	let sureName = ''
// 	for (obj in taet) {
// 		let sum = taet[obj]
// 		for (let i = 1; i < sum.length - 1; i++) {
// 			if (sum === taet.name) {
// 			name1 = sum[i] + name1
// 			}else if(sum === taet.sureName){
// 			sureName = sum[i] + sureName
// 			}
// 		}	
// 	}
// 	taet.name = name1
//    taet.sureName = sureName
// }

// // getPerson.call(person , out)
// getPerson.bind(person , out)