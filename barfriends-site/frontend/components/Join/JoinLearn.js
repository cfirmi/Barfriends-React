import React, { Component } from 'react';
import styled from 'styled-components';

// import girls from '../images/joinimg/girls'
const Girls = '../../static/images/joinimg/girls.png';
const Logo = '../../static/images/LogoNaked.png';

const OuterBox = styled.div`
  /* background: blue; */
  display: grid;
  /* height: 50vh; width: 100vw; */
  width: 100vw;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 100px 100px 100px 100px 100px;
  margin-top: ${props => props.theme.NavigationMarginTop};
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px;
  margin-top: ${props => props.theme.NavigationMarginTop};
 };
`;

const Title = styled.div`
  background: red;
  line-height: 100px;
  font-size: 60px; font-weight: 600;
  width: 100vw;
  text-align: center;
  margin-top: 100px;
  @media (max-width: ${props => props.theme.maxWidth}) {
  background: red;
  margin-top: 0px;
  };
`;

export default class JoinLearn extends Component {
  render() {
    return (
      <OuterBox>
        <Title>Find. Go. Join.</Title>
      </OuterBox>
    )
  }
}
