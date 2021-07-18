let infoWorker = [workerMiddleStrongs, workerJuniorStrong, workerMiddle, workerJunior, workerSenior];
function outputInformationOfWorkers(arr) {
	arr.sort((a, b) => {
		return a.coefficient - b.coefficient
	})
	for (key of arr) {
		console.log(key.showSalaryWithExperience());
	}
}
outputInformationOfWorkers(infoWorker)