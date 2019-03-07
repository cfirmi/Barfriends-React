import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import hhh from '../../static/images/joinimg/join-barfriends.jpg'

// import girls from '../images/joinimg/girls'
const joinBfs = '../../static/images/joinimg/join-barfriends.jpg';
const Logo = '../../static/images/LogoNaked.png';

const OuterBox = styled.div`
  background: purple;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px 100px 100px 100px;
  @media (max-width: ${props => props.theme.mobileWidth}) {
  display: grid;
  width: 100%;
  height: 100%;
 };
`;


export default class ASKS extends Component {
  render() {
    return (
      <OuterBox>
        <h1>It matters how the conversation goes then how it started</h1>
      </OuterBox>
    )
  }
}
