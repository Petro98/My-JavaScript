class Circle extends GeometricFigure {
	constructor(r) {
		super()
		this._r = r;
		this._p = Math.PI;
	}
	getArea() {
		let resaut = this._r * this._p
		return parseFloat(resaut.toFixed())
	}
	toStringle() {
		return super.toStringle()
	}
}
let circle = new Circle(20)