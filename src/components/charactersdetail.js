import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const CharactersDeetail = ({ character }) => {
  return (
    <>
      <ItemBackground background={`../static/images/fuse.png`} />
      <ItemMeta>
        <Title>{character.name}</Title>
        <SubTitle>{character.gender}</SubTitle>
      </ItemMeta>
      <Starships>
        {character.starships.map((starship, index) => (
          <p key={index}>{starship}</p>
        ))}
      </Starships>
    </>
  );
};

CharactersDeetail.propTypes = {
  character: PropTypes.any.isRequired,
};

export default CharactersDeetail;

const ItemBackground = styled.div`
  background-image: url(${({ background }) => background ? background : 'transparent'});
  position: relative;
  &:after,
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    top: 0;
  }

  &:after {
    background: rgba(0, 0, 0, 0.35);
    z-index: 1;
  }
  &:before {
    background: no-repeat url('../images/noise.png') top right;
    z-index: 2;
  }
  @media (min-width: 320px) {
    min-height: 200px;
    background-size: cover;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    max-height: 250px;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
  }
  @media (min-width: 1600px) {
  }
`;
const ItemMeta = styled.div`
  display: flex;
  margin-bottom: 10px;
  bottom: 0;
  padding: 20px;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;
`;
const Title = styled.h3`
  color: #252525;
  margin: 0;
  font-weight: 700;
  text-transform: none;
  text-shadow: 0 3px 7px rgba(0, 0, 0, 0.47843137254901);
  @media (min-width: 320px) {
    font-size: 2.770833rem;
  }
  @media (min-width: 768px) {
    font-size: 3.770833vw;
  }
  @media (min-width: 1024px) {
    font-size: 2.770833vw;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
  }
  @media (min-width: 1600px) {
  }
`;
const SubTitle = styled.p`
  color: #f90;
  margin: 0 0 10px 0;
  font-weight: 500;
  @media (min-width: 320px) {
    font-size: 4.270833vw;
  }
  @media (min-width: 768px) {
    font-size: 2.270833vw;
  }
`;
const Starships = styled.div`
  display: grid;
  align-content: stretch;
  gap: 0px 0px;
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  overflow: hidden;
`;
