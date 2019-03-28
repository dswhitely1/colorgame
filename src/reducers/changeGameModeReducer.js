import { CHANGE_GAME_MODE, NEW_GAME } from '../actions/types';

const INITIAL_STATE = {
	mode        : 'Hard',
	numS        : 6,
	pickedColor : 0,
	colors      : [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_GAME_MODE:
			return {
				...state,
				mode        : action.payload.mode,
				numS        : action.payload.numS,
				pickedColor : action.payload.pickedColor,
				colors      : action.payload.colors,
			};
		case NEW_GAME:
			return {
				...state,
				mode        : action.payload.mode,
				numS        : action.payload.numS,
				pickedColor : action.payload.pickedColor,
				colors      : action.payload.colors,
			};
		default:
			return state;
	}
};
