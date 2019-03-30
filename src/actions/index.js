import { CHANGE_GAME_MODE, NEW_GAME, WIN_GAME, UPDATE_MESSAGE } from './types';

export const changeGameMode = (newMode, newNumS, newPickedColor, newColors) => {
	return {
		type    : CHANGE_GAME_MODE,
		payload : {
			mode            : newMode,
			numS            : newNumS,
			pickedColor     : newPickedColor,
			colors          : newColors,
			pickedColorText : newColors[newPickedColor],
		},
	};
};

export const newGame = (newPickedColor, newColors) => {
	return {
		type    : NEW_GAME,
		payload : {
			pickedColor     : newPickedColor,
			colors          : newColors,
			pickedColorText : newColors[newPickedColor],
		},
	};
};

export const winGame = (winColors) => {
	return {
		type    : WIN_GAME,
		payload : {
			colors      : winColors,
			headerColor : winColors[0],
		},
	};
};

export const updateMessage = (message) => {
	return {
		type    : UPDATE_MESSAGE,
		payload : {
			message : message,
		},
	};
};
