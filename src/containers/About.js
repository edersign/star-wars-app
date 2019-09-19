import React from 'react';
import styled from 'styled-components';
import Wrap from '../components/wrapper';

const About = () => (
  <Wrap>
    <AboutContent>
      <Title>Star Wars - App Project</Title>
      <Body>
        Este projeto usa React, Redux, React Router e Api publica Star Wars.
        <a
          href="https://github.com/edersign/star-wars-app"
          title="Star Wars - App Project"
        >
          @edersign - Star Wars - App Project
        </a>
        .
      </Body>
    </AboutContent>
  </Wrap>
);

export default About;

const AboutContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
`;

const Title = styled.h3`
  font: 400 48px/68px Helvetica, Arial, sans-serif;
  margin: 40px;
`;
const Body = styled.p`
  margin: 0 40px 30px 40px;
`;