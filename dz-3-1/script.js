

function game() {
	let a = +prompt('ведіть початкове число не більше 3');
	if (3 <= a || a <= -1 || a === 0) {
				alert('Помилка');
				const result = confirm('Продовжити гру??');
				if (result) {
					game();
				} else {
				}
			} else {
	let b = +prompt('ведіть число не більше 10');
	if (10 <= b || b <= -1 || b === 0) {
		alert('Помилка');
	} else {
		let want_1 = Math.floor(Math.random() * (a - b) + b);

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

