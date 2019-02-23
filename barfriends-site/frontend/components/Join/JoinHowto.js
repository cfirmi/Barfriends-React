import React, { Component } from 'react';
import styled from 'styled-components';

export default class JoinHowto extends Component {
  render() {
    return (
      <OuterBox>
        
      </OuterBox>
    )
  }
}


const OuterBox = styled.div`
  background: pink;
  display: grid;
  /* height: 50vh; width: 100vw; */
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100vw;
  height: 100%;
 };
`;
