class Worker {
	#experience = 1.2;
	constructor(position, fullName, dayRate, workingDays) {
		this._position = position.trim()
		this._fullName = fullName.trim();
		this._dayRate = dayRate;
		this._workingDays = workingDays;
	}
	showSalaryWithExperience(){
		return `Position: ${this._position}  ${this._fullName} salary: ${this._dayRate * this._workingDays * this.#experience + '$'}`
	}
	
	set coefficient(coeff) {
		this.#experience = coeff
	}
	get coefficient() {
		return this.#experience
	}
}