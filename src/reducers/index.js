import { combineReducers } from 'redux';

import characters from './characters';
import character from './character';
import starships from './starships';
import starship from './starship';
import loading from './fetching';

const rootReducer = combineReducers({
  characters,
  character,
  starships,
  starship,
  loading,
});

export default rootReducer;
