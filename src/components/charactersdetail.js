import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../images/placeholder.jpg';
import Starship from '../components/starships';

const CharactersDeetail = ({ character }) => {
  return (
    <>
      <ItemBackground background={Image} />
      <ItemMeta>
        <Title>{character.name}</Title>
        <SubTitle>{character.gender}</SubTitle>
        <BirthYear>{character.birth_year}</BirthYear>
        <EyeColor>{character.eye_color}</EyeColor>
        <HairColor>{character.hair_color}</HairColor>
        <Height>{character.height}</Height>
        <HomeWorld>{character.homeworld}</HomeWorld>
        <Mass>{character.mass}</Mass>
        <SkinColor>{character.skin_color}</SkinColor>
      </ItemMeta>
      <Group>
        <Starships>
          {character.starships.map((starship, index) => (
            <Starship
              key={index}
              index={index}
              id={parseFloat(starship.slice(31, 33))}
            />
          ))}
        </Starships>
        <Vehicles>
          {character.vehicles.map((vehicle, ind) => (
            <span key={ind}>{vehicle}</span>
          ))}
        </Vehicles>
        <Films>
          {character.films.map((film, i) => (
            <span key={i}>{film}</span>
          ))}
        </Films>
      </Group>
    </>
  );
};

CharactersDeetail.propTypes = {
  character: PropTypes.any.isRequired,
};

export default CharactersDeetail;

const ItemBackground = styled.div`
  background-image: url(${({ background }) =>
    background ? background : Image});
  position: relative;
  width: 100%;
  height: 40vh;
  background-size: cover;
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

  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 49%;
  }
  @media (min-width: 1024px) {
    height: calc(50vh - 50px);
    width: 50%;
  }
`;
const Title = styled.h3`
  color: #fff;

  font-weight: 700;
  text-transform: none;
  position: relative;
  @media (min-width: 320px) {
    font-size: 2.770833rem;
  }
  @media (min-width: 768px) {
    font-size: 3.770833vw;
  }
  @media (min-width: 1024px) {
    font-size: 2.770833vw;
  }

  &:before {
    content: 'Name';
    color: #999;
    position: absolute;
    top: 0px;
    font-size: 12px;
    opacity: 1;
    transform: translateY(-15px);
    transition: all 0.2s ease-out 0s;
  }
`;
const SubTitle = styled.p`
  margin: 20px 0;
  font-weight: 500;
  position: relative;
  text-transform: capitalize;
  letter-spacing: 0.2px;

  @media (min-width: 320px) {
    font-size: 4.270833vw;
  }
  @media (min-width: 768px) {
    font-size: 2.270833vw;
  }
  &:before {
    content: 'Gender';
    color: #999;
    position: absolute;
    top: 0px;
    font-size: 12px;
    opacity: 1;
    transform: translateY(-15px);
    transition: all 0.2s ease-out 0s;
  }
`;

const BirthYear = styled(SubTitle)`
  &:before {
    content: 'Birth Year';
  }
`;
const EyeColor = styled(SubTitle)`
  &:before {
    content: 'Eye Color';
  }
`;
const HairColor = styled(SubTitle)`
  &:before {
    content: 'Hair Color';
  }
`;
const Height = styled(SubTitle)`
  &:before {
    content: 'Height';
  }
`;
const HomeWorld = styled(SubTitle)`
  &:before {
    content: 'Home World';
  }
`;
const Mass = styled(SubTitle)`
  &:before {
    content: 'Mass';
  }
`;
const SkinColor = styled(SubTitle)`
  &:before {
    content: 'Skin Color';
  }
`;
const Group = styled.div`
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

  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1440px) {
  }
  @media (min-width: 1600px) {
  }
`;

const Starships = styled.div`
  display: grid;
  align-content: stretch;
  grid-auto-columns: 1fr;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  padding: 55px 0;
  position: relative;
  overflow: hidden;
  &:before {
    content: 'Starships';
    color: #999;
    position: absolute;
    top: 0px;
    font-size: 12px;
    opacity: 1;
    transform: translateY(35px);
    transition: all 0.2s ease-out 0s;
  }
  @media (min-width: 320px) {
    width: 100%;
    gap: 20px 20px;
  }
  @media (min-width: 768px) {
    width: 40%;
    gap: 0px 0px;
  }
  span {
    overflow: hidden;
  }
`;
const Vehicles = styled(Starships)`
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
  &:before {
    content: 'Vehicles';
  }
`;
const Films = styled(Starships)`
  &:before {
    content: 'Films';
  }
`;
