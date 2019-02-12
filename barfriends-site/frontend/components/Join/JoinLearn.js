import React, { Component } from 'react';
import styled from 'styled-components';

const OuterBox = styled.div`
  /* background: blue; */
  display: grid;
  /* height: 50vh; width: 100vw; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px;
  margin-top: ${props => props.theme.NavigationMarginTop};
 
`;
const Title = styled.p`
  /* background: red; */
  font-size: 40px;
  line-height: 55px;
  font-weight: 400;
  height: 100%;
  margin-top: -25px;
  grid-column: 2 / 5;
  grid-row-start: 3;
  /* user-select: none;   */
  ::selection {
      background: ${props => props.theme.orange}; /* WebKit/Blink Browsers */
    }
    ::-webkit-selection {
      background: ${props => props.theme.orange}; 
    }
    ::-moz-selection {
      background: ${props => props.theme.orange}; 
    }
`;

export default class JoinLearn extends Component {
  render() {
    return (
      <OuterBox>
        <Title>A guide for how to use <br/> Barfriends</Title>

      </OuterBox>
    )
  }
}
