class Square extends GeometricFigure {
	constructor(a, b) {
		super()
		this._a = a
		this._b = b
	}
	getArea() {
		return this._a * this._b
	}
	toStringle() {
		return super.toStringle()
	}
}
let square = new Square(20, 20)