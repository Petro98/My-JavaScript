let infoWorker = [workerMiddleStrongs, workerJuniorStrong, workerMiddle, workerJunior, workerSenior];
function outputInformationOfWorkers(arr) {
	arr.sort((a, b) => {
		return b.sum - a.sum
	})
	for (key of arr) {
		let a = key._fullName.split('')
		for(let i = 0; i < a.length ; i++){
			if(a[i] == ' '){
			console.log();
			let index = a.indexOf(a[i])
			let g = ''
			for(let i = 0; i < a.length ; i++){
				if(index < i){
					g +=a[i]
				}
			}
			if(g.length < 8){
				console.log(g);
			}
			}
		}
		if(key.sum >= 900){
			console.log( key.showHame(), key.showSalaryWithExperience());
		}
		
	}
}
outputInformationOfWorkers(infoWorker)