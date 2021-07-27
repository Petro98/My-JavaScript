const P = new Promise((res, rej) => {
	setTimeout(() => {
		function calculation(a, b, c, h) {
			return function () {
				let resaut = a + b + c / 2 * h
				return resaut
			}
		} 
		let arrCalculation = []
		arrCalculation.push(calculation(1, 2, 3, 5)(),calculation(1, 2, 3, 5)(),calculation(1, 2, 1, 5)(),calculation(1, 2, 1, 5)(),calculation(5, 4, 7, 5)())
		
		let smallestValue = arrCalculation.reduce((acc, item) => {
				    if (!isNaN(item)) {
					if (acc > item) {
						return item
					} else {
						return acc
					}
				} else {
					return item
				}
			})

		if (smallestValue >= 0 && smallestValue) {
			arrCalculation.filter((i) => isNaN(i))
			res(arrCalculation)
		} else {
			rej(this.Promise.name)
		}
	}, 2000)
}).then((arr) => {
	console.log(...arr);
}).catch((name) => {
	console.log(new Error(name));
}).finally(() => {
	console.log('Програма завершена');
}).then(()=>{
	console.log( 'sssllsl');
})