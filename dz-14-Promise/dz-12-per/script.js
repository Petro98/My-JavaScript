const P = new Promise((res, rej) => {
	setTimeout(() => {
		function calculation(a, b, c, h) {
			return function () {
				let resaut = a + b + c / 2 * h
				return resaut
			}
		}
		let calculationOne = calculation(1, 2, 3, 5)();
		let calculationTwo = calculation(7, 2, 3, 5)();
		let calculationThree = calculation(1, 2, 1, 5)();
		let calculationFour = calculation(1, 2, 1, 5)();
		let calculationFive = calculation(5, 4, 7, 5)();
		let arrCalculation = [calculationOne, calculationTwo, calculationThree, calculationFour, calculationFive]
		let smallestValue = arrCalculation
			.reduce((acc, item) => {
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
})