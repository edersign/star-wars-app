import { combineReducers } from 'redux';

import characters from './characters';
import starships from './starships';
import loading from './fetching';

const rootReducer = combineReducers({
  characters,
  starships,
  loading,
});

export default rootReducer;
