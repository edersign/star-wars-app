import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import { Slug, Fade } from './primitives';
//import { Slug, Fade } from 'mauerwerk';
import { Link } from 'react-router-dom';

const CharactersList = ({ characters }) => {
  return (
    <>
      {characters.map(({ name, starships, films, gender, url }, index) => (
        <div key={name}>
          <PostTitleLink to={`/characters${url.slice(27)}`}>
            <p>{name}</p>
          </PostTitleLink>
          <p>{url}</p>
        </div>
      ))}
    </>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.any.isRequired,
};

export default CharactersList;

export const PostTitleLink = styled(Link)`
  color: #454545;
  text-decoration: none;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
