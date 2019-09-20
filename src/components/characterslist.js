import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Starship from './starships';
import Image from '../images/placeholder.jpg';

const CharactersList = ({ characters }) => {
  return (
    <>
      {characters.map(({ name, starships, films, gender, url }) => (
        <PostTitleLink key={name} to={`/characters${url.slice(27)}`}>
          <ItemBackground background={Image} />
          <ItemMeta>
            <Title>{name}</Title>
            <SubTitle>{gender}</SubTitle>
          </ItemMeta>
          <Starships>
            {starships.map((starship, index) => (
              <Starship
                key={index}
                index={index}
                id={parseFloat(starship.slice(31, 33))}
              />
            ))}
          </Starships>
        </PostTitleLink>
      ))}
    </>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.any.isRequired,
};

export default CharactersList;

const menuItem = keyframes`
  0% {
    transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(65px);
  }

  100% {
    transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(0);
  }
`;

const menuItemHoverRight = keyframes`
   0% {
      transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(0);
  }

  16% {
      transform: perspective(1600px) rotateX(5deg) rotateY(-3deg) translateZ(32px);
  }

  100% {
      transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(65px);
  }
`;
export const PostTitleLink = styled(Link)`
  color: #ffe300;
  text-decoration: none;
  transition: all 0.2s ease-out;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  display: flex;
  flex-direction: column;

  transform: perspective(1600px) rotateY(0) rotateX(0) translate3d(0, 0, 0);
  transform-style: preserve-3d;
  transition: 0.5s opacity cubic-bezier(0.4, 0, 0.2, 1),
    0.5s transform cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${menuItem} 0.3s cubic-bezier(0.4, 0, 0.2, 1) 1;
  animation-fill-mode: forwards;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(0, 0, 0, 0.024) 0px -18px 60px -10px;
  &:hover {
    animation: ${menuItemHoverRight} 0.7s
      cubic-bezier(0.315, 0.605, 0.375, 0.925) 1;
    animation-fill-mode: forwards;
    transition-delay: 0s;
    z-index: 3;
  }

  @media (min-width: 320px) {
    min-height: 400px;
    background-size: cover;
    min-width: 90%;
  }
  @media (min-width: 768px) {
    min-width: 210px;
  }
  @media (min-width: 1024px) {
    min-width: 295px;
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
  }
  @media (min-width: 1600px) {
  }
`;
const ItemBackground = styled.div`
  background-image: url(${({ background }) =>
    background ? background : Image});
  position: relative;
  background-position: center center;
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
    min-height: 400px;
    background-size: cover;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    min-height: 450px;
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
  justify-content: flex-start;
  z-index: 5;
  position: absolute;
  top: 0;
`;
const Title = styled.h3`
  color: #ffe300;
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
  color: #777;
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
  gap: 15px;
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
