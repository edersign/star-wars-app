import fetch from 'cross-fetch';
const api = 'https://swapi.co/api';

export const getCharacters = () =>
  fetch(`${api}/people`).then(response => response.json());

export const getCharacter = id =>
  fetch(`${api}/people/${id}`).then(response => response.json());

export const getStarships = () =>
  fetch(`${api}/starships/`).then(response => response.json());

export const getStarship = id =>
  fetch(`${api}/starships/${id}`).then(response => response.json());
