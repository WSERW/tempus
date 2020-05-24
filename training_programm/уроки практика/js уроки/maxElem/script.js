// Найти наибольший элемент матрицы, вы вести столбец в котором он находится(в любом формате):
let matrix=[
	[73, 100, 40, 555, 63],
	[45, 20, 84, 96, 63],
	[19, 35, 26, 76, 70],
	[38, 89, 67, 37, 98],
	[61, 93, 84, 45, 47],
];

let max = matrix[0][0];
let second = matrix[0][0];
let maxColInd = 0;

for (let i = 0; i < matrix.length; i++) {
	for (let j = 0; j < matrix[i].length; j++) {
		if (matrix[i][j] > max ) {
			second = max
			max = matrix[i][j];
			maxColInd = j;
		}
	
	}
}
for (let i = 0; i < matrix.length; i++) {
	console.log(matrix[i][maxColInd]);
}
console.log(second);
