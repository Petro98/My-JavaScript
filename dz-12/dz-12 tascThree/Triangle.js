class Triangle extends GeometricFigure {
	constructor(a, b, c) {
		super()
		this._a = a;
		this._b = b;
		this._c = c;
	}
	getArea() {
		let resaut = 1 / 2 * this._a * this._b * Math.sin((this._c * Math.PI) / 180)
		return parseFloat(resaut.toFixed())
	}
	toStringle() {
		return super.toStringle()
	}
}
let triangle = new Triangle(20, 20, 20)