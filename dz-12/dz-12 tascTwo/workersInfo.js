let workerJunior = new Worker('Junior', 'Vova Ivaniv', 35, 20),
	workerJuniorStrong = new Worker('Junior strong', 'Petro Tsimbala', 50, 20),
	workerMiddle = new Worker('Middle', 'Yura Horbachov', 60, 20),
	workerMiddleStrongs = new Worker('Middle', 'Oleksandr Aleksyk', 65, 20),
	workerSenior = new Worker('Senior', 'Rudolf Zaidel', 70, 20);
workerJuniorStrong.coefficient = 1.3;
workerMiddle.coefficient = 1.5;
workerMiddleStrongs.coefficient = 1.6;
workerSenior.coefficient = 2;