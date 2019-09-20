import React from 'react';
import styled, { keyframes } from 'styled-components';

const VoteScore = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
);

export default VoteScore;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const donutSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const Loader = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #ffe300;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${donutSpin} 1.2s linear infinite;
`;
