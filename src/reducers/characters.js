import {
  INVALIDATE_CHARACTERS,
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER,
} from '../actions/actiontypes';

const initialCharactersState = [];

export default function characters(state = initialCharactersState, action) {
  switch (action.type) {
    case INVALIDATE_CHARACTERS:
      return action.err;
    case RECEIVE_CHARACTERS:
      return action.characters;
    case RECEIVE_CHARACTER:
      return action.character;
    default:
      return state;
  }
}
