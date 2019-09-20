import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Wrap from './wrapper';
import { ReactComponent as MainLogo } from '../images/logo.svg';

const Navigation = () => (
  <Header>
    <Container>
      <LogoContainer exact activeClassName="active" to="/">
        <Logo /> Star Wars App
      </LogoContainer>
      <BarLink exact activeClassName="active" to="/about">
        About
      </BarLink>
    </Container>
  </Header>
);

export default withRouter(Navigation);

const Header = styled.header`
  align-items: stretch;
  display: flex;
  background-color: #191818;
  height: 56px;
  border-bottom: 1px #040404 solid;
  padding: 0 15px;
  box-shadow: 0 2px 4px 0 rgba(24, 50, 71, 0.08);
`;

const Container = styled(Wrap)`
  align-items: stretch;
  min-height: 3.25rem;
  justify-content: space-between;
`;

const BarLink = styled(NavLink)`
  position: relative;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  display: inline-flex;
  font-size: 1rem;
  justify-content: flex-start;
  line-height: 1.5;

  position: relative;
  vertical-align: top;
  color: #ffe300;
  box-shadow: inset 0 0 0 0 transparent;
  transition: all 300ms ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 3px 0 0 #ffe300;
    color: #ffe300b0;
  }
  &:hover.active {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 4px 0 0 #ffe300;
    color: #ffe300b0;
  }
  &.active {
    box-shadow: inset 0 2px 0 0 #ffe300;
    opacity: 1;
    color: #ffe300b0;
  }
  @media (min-width: 320px) {
    padding: 15px 0;
  }
  @media (min-width: 320px) {
    padding: 15px 20px;
  }
`;
const LogoContainer = styled(BarLink)`
  display: flex;
  flex-shrink: 0;
`;

const Logo = styled(MainLogo)`
  height: 30px;
  width: 60px;
  margin: auto;
  g g {
    fill: #ffe300;
  }
`;
