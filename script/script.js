var arr = ['kot', 'tok', 'okt'],
	arr1 = ['kot', 'tok', 'ott'];

function sameWords(arr) {
	var word1, word2;

	for (var i = 0; i < arr.length - 1; i++) {
		word1 = 0;
		word2 = 0;

		if (arr[i].length !== arr[i + 1].length) {
			return false;
		} else {
			for (var j = 0; j < arr[i].length; j++) {
				word1 += arr[i][j].charCodeAt(0);
				word2 += arr[i + 1][j].charCodeAt(0);
			}

			if (word1 !== word2) {
				return false;
			}
		}
	}

	return true;
}

console.log(sameWords(arr));
console.log(sameWords(arr1));