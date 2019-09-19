import { combineReducers } from 'redux';

import characters from './characters';
import character from './character';
import starships from './starships';
import loading from './fetching';

const rootReducer = combineReducers({
  characters,
  character,
  starships,
  loading,
});

export default rootReducer;
