function foo (){
	console.log('hello world');
}

foo()

foo.fieldd = 'Denis'
 console.log(foo.fieldd);

const arr = ['Denis' , 'Ivan' , 'Makss' ,'Olga']

function mapArray(arr , fu){
	const res =[];
	for (let i = 0; i < arr.length; i++) {
		res.push(fu(arr[i]));
	}
	return res;
}

function nameLength(el) {
	return el.length
}
function nameToUpperCase(el) {
	return el.toUpperCase()
}

const rezaut = mapArray(arr , nameLength)
const rezaut2 = mapArray(arr , nameToUpperCase)
console.log(rezaut);
console.log(rezaut2);

// ==================================

function Greeting(firstName) {
	return function(lastName) {
		return `Hello , ${firstName} ${lastName}`

	}

}

const testGrerting = Greeting("Denis")
console.log(testGrerting('djkfhso'));

//жжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжжж
function question(params) {
if(params == 1){
	alert(`Це ${params} функція`)
	return function(params) {
		if (params == 2) {
			alert(`Це ${params} функція`)
			return function(params) {
				if (params == 3) {
					alert(`Це ${params} функція`)
					return function(params) {
						if (params == 4) {
							alert(`Це ${params} функція`)
							return function(params) {
								if (params == 5) {
									alert(`Це ${params} функція`)
									return function(params) {
										if (params == 6) {
											alert(`Це ${params} функція`)
											return function(params) {
												if (params == 7) {
													alert(`Це ${params} функція`)
													return function(params) {
														if (params == 8) {
															console.log(this);
															alert(`Це ${params} функція`)
															return `ура працює це ${params}`
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
}

const res = question(1)(2)(3)(4)(5)(6)(7)(8)
console.log(res);

// ---------------------------------------------------

function myFunc(callBack) {
	const a = [6, 9, 6]
	let element = document.querySelector('.out-1');
	callBack(element, a)
}

function out(elem, array) {
	elem.innerHTML += array.join('=')
}

function out2(elem, array) {
	elem.innerHTML = array.map(x => x * x).join(' ')
}
myFunc(out2)
myFunc(out)

// ------------------------------------------------------------------
