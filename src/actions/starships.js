import * as api from '../util/api';

import {
  INVALIDATE_STARSHIPS,
  LOAD_STARSHIPS,
  RECEIVE_STARSHIPS,
  RECEIVE_STARSHIP,
} from './actiontypes';

export function requestStarships() {
  return {
    type: LOAD_STARSHIPS,
  };
}
export const getStarships = starships => ({
  type: RECEIVE_STARSHIPS,
  starships: starships,
});

export function invalidateStarships() {
  return {
    type: INVALIDATE_STARSHIPS,
  };
}

export const fetchStarships = () => dispatch => {
  dispatch(requestStarships());
  api
    .getStarships()
    .then(starships => dispatch(getStarships(starships)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateStarships());
    });
};

export const getStarship = starship => ({
  type: RECEIVE_STARSHIP,
  starship,
});

export const fetchStarship = id => dispatch => {
  dispatch(requestStarships());
  api
    .getStarship(id)
    .then(starship => dispatch(getStarship(starship)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateStarships());
    });
};
