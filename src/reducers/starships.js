import {
  INVALIDATE_STARSHIPS,
  RECEIVE_STARSHIPS,
} from '../actions/actiontypes';

const initialStarshipState = [];

export default function starships(state = initialStarshipState, action) {
  switch (action.type) {
    case INVALIDATE_STARSHIPS:
      return action.err;
    case RECEIVE_STARSHIPS:
      return action.starships;
    default:
      return state;
  }
}
