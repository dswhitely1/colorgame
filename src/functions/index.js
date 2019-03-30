export const Easy = 'Easy';
export const Hard = 'Hard';
export const Expert = 'Expert';
export const Master = 'Master';

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

export const changeColorsWin = (numSquares, winColor) => {
	let wc = [];
	for (let i = 0; i < numSquares; i++) {
		wc = [ ...wc, winColor ];
	}
	return wc;
};

export const modeButtonId = (mode) => {
	return mode === Easy ? 0 : mode === Hard ? 1 : mode === Expert ? 2 : 3;
};

export const numSquare = (mode) => {
	return mode === Easy ? 3 : mode === Hard ? 6 : mode === Expert ? 9 : 12;
};
