import {
  INVALIDATE_CHARACTERS,
  RECEIVE_CHARACTER,
} from '../actions/actiontypes';

const initialCharacterState = [];

export default function character(state = initialCharacterState, action) {
  switch (action.type) {
    case INVALIDATE_CHARACTERS:
      return action.err;
    case RECEIVE_CHARACTER:
      return action.character;
    default:
      return state;
  }
}
