// function getThis() {
// 	return function name() {
// 		return console.log(this);
// 	}
// }
// getThis()()
// window.getThis()()
// console.log(getThis()());

// // ------------------------------------------------------------------
// function getPrice() {
// 	console.log(this.price);
// }
// const prod = {
// 	name: 'Intel',
// 	price: 100,
// 	getPrice,
// 	getName() {
// 		console.log(this.name);
// 	},
// 	info: {
// 		information: [0, 1, 0, 1, 0, 1],
// 		getInfo: function () {
// 			this.information.push('7')
// 			return this.information
// 				.map(x => x + 5)
// 				.sort((a, b) => b - a)
// 				.join('')
// 				.split('')
// 				.reverse()
// 		}
// 	}
// }

// prod.getPrice()
// prod.getName()
// console.log(prod.info.getInfo());


// const prod2 = {
// 	name: 'AMD',
// 	price: 50,
// 	getPrice,
// }
// prod2.getPrice()

// prod2.info = prod.info
// prod2.getName = prod.getName
// console.log(prod2);

// prod2.getName()

// function getPrice(understand = '$', forr = '') {
// 	console.log(understand + this.price + forr);
// 	// return this
// }

// const prod3 = {
// 	name: 'GTX',
// 	price: 2000,
// 	// getPrice,
// }

// getPrice.call(prod3, '#', '#')
// getPrice.bind(prod3, '', '#')()

// // // let arr = ['@', '@']
// // // prod3.getPrice.apply(prod3, arr)

// // // setTimeout(prod3.getPrice.bind(prod3 , '#' ,'#') , 3000)

// // bad this 2.0
// const person = {
// 	name: 'Vladilen'
// }

// function info(phone, email) {
// 	console.log(`Iмя: ${this.name} , tel.:${phone}, email: ${email}`)

// }


// // // 1 sp------------------------------------
// function bindd(fu , context , ...rest) {
// 	return fu.bind(context , ...rest)
// }

// // 2 sp ----------------------------------------
// function bindd(fu, context, ...rest) {
// 	return function () {
// 		const uniqId = Date.now().toString()
// 		context[uniqId] = fu

// 		const result = context[uniqId](...rest)

// 		delete context[uniqId]

// 		return result
// 	}
// }
// console.log(person)
// bindd(info, person, 33333, 'slfdsg')()

// // 3sp-------------------------
// function calll(fu, context, ...rest) {
// 			const uniqId = Date.now().toString()
// 			context[uniqId] = fu
	
// 			const result = context[uniqId](...rest)
	
// 			delete context[uniqId]
	
// 			return result
// 	}

// 	calll(info , person, 33333, 'slfdsg')