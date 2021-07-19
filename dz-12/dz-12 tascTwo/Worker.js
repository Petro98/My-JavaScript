class Worker {
	#experience = 1.2;
	constructor(position, fullName, dayRate, workingDays) {
		this._position = position;
		this._fullName = fullName;
		this._dayRate = dayRate;
		this._workingDays = workingDays;
		this.sum = this._dayRate * this._workingDays * this.#experience
	}
	showHame(){
   	return `Position: ${this._position}  ${this._fullName}` 
	}
	showSalaryWithExperience(){
		return `salary: ${this._dayRate * this._workingDays * this.#experience + '$'}`
	}
	
	set coefficient(experience) {
		this.#experience = experience
	}
	get coefficient() {
		return this.#experience
	}
}
let wor = new Worker ('dfgfdg' , 'dfgdfg',50 , 50)
