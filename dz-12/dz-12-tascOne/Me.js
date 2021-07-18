class Me extends Person {
	constructor(name, surname ,curYear, yearOfBirth) {
		super(name ,surname);
		this.curYear = curYear;
		this.yearOfBirth = yearOfBirth;
	}
	showFullName(midleName) {
		return super.showFullName(midleName)
	}
	showYourAge(){
		return this.curYear - this.yearOfBirth
	}
}
