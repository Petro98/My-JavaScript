class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	showFullName(midleName) {
		return `${this.surname} ${this.name} ${midleName}`;
	}
}
