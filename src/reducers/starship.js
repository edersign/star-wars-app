import { INVALIDATE_STARSHIPS, RECEIVE_STARSHIP } from '../actions/actiontypes';

const initialStarshipState = [];

export default function starship(state = initialStarshipState, action) {
  switch (action.type) {
    case INVALIDATE_STARSHIPS:
      return action.err;
    case RECEIVE_STARSHIP:
      return [...state, action.starship];
    default:
      return state;
  }
}
