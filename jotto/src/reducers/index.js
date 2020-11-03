import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWordReducer from './secretWordReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWordReducer,
});
