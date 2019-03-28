import { CHANGE_GAME_MODE, NEW_GAME } from './types';

export const changeGameMode = (newMode, newNumS, newPickedColor, newColors) => {
	return {
		type    : CHANGE_GAME_MODE,
		payload : {
			mode        : newMode,
			numS        : newNumS,
			pickedColor : newPickedColor,
			colors      : newColors,
		},
	};
};

export const newGame = (curMode, curNumS, newPickedColor, newColors) => {
	return {
		type    : NEW_GAME,
		payload : {
			mode        : curMode,
			numS        : curNumS,
			pickedColor : newPickedColor,
			colors      : newColors,
		},
	};
};
