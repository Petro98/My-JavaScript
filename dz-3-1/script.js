

function game() {
	let a = prompt('ведіть початкове число не більше 3');
	if (a.trim() == "" || isNaN(parseInt(a)) || a < 0) {
		alert('error');
		const result = confirm('Продовжити гру??');
		if (result) {
			game();
		} else {
		}
	} else {
		let b = prompt('ведіть число з кроком 10');
		let bb = +a + +10;
		if (b.trim() == "" || isNaN(parseInt(b)) || b < 0 || bb > b) {
			alert('error');
			const result = confirm('Продовжити гру??');
			if (result) {
				game();
			} else {
			}
		} else {
			let want_1 = Math.floor(Math.random() * (+a - +b) + +b);
			let i = 4;
			while (i > 0) {
				let look = prompt(`В тебе залишилася ${i} спроба`);
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

