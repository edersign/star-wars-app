import * as api from '../util/api';

import {
  INVALIDATE_CHARACTERS,
  LOAD_CHARACTERS,
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER,
} from './actiontypes';

export function requestCharacters() {
  return {
    type: LOAD_CHARACTERS,
  };
}
export const getCharacters = characters => ({
  type: RECEIVE_CHARACTERS,
  characters,
});

export function invalidateCharacters() {
  return {
    type: INVALIDATE_CHARACTERS,
  };
}

export const fetchCharacters = () => dispatch => {
  dispatch(requestCharacters());
  api
    .getCharacters()
    .then(characters => dispatch(getCharacters(characters)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateCharacters());
    });
};

export const getCharacter = character => ({
  type: RECEIVE_CHARACTER,
  character,
});

export const fetchCharacter = id => dispatch => {
  dispatch(requestCharacters());
  api
    .getCharacter(id)
    .then(character => dispatch(getCharacter(character)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateCharacters());
    });
};
