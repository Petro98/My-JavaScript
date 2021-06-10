

function game() {
	let a = prompt('ведіть початкове число');
	if (a.trim() == "" || isNaN(parseInt(a))) {
		alert('error');
		const result = confirm('Продовжити гру??');
		if (result) {
			game();
		} else {
		}
	} else {
		let b = prompt('ведіть число з кроком 10');
		// let bb = +a + +10;
		let bb = b - 9;
		if (b.trim() == "" || isNaN(parseInt(b))) {
			alert('error');
			const result = confirm('Продовжити гру??');
			if (result) {
				game();
			} else {
			}
		} else if (bb < a) {
			alert('ведіть чило з правильним кроком!!!')
			const result = confirm('Продовжити гру??');
			if (result) {
				game();
			} else {
			}
		} else {
			let want_1 = Math.floor(Math.random() * (+a - +b) + +b);
			let i = 4;
			while (i > 0) {
				let look = prompt(`В тебе залишилася ${i} спроби`);
				let work = (look == want_1);
				if (work) {
					alert('ура ти молодець');
					const result = confirm('Продовжити гру??');
					if (result) {
						game();
					} else {
						break;
					}
				} else if (i == 2) {
					alert('тільки одна спроба подумай!!!!');
				} else if (i < 2) {
					alert('Ти лузер!!!');
					const result = confirm('Продовжити гру??');
					if (result) {
						game()
					} else {
						break;
					}
				}
				else {
					alert('ще раз!!!')
				}
				i--;
			}
		}
	}
}

