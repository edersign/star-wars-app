import {
  INVALIDATE_STARSHIPS,
  RECEIVE_STARSHIPS,
  RECEIVE_STARSHIP,
} from '../actions/actiontypes';

const initialStarshipState = [];

export default function starships(state = initialStarshipState, action) {
  switch (action.type) {
    case INVALIDATE_STARSHIPS:
      return action.err;
    case RECEIVE_STARSHIPS:
      return action.starships;
    case RECEIVE_STARSHIP:
      return [action.starship];
    default:
      return state;
  }
}
