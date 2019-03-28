import { combineReducers } from 'redux';
import changeGameModeReducer from './changeGameModeReducer';

export default combineReducers({
	gameMode : changeGameModeReducer,
});
