let figures = [triangle, circle, square]
function squareFigures(figures) {
	let sum = 0;
	for (let i = 0; i < figures.length; i++) {
		if (figures[i] instanceof GeometricFigure) {
			sum += figures[i].getArea()
			console.log( figures[i].toStringle() ,figures[i].getArea());
		}
	}
	console.log('Sum figures' ,sum);
}
squareFigures(figures)

// function squareFigures(figures) {
// const SQUARE = figures.reduce((acc, curr) => {
// 	if (curr instanceof GeometricFigure) {
// 		console.log(curr.toStringle(), curr.getArea());
// 		let sum = acc + curr.getArea()
// 		return sum
// 	}

// }, 0)
// console.log('Sum figures', SQUARE);
// }
// squareFigures(figures)