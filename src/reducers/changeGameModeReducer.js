import { CHANGE_GAME_MODE, NEW_GAME, WIN_GAME, UPDATE_MESSAGE } from '../actions/types';
import { getRandomColors, pickWinningColor } from '../functions';

const INITIAL_STATE = {
	mode            : 'Hard',
	numS            : 6,
	pickedColor     : pickWinningColor(6),
	colors          : getRandomColors(6),
	resetButton     : 'New Colors',
	message         : '',
	pickedColorText : '',
	headerColor     : 'steelblue',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_GAME_MODE:
			return {
				...state,
				mode            : action.payload.mode,
				numS            : action.payload.numS,
				pickedColor     : action.payload.pickedColor,
				colors          : action.payload.colors,
				resetButton     : 'New Colors',
				message         : '',
				pickedColorText : action.payload.pickedColorText,
				headerColor     : 'steelblue',
			};
		case NEW_GAME:
			return {
				...state,
				pickedColor     : action.payload.pickedColor,
				colors          : action.payload.colors,
				resetButton     : 'New Colors',
				message         : '',
				pickedColorText : action.payload.pickedColorText,
				headerColor     : 'steelblue',
			};
		case WIN_GAME:
			return {
				...state,
				colors      : action.payload.colors,
				resetButton : 'Play Again?',
				message     : 'Winner',
				headerColor : action.payload.headerColor,
			};

		case UPDATE_MESSAGE:
			return { ...state, message: action.payload.message };
		default:
			return state;
	}
};
