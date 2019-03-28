export const resetButton = document.querySelector('#reset');

const randomColor = () => {
	let r = Math.ceil(Math.random() * 256);
	let g = Math.ceil(Math.random() * 256);
	let b = Math.ceil(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};

export const getRandomColors = (numSquares) => {
	let rc = [];
	for (let i = 0; i < numSquares; i++) {
		rc = [ ...rc, randomColor() ];
	}
	return rc;
};

export const pickWinningColor = (numSquares) => {
	return Math.ceil(Math.random() * numSquares - 1);
};
