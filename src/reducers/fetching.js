import { LOAD_CHARACTERS, LOAD_STARSHIPS } from '../actions/actiontypes';

const initialState = {
  charactersLoaded: false,
  starshipsLoaded: false,
};

/*const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return { ...state, charactersLoaded: true };
    case LOAD_STARSHIPS:
      return { ...state, starshipsLoaded: true };
    default:
      return state;
  }
};

export default loading;*/
export default function characters(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return { ...state, charactersLoaded: true };
    case LOAD_STARSHIPS:
      return { ...state, starshipsLoaded: true };
    default:
      return state;
  }
}
